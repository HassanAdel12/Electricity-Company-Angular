import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProblemTypeService {

  
  private readonly DB_URL = "https://localhost:44392/api/Problem_Type";

  constructor(private readonly myClient:HttpClient) { }


  getAllProblem_Type(){
    return this.myClient.get(this.DB_URL+"/GetAll");
  }

  getProblem_TypeByID(id:any){
    return this.myClient.get(this.DB_URL+"/GetByID/"+id);
  }

  AddNewProblem_Type(problem_Type:any){
    return this.myClient.post(this.DB_URL+"/Add",problem_Type);
  }

  updateProblem_Type(id:any,problem_Type:any){
    return this.myClient.put(this.DB_URL+"/Update/"+id,problem_Type);
  }

  deleteProblem_Type(id:any){
    return this.myClient.delete(this.DB_URL+"/Delete/"+id);
  }

  
}
