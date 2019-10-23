import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],

})
export class FavouriteComponent implements OnInit {

  @Input('is-Favourite') isFavourite:boolean;
  @Output() change = new EventEmitter();

  

  constructor() {
    this.isFavourite = false;
   }

  onClick(){
    this.isFavourite = !this.isFavourite;
    this.change.emit();
  }

  ngOnInit() {
  }

}
