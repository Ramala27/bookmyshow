import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register2',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './register2.component.html',
  styleUrl: './register2.component.css'
})
export class Register2Component implements OnInit {

  regForm!: FormGroup;
  
  // name!:string;
  // email!:string;
  // password!:string;

  constructor(private readonly toastr: ToastrService){

     console.log('RegisterComponent constructor called');

  }
  ngOnInit(): void {
    this.regForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
    });
  }


  get name() {
    return this.regForm.controls["name"];
  }

  get email() {
    return this.regForm.controls["email"];
  }

  get password() {
    return this.regForm.controls["password"]
  }

  onSubmit(){   
    console.log('Form Is Submitted');
    console.log("Valid",this.regForm.valid);
    console.log("Value",this.regForm.value);
    
    // console.log('Name:', this.name + ",email:",  this.email + ",password:" + this.password);


    // if(this.password.length < 8 ){

    //   alert('Password is to short. Password must atleast 8 digit');

    // }

    // const userObj = {
    //   name : this.name,
    //   email: this.email,
    //   password: this.password
    // };

    if(this.regForm.invalid){
      this.toastr.error("Please fill required details")
    
    }else{

const userObj = this.regForm.value;

console.log('UserObj:', userObj);

// //1.send userObh to backend RstAPI url => insert the user details inti database
 
//axios.post(url, userObj).then (res=> ...)

//2. Temporarily storing users data in localStorage
// const users = [];
// users.push(userObj);
// localStorage.setItem("USERS", JSON.stringify(users));




// alert("Successfully Registered");
this.toastr.success("Successfully Registered")



  // alert('Please fill required details');
  
  window.location.href = "/login";
}


}

}
