import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/model/actor.model';
import { CrewMember } from 'src/app/model/crew-member.model';
import { Movie } from 'src/app/model/movie.model';
import { MovieCrewService } from 'src/app/service/movie-crew.service';
import { MovieService } from 'src/app/service/movie.service';
import { CompleterItem } from 'ng2-completer';

@Component({
    selector: 'edit-movie',
    templateUrl: './edit-movie.component.html',
    styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
    movie: Movie = {
        id: 0,
        name: '',
        year: 0,
        countryOfOrigin: '',
        durationInMinutes: 0,
        genres: [],
        description: '',
        storyline: '',
        coverImage: '',
        images: [],
        averageGrade: 10,
        directors: [],
        writters: [],
        actors: [],
        reviews: []
    };
    writtersNum: number = 1;
    wNumbers: number[] = Array(this.writtersNum).fill(0).map((x,i)=>i);
    actorsNum: number = 1;
    aNumbers: number[] = Array(this.actorsNum).fill(0).map((x,i)=>i);
    rolesNum: number = 1;
    rNumbers: number[] = Array(this.rolesNum).fill(0).map((x,i)=>i);
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
    newRoles: string[] = [];

    constructor(private movieService: MovieService, private movieCrewService: MovieCrewService, private router: Router) { 
        //this.wNumbers = Array(this.writtersNum).fill(0).map((x,i)=>i);
       // this.aNumbers = Array(this.writtersNum).fill(0).map((x,i)=>i);
        this.genres = [
            'Action', 'Comedy', 'Crime', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Science Fiction', 'Thriller', 'Western',
            'Biography'
        ]
    }

    ngOnInit(): void {
        this.movieService.getMovieEntityById(1).subscribe(data => {
            this.movie = data;
            this.movieCrewService.getMovieDirectors(1).subscribe(data => {
                this.movie.directors = data;
            });
            this.movieCrewService.getMovieWritters(1).subscribe(data => {
                this.movie.writters = data;
                this.writtersNum = this.movie.writters.length;
                this.wNumbers = Array(this.writtersNum).fill(0).map((x,i)=>i);

            });
            this.movieCrewService.getMovieActors(1).subscribe(data => {
                this.movie.actors = data;
                this.actorsNum = this.movie.actors.length;
                this.aNumbers = Array(this.writtersNum).fill(0).map((x,i)=>i);
            });
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
        })
    }

    editMovie(event: Event) {
        event.preventDefault();
          
    }

    cancelHandler() {
        this.router.navigate(['/home']);
    }

    onActorSelect(selected: CompleterItem){
        if(selected)
            this.newActors.push(selected.originalObject);
    }

    onWritterSelect(selected: CompleterItem){
        if(selected)
            this.movie.writters.push(selected.originalObject);
    }

    getActorsList(){
		for(let actor of this.allActors)
            this.filteredActors.push(actor.name);
    }

    getWrittersList(){
		for(let writter of this.allWritters)
            this.filteredWritters.push(writter.name);
    }
 
	getDirectorsList(){
		for(let director of this.allDirectors)
            this.filteredDirectors.push(director.name);
    }

    increaseActorsNum(event: Event) : void {
        this.actorsNum += 1;
        this.aNumbers = Array(this.actorsNum).fill(0).map((x,i)=>i); 
        this.rolesNum += 1;
        this.rNumbers = Array(this.rolesNum).fill(0).map((x,i)=>i); 
    }

    decreaseActorsNum(event: Event) : void {
        this.actorsNum -= 1;
        this.aNumbers = Array(this.actorsNum).fill(0).map((x,i)=>i);
        this.rolesNum -= 1;
        this.rNumbers = Array(this.rolesNum).fill(0).map((x,i)=>i); 
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
        if(this.movie.genres)
            this.movie.genres.push(+element.value);
    }

    posterAdded(event: Event) {
        const element = event.currentTarget as HTMLInputElement;
        let file;
        if(element.files !== null){
            file = element.files[0];
            this.imagePoster = URL.createObjectURL(file);
            const reader= new FileReader();
            reader.onload = (e) =>{
                let img;
                if(e.target !== null){
                    img = e.target.result;
                    if(img != null) this.movie.coverImage = img.toString();
                }
            }
            reader.readAsDataURL(file);
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
                if(img != null) this.movie.images.push(img.toString());
            }
        }   
    }    
}
