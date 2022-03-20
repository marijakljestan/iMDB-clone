import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  newMovie: any = {
    name: '',
    year: undefined,
    countryOfOrigin: '',
    durationInMinutes: undefined,
    genres: [],
    description: '',
    storyline: '',
    coverImage: '',
    images: [],
    rate: 10,
  };
  writtersNum: number = 1;
  wNumbers: number[] = Array(this.writtersNum).fill(0).map((x,i)=>i);
  actorsNum: number = 1;
  aNumbers: number[] = Array(this.actorsNum).fill(0).map((x,i)=>i);
  imagePoster: string = "";
  imagesFrontend: string[] = [];

  constructor() {
    this.wNumbers = Array(this.writtersNum).fill(0).map((x,i)=>i);
   }

  ngOnInit(): void {
  }

  increaseActorsNum(event: Event) : void {
    this.actorsNum += 1;
    this.aNumbers = Array(this.actorsNum).fill(0).map((x,i)=>i);
    
  }

  decreaseActorsNum(event: Event) : void {
    this.actorsNum -= 1;
    this.aNumbers = Array(this.actorsNum).fill(0).map((x,i)=>i);
  }

  increaseWrittersNum(event: Event) : void {
    this.writtersNum += 1;
    this.wNumbers = Array.from(Array(this.writtersNum),(x,i)=>i);
  }

  decreaseWrittersNum(event: Event) : void {
    this.writtersNum -= 1;
    this.wNumbers = Array.from(Array(this.writtersNum),(x,i)=>i);
  }

  posterAdded(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let file;
    if(element.files !== null){
       file = element.files[0];
       this.createBase64Image(file);
       this.imagePoster = URL.createObjectURL(file);

       const reader= new FileReader();
      reader.onload = (e) =>{
        let img;
        if(e.target !== null){
          img = e.target.result;
          this.newMovie.coverImage = img;
        }
      }
    }
  }

  imageAdded(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let file;
    if(element.files !== null){
       file = element.files[0];
       this.createBase64Image(file);
       this.imagesFrontend.push(URL.createObjectURL(file));
    }
  }

  createBase64Image(file: File){
    const reader= new FileReader();
    reader.onload = (e) =>{
      let img;
      if(e.target !== null){
        img = e.target.result;
        this.newMovie.images.push(img);
      }
    }
    reader.readAsDataURL(file);
  }
}

@Pipe({ name: 'safeResourceUrl' })
export class SafeUrlPipe implements PipeTransform {
  constructor(private readonly sanitizer: DomSanitizer) {}

  public transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
