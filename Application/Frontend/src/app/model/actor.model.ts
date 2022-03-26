export class Actor {
    public firstName: string;
    public lastName: string;
    public image: string;
    public role: string;

    constructor (firstName: string, lastName: string, image: string, role: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.image = image;
        this.role = role;
    }
}