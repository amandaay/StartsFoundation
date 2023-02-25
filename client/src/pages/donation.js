import React from 'react'
import DonationForm from '../components/DonationForm';
import Layout from '../components/Layout'
import * as styles from '../styles/donation.module.css'

export default function donation() {
    return (
        <Layout>
            <section>
                <div className={styles.banner}>
                    <div className={styles.container}>
                        <div className={styles.midPage}>
                            <div className={styles.donationBox}>
                                <div className={styles.donationForm}>
                                    <h1>Donate Now</h1>
                                    <div className={styles.subtitle}>Join Starts Foundation to save and support the life of people in Nepal.</div>
                                    <DonationForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.bottomPage}>
                        <div className={styles.bottomContent}>
                            <h1>TRANSPARENCY AND ACCOUNTABILITY</h1>
                            <p>It has always maintained a transparent relationship with the development partners, community group, government and people associated all the while fostering the bond in a significant way. Standing accountable to all the terms, it has paved its way into society as one of the emerging social organizations which works to thrive with dignity.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
