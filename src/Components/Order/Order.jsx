import React from "react";
import s from './Order.module.css'

const Order = () => {
    return (
        <div className={s.order} >
            <div className={s.content}>
                <div className={s.name}>
                    <p className={s.title}> Are you ready to order with the best deals?</p>
                </div>
                <div className={s.name}>
                    <button className={s.button}>
                        <span className={s.text}>Proceed to order</span>
                        <span className={s.arrow}>&rsaquo;</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Order