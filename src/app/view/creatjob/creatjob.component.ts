import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creatjob',
  templateUrl: './creatjob.component.html',
  styleUrls: ['./creatjob.component.css']
})
export class CreatjobComponent implements OnInit {
  job!:FormGroup;

  constructor(private fb:FormBuilder,public router:Router) { }
  ngOnInit(): void {
    this.job=this.fb.group({
      post:[''],
      time:[''],
      optionFields:this.fb.array([])
    })
  }

  public get optionFields(){
    return this.job.get('optionFields') as FormArray;
  }
  addField(){
    this.optionFields.push(this.fb.control(''));
  }
  removeField(i:number){
    this.optionFields.removeAt(i);
  }
  onSubmit(u:any){
    console.log(u)

  }
}
