import React from "react";
import s from './Header.module.css'
import logo from '../../images/Logo.png'
import map from '../../images/map.png'
import search from '../../images/Search.png'
import user from '../../images/user.png'
import { useMediaQuery } from 'react-responsive'
const Header = () => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 742px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 741px)' })
    return (
        <div>
            {
                isBigScreen &&
                <div className={s.header}>

                    <img className={s.logo} src={logo} />
                    <div className={s.location}>
                        <span className={s.deliver}>Deliver to:</span>
                        <img className={s.map} src={map} />
                        {/* <span className={s.current}>Current Location</span> */}
                        <span className={s.place}>Mohammadpur Bus Stand, Dhaka</span>
                    </div>
                    <div className={s.search}>
                        <img src={search} />
                        <span className={s.searching}>Search Food</span>
                    </div>
                    <button className={s.button}>
                        <img src={user} />
                        <span className={s.login}>Login</span>
                    </button>
                </div>
            }
            {
                isMobile &&
                <div>
                    <div className={s.header}>
                        <img className={s.logo} src={logo} />
                        <button className={s.button}>
                            <img src={user} />
                            <span className={s.login}>Login</span>
                        </button>
                    </div>
                    <div className={s.subH}>
                        <div className={s.location}>
                            <span className={s.deliver}>Deliver to:</span>
                            <img className={s.map} src={map} />
                            {/* <span className={s.current}>Current Location</span> */}
                            <span className={s.place}>Mohammadpur Bus Stand, Dhaka</span>
                        </div>
                        <div className={s.search}>
                            <img src={search} />
                            <span className={s.searching}>Search Food</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Header