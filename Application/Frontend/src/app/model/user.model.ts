import { Movie } from "./movie.model";

export class User{
   public id?: number;
   public firstName: string;
   public lastName: string;
   public email: string;
   public password: string;
   public watchlist?: Movie[];

   constructor (firstName: string, lastName: string, email: string, password: string, watchlist: Movie[]){
       this.firstName = firstName;
       this.lastName = lastName;
       this.email = email;
       this.password = password;
       this.watchlist = watchlist;
   }
}