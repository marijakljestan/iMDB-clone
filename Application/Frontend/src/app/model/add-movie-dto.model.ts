import { Actor } from "./actor.model";
import { CrewMember } from "./crew-member.model";
import { Review } from "./review.model";

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
    public name: string;
    public year: number;
    public countryOfOrigin?: string;
    public durationInMinutes?: number;
    public genres: string[];
    public description?: string;
    public storyline?: string;
    public coverImage: string;
    public images: string[];
    public averageGrade: number;
    public directors: CrewMember[] = [];
    public writters: CrewMember[] = [];
    public actors: Actor[] = [];
    public reviews: Review[] = [];

    constructor (name: string, year: number, countryOfOrigin: string, durationInMinutes: number, genres: string[],
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