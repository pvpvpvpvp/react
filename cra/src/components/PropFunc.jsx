function PropFunc(props) {
    console.log("PropFunc:",props);

    const functionrenderall=()=>{
        const result =[];
        console.log("@@@@@@",props.prop_str);
        for (const key in props) {
            console.log(key);
            console.log(props[key]);
            console.log(typeof(props[key]));
            let value ="";
            if(typeof(props[key])!="object"&&typeof(props[key])!="function"){
                value = props[key];
                
                if(props[key]===true)
                {
                    result.push(<li key={key}>{typeof(props[key])} : {String(value)}</li>)
                }else{
                    result.push(<li key={key}> {typeof(props[key])} : {String(value)} </li>);
                }
            }else if(typeof(props[key])==="function"){
                const sendMessage =() =>{
                    props[key]("Message from propfunc component!!!")
                }
                result.push(<li key={key}> {typeof(props[key])} :
                    function
                    <button onClick={sendMessage}>전송?</button>
                    </li>)
            }else{ //오브젝트 분해
                for (const key2 in props[key])
                result.push(<li key={key}>{typeof(props[key])} : {props[key][key2]}</li>)
            }
        }
        console.log(result);
        return result; 
    }
  
    return(
        <div>
            <h3>Pros from Parent</h3>
            <ul>
                {functionrenderall()}
            </ul>
               
        </div>
    )
}



export default PropFunc;