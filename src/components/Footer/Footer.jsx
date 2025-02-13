import React from 'react'
import './Footer.css'
import {Logo} from '../'
function Footer() {
  return (
    <footer className='footer'>
        <div className='footerwrapper'>
            <Logo />
            <div>
                <p>All rights reserved @SRICKER</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
