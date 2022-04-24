export class CrewMember {
    public id: number;
    public firstName: string;
    public lastName: string;
    public role?: string;

    constructor (id: number, firstName: string, lastName: string, role: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}