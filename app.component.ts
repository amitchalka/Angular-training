import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent implements OnInit {
//   title = 'formExample';

//   public user: User;
//   ngOnInit() {
//     this.user = {
//       name: '',
//       address: {
//         street: '',
//         postcode: '8000' //default value
//       }
//     };
//   }
//   save(model: User,isValid: boolean) {
//     console.log(model, isValid);
//   }
// }
export class AppComponent{
  title = 'formExample';
  angForm: FormGroup;
  constructor(private fb: FormBuilder){
    this.createForm();
  }

  createForm(){
    this.angForm = this.fb.group({
      name: ['',Validators.required],
      address: ['',Validators.required]
    });
  }
}


