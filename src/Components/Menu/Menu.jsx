import React from "react";
import s from './Menu.module.css'
import burger from '../../images/burger.png'
import potato from '../../images/potato.png'
import pizza from '../../images/pizza.png'
const Menu = () => {
    return (
        <div className={s.menu}>
            <div className={s.content}>
                <div className={s.card}>
                    <div className={s.inf}>
                        <p className={s.title}>Best deals <span className={s.color}> Crispy Sandwiches</span> </p>
                        <p className={s.subtitle}>Enjoy the large size of sandwiches. Complete
                            perfect slice of sandwiches.</p>
                        <button className={s.button}>
                            <span className={s.text}>Proceed to order</span>
                            <span className={s.arrow}>&rsaquo;</span>
                        </button>
                    </div>
                    <img className={s.img} src={burger} />
                </div>
                <div className={s.card}>

                    <img className={s.img} src={potato} />
                    <div className={s.inf}>
                        <p className={s.title}>Celebrate  parties with <span className={s.color}> Fried Chicken</span> </p>
                        <p className={s.subtitle}>Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out
                            best deals for fried chicken.</p>
                        <button className={s.button}>
                            <span className={s.text}>Proceed to order</span>
                            <span className={s.arrow}>&rsaquo;</span>
                        </button>
                    </div>
                </div>
                <div className={s.card}>
                    <div className={s.inf}>
                        <p className={s.title}>Wanna eat hot
                            & spicy <span className={s.color}> Pizza ?</span></p>
                        <p className={s.subtitle}>Pair up with a friend and enjoy the
                            hot and crispy pizza pops. Try it
                            with the best deals.</p>
                        <button className={s.button}>
                            <span className={s.text}>Proceed to order</span>
                            <span className={s.arrow}>&rsaquo;</span>
                        </button>
                    </div>
                    <img className={s.img} src={pizza} />

                </div>
            </div>

        </div>
    )
}

export default Menu