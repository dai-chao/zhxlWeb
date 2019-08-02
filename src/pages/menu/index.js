
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { Link ,withRouter} from "react-router-dom";
import "./index.css"
import Header from "../../components/header/index"
import 'animate.css'
import { WOW } from 'wowjs';
import logo from "../../images/log03.jpg";
new WOW({live: false}).init();

class Menu extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    componentWillReceiveProps() {
        if (this.props.history.location !== this.props.location) {
            window.location.reload(true)
            
        }
    }
    render(){
        return(
            <div className="me">
                {this.props.children}
                {/*<Header/>*/}
                <header className="me-header">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="menu" >
                        <Link to="/index" className="alignLeft" >
                            {/*className="icon iconfont icon-weibiaoti12"*/}
                            <span className="">×</span>
                        </Link>
                    </div>
                </header>
                <ul>
                    <Link  to="/index"><li>首页</li></Link>
                    <Link  to="/about"><li>关于我们</li></Link>
                    <Link  to="/pray"><li>服务项目</li></Link>
                    <Link  to="/nav"><li>新闻动态</li></Link>
                    <Link  to="/contact"><li> 联系我们</li></Link>
                </ul>
            </div>
        )
    }
}
export default withRouter(Menu);









