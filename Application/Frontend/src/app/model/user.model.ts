import { Movie } from "./movie.model";

export class User{
   public firstName: string;
   public lastName: string;
   public email: string;
   public password: string;
   public status: boolean = false;
   public watchlist: Movie[];
   public deleted: boolean = false;

   constructor (firstName: string, lastName: string, email: string, password: string, status: boolean, watchlist: Movie[]){
       this.firstName = firstName;
       this.lastName = lastName;
       this.email = email;
       this.password = password;
       this.watchlist = watchlist;
   }
}