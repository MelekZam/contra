import React, { useState } from 'react'
import styles from '../../styles/auth/Form.module.css'
import Alert from '@material-ui/lab/Alert' 
import * as API from '../../api/index'
import { CircularProgress } from '@material-ui/core'

const Form = (props) => {
    
    const [toggle, setToggle] = useState(false);
    const [type, setType] = useState(props.type);
    const [formData, setFormData] = useState({username: "", email: "", password: "", confirm: ""});
    const [showError, setShowError] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [loading, setLoading] = useState(false);
    const [created, setCreated] = useState(false)

    const handleChange = ({target}, name) => {
        setFormData(prevState => ({...prevState, [name]: target.value}))
    }

    const checkData = () => {
        let error = false
        if ( formData.username === "" || formData.email === "" || formData.password === "" || formData.confirm === "" ){
            setShowError(true)
            setErrorText("Please fill all input fields")
            error = true
        }
        else if (formData.username.length > 8){
            setShowError(true)
            setErrorText("Username length must be less than 9")
            error = true
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)){
            setShowError(true)
            setErrorText("E-mail is not valid")
            error = true
        }
        else if (formData.password.length < 8){
            setShowError(true)
            setErrorText("Password must have at least 8 caracters")
            error = true
        }
        else if (formData.password !== formData.confirm){
            setShowError(true)
            setErrorText("Password and Confirm Password are not the same")
            error = true
        }

        if (error) setTimeout(() => setShowError(false), 3000)

        return !error
    }

    const register = async () => {
        if (checkData()) {
            const user = {
                username: formData.username,
                email: formData.email,
                password: formData.password
            }
            setLoading(true)
            try {
                await API.signup(user)
                setLoading(false)
                setType('signin')
                setFormData({username: "", email: "", password: "", confirm: ""})
                setCreated(true)
                setTimeout(() => setCreated(false), 2000)
            } catch ({response}) {
                setLoading(false)
                if (response.status === 409) {
                    setShowError(true)
                    setErrorText(response.data.message)
                    setTimeout(() => setShowError(false), 3000)
                }
            }
        }
    }


    const login = async () => {
        if (formData.email !== "" && formData.password !== "") {
            const user = {
                email: formData.email,
                password: formData.password
            }
            const result = await API.signin(user)
            if (result?.statusCode === 404) {
                setShowError(true)
                setErrorText(result.message)
                setTimeout(() => setShowError(false), 3000)
            }
            else console.log(result)
        }
    }

    return (
        <div className={styles.container}>
            {loading ? <CircularProgress />
            : <>
                <h2>{type === "signin" ? "Sign In" : "Sign Up"}</h2>
                <div className={styles.form}>
                    {showError && <Alert severity="error">{errorText}</Alert>}
                    {created && <Alert severity="success">Account Created !</Alert>}
                    {type === "signup" && <input type="text" placeholder="Username" value={formData.username} onChange={(e) => handleChange(e, "username")} />}
                    <input type="text" placeholder="E-mail" value={formData.email} onChange={(e) => handleChange(e, "email")}/>
                    <input type="password" placeholder="Password" value={formData.password} onChange={(e) => handleChange(e, "password")} />
                    {type === "signup" && <input type="password" placeholder="Confirm Password" value={formData.confirm} onChange={(e) => handleChange(e, "confirm")} />}
                    {type === "signup" && <button onClick={register} >Sign Up</button>}
                    {type === "signin" && <button onClick={login}>Sign In</button>}
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
            </>}
        </div>
    )
}

export default Form
