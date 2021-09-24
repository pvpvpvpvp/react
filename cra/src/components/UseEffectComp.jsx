import { useEffect, useState } from "react";

function UseEffectComp() {
    const [count, setCount] = useState(0);
    //
    // useEffect(()=>{
    //     console.log("랜더링 될때마다 Effect");
    // })

    // useEffect(()=>{
    //     console.log("첫 렌더링만 될때마다 Effect");
    // },[])

    // useEffect(()=>{
    //     console.log("카운트 변수가 업데이트 될때마다 Effect");
    //     console.log("변경돤 카운트:",count);
    // },[count])

    useEffect(()=>{
        console.log("effect 카운트:",count);
        return ()=>{
            console.log("클린업 함수");
            console.log("count:",count);
        }   
    },[])
    

   
    return(
        <div>
            <p>현재 카운트는: {count}입니다</p>
            <button onClick={()=> setCount(count+1)}>+1</button>
            <button onClick={()=> setCount(count-1)}>-1</button>
        </div>
    )
}

export default UseEffectComp;