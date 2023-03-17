import { Component } from '@angular/core';
import {Student} from './myClasses/student';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondApp';

  bio: Student = {
    sid: 991545166,
    sname: 'Mai',
    scampus: 'Trafalgar',
    slogin: 'phamtuye'
  }
}
