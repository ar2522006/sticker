import React from "react";
import './Button.css'

export default function Button({
    children,
    type = "button",
    customStyles = {},
    ...props
}) {
    return (
        <button id="button" style={customStyles} {...props}>
            {children}
        </button>
    );
}