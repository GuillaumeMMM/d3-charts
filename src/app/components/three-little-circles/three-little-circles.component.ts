import { Component, OnInit } from '@angular/core';

import * as d3 from "d3";

@Component({
  selector: 'app-three-little-circles',
  templateUrl: './three-little-circles.component.html',
  styleUrls: ['./three-little-circles.component.css']
})
export class ThreeLittleCirclesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var svg = d3.select("svg");

    var circle = svg.selectAll("circle")
      .data([12,115]);

    var circleEnter = circle.enter().append("circle");
    
    circle.transition()
      .duration(1000)
      .style("fill","Tomato")
      .attr("r",function(d){return Math.sqrt(4*d);});

    circleEnter.attr("cx",function(d){return 2*d;})
      .attr("cy","60")
      .attr("r","30");

    circle.exit().remove();
  }

}
