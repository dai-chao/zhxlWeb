/*
* date:2019/6/25/15:30;
* name:代超
*
* */

import React,{Component} from 'react';
//import { Link } from "react-router-dom"
import './App.css';

class App extends Component{

    componentWillMount() {

        
    }

    render(){
        return(
            <div>
                {
                    this.props.children
                }
            </div>
        )
    }
    componentDidMount() {
        
    }
}

export default App;
