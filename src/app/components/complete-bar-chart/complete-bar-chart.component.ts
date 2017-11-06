import { Component, OnInit } from '@angular/core';

import * as d3 from "d3";

@Component({
  selector: 'app-complete-bar-chart',
  templateUrl: './complete-bar-chart.component.html',
  styleUrls: ['./complete-bar-chart.component.css']
})
export class CompleteBarChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var margin = {
      top:20,
      right:30,
      bottom:30,
      left:40
    };
    var width:number = 960 - margin.left - margin.right;
    var height:number = 500 - margin.top - margin.bottom;

    var y = d3.scaleLinear()
      .range([height,0]);

    var x = d3.scaleBand()
      .rangeRound([0,width,.1]);
    
    var xAxis = d3.axisBottom(x);
    
    var chart = d3.select(".chart3")
      .attr("width",width + margin.left + margin.right)
      .attr("height",height + margin.top + margin.bottom)
      .append("g")
        .attr("transform","translate(" + margin.left + "," + margin.top + ")");

    chart.append("g")
      .attr("class","x axis")
      .attr("transform","translate(0," + (height+10) + ")")
      .call(xAxis);

    d3.csv("assets/data.csv",type,function(error,data){
      x.domain(data.map(function(d){return d.name;}));
      y.domain([0,d3.max(data, function(d){return d.value;})]);

    var bar = chart.selectAll("g")
      // The 2nd argument is just there to prevent the data binding from skipping the 1st row
      .data(data, function(d,i){return d;})
      .enter().append("g")
      .attr("transform", function(d,i){return "translate(" + x(d.name) + ",0)";});

    bar.append("rect")
      .attr("height",function(d){return height - y(d.value);})
      .attr("y",function(d){return y(d.value);})
      .attr("width",x.bandwidth())
      .style("fill","Tomato");
    
    bar.append("text")
      .attr("x",x.bandwidth()/2)
      .attr("text-anchor","middle")
      .attr("y",function(d){return y(d.value)+30;})
      .text(function(d){return d.name;})
      .style("fill","white");
    console.log(data);
    });

    function type(d){
      d.value = +d.value;
      return d;
    }

  }

}
