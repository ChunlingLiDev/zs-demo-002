import React, { Component } from "react";
import Overview from "../overview";
import { SnippetsOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
export default class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageData: [
        {
          name: "Overview",
          key: 1,
        },
        {
          name: "Activity",
          key: 2,
        },
        {
          name: "Performance",
          key: 3,
        },
      ],
    };
  }

  render() {
    let { pageData } = this.state;
    return (
      <div className="wrap">
        <div className="w-100 flex jc-sb bottom-border">
          <div className="Investment">Investment</div>
          <div className="Viewing">Viewing as Farrell Gobble</div>
        </div>
        <div className="back">GO Back to Client Overview</div>
        <div className="flex">
          {pageData.map((item, key) => (
            <div className="tab-btn" key={key}>
              <SnippetsOutlined /> {item.name}
            </div>
          ))}
        </div>
        <Overview />
      </div>
    );
  }
}
