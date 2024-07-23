import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuttingDownBService {

  private readonly DB_URLCutting_Down_B = "https://localhost:44392/api/Cutting_Down_B";

  constructor(private readonly myClient:HttpClient) { }


  getAllCuttings(){
    return this.myClient.get(this.DB_URLCutting_Down_B+"/GetAll");
  }

  getCuttingByID(id:any){
    return this.myClient.get(this.DB_URLCutting_Down_B+"/GetByID/"+id);
  }

  AddNewCutting(cutting:any){
    return this.myClient.post(this.DB_URLCutting_Down_B+"/Add",cutting);
  }

  updateCutting(id:any,cutting:any){
    return this.myClient.put(this.DB_URLCutting_Down_B+"/Update/"+id,cutting);
  }

  deleteCutting(id:any){
    return this.myClient.delete(this.DB_URLCutting_Down_B+"/Delete/"+id);
  }

  CloseCutting(id:any){
    return this.myClient.put(this.DB_URLCutting_Down_B+"/CloseByID/"+id,new Object);
  }

}
