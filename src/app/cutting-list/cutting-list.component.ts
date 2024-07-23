import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CuttingDownAService } from '../../Service/cutting-down-a.service';
import { CuttingDownBService } from '../../Service/cutting-down-b.service';

@Component({
  selector: 'app-cutting-list',
  standalone: true,
  imports: [HttpClientModule,RouterModule],
  providers: [CuttingDownAService,CuttingDownBService],
  templateUrl: './cutting-list.component.html',
  styleUrl: './cutting-list.component.css'
})
export class CuttingListComponent {


  cuttingsA: any;
  cuttingsB: any;

  constructor( private cuttingDownAService:CuttingDownAService,private cuttingDownBService:CuttingDownBService,private router: Router) { }

  ngOnInit() {


    this.cuttingDownAService.getAllCuttings().subscribe({
      next:(data)=>{
        this.cuttingsA = data ;
      },
      error:(err)=>{
        this.router.navigate(['/Error',{errormessage : err.message as string}]);
      }
    })


    this.cuttingDownBService.getAllCuttings().subscribe({
      next:(data)=>{
        this.cuttingsB = data;
      },
      error:(err)=>{
        this.router.navigate(['/Error',{errormessage : err.message as string}]);
      }
    })


  }


  delete(id:any,selectedCutting:any){
    
    if(selectedCutting=="A"){
      this.cuttingDownAService.deleteCutting(id).subscribe();
    }
    else if(selectedCutting=="B"){
      this.cuttingDownBService.deleteCutting(id).subscribe();
    }
    

    this.cuttingDownAService.getAllCuttings().subscribe({
      next:(data)=>{
        this.cuttingsA = data;
      },
      error:(err)=>{
        this.router.navigate(['/Error',{errormessage : err.message as string}]);
      }
    })

    this.cuttingDownBService.getAllCuttings().subscribe({
      next:(data)=>{
        this.cuttingsB = data;
      },
      error:(err)=>{
        this.router.navigate(['/Error',{errormessage : err.message as string}]);
      }
    })


  }


  close(id:any,selectedCutting:any){
    
    if(selectedCutting=="A"){
      this.cuttingDownAService.CloseCutting(id).subscribe();
    }
    else if(selectedCutting=="B"){
      this.cuttingDownBService.CloseCutting(id).subscribe();
    }

    

    this.cuttingDownAService.getAllCuttings().subscribe({
      next:(data)=>{
        this.cuttingsA = data;
      },
      error:(err)=>{
        this.router.navigate(['/Error',{errormessage : err.message as string}]);
      }
    })

    this.cuttingDownBService.getAllCuttings().subscribe({
      next:(data)=>{
        this.cuttingsB = data;
      },
      error:(err)=>{
        this.router.navigate(['/Error',{errormessage : err.message as string}]);
      }
    })


  }

  Add(){
    this.router.navigate(['/AddCutting']);
  }

}
