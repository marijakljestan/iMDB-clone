export class Review {
    public id?: number;
    public mark: number;
    public content: string;
    public movieId?: number;
    public userId?: number;

    constructor (mark: number, content: string) {
        this.mark = mark;
        this.content = content;
    }
}