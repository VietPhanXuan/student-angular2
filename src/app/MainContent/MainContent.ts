import {Component} from '@angular/core';
import {Student} from '../Object/Student';

@Component({
  selector: 'maincontent',
  inputs: ['students'],
  styleUrls: ['./MainContent.css'],
  templateUrl: './MainContent.html'
})
export class MainContent {
  students: Student[];
  viewstate: number;
  
  constructor(){
    this.viewstate = 1;
  }

  sortedStudents(): Student[] {
    if (this.viewstate == 1) {
      this.viewstate = 0;
      return this.students.sort((a: Student, b: Student) => b.average - a.average);
    }
    else {
      this.viewstate = 1;
      return this.students.sort((a: Student, b: Student) => a.average - b.average);
    }
	}
}
