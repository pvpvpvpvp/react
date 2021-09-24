import React, {Component, useDebugValue} from 'react'
import PropTypes, { element } from 'prop-types'

class PropClass extends Component{
    constructor(props){
        super(props);
        console.log("PropClass",props);

        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage(){
        const{prop_func}=this.props;
        console.log(prop_func);
        if(typeof prop_func ==="function"){
            prop_func("message from propclass")
        }
        for (const key in this.props) {
            console.log(key);
            console.log(typeof(key));
            console.log(this.props+key);
        }  
    }


    render(){
        console.log("이것이 프롭스",this.props);
        let {prop_str,prop_num,prop_false,
            prop_true,prop_obj,prop_func} = this.props;
        return(
            <div>
                <h3>Pros from Parent</h3>
                <ul>

                    <li>String: {prop_str}</li>
                    <li>obj: {JSON.stringify(prop_obj)}</li>
                    {prop_func && <li>
                        function
                     <button onClick={this.sendMessage}>전송?</button>
                     </li>}
                     
                   
                </ul>
                    {this.props.children}
            </div>
        )
    }
}


// 객체로 props 전달할 때, 객체의 내부 필드 타입을 지정할 수 있다. 
PropClass.propTypes ={
    prop_obj:PropTypes.shape({
        name:PropTypes.string,
        age:PropTypes.number

    })
}


export default PropClass;