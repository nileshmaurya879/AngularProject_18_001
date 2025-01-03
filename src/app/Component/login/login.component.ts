import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router:Router, private http:HttpClient){
    localStorage.clear();
  }
  loginObj:any= {
    email:null,
    password:null
  }
  onClick(){
    console.log('onclick',this.loginObj)

    this.http.get("https://localhost:44323/api/Category/CheckLoginUser?email="+this.loginObj.email+"&password="+this.loginObj.password).subscribe((result:any)=>{
      console.log(result);
      if(this.loginObj.email == result[0].email && this.loginObj.password==result[0].password)
      {
        console.log('yess...................'+this.loginObj.password)
        //this.router.navigate(['/student-display']);
        this.router.navigateByUrl('student-display');
        localStorage.setItem("myTest",result[0].email)
      } 
    })

    // if(this.loginObj.email == 'mauryanilesh630@gmail.com' && this.loginObj.password == '12345')
    // {
    //   this.router.navigate(['/student-display']);
    // }
    // else{
    //   alert("Please enter valid credential..")
    //   this.loginObj= {
    //     email:null,
    //     password:null
    //   }
    // }



  }
}
