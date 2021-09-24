import React from 'react';
import { Consumer } from './ContextApi';    //  데이터 소비자 임포트
class ContextChildren2 extends React.Component {
    //  컨텍스트 이용하기 예제
    // render() {
    //     return (
    //         <Consumer>
    //             { contextValue => 
    //                 <h3>contextValue: {contextValue}</h3> }
    //         </Consumer>
    //     )
    // }
    render(){
        return(
            <Consumer>
                {contextValue => 
                <button onClick={ e => contextValue.setStateFunc("Message From Child")}>
                    {contextValue.name} Button</button>}
            </Consumer>
        )
    }
}

export default ContextChildren2;