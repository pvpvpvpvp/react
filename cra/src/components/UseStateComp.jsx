import { useState } from 'react'

function UseStateComp(props) {
    let {contents} =props;

    const [count, setCount] = useState(0);
    return(
        <div>
            <h2>{contents}</h2>
            <p>현재 카운트는: {count}입니다</p>
            <button onClick={()=> setCount(count+1)}>+1</button>
            <button onClick={()=> setCount(count-1)}>-1</button>
        </div>
    )
}

export default UseStateComp;