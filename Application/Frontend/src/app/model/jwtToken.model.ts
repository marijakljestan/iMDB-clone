export class JwtToken {
    public accessToken: string;
    public expiresIn: string;
    public role: string;

    constructor (accessToken: string, expiresIn: string, role: string) {
        this.accessToken = accessToken;
        this.expiresIn = expiresIn;
        this.role = role;
    }
}