import { Component } from '@angular/core';
import {  FormGroup } from '@angular/forms';



@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent {
  loginForm!: FormGroup;
  public validate = false;
 

  public submit() {
    this.validate = !this.validate;
  }
 
}
