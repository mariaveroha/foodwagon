import React, { useState } from "react";
import s from './Card.module.css'
const Card = (props) => {
    return (
        <div className={s.card}>
            <img className={s.img} src={props.img} />
            <p className={s.name}>{props.name}</p>
            <p className={s.desc}>{props.desc}</p>
        </div>
    )
}
export default Card