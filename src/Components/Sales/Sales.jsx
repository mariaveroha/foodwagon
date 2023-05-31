import React from "react";
import s from './Sales.module.css'

const Sales = (props) => {
    return (
        <div className={s.sales}>
            <img className={s.img} src={props.image} />
            <p className={s.name}>{props.name}</p>
            <p className={s.remain}>{props.remain}</p>
            <div className={s.discount}>
                <span className={s.sale}>{props.sale}</span>
                <div className={s.flex}>
                    <span className={s.percent}>%</span>
                    <span className={s.off}>Off</span>
                </div>
            </div>
        </div>
    )
}

export default Sales