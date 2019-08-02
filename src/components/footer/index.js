
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import "./index.css"

export default class Footer extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(
            <div  className="footer">

                <a  href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010602006847" className="" data-wow-duration="0.5s" data-wow-delay="0.2s"><img src={require("../../images/公安备案图标.png")} alt=""/>京公网安备 11010602006847号</a>

                {/*<div style="width:300px;margin:0 auto; padding:20px 0;">*/}
                {/*    <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010602006847" ><img src="" /><p ">京公网安备 11010602006847号</p></a>*/}
                {/*</div>*/}


                {/*<h3>ICP证：京A-20080101</h3>*/}
            </div>
        )
    }
    componentDidMount(){
        // console.log(document.documentElement.scrollTop)
    }
}









