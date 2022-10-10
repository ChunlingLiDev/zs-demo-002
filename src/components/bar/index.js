import React, { Component } from "react";
import "./index.css";
import * as d3 from "d3";
export default class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    let width = 300;
    let height = 300;
    let dataset = [30, 10, 43, 43, 43, 43];

    let rectWidth = width / dataset.length;
    let svg = d3
      .select("#container") // 选择文档中第一个class为App的元素
      .append("svg") // 添加一个svg元素
      .attr("width", width)
      .attr("height", height);
    let marge = { top: 0, bottom: 0, left: 0, right: 0 };
    let g = svg
      .append("g")
      .attr("transform", "translate(" + marge.top + "," + marge.left + ")");

    //设置一个y轴比例尺
    let yScale = d3
      .scaleLinear()
      .range([300, 0])
      .domain([0, d3.max(dataset)]);
    // svg
    //   .selectAll("rect")
    //   .data(dataset)
    //   .enter()
    //   .attr("x", (d, i) => rectWidth * i)
    //   .attr("y", (d) => yScale(d));
    //   svg.append("path");
  }
  render() {
    return <div id="container" className="chart-bar"></div>;
  }
}
