import React, { Component } from "react";
import { Carousel } from "antd-mobile";
import api from "@/api";

export default class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerList: []
    };
    console.log(this);
  }
  componentDidMount() {
    api
      .getRecommend()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    // const carouseContent = ()=>()
    return (
      <div className="recommend">
        <section>
          <Carousel dots={false} cellSpacing={5} slideWidth={0.95} />
        </section>
      </div>
    );
  }
}
