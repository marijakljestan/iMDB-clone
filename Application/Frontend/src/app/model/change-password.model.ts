export class ChangePassword{
    public email: string;
    public currentPassword: string;
    public newPassword: string;
 
    constructor (email: string, currentPassword: string, newPassword: string){
        this.email = email;
        this.currentPassword = currentPassword;
        this.newPassword = newPassword;
    }
 }