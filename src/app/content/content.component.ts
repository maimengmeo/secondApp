import { Component, Input } from '@angular/core';
import {Student} from '../myClasses/student';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() student!: Student;

  city = "Brampton"; //bind this to input box

  clearCity() { //no function keyword in angular
    this.city = ""
  }

  backCampus() {
    return this.city.toLowerCase() === 'brampton' ? 'red' : 'blue';
  }

}
