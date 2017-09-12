import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { AngularFire} from 'angularfire2/es2015';
@Injectable()
export class FirebaseService {
  
  dishes: FirebaseListObservable<any[]>;
  dishcomments:FirebaseListObservable<any[]>;
  dishid:any; 
  $key:any;
  constructor(private db: AngularFireDatabase) {
   
   }
  getDishes(){
    this.dishes = this.db.list('/dishes') as FirebaseListObservable<Dish[]>
    return this.dishes;
  }

}

interface Dish{
  $key?: string;
  title?:string;
  image?:string;
  price?:number;
  comment?:{name?:any,com?:any};
}
