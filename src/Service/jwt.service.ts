import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JWTService {

  private jwt_url = 'https://localhost:44392/api/Account';


  constructor(private myclient: HttpClient ,private router: Router) { }


  login(credentials: { email: string, password: string }): Observable<any> {
    return this.myclient.post(this.jwt_url+'/Login', credentials);
  }


  register(userDetails: any) {
   
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.myclient.post(this.jwt_url + '/Register', userDetails);
  }

  
  
  // private handleError(error: any) {
  //   let errorMessage = ' error while processing request';
  //   if (error.error instanceof ErrorEvent) {
      
  //     let errorMessage = 'Error: ' + error.error.message;

   
  //   } else if (error.status === 200 && error.error && error.error.message) {
     
  //     errorMessage = error.error.message;
  //   } else {
   
  //     let errorMessage = 'Error Code: ' + error.status + '\n Message: ' + error.message;

  //   }
  //   console.error(errorMessage);
  //   return throwError(errorMessage);
  // }

}