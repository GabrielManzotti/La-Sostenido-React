import React from 'react'
import '../circleShoppCart/styles.css'

const Cartwidget = ({quantity}) => {
    return (
        <div className='circleShoppCart'>{quantity}
        </div>
    )
}

export default Cartwidget


