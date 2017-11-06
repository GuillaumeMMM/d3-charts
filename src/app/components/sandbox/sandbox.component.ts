import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from "../../services/data.service";

import * as d3 from "d3";

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css',],
  encapsulation:ViewEncapsulation.None
})
export class SandboxComponent implements OnInit {
  data:number[];
  addedValue:number;

  constructor(public dataService:DataService) { 
  }

  ngOnInit() {
    this.data = this.dataService.getData();
    //Initial chart creation
    var barChart = d3.select(".chart")
      .selectAll("div")
      .data(this.data)
        .enter()
        .append("div")
          .style("width",function(d){
            return d + "px";
          })
          .text(function(d){return d;});


    d3.select(".chart");
    //Chart display with colors
    this.displayChart(barChart);
  }

  //Give random values to the dataset
  randomize(){
    this.dataService.randomizeData();
    //Create the new randomized chart
    var randomChart = d3.select(".chart")
      .selectAll("div")
      .data(this.dataService.getData())
        .transition()
        .duration(1000)
        .style("width",function(d){return d + "px";})
        .text(function(d){return d});
    //Display the chart with colors
    this.displayChart(randomChart);
  }

  addBar(value:number){
    this.dataService.addData(value);
    console.log(this.data)
    //Crate the updated bar chart
    var addBar = d3.select(".chart")
      .selectAll("div")
      .data(this.dataService.getData())
        .enter()
        .append("div")
          .style("width",0)
          .transition()
            .duration(1000)
            .style("width",function(d){return d + "px";})
            .text(function(d){return d});
    //Display it with colors
    this.displayChart(addBar);

    //Set the form value back to 0
    this.addedValue = undefined;
  }

  displayChart(chart:d3){
    chart
    .transition()
      .duration(1000)
      .text(function(d){return d;})
      .style("background-color",function(d){
        console.log(d);
        if(d>300){
          return "Tomato";
        }else if(d<100){
          return "MediumSeaGreen";
        }
      });
  }


}

