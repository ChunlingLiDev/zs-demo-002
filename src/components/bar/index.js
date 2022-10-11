import React, { Component } from "react";
import "./index.css";
import * as d3 from "d3";
export default class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bColor: ["#E9F3FA", "#BEDEF1", "#93C3E8"],
      dataArr: [
        {
          label: "Jan",
          value: 10.5,
          value2: 20.5,
          value3: 20.5,
        },
        {
          label: "Feb",
          value: 70.5,
          value2: 22.5,
          value3: 20.5,
        },
        {
          label: "Mar",
          value: 60.5,
          value2: 30.5,
          value3: 20.5,
        },
        {
          label: "Apr",
          value: 10.5,
          value2: 20.5,
          value3: 20.5,
        },
        {
          label: "May",
          value: 20.5,
          value2: 40.5,
          value3: 20.5,
        },
        {
          label: "Jun",
          value: 30.5,
          value2: 30.5,
          value3: 20.5,
        },
        {
          label: "Jul",
          value: 30.5,
          value2: 30.5,
          value3: 20.5,
        },
        {
          label: "Aug",
          value: 30.5,
          value2: 30.5,
          value3: 20.5,
        },
        {
          label: "Sep",
          value: 30.5,
          value2: 30.5,
          value3: 20.5,
        },
        {
          label: "Oct",
          value: 30.5,
          value2: 30.5,
          value3: 20.5,
        },
        {
          label: "Nov",
          value: 30.5,
          value2: 30.5,
          value3: 20.5,
        },
        {
          label: "Dec",
          value: 30.5,
          value2: 30.5,
          value3: 20.5,
        },
      ],
    };
  }
  componentDidMount() {
    /*
     * 绘制柱状图
     **/
    let { bColor, dataArr } = this.state;
    var svg = d3
      .select(".chart-bar")
      .append("svg")
      .attr("width", 1000)
      .attr("height", 250);
    // .style("background-color", "#1a3055");

    // 分段比例尺
    var xScale = d3
      .scaleBand()
      .range([0, 900])
      .domain(dataArr.map((s) => s.label))
      .padding(0.4);
    // 线性比例尺
    var yScale = d3.scaleLinear().range([180, 0]).domain([0, 200]);

    var chart = svg.append("g").attr("transform", "translate(50, 40)");
    // X轴
    chart
      .append("g")
      .attr("class", "xAxis")
      .attr("transform", "translate(15, 180)")
      .call(d3.axisBottom(xScale));
    // y轴
    var makeYlines = () =>
      d3
        .axisLeft()
        .scale(yScale)
        .tickSize(-900)
        .tickFormat((d) => {
          return d;
        });
    chart
      .append("g")
      .attr("class", "yAxis")
      .attr("transform", "translate(15, 0)")
      .call(makeYlines());
    // 标签
    d3.select(".xAxis")
      .append("text")
      .attr("x", 180 / 2 - 12)
      .attr("y", 0)
      .attr("dy", 45)
      // .style("font-size", "24px");
    // .text("日期");
    // 标签
    d3.select(".yAxis")
      .append("g")
      .attr("transform", "translate(-40, 0)")
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("class", "axisText axisTextY")
      // .style("font-size", "24px");
    // .text("比例（%）");
    d3.select(".axisTextY").attr("x", function () {
      return -200 + this.getBoundingClientRect().height / 2;
    });
    d3.selectAll(".chart-bar text").style("fill", "#667085");
    d3.selectAll(".chart-bar line").style("stroke", "#fff");
    d3.selectAll(".chart-bar path").style("stroke", "#fff");

    // stack() 组合堆叠 配置
    const stack = d3
      .stack()
      .keys(["value", "value2", "value3"])
      .order(d3.stackOrderAscending)
      .offset(d3.stackOffsetNone);

    console.log(" stack", stack(dataArr));

    // 柱状
    const groups = chart.selectAll().data(stack(dataArr));
    // 堆叠数据创建 堆
    const heaps = groups
      .enter()
      .append("g")
      .attr("class", (d) => "g " + d.key)
      .attr("fill", (d, i) => bColor[i]);

    // 堆叠数据 拆解 柱数据 绑定到对应柱上
    const bars = heaps.selectAll().data((d) => {
      return d.map((item) => {
        item.index = d.index;
        item.name = d.key;
        return item;
      });
    });
    // 在堆叠 中绘制柱
    bars
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.data.label) + xScale.bandwidth() / 2 - 4)
      .attr("y", (d) => yScale(d[1]))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => yScale(d[0]) - yScale(d[1]));
  }
  render() {
    return <div id="container-bar" className="chart-bar"></div>;
  }
}
