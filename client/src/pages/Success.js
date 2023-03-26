import { navigate } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/success.module.css'

export default function Success() {
    function handleClick() {
        navigate('/', { replace: true });
    }
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.section}>
                    <h1>Donation successful</h1>
                    <p>Thank you for helping the people in Nepal. Your payment has been successfully processed.</p>
                    <button className={styles.backButton} onClick={handleClick}>Back to Home</button>
                </div>
            </div>
        </Layout>
    )
}
