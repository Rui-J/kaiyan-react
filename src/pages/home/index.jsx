import React, { Component } from "react";
import "./index.scss";
import HomeHeader from "@/components/homeHeader";
import Recommend from "./recommend";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: []
    };
  }
  render() {
    const headerLeft = <i className="iconfont icon-caidan" />;
    const headerRight = <i className="iconfont icon-sousuo" />;
    // const headerCenter = ()=>
    //  (<ul>

    //  </ul>)

    return (
      <div className="home">
        <HomeHeader left={headerLeft} right={headerRight} />
        <div className="home-body">
          <Recommend />
        </div>
      </div>
    );
  }
}
export default Home;
