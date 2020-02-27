import React from 'react';


export const Buttons = (props) => {

    return (
        <div className='button'>
            <button name="(" onClick={(ev) => props.operations(ev.target.name)}>(</button>
            <button name="CE" onClick={(ev) => props.operations(ev.target.name)}>CE</button>
            <button name=")" onClick={(ev) => props.operations(ev.target.name)}>)</button>
            <button name="C" onClick={(ev) => props.operations(ev.target.name)}>C</button>

            <button name="1" onClick={(ev) => props.operations(ev.target.name)}>1</button>
            <button name="2" onClick={(ev) => props.operations(ev.target.name)}>2</button>
            <button name="3" onClick={(ev) => props.operations(ev.target.name)}>3</button>
            <button name="+" onClick={(ev) => props.operations(ev.target.name)}>+</button>


            <button name="4" onClick={(ev) => props.operations(ev.target.name)}>4</button>
            <button name="5" onClick={(ev) => props.operations(ev.target.name)}>5</button>
            <button name="6" onClick={(ev) => props.operations(ev.target.name)}>6</button>
            <button name="-" onClick={(ev) => props.operations(ev.target.name)}>-</button>


            <button name="7" onClick={(ev) => props.operations(ev.target.name)}>7</button>
            <button name="8" onClick={(ev) => props.operations(ev.target.name)}>8</button>
            <button name="9" onClick={(ev) => props.operations(ev.target.name)}>9</button>
            <button name="*" onClick={(ev) => props.operations(ev.target.name)}>*</button>


            <button name="." onClick={(ev) => props.operations(ev.target.name)}>.</button>
            <button name="0" onClick={(ev) => props.operations(ev.target.name)}>0</button>
            <button name="=" onClick={(ev) => props.operations(ev.target.name)}>=</button>
            <button name="/" onClick={(ev) => props.operations(ev.target.name)}>÷</button>
        </div>
    )
}


