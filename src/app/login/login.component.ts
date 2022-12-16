import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {   //3rd executed
//class is  a collection of properties and methods
constructor(){ //1st executed
  //used for object intialization
  //it automatically invokes when  an object is created
}

ngOnInit(): void { //2nd executed
  //intial process of componenet
  //when  a componenet is created ,  at same time it intialize or authorize
  //when  a component is created , there is lifecycle for it.

}

//properties

      aim ="Your perfecting banking partner"
      account = " Please enter your account number"


      acno="";//to hold the value fromt the user
      pswd="";

    userDetails:any={

      1000:{acno:1000,username:"abhinav",password:1000,balance:4000},
      1001:{acno:1001,username:"amal",password:1001,balance:2500},
      1002:{acno:1002,username:"ramu",password:1002,balance:3000},

    }

//userdefined function / 4th executed

    login(){
      // alert("login clicked")
      
      var acno=this.acno;
      var pswd = this.pswd;
      var userDetails =this.userDetails;

      if(acno in userDetails){
        if(pswd==userDetails[acno].password){
          alert("login sucessfull");
        }else{
          alert("incorrect password")
        }
       
      } else{
        alert("user not found")
      }
    
    }

    acnoChange(event:any){
      // console.log(event.target.value);
      this.acno=event.target.value;
      console.log(this.acno);
      
    }

      pswdChange(event:any){
        // console.log(event.target.value);

        this.pswd=event.target.value;
        console.log(this.pswd);
        

      }

}
