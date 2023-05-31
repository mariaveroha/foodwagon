import React from "react";
import s from './Dish.module.css'

const Dish = (props) => {
    return (
        <div className={s.item}>
            <img className={s.img} src={props.list.img} />
            <p className={s.name}>{props.list.name}</p>
        </div>
    )
}

export default Dish