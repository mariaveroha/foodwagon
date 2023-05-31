import React from "react";
import s from './Item.module.css'
import map from '../../images/map.png'
const Item = (props) => {
    return (
        <div className={s.card}>
            <img className={s.img} src={props.item.img} />
            <p className={s.name}>{props.item.name}</p>
            <div className={s.flex}>
                <img src={map} />
                <span className={s.geo}>{props.item.geo}</span>
            </div>
            <p className={s.cost}>{props.item.cost}</p>
            <button className={s.button}>Order Now</button>
        </div>
    )
}
export default Item