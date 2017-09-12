import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  cartshow : any;
  cart=[];
  total:number;
  cal:number;


  addtocart(newname,itemcost,qty){
    this.cartshow = true;
    this.cart.push({'name':newname,'cost':itemcost*qty});
  
    for (let entry of this.cart) {
      this.cal = this.cal + parseInt(entry.cost);
      console.log(this.cal);
     }
    this.total = this.cal ;
    console.log(this.cart,this.total);

    }

  
  constructor(private firebaseService:FirebaseService) {
    this.cartshow = false;
    this.cal = 0;
   }

  ngOnInit() {

  }

}
