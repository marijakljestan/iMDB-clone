export class MovieDto {
    public id: number;
    public name: string;
    public year: number;
    public coverImage: string;
    public averageGrade: number;
    public notInWatchlist: boolean = true;

    constructor(id: number, name: string, year: number, coverImage: string, averageGrade: number){
        this.id = id;
        this.name = name;
        this.year = year;
        this.coverImage = coverImage;
        this.averageGrade = averageGrade;
    }
}