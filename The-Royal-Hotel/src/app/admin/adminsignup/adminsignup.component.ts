import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.scss']
})
export class AdminsignupComponent implements OnInit {
  signUpForm!:FormGroup;


  constructor(private fb:FormBuilder, private dataservice : DataService ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      userName: new FormControl('',[Validators.pattern("^[a-zA-Z]+$")]),
      userMob:['',[Validators.required, Validators.maxLength(12)]],
      userEmail:['gmail.com',[Validators.required, Validators.email]],
      userPass:['',[Validators.required, Validators.maxLength(8)]],
      gender:['',[Validators.required]],
      userCheck:['',[Validators.requiredTrue]]

    });
  }

  postAdmindata(data:any){
    console.log(data);
    
    //postapi
    this.dataservice.postAdminCall(data).subscribe((res)=>{
      console.log(res);
      
  })
}
  
  
  
}

