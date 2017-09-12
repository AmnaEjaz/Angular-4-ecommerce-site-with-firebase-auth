import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  dishes:any;
  dishid:any;
  name:any;
  newcomment:any;
  com:any;
  dishcomments:any;
  constructor(private firebase: FirebaseService,private db: AngularFireDatabase) {}
   addcomment(inputname,inputcomment){
    this.newcomment = {
      name:inputcomment.value,
      com: inputcomment.value
    }
    console.log(this.newcomment);
    this.dishcomments = this.db.list('/dishes/1/comment') as FirebaseListObservable<Comment[]>
    this.dishcomments.push(this.newcomment);
  }

  ngOnInit() {
    this.firebase.getDishes().subscribe(dishes=>{
      this.dishes= dishes;
    })

  }

}
interface Comment{
name?:any,
com?:any
}
