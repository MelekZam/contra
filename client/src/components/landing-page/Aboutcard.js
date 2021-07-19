import React from 'react'
import styles from '../../styles/landing-page/Aboutcard.module.css'

const Aboutcard = ({image, title, text}) => {
    return (
        <div className={styles.card}>
            <img 
                src={image}
                width={200}
                height={200}
                alt=""
            />
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default Aboutcard
