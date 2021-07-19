import styles from '../../styles/landing-page/Contactform.module.css'


const ContactForm = () => {
    return (
        <form className={styles.form}>
            <div className={styles.group}><input className={styles.input} type="text" required="required" /><span className={styles.highlight}></span><span className={styles.bar}></span><label className={styles.label}>Name</label></div>
            <div className={styles.group}><input className={styles.input} type="text" required="required" /><span className={styles.highlight}></span><span className={styles.bar}></span><label className={styles.label}>Email</label></div>
            <div className={styles.group}><textarea className={styles.textarea} type="textarea" rows="5" required="required"></textarea><span className={styles.highlight}></span><span className={styles.bar}></span><label className={styles.label}>Message</label></div>
            <div className={styles.btnbox}><button className={`${styles.btn} ${styles.btnsubmit}`} type="submit">submit</button></div>
        </form>
    )
}

export default ContactForm