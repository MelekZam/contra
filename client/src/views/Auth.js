import React from 'react'
import styles from '../styles/Auth.module.css'
import Form from '../components/auth/Form'
import { useLocation } from 'react-router'

const Auth = () => {
    const location = useLocation();
    const { type } = location.state;
    return (
        <div className={styles.container}>
            <Form type={type} />
        </div>
    )
}

export default Auth
