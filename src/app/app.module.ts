import { AuthGuardService } from './services/auth-guard.service';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';
import { AppErrorHandler } from './common/error-handler';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component'; 
import { CourseService } from './courses.service';
import { ContactComponent } from './contact/contact.component';
import { CommonModule} from '@angular/common';
import { FavouriteComponent } from './favourite/favourite.component';
import { InputFormatDirective } from './input-format.directive';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersService } from './services/github-followers.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,   
    CourseComponent,
    ContactComponent,
    FavouriteComponent,
    InputFormatDirective,
    SignupFormComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    GithubprofileComponent,
    NotFoundComponent,
    GithubFollowersComponent,
    NoAccessComponent,
    LoginComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot([

      {
        path:'',
        component:HomeComponent
      },
      { 
        path: 'admin', 
        component:AdminComponent,
        canActivate: [AuthGuardService, AdminAuthGuard]
       },
      { path: 'login', component:LoginComponent  },
      { path:  'no-access', component: NoAccessComponent },
      // {
      //   path: 'followers/:id/:username',
      //   component:GithubprofileComponent
      // },
      // {
      //   path: 'followers',
      //   component:GithubFollowersComponent
      // },
      // {
      //   path:'posts',
      //   component: PostsComponent
      // },
      {
        path:'**',
        component: NotFoundComponent
      }

    ])
  ],
  providers: [
    AuthGuardService,
    AdminAuthGuard,
    OrderService,
    AuthService,
    CourseService,
    GithubFollowersService,
    PostService,
    {provide: ErrorHandler, useClass:AppErrorHandler},

    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
