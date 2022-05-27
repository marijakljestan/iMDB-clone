import { Actor } from "./actor.model";

export enum Genre {
   Action,
   Drama,
   Crime,
   Comedy,
   Fantasy,
   Horror,
   Mystery,
   Romance,
   Thriller,
   Western,
   ScienceFiction,
   Biography
}

export class AddMovieDto {
    public id?: number;
    public name: string;
    public year?: number;
    public countryOfOrigin?: string;
    public durationInMinutes?: number;
    public genres: number[];
    public description?: string;
    public storyline?: string;
    public coverImage: string;
    public images: string[];
    public averageGrade: number;
    public directors: string[] = [];
    public writters: string[] = [];
    public actors: Actor[] = [];


    constructor (name: string, year: number, countryOfOrigin: string, durationInMinutes: number, genres: number[],
                 description: string, storyline: string, coverImage: string, images: string[], averageGrade: number){
        this.name = name;
        this.year = year;
        this.countryOfOrigin = countryOfOrigin;
        this.durationInMinutes = durationInMinutes;
        this.genres = genres;
        this.description = description;
        this.storyline = storyline;
        this.coverImage = coverImage;
        this.images = images;
        this.averageGrade = averageGrade;
    }
}