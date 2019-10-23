import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  form;

  constructor(fb:FormBuilder){
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email:[],
        phone:[]
      }),
      topics: fb.array([])
    });
  }

  addTopic(topic:HTMLInputElement){
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    topic.value='';
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }


  books = ['adam','john'];
  viewMode = 'map';
  posts:any;
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  // constructor(private http: HttpClient) {
  //  }

  //  getPosts(){
  //    this.posts = this.http.get(this.ROOT_URL+'/photos');
  //  }


  ngOnInit() {
  }

}
