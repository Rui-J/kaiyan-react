import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './home';

class Main extends Component {
  render() {
    return (
        <TabBar>
          <TabBar.Item
          title="首页" icon={
            <div className="iconfont icon-shouye"></div>  
          }  selectedIcon={
            <div className="iconfont icon-shouye-focus"></div>  
          }><Home/></TabBar.Item>

          <TabBar.Item title="社区"
          icon={
            <div className="iconfont icon-shejiao"></div>  
          }  selectedIcon={
            <div className="iconfont icon-wode-focus"></div>  
          }>34</TabBar.Item>

          <TabBar.Item icon={
            <div className="iconfont icon-tianjia" style={{"fontSize":"36px"}}></div>  
          } ></TabBar.Item>    
          <TabBar.Item 
          title="通知" icon={
            <div className="iconfont icon-tongzi"></div>  
          }  selectedIcon={
            <div className="iconfont icon-tongzi-focus"></div>  
          }></TabBar.Item>    
          <TabBar.Item 
          title="我的"
          icon={
            <div className="iconfont icon-wode"></div>  
          }  selectedIcon={
            <div className="iconfont icon-wode-focus"></div>  
          }></TabBar.Item>
        </TabBar>
    );
  }
}

export default Main;
