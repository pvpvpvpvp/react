// 함수형 컴포넌트는 state 사용 X

import { Component } from "react";

class ReactState extends Component{
    constructor(props){
        super(props);
        // 선언
        this.state={
            stateString:this.props.reactString,
            stateNumber:0
        }
    }

    stateChange = (flag) => {
        
        if (flag === "direct"){
            console.log("Active direct");
            this.state.stateString = "리액트 스테이트 직접변경";
            this.state.stateNumber ++;
        }
        else if(flag ==="setstate"){
            console.log("Active setstate");
            this.setState({
                stateString: "변경경이",
                stateNumber: this.state.stateNumber+1
            })
        }else if(flag ==="forceUpdate")
        {
            console.log("Active forceUpdate");
            this.forceUpdate();
        }
    }
    
    render(){
        return(
            <div>
                <h2>State</h2>
                <ul>
                    <li>String: {this.state.stateString}</li>
                    <li>Number: {this.state.stateNumber}</li>
                </ul>
                <button onClick={e=>this.stateChange("direct",e)}>State 직접변경</button>
                <button onClick={e=>this.stateChange("setstate",e)}>State setstate변경</button>
                <button onClick={e=>this.stateChange("forceUpdate",e)}>State forceUpdate변경</button>
            </div>
        )
    }
}

export default ReactState