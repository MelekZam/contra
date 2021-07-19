import React, { useState } from 'react'
import styles from '../../styles/landing-page/Navbar.module.css'
import Drawer from '@material-ui/core/Drawer'
import DrawerList from './DrawerList'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [ drawerIsActive, setDrawerIsActive ] = useState(false)
    const handleListClick = () => {
        setDrawerIsActive(false)
    }

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <h1>Contra</h1>
                </div>
                <ul className={styles.links}>
                    <li><a className={styles.a} href="#welcome">Welcome</a></li>
                    <li><a className={styles.a} href="#about">About</a></li>
                    <li><a className={styles.a} href="#contact">Contact</a></li>
                </ul>
                <div className={styles.sign}>
                    <button className={styles.login}>
                        <Link to={{
                            pathname: "/auth",
                            state: {
                                type: 'signin'
                            }
                        }}>
                            Log In
                        </Link>
                    </button>
                    <Link to={{
                        pathname: "/auth",
                        state: {
                            type: 'signup'
                        }
                    }}>
                        <button className={styles.signup}>
                            Sign Up
                        </button>
                    </Link>
                </div>
                <div className={styles.burger} onClick={() => setDrawerIsActive(!drawerIsActive)}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
            </div>
            <Drawer style={{minWidth: '50vw'}} anchor='right' open={drawerIsActive} onClose={ () => {setDrawerIsActive(false)} }>
                <DrawerList onClick={handleListClick}/>
            </Drawer>
        </div>
    )
}

export default Navbar
