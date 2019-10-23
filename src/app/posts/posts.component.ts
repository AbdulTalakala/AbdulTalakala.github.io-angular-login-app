import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:any[];
  constructor(private service:PostService) {  
  }

  ngOnInit(){
    this.service.getAll()
    .subscribe(posts=>this.posts = posts);
  }

  createPost(input:HTMLInputElement){
    let post = { title: input.value };
    this.posts.splice(0,0,post); 
    input.value='';
    this.service.create(post)
      .subscribe(newPost=>{
          post['id'] = newPost.id;
      },
      (error:AppError) => {
        this.posts.splice(0,1);
        if(error instanceof BadInput){
          alert("Unexpected Error Bad Input");
          console.log("Error"+ error);
        }
        else{
          throw error;
        }

      })  
  }

  updatePost(post){
    this.service.update(post)
      .subscribe(updatePost=>{
        console.log(updatePost);
      });
  }

  deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);
    this.service.delete(post.id)
      .subscribe(()=>{
        
      },
      (error:AppError) => {
        this.posts.splice(index,0,post);
        if(error instanceof NotFoundError){
          alert("Invalid Id");
          console.log("Error"+ error);
        }else{
           throw error;
        }    
      });
  }

}
