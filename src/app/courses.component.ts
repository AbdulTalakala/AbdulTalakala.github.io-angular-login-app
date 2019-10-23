import { Component } from '@angular/core';
import { CourseService } from './courses.service';


@Component({
	
	selector:'courses',
	template:`
			<h2>{{ title }}</h2>
				<ul *ngIf="courses.length > 0">
					<li *ngFor="let course of courses">
						{{ course }}
					</li> 
				</ul>	
				<span *ngIf="courses.length == 0"> No courses found.
				</span>
				`

})

export class CoursesComponent{
	title = "List of courses";
	courses;

	constructor(service:CourseService){
		this.courses = service.getCourses();
	}

}