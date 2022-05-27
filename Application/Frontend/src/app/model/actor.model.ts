export class Actor {
    public id?: number;
    public name: string;
    public image?: string;
    public roleName: string;

    constructor (name: string, image: string, role: string){
        this.name = name;
        this.image = image;
        this.roleName = role;
    }
}