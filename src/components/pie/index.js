import React, { Component } from "react";
import "./index.css";
import * as d3 from "d3";
export default class Pie extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
 
  componentDidMount() {
    console.log('111 :>> ', 111);
    let width = 300;
    let height = 250;

    let svg = d3
      .select("#container") // 选择文档中第一个class为App的元素
      .append("svg") // 添加一个svg元素
      .attr("width", width)
      .attr("height", height);

    let text = d3
      .select("#container")
      .append("text")
      .attr("class", "chart-text")
      .text("$144,403.81");

    text.append("path");

    let dataset = [30, 10, 43, 43, 43, 43];

    //设置一个color的颜色比例尺，为了让不同的扇形呈现不同的颜色
    let colorScale = d3
      .scaleOrdinal()
      .domain(d3.range(dataset.length))
      .range([
        "#EBF4FB",
        "#D8E9F7",
        "#C4DEF2",
        "#B0D3EE",
        "#A7CEEC",
        "#93C3E8",
      ]);

    //新建一个饼状图
    var pie = d3.pie();

    //新建一个弧形生成器
    var innerRadius = 65; //内半径
    var outerRadius = 90; //外半径
    var arc_generator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    //将原始数据变成可以绘制饼状图的数据，
    var pieData = pie(dataset);

    //在浏览器的控制台打印pieData
    console.log(pieData);

    //在有了绘制饼状图必须的数据后，我们就可以开始绘制了
    var gs = svg
      .selectAll(".g")
      .data(pieData)
      .enter()
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"); //位置信息

    //绘制饼状图的各个扇形
    gs.append("path")
      .attr("d", function (d) {
        return arc_generator(d); //往弧形生成器中出入数据
      })
      .attr("fill", function (d, i) {
        return colorScale(i);
      });
  }
  render() {
    return <div id="container" className="chart-pie"></div>;
  }
}
