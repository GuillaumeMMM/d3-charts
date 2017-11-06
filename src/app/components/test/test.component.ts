import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DataService } from "../../services/data.service";

import * as d3 from "d3";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class TestComponent implements OnInit {

  data:number[];

  constructor(public dataService:DataService) { }

  ngOnInit() {
    this.data = this.dataService.getData();

    var width:number = 420;
    var barHeight:number = 20;

    var x=d3.scaleLinear()
        .range([0,width]);

    var chart = d3.select(".chart-2")
                  .attr("width",width);
    
    d3.csv("assets/data.csv", type, function(error,data){
      console.log(data);
      x.domain([0,d3.max(data,function(d){return d.value;})]);
      chart.attr("height",barHeight*data.length);

      var bar = chart.selectAll("g")
        .data(data)
      .enter().append("g")
        .attr("transform",function(d,i){return "translate(0," + i*barHeight + ")";});

      bar.append("rect")
        .attr("width",function(d){return x(d.value);})
        .attr("height",barHeight-1)
        .style("fill","Tomato");

      bar.append("text")
        .attr("x",function(d){return x(d.value)-d.name.length*7-10;})
        .attr("y",barHeight/2)
        .attr("dy",".35em")
        .text(function(d){return d.name;})
        .style("fill","white");
    });

    function type(d){
      d.value=+d.value
      return d;
    }
    

  }

}
