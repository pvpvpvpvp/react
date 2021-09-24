import React from 'react'
import PropClass from './components/PropClass'
import PropFunc from './components/PropFunc';
function App() {

    const messageFromChild = (message) =>{
        alert(message);
    }
    
    return(
        <div>
            <h2>
                Props in Class Component
            </h2>
            <PropClass 
                prop_str="string value"
                prop_num={10}
                prop_false={false}
                prop_true
                prop_obj={{
                    name:"홍길동",
                    age:28
                }}
                prop_func={messageFromChild}
                
            >
                {/* 따로 정의하지 않아도 자식으로 전달이 된다. */}
                <h4>Children</h4>
                <p>자식 컴포넌트</p>
            </PropClass>
            <h2>Props in Funtion component</h2>
            <PropFunc
                 prop_str="string value"
                 prop_num={10}
                 prop_false={false}
                 prop_true
                 prop_obj={{
                     name:"홍길동",
                     age:28
                 }}
                 prop_func={messageFromChild}
            />
        </div>
        
    )
}

export default App;