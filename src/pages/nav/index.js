
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import {  Link ,withRouter} from "react-router-dom";
import "./index.css"
import Header from "../../components/header/index"
import Banner from "../../components/banner/index"
import v1 from "../../images/新闻动态/news_2.jpg"
import v2 from "../../images/新闻动态/news_4.jpg"
import v3 from "../../images/新闻动态/news_3.jpg"
import v4 from "../../images/新闻动态/news_5.jpg"
import v5 from "../../images/新闻动态/news_1.jpg"
import v6 from "../../images/新闻动态/news_6.jpg"
// import v6 from "../../images/新闻动态/news_6.jpg"
import Footer from "../../components/footer/index"
import 'animate.css'
import { WOW } from 'wowjs';
// new WOW({live: false}).init();

class Nav extends Component{

    componentWillMount() {
        document.documentElement.scrollTop = document.body.scrollTop =0;


    }

    constructor(props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(
            <div className="nav">
                {this.props.children}
                <Header/>
                <Banner/>
                {/*className=" wow bounceIn"*/}
                <h2 > - 新闻动态 -</h2>
                <ul>
                    <Link to="news1">
                        <li className=" wow fadeInUpBig">
                            <img src={v1} alt=""/>
                            <div className="news-right">
                                <h2>中汇祥龄协同老龄办筹划明星进社区宣导新时代智慧健康养老服务平台。</h2>
                                <h5>日前，中汇祥龄与老龄办正着手筹划明星进社区宣传新时代智慧健康养老...</h5>
                                <h4>2019-6-24</h4>
                            </div>

                        </li>
                    </Link>
                    <Link to="news2">
                        <li  className=" wow fadeInUpBig">
                            <img src={v2} alt=""/>
                            <div className="news-right">
                                <h2>中国老龄协会领导莅临中汇祥龄公司考察调研。</h2>
                                <h5>中国老龄协会老年人才信息中心领导一行多人前往位于中央电视台梅地亚...</h5>
                                <h4>2019-4-16</h4>
                            </div>

                        </li>
                    </Link>
                    <Link to="news3">
                        <li  className=" wow fadeInUpBig">
                            <img src={v3} alt=""/>
                            <div className="news-right">
                                <h2>银河保险·国龄·中汇祥龄三方正式签约成战略合作伙伴。</h2>
                                <h5>三方的战略合作，标志着聚合力服务老年产业发展的格局已经形成。三个...</h5>
                                <h4>2019-6-24</h4>
                            </div>

                        </li>
                    </Link>
                    <Link to="news4">
                        <li  className=" wow fadeInUpBig">
                            <img src={v4} alt=""/>
                            <div className="news-right">
                                <h2>老龄产业有望成为经济发展新增长点。</h2>
                                <h5>4月16日，中国老龄协会在京发布《需求侧视角下老年人消费及需求意愿...</h5>
                                <h4>2019-4-16</h4>
                            </div>

                        </li>
                    </Link>
                    <Link to="news5">
                        <li  className=" wow fadeInUpBig">
                            <img src={v5} alt=""/>
                            <div className="news-right">
                                <h2>北京国龄中心与中航在京签约共建这样一平台！。</h2>
                                <h5>2019年5月20日，北京国龄智慧健康养老产业发展中心与中付航天科技创...</h5>
                                <h4>2019-6-24</h4>
                            </div>

                        </li>
                    </Link>
                    <Link to="news6">
                        <li  className=" wow fadeInUpBig">
                            <img src={v6} alt=""/>
                            <div className="news-right">
                                <h2>国务院办公厅印发《关于推进养老服务发展的意见。</h2>
                                <h5>新华社北京4月16日电 近日，国务院办公厅印发《关于推进养老服务发展的...</h5>
                                <h4>2019-4-16</h4>
                            </div>

                        </li>
                    </Link>
                </ul>

                <Footer/>
            </div>
        )
    }
}
export default withRouter(Nav);









