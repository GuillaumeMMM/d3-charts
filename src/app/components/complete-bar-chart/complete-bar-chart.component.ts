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
    //Const declarations

    //Colors
    const defaultBarColor:string = "Tomato"; //Color of the bars
    const innerBarColor:string = "White"; //Color of the text in the bar

    //Bars Form
    const leftAxisVisible:boolean = true; //Visibility of left axis
    const barSpacing:number = 5; //Spacing between 2 bars in px

    //Text
    const textVisible:boolean = true;

    //Margin declarations
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
    var color = d3.scaleLinear()
      .range(["Tomato","steelblue"]);
    
    var xAxis = d3.axisBottom(x);
    var yAxis = d3.axisLeft(y);
    
    var chart = d3.select(".chart3")
      .attr("width",width + margin.left + margin.right)
      .attr("height",height + margin.top + margin.bottom)
      .append("g")
        .attr("transform","translate(" + margin.left + "," + margin.top + ")");

    
    //Use of the data
    d3.csv("assets/data.csv",type,function(error,data){
      x.domain(data.map(function(d){return d.name;}));
      y.domain([0,d3.max(data, function(d){return d.value;})]);
      color.domain([0,d3.max(data,function(d){return d.value;})]); //With this scale, the color depends on the data 

    //This block needs the data to be linked to the document
    if(leftAxisVisible){
      chart.append("g")
      .attr("class","y axis")
      .attr("transform","translate(-" + barSpacing + ",0)")
      .call(yAxis);
    };

    var bar = chart.selectAll("g")
      .data(data, function(d,i){return d;})// The 2nd argument is just there to prevent the data binding from skipping the 1st row
      .enter().append("g")
      .attr("transform", function(d,i){return "translate(" + x(d.name) + ",0)";});

    bar.append("rect")
      .attr("height",function(d){return height - y(d.value);})
      .attr("y",function(d){return y(d.value);})
      .attr("width",x.bandwidth()-barSpacing)
      .style("fill",defaultBarColor); //.style("fill",function(d){return color(d.value)}); instead for the color variation
    
    if(textVisible){
      bar.append("text")
      .attr("x",x.bandwidth()/2)
      .attr("text-anchor","middle")
      .attr("y",function(d){return y(d.value)+30;})
      .text(function(d){return d.name;})
      .style("fill",innerBarColor);
    };
  });

    function type(d){
      d.value = +d.value;
      return d;
    }

  }

}
