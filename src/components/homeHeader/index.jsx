import React,{Component} from 'react';
import './index.scss';

class HomeHeader extends Component<AvatarProps, AvatarState>{
  
  render(props){
    return(
      <div className="home-header">
        <div className="home-header-left">{this.props.left}</div>
        <div className="home-header-conter">{this.props.center}</div>
        <div className="home-header-right">{this.props.right}</div>
      </div> 
    )
  }
}
export default HomeHeader;