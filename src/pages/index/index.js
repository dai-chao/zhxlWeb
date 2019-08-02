/*
* date:2019/6/25/15:30;
* name:代超
*
* */

import React,{ Component } from "react"
import { HashRouter } from "react-router-dom";
import Header from "../../components/header/index"
import Banner from "../../components/banner/index"
import About from "../../components/about/index"
import Product from "../../components/product/index"
import News from "../../components/news/index"
import Footer from "../../components/footer/index"
import 'animate.css'
import { WOW } from 'wowjs';
new WOW({live: false}).init();
/*import Menu from "../menu/index";*/


export default class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            num:0
        }
    }
    // componentWillMount() {
    //     document.documentElement.scrollTop = document.body.scrollTop =0;
    // }

    componentWillReceiveProps() {
        if (this.props.history.location !== this.props.location) {
            window.location.reload(true)
        }
    }
    render(){
        return(
            <HashRouter>
                <Header >
                </Header>
                <Banner/>
                <About/>
                <Product/>
                <News/>
                <Footer/>
            </HashRouter>

        )
    }
    componentWillUnmount() {
        // document.documentElement.scrollTop = document.body.scrollTop =0;
    }
}