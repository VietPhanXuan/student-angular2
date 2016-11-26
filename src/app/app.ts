import {Component} from '@angular/core';
import {Teacher} from './Object/Teacher';
import {Student} from './Object/Student';
@Component({
  selector   : 'app',
  templateUrl: './app.html',
})
export class AppComponent {
  teacher: Teacher;
  constructor() {
    this.teacher = new Teacher('Cô giáo', 'Thảo', '19/09/1995');
    this.teacher.addStudent('Phan Xuân','Việt','02/04/1996',9.0,8.0);
    this.teacher.addStudent('Nguyễn Văn','Hải','02/08/1995',5.0,4.0);
  }
}
