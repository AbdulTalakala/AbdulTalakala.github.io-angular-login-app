import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard1';
  name = "Abdul";
  post = {
    title:"Title 1",
    isFavourite:true
  }

  task = {
     title:'Visa Renewal',
     assignee:null
  }

  onFavouriteChanged(){
    console.log("On favourite fired....");
  }

  
}
