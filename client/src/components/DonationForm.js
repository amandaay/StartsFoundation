import React, { useState } from 'react'
import * as styles from '../styles/donationForm.module.css'

export default function DonationForm() {
    // amount options
    const monthlyAmount = [
        "USD10",
        "USD25",
        "USD50",
        "Other"
    ]
    const onetimeAmount = [
        "USD30",
        "USD50",
        "USD100",
        "Other"
    ]
    // control between Donate Once and Donate Monthly
    const [donateMonthly, setDonateMonthly] = useState(false);
    function handleClick(e) {
        if (!e.target.className.includes('Selected')) {
            setDonateMonthly(!donateMonthly);
        }
    }
    // control between different monthly amount of dollar
    const [monthlyAmountSelected, setMonthlyAmountSelected] = useState(0)
    function handleMonthlyAmountClick(index) {
        setMonthlyAmountSelected(index);
    }
    // control between different one-time amount of dollar
    const [onetimeAmountSelected, setOnetimeAmountSelected] = useState(0)
    function handleOnetimeAmountClick(index) {
        setOnetimeAmountSelected(index);
    }

    const renderedMonthlyAmounts = monthlyAmount.map((amount, index) => {
        return (
            <div role="presentation" key={index} className={`${styles.amountOption} ${monthlyAmountSelected === index ? styles.amountSelected : ""}`} onClick={() => handleMonthlyAmountClick(index)}>
                {amount}
            </div>
        )
    });
    const renderedOnetimeAmounts = onetimeAmount.map((amount, index) => {
        return (
            <div role="presentation" key={index} className={`${styles.amountOption} ${onetimeAmountSelected === index ? styles.amountSelected : ""}`} onClick={() => handleOnetimeAmountClick(index)}>
                {amount}
            </div>
        )
    });
    const renderedOtherAmount = (
        <div className={styles.otherAmount}>
            <label for='number' className={styles.label}>USD</label>
            <input name='number' type='number' className={styles.input} />
        </div>
    )
    return (
        <section className={styles.container}>
            <div className={styles.options}>
                <div role="presentation" onClick={handleClick} className={donateMonthly ? styles.frequencyUnselected : styles.frequencySelected}>Donate Once</div>
                <div role="presentation" onClick={handleClick} className={!donateMonthly ? styles.frequencyUnselected : styles.frequencySelected}>Donate Monthly</div>
            </div>
            <div className={styles.amountOptionsBox}>
                {donateMonthly ? renderedMonthlyAmounts : renderedOnetimeAmounts}
            </div>
            <div className={styles.submitForm}>
                <div className={styles.subtitle}>As you proceed, you will be taken to a secure payment page, where you perform the transfer of your gift.</div>
                <div className={styles.form}>
                    {((onetimeAmountSelected===3 && !donateMonthly)||(monthlyAmountSelected===3 && donateMonthly))&&renderedOtherAmount}
                    <button className={styles.btn}>Donate Now</button>
                </div>
            </div>
        </section>
    )
}
