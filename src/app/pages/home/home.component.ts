import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profileJson: string = null;
  form: FormGroup
  submitted :boolean = false
  
  name = new FormControl("");
  email = new FormControl("");
  password = new FormControl("", Validators.required);
  phone = new FormControl("", Validators.required);

  constructor(public auth: AuthService, private fb: FormBuilder, private profileService : ProfileService) {
    this.form = fb.group({
      "name": this.name,
      "email": this.email,
      "password":["", Validators.required],
  });
  }

  ngOnInit() {
    this.auth.userProfile$.subscribe(
      profile => {
        this.form.setValue({
          name : profile.name,
          email : profile.email,
          password :'',
        })
        this.profileJson = JSON.stringify(profile, null, 2)
      }
    );
  }

  onSubmit(){
    this.submitted = true
    this.profileService.save(this.form.value)

  }

}
