import React, { useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"
import PhoneInput from "react-phone-number-input"
import * as styles from "../styles/donationForm.module.css"
import "../styles/phone.css"

export default function DonationForm() {
  // amount options
  const monthlyAmount = ["USD10", "USD25", "USD50", "Other"]
  const onetimeAmount = ["USD30", "USD50", "USD100", "Other"]
  // control between Donate Once and Donate Monthly
  const [donateMonthly, setDonateMonthly] = useState(false)
  function handleClick(e) {
    if (!e.target.className.includes("Selected")) {
      setDonateMonthly(!donateMonthly)
    }
  }
  // control between different monthly amount of dollar
  const [monthlyAmountSelected, setMonthlyAmountSelected] = useState(0)
  function handleMonthlyAmountClick(index) {
    setMonthlyAmountSelected(index)
  }
  // control between different one-time amount of dollar
  const [onetimeAmountSelected, setOnetimeAmountSelected] = useState(0)
  function handleOnetimeAmountClick(index) {
    setOnetimeAmountSelected(index)
  }
  const [donatedAmount, setDonatedAmount] = useState(0)
  const [showFormDetails, setShowFormDetails] = useState(false)
  function onInputChange(e) {
    setDonatedAmount(e.target.value)
  }

  const renderedMonthlyAmounts = monthlyAmount.map((amount, index) => {
    return (
      <div
        role="presentation"
        key={index}
        className={`${styles.amountOption} ${
          monthlyAmountSelected === index ? styles.amountSelected : ""
        }`}
        onClick={() => handleMonthlyAmountClick(index)}
      >
        {amount}
      </div>
    )
  })
  const renderedOnetimeAmounts = onetimeAmount.map((amount, index) => {
    return (
      <div
        role="presentation"
        key={index}
        className={`${styles.amountOption} ${
          onetimeAmountSelected === index ? styles.amountSelected : ""
        }`}
        onClick={() => handleOnetimeAmountClick(index)}
      >
        {amount}
      </div>
    )
  })
  const renderedOtherAmount = (
    <div className={styles.otherAmount}>
      <label htmlFor="number" className={styles.currency}>
        USD
      </label>
      <input
        id="number"
        type="number"
        value={donatedAmount}
        onChange={onInputChange}
        className={styles.amountInput}
      />
    </div>
  )
  // donate steps control
  const [donateClicked, setDonateClicked] = useState(false)
  function onDonateClick() {
    let amount = 0
    setShowFormDetails(true)
    if (donateMonthly) {
      amount = monthlyAmount[monthlyAmountSelected].replace(/\D/g, "")
    } else {
      amount = onetimeAmount[onetimeAmountSelected].replace(/\D/g, "")
    }
    if (amount !== "") {
      setDonatedAmount(Number(amount))
    }
    setMonthlyAmountSelected(monthlyAmount.length - 1)
    setOnetimeAmountSelected(onetimeAmount.length - 1)
    setDonateClicked(true)
  }
  const [showSummary, setShowSummary] = useState(true)
  function onSummaryTabClick() {
    setShowSummary(!showSummary)
  }
  const tabIcon = (
    <span className="text-2xl">
      {showSummary ? <GoChevronDown /> : <GoChevronLeft />}
    </span>
  )
  const stepOne = (
    <div>
      <div className={styles.options}>
        <div
          role="presentation"
          onClick={handleClick}
          className={
            donateMonthly
              ? styles.frequencyUnselected
              : styles.frequencySelected
          }
        >
          Donate Once
        </div>
        <div
          role="presentation"
          onClick={handleClick}
          className={
            !donateMonthly
              ? styles.frequencyUnselected
              : styles.frequencySelected
          }
        >
          Donate Monthly
        </div>
      </div>
      <div className={styles.amountOptionsBox}>
        {donateMonthly ? renderedMonthlyAmounts : renderedOnetimeAmounts}
      </div>
    </div>
  )
  const [phoneNumber, setPhoneNumber] = useState()
  const [checked, setChecked] = useState(false)
  const stepTwo = (
    <div className={styles.detailedForm}>
      <div className={styles.summary}>
        <div
          role="presentation"
          className={styles.summaryTab}
          onClick={onSummaryTabClick}
        >
          Donation Summary {tabIcon}
        </div>
        {showSummary && (
          <div className={styles.donationSummary}>
            <div>Frequency: {donateMonthly ? "Monthly" : "One time"}</div>
            <div>Amount: USD{donatedAmount}</div>
          </div>
        )}
      </div>
      <div>
        <form className={styles.form}>
          <div className={styles.row}>
            <div className={styles.col}>
              <label htmlFor="firstName">
                First name<span className={styles.span}> *</span>
              </label>
              <input className={styles.formInput} name="firstName" required />
            </div>
            <div className={styles.col}>
              <label htmlFor="lastName">
                Last name<span className={styles.span}> *</span>
              </label>
              <input className={styles.formInput} name="lastName" required />
            </div>
          </div>
          <div className={styles.row}>
            <label htmlFor="email">
              Email address<span className={styles.span}> *</span>
            </label>
          </div>
          <div className={styles.row}>
            <input
              className={styles.formInput}
              type="email"
              name="email"
              required
            />
          </div>
          <div
            role="presentation"
            className={styles.row}
            onClick={() => setChecked(!checked)}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            <input
              className={styles.checkBox}
              type="checkbox"
              checked={checked}
            />
            <p className={styles.checkBoxContent}>
              Yes, I would like to receive communications by email and know how
              my donation is driving change in the lives of Nepal. By opting
              out, you will not be added to any Starts mailing lists. You will,
              however, still receive your donation receipt by email.
            </p>
          </div>
          <div className={styles.row}>
            <label htmlFor="phone">Phone number</label>
          </div>
          <div className={styles.row}>
            <PhoneInput
              international
              defaultCountry="US"
              value={phoneNumber}
              onChange={() => setPhoneNumber}
            />
          </div>
        </form>
      </div>
    </div>
  )
  return (
    <section className={styles.container}>
      {showFormDetails ? stepTwo : stepOne}
      <div className={styles.submitForm}>
        {showFormDetails ? (
          <p
            role="presentation"
            className={styles.back}
            onClick={() => {
              setShowFormDetails(false)
              setDonateClicked(false)
            }}
          >
            <IoIosArrowBack />
            Back
          </p>
        ) : (
          <div className={styles.subtitle}>
            As you proceed, you will be taken to a secure payment page, where
            you perform the transfer of your gift.
          </div>
        )}
        <div className={styles.form}>
          {((onetimeAmountSelected === 3 && !donateMonthly) ||
            (monthlyAmountSelected === 3 && donateMonthly)) &&
            !donateClicked &&
            renderedOtherAmount}
          <button onClick={onDonateClick} className={styles.btn}>
            Donate Now
          </button>
        </div>
      </div>
    </section>
  )
}
