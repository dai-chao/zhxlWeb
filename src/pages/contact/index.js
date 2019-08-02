
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { withRouter} from "react-router-dom";
import "./index.css"
import Header from "../../components/header/index"
import Banner from "../../components/banner/index"
import e1 from "../../images/联系我们/erweima.jpg"
import Footer from "../../components/footer/index"
import 'animate.css'
import { WOW } from 'wowjs';
new WOW({live: false}).init();


class Contact extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    componentWillMount() {
        document.documentElement.scrollTop = document.body.scrollTop =0;
    }
    componentWillReceiveProps() {
        if (this.props.history.location !== this.props.location) {
            window.location.reload(true)
            
        }
    }
    render(){
        return(
            <div className="contact" id="contact">
                {this.props.children}
                <Header/>
                <Banner/>
                {/*className="wow bounceIn"*/}
                <h5 className="clearfix"> - 联系我们 -</h5>
                <ul className="wow bounceInLeft">
                    <li className="wow bounceInLeft">电话：010-68570339</li>
                    <li className="wow bounceInLeft">地址：北京市 丰台区 汉威国际广场 三区5栋</li>
                    <li className="wow bounceInLeft">邮箱：zhxl_yl@163.com</li>
                </ul>
                <img src={e1} alt="" className="wow bounceInLeft" />
                {/*className="wow bounceInLeft" data-wow-offset="100"*/}
                <h3 className="clearfix">关注订阅号“祥龄资讯</h3>
                {/*className="wow bounceInLeft" data-wow-offset="100"*/}
                <p className="clearfix">获取更多资讯</p>
                <Footer/>
            </div>
        )
    }
    componentDidMount() {
        // setTimeout(function () {
        //     document.getElementById("contact").style.display ="block"
        // },500)
    }
}
export default withRouter(Contact);









