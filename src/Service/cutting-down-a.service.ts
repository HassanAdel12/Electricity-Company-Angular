import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuttingDownAService {

  private readonly DB_URLCutting_Down_A = "https://localhost:44392/api/Cutting_Down_A";

  constructor(private readonly myClient:HttpClient) { }


  getAllCuttings(){
    return this.myClient.get(this.DB_URLCutting_Down_A+"/GetAll");
  }

  getCuttingByID(id:any){
    return this.myClient.get(this.DB_URLCutting_Down_A+"/GetByID/"+id);
  }

  AddNewCutting(cutting:any){
    return this.myClient.post(this.DB_URLCutting_Down_A+"/Add",cutting);
  }

  updateCutting(id:any,cutting:any){
    return this.myClient.put(this.DB_URLCutting_Down_A+"/Update/"+id,cutting);
  }

  deleteCutting(id:any){
    return this.myClient.delete(this.DB_URLCutting_Down_A+"/Delete/"+id);
  }

  CloseCutting(id:any){
    return this.myClient.put(this.DB_URLCutting_Down_A+"/CloseByID/"+id,new Object);
  }

  
}
