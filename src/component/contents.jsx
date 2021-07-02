import React, {useState} from "react";

function Contents(props){
    const [quesNo, setQuesno] = useState(0);

    var optStyle = {
        padding: "10px",
        backgroundColor: "antiquewhite",
        marginRight: "10px",
        display: "inline-block"
    }

    function sendData(e){
        props.func(setToState, e.target);
    }

    function setToState(_quesNo){
        setQuesno(_quesNo+1);
        console.log(quesNo)
    }

    return(
        <div>
            {
                props.data.options[0].map( (val)=>(
                    <div key={val} style={optStyle} onClick={(e)=>sendData(e)}>{val}</div>
                    )
                )

                
            }

        <p>
            <strong>{quesNo}</strong>
        </p>
        </div>
    )
}

export default Contents;