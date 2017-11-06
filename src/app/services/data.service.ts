import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  data:number[] = [45,89,66,74,115,187];

  constructor() { }


  getData(){
    return this.data;
  }

  addData(value:number){
    this.data.push(value);
  }

  randomizeData(){
    for(let i=0;i<this.data.length;i++){
      this.data[i] = Math.trunc(400*Math.random()+50);
    }
  }

  removeData(i:number){
    this.data.slice(i,1);
  }
}
