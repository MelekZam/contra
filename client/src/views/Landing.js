import React from 'react'
import styles from '../styles/Landing.module.css'
import Navbar from '../components/landing-page/Navbar'
import { ReactComponent as Illustration} from '../media/illustration.svg'
import Button from '@material-ui/core/Button'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Aboutcard from '../components/landing-page/Aboutcard'
import versus from '../media/versus.png'
import structure from '../media/structure.png'
import dashboard from '../media/dashboard.png'
import { ReactComponent as Mail} from '../media/mail.svg'
import ContactForm from '../components/landing-page/Contactform'


const Landing = () => {
    return (
        <div className={styles.view}>
            <Navbar />
            <div className={styles.container} id="welcome">
                <div className={styles.text}>
                    <h1>Online<br/>Matchmaking Platform<br/>For Competitive Programming</h1>
                    <p>Competitive programming is now more fun than ever.<br/>You can match against other programmers to solve problems<br/>and get higher ranks.</p>
                    <div>
                        <Button
                            variant="contained"
                            style={{backgroundColor: '#1b62b0', fontWeight: 600, color: 'white'}}
                            className={styles.getstarted}
                            endIcon={<ArrowRightIcon/>}
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
                <div className={styles.image}>
                    <Illustration className={styles.illustration}/>
                </div>
            </div>
            <div className={styles.about} id="about">
                <Aboutcard image={versus} title="Matchmaking System" text="Play duals with other porgrammers to win elo and get a higher rank." />
                <Aboutcard image={structure} title="Data Structures" text="Learn more about different algorithms and data structures thanks to the tutorials available in the platform." />
                <Aboutcard image={dashboard} title="Dashboard" text="Get a glimpse of your performance through the data from your past games." />
            </div>
            <div className={styles.contact} id="contact">
                <div className={styles.title}>
                    <h1>Have Some Questions ?</h1>
                    <h3>Please Contact Us.</h3>
                </div>
                <div className={styles.contactContent}>
                    <Mail className={styles.mail} />
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                All rights reserved © 2021 Contra.
            </div>
        </div>
    )
}

export default Landing;