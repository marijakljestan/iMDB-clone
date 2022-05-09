import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Actor } from 'src/app/model/actor.model';
import { AddMovieDto } from 'src/app/model/add-movie-dto.model';
import { CrewMember } from 'src/app/model/crew-member.model';
import { Movie } from 'src/app/model/movie.model';
import { MovieCrewService } from 'src/app/service/movie-crew.service';
import { MovieService } from 'src/app/service/movie.service';

    @Component({
    selector: 'add-movie',
    templateUrl: './add-movie.component.html',
    styleUrls: ['./add-movie.component.css']
    })
    export class AddMovieComponent implements OnInit {
    newMovie: AddMovieDto = {
        name: '',
        year: 0,
        countryOfOrigin: '',
        durationInMinutes: undefined,
        genres: [],
        description: '',
        storyline: '',
        coverImage: '',
        images: [],
        averageGrade: 10,
        directors: [],
        writters: [],
        reviews: [],
        actors: [],
    };
    writtersNum: number = 1;
    wNumbers: number[] = Array(this.writtersNum).fill(0).map((x,i)=>i);
    actorsNum: number = 1;
    aNumbers: number[] = Array(this.actorsNum).fill(0).map((x,i)=>i);
    imagePoster: string = "";
    imagesFrontend: string[] = [];
    genres: any[] = [];
    allWritters: CrewMember[] = [];
    allDirectors: CrewMember[] = [];
    allActors: Actor[] = [];
    filteredDirectors: string[] = [];
    newDirector: string = "";
    filteredWritters: string[] = [];
    newWritters: string[] = [];
    filteredActors: string[] = [];
    newActors: string[] = [];

    constructor(private movieService: MovieService, private movieCrewService: MovieCrewService, private router: Router) {
        this.wNumbers = Array(this.writtersNum).fill(0).map((x,i)=>i);
        this.genres = [
            'Action', 'Comedy', 'Crime', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Science Fiction', 'Thriller', 'Western',
            'Biography'
        ]
    }

    ngOnInit(): void {
        this.movieCrewService.getAllDirectors().subscribe(data => {
            this.allDirectors = data;
            this.getDirectorsList();
        });
        this.movieCrewService.getAllWritters().subscribe(data => {
            this.allWritters = data;
            this.getWrittersList();
        });
        this.movieCrewService.getAllActors().subscribe(data => {
            this.allActors = data;
            this.getActorsList();
        });
    }

    addMovie() {
        alert(this.newMovie);
    }

    getActorsList(){
		for(let actor of this.allActors)
            this.filteredActors.push(actor.firstName + ' ' + actor.lastName);
    }

    getWrittersList(){
		for(let writter of this.allWritters)
            this.filteredWritters.push(writter.firstName + ' ' + writter.lastName);
    }
 
	getDirectorsList(){
		for(let director of this.allDirectors)
            this.filteredDirectors.push(director.firstName + ' ' + director.lastName);
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

    onCheckboxChange(event: Event) {
        const element = event.currentTarget as HTMLInputElement;
        this.newMovie.genres.push(element.value);
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
                    if(img != null) this.newMovie.coverImage = img.toString();
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
            if(img != null) this.newMovie.images.push(img.toString());
        }
        }
        reader.readAsDataURL(file);
    }

    cancelHandler() {
        this.router.navigate(['/homePage']);
    }
}

    /*  https://stackoverflow.com/questions/60170651/how-to-assign-a-blob-to-an-image-src-using-angular  */

    @Pipe({ name: 'safeResourceUrl' })
    export class SafeUrlPipe implements PipeTransform {
        constructor(private readonly sanitizer: DomSanitizer) {}

        public transform(url: string): SafeResourceUrl {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
    }
