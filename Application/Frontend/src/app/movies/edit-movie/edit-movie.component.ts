import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { Actor } from 'src/app/model/actor.model';
import { CrewMember } from 'src/app/model/crew-member.model';
import { Movie } from 'src/app/model/movie.model';
import { MovieCrewService } from 'src/app/service/movie-crew.service';
import { MovieService } from 'src/app/service/movie.service';
import { CompleterItem } from 'ng2-completer';
import Swal from 'sweetalert2';

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
    movieId: string | any;
    writtersNum: number = 1;
    wNumbers: number[] = Array(this.writtersNum).fill(0).map((x,i)=>i);
    actorsNum: number = 1;
    aNumbers: number[] = Array(this.actorsNum).fill(0).map((x,i)=>i);
    rolesNum: number = 1;
    rNumbers: number[] = Array(this.rolesNum).fill(0).map((x,i)=>i);
    genres: any[] = [];
    allWritters: CrewMember[] = [];
    allDirectors: CrewMember[] = [];
    allActors: Actor[] = [];
    filteredDirectors: string[] = [];
    filteredWritters: string[] = [];
    filteredActors: string[] = [];
    newActors: string[] = [];
    newRoles: string[] = [];

    constructor(private movieService: MovieService, private movieCrewService: MovieCrewService, 
                private router: Router, private route: ActivatedRoute, private location: Location) { 
        this.genres = [
            'Action', 'Comedy', 'Crime', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Science Fiction', 'Thriller', 'Western',
            'Biography'
        ]
    }

    ngOnInit(): void {
        this.movieId = this.route.snapshot.paramMap.get('id');
        this.movieService.getMovieEntityById(this.movieId).subscribe(data => {
            this.movie = data;
            this.movieCrewService.getMovieDirectors(this.movieId).subscribe(data => {
                this.movie.directors = data;
            });
            this.movieCrewService.getMovieWritters(this.movieId).subscribe(data => {
                this.movie.writters = data;
                this.writtersNum = this.movie.writters.length;
                this.wNumbers = Array(this.writtersNum).fill(0).map((x,i)=>i);
            });
            this.movieCrewService.getMovieActors(this.movieId).subscribe(data => {
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
        this.movieService.editMovie(this.movie).subscribe(response => {
            Swal.fire({
                title: 'Success!',
                text: 'Movie successfully updated!',
                icon: 'success',
                confirmButtonText: 'OK',
                position: 'top-right'
              });    
            },  (error) => {
            Swal.fire({
                title: 'Error!',
                text: 'Internal server error!',
                icon: 'error',
                confirmButtonText: 'OK',
                position: 'top-right'
              })
            }
        );
        this.location.back();
    }

    cancelHandler() {
        this.router.navigate(['/home']);
    }

    onActorSelect(selected: CompleterItem){
        if(selected)
            this.movie.actors.push(selected.originalObject);
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
