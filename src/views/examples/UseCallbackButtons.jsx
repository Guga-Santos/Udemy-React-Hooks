import React from 'react';

const UseCallBackButtons = (props) => {
    return (
        <div>
            <button 
            type='button' 
            className="btn"
            onClick={() => props.inc(+6)}
            >+6</button>
            <button 
            type='button' 
            className="btn"
            onClick={() => props.inc(+12)}
            >+12</button>
            <button 
            type='button' 
            className="btn"
            onClick={() => props.inc(+18)}
            >+18</button>
        </div>
    )
}

export default React.memo(UseCallBackButtons)