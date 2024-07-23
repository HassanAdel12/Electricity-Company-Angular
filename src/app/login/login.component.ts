import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JWTService } from '../../Service/jwt.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ RouterLink,
    RouterModule,HttpClientModule,ReactiveFormsModule,CommonModule ],
    providers:[JWTService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //show:boolean=false;
  loginForm: FormGroup;
  errormessage : any;

  constructor(private fb: FormBuilder, private jwt: JWTService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  onSubmit() {

    //this.show=true;
    if (this.loginForm.valid) {

      this.jwt.login(this.loginForm.value).subscribe({
        next: (data) => {
          
          
          const DataUser = data;
         
          localStorage.setItem('DataUser', JSON.stringify(DataUser));

          this.router.navigate(['/CuttingList']);
          
          setTimeout(() => {
            window.location.reload();
          },100)
          
          

        },
        error: (err) => {
          console.log(err.error);
          this.errormessage = err.error;
        },
      });
      
      
      
    }
  }

  
}
