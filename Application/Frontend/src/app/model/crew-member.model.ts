export class CrewMember {
    public id?: number;
    public name: string;
    public role?: string;

    constructor (name: string, lastName: string, role: string){
        this.name = name;
    }
}