import React, { Component } from "react";
import { Table, Row, Col } from "antd";
import Pie from "../../components/pie";
import Bar from "../../components/bar";
export default class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [
        {
          key: "1",
          CUSIP: "AWK",
          Security: "American Water Works Co Inc",
          Price: "$184.00",
          Shares: "205.00",
          Yield: "1%",
          Market: "$17,720.00",
        },
        {
          key: "2",
          CUSIP: "UNH",
          Security: "American Water Works Co Inc",
          Price: "$184.00",
          Shares: "205.00",
          Yield: "1%",
          Market: "$17,720.00",
        },
        {
          key: "3",
          CUSIP: "AAPL",
          Security: "American Water Works Co Inc",
          Price: "$184.00",
          Shares: "205.00",
          Yield: "1%",
          Market: "$17,720.00",
        },
        {
          key: "4",
          CUSIP: "DG",
          Security: "American Water Works Co Inc",
          Price: "$184.00",
          Shares: "205.00",
          Yield: "1%",
          Market: "$17,720.00",
        },
        {
          key: "5",
          CUSIP: "CHTR",
          Security: "American Water Works Co Inc",
          Price: "$184.00",
          Shares: "205.00",
          Yield: "1%",
          Market: "$17,720.00",
        },
      ],
      columns: [
        {
          title: "CUSIP",
          dataIndex: "CUSIP",
          key: "CUSIP",
          render: (obj) => {
            return <div style={{ color: "#93C3E8" }}>{obj}</div>;
          },
        },
        {
          title: "Security",
          dataIndex: "Security",
          key: "Security",
        },
        {
          title: "Price",
          dataIndex: "Price",
          key: "Price",
        },
        {
          title: "Shares",
          dataIndex: "Shares",
          key: "Shares",
        },
        {
          title: "Yield",
          dataIndex: "Yield",
          key: "Yield",
        },
        {
          title: "Market value",
          dataIndex: "Market",
          key: "Market",
        },
      ],
      checkText: "UMA",
    };
  }
  handleAdd() {
    let { dataSource } = this.state;
    dataSource.push({
      key: "6",
      CUSIP: "MORE",
      Security: "American Water Works Co Inc",
      Price: "$184.00",
      Shares: "205.00",
      Yield: "1%",
      Market: "$17,720.00",
    });

    this.setState({ dataSource }, () => {
      console.log("dataSource :>> ", dataSource);
    });
  }
  render() {
    let { dataSource, columns, checkText } = this.state;

    return (
      <div>
        <div className="w-100 flex jc-sb">
          <div className="flex Individual">
            Individual Investment Acct.<div>{checkText}</div>
          </div>
        </div>
        <Row>
          <Col span={8}>
            <div>Total Market Value</div>
            <div className="col-value">$144,403.81</div>
            <Row>
              <Col span={12}>Total Equity Value</Col>
              <Col span={12}>$90,123.55</Col>
            </Row>
            <Row>
              <Col span={12}>Total Fixed Income Value</Col>
              <Col span={12}>$30,456.77</Col>
            </Row>
          </Col>
          <Col span={8}>
            <div>Total Market Value</div>
            <div className="col-value">$144,403.81</div>
            <Row>
              <Col span={12}>Total Cash Value</Col>
              <Col span={12}>$90,123.55</Col>
            </Row>
            <Row>
              <Col span={12}>Total Alternatives Value</Col>
              <Col span={12}>$30,456.77</Col>
            </Row>
          </Col>
        </Row>
        <div className="w-100 flex jc-sb">
          <div className="left-pie">
            <div className="bottom-border">Market Value</div>
            <Pie />
          </div>
          <div className="right-bar">
            <div>Market Value Over Time(As of Mar 2022)</div>
            <Bar />
          </div>
        </div>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          rowKey={(data) => data.key}
          footer={() => (
            <div
              style={{ width: "100%", color: "#93C3E8", textAlign: "center" }}
              onClick={this.handleAdd.bind(this)}
            >
              View More
            </div>
          )}
        />
      </div>
    );
  }
}
