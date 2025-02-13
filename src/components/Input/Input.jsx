import React, {useId} from 'react'
import './Input.css'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div id='inputWrapper'>
            {label && <label 
            id='inputLabel' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className='input-component-box'
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input