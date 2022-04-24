export class Actor {
    public id?: number;
    public firstName: string;
    public lastName: string;
    public image: string;
    public roleName: string;

    constructor (firstName: string, lastName: string, image: string, role: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.image = image;
        this.roleName = role;
    }
}