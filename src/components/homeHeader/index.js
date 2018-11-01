import React,{Component} from 'react';
import './index.scss';

class HomeHeader extends Component{
  render(){
    return(
      <div className="home-header">
        <div className="home-header-left"></div>
        <div className="home-header-conter"></div>
        <div className="home-header-right"></div>
      </div> 
    )
  }
}
export default HomeHeader;