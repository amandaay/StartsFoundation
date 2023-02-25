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
                                    <div className={styles.subtitle}>Join Starts Foundation to save and support the life of children in Nepal.</div>
                                    <DonationForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.bottomPage}>
                        <div className={styles.bottomContent}>
                            <h1>Children in Nepal<br/> Need your support to go to school</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
