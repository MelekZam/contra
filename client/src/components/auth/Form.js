import React, { useState } from 'react'
import styles from '../../styles/auth/Form.module.css'

const Form = (props) => {
    
    const [toggle, setToggle] = useState(false);
    const [type, setType] = useState(props.type);
    const [formData, setFormData] = useState({username: "", email: "", password: "", confirm: ""});

    return (
        <div className={styles.container}>
            <h2>{type === "signin" ? "Sign In" : "Sign Up"}</h2>
            <div className={styles.form}>
                {type === "signup" && <input type="text" placeholder="Username"/>}
                <input type="text" placeholder="E-mail"/>
                <input type="password" placeholder="Password" />
                {type === "signup" && <input type="password" placeholder="Confirm Password" />}
                {type === "signup" && <button>Sign Up</button>}
                {type === "signin" && <button>Sign In</button>}
            </div>
            {
                type === "signin" ? <div className={styles.text}>
                    <p>Don't have an account?</p>
                    <p className={styles.change} onClick={() => {
                        setType("signup")
                        setToggle(!toggle)
                    }}>
                        Create a new one
                    </p>
                </div> : <div className={styles.text}>
                    <p>Already have an account?</p>
                    <p className={styles.change} onClick={() => {
                        setType("signin")
                        setToggle(!toggle)
                    }}>
                        Log In
                    </p>
                </div>
            }
        </div>
    )
}

export default Form
