import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ProblemTypeService } from '../../Service/problem-type.service';
import { CommonModule, formatDate } from '@angular/common';
import { CuttingDownAService } from '../../Service/cutting-down-a.service';
import { CuttingDownBService } from '../../Service/cutting-down-b.service';

@Component({
  selector: 'app-add-cutting',
  standalone: true,
  imports: [FormsModule, HttpClientModule, ReactiveFormsModule, CommonModule],
  providers: [CuttingDownAService,CuttingDownBService, ProblemTypeService],
  templateUrl: './add-cutting.component.html',
  styleUrl: './add-cutting.component.css',
})
export class AddCuttingComponent {
  problemTypes: any;
  DataUser: any;

  constructor(
    private readonly problemTypeService: ProblemTypeService,
    private router: Router,
    private cuttingDownAService: CuttingDownAService,
    private cuttingDownBService: CuttingDownBService
  ) {}

  async ngOnInit(): Promise<void> {
    this.problemTypeService.getAllProblem_Type().subscribe({
      next: (data) => {
        this.problemTypes = data;
      },
      error: (err) => {
        this.router.navigate([
          '/Error',
          { errormessage: err.message as string },
        ]);
      },
    });
  }

  myform = new FormGroup({
    cutting_Down_Name: new FormControl(null, [Validators.required]),
    problem_Type_Key: new FormControl(null, [Validators.required]),
    createDate: new FormControl(null, [Validators.required]),
    selectedCutting: new FormControl(null, [Validators.required]),
  });

  submit() {
    if (localStorage.getItem('DataUser')) {
      this.DataUser = localStorage.getItem('DataUser');
      this.DataUser = JSON.parse(this.DataUser);
    }

    if (this.myform.valid) {
      if (this.myform.controls.selectedCutting.value == 'A') {
        var dataCabin = {
          cutting_Down_Cabin_Name:
            this.myform.controls.cutting_Down_Name.value,
          problem_Type_Key: this.myform.controls.problem_Type_Key.value,
          createDate: this.myform.controls.createDate.value,
          endDate: null,
          isPlanned: true,
          isGlobal: true,
          plannedStartDTS: null,
          plannedEndDTS:null,
          isActive: true,
          createdUser: this.DataUser.email,
          updatedUser: this.DataUser.email,
        };

        this.cuttingDownAService.AddNewCutting(dataCabin).subscribe({
          next: (data) => this.router.navigate(['/CuttingList']),
          error: (err) => console.log('sorry there is an error when add'),
        });
      }
      else if (this.myform.controls.selectedCutting.value == 'B'){
        var dataCable = {
          cutting_Down_Cable_Name:
            this.myform.controls.cutting_Down_Name.value,
          problem_Type_Key: this.myform.controls.problem_Type_Key.value,
          createDate: this.myform.controls.createDate.value,
          endDate: null,
          isPlanned: true,
          isGlobal: true,
          plannedStartDTS: null,
          plannedEndDTS: null,
          isActive: true,
          createdUser: this.DataUser.email,
          updatedUser: this.DataUser.email,
        };

        this.cuttingDownBService.AddNewCutting(dataCable).subscribe({
          next: (data) => this.router.navigate(['/CuttingList']),
          error: (err) => console.log('sorry there is an error when add'),
        });
      }
    }



  }



}
