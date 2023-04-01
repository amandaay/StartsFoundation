import React, { useEffect, useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"
import PhoneInput from "react-phone-number-input"
import DonateButton from "./DonateButton"
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
  function onOtherAmountChange(e) {
    const otherAmountInput = parseFloat(e.target.value) || 0
    setDonatedAmount(otherAmountInput)
    if (showWarning) {
      setShowWarning(false)
    }
  }
  function onOtherAmountReturn(e) {
    if (e.key === "Enter") {
      onDonateClick()
    }
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
        value={donatedAmount || ""}
        onChange={onOtherAmountChange}
        onKeyDown={onOtherAmountReturn}
        className={styles.amountInput}
      />
    </div>
  )
  // donate steps control
  const [donateClicked, setDonateClicked] = useState(false)
  const [showWarning, setShowWarning] = useState(false)
  function onDonateClick() {
    let amount = 0
    if (donateMonthly) {
      amount = monthlyAmount[monthlyAmountSelected].replace(/\D/g, "")
    } else {
      amount = onetimeAmount[onetimeAmountSelected].replace(/\D/g, "")
    }
    if (amount !== "") {
      setDonatedAmount(Number(amount).toFixed(2))
    } else {
      setDonatedAmount(
        (Math.round(Number(donatedAmount) * 100) / 100).toFixed(2)
      )
    }
    setMonthlyAmountSelected(monthlyAmount.length - 1)
    setOnetimeAmountSelected(onetimeAmount.length - 1)
    if (amount >= 1 || donatedAmount >= 1) {
      setShowFormDetails(true)
      setDonateClicked(true)
      setShowWarning(false)
    } else {
      setShowWarning(true)
    }
  }

  const [showSummary, setShowSummary] = useState(true)
  function onSummaryTabClick() {
    setShowSummary(!showSummary)
  }
  const tabIcon = (
    <span>{showSummary ? <GoChevronDown /> : <GoChevronLeft />}</span>
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
  const [checked, setChecked] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  })
  function formInputChange(e) {
    let { name, value } = e.target
    setUserInfo(pre => {
      return {
        ...pre,
        [name]: value,
      }
    })
  }
  useEffect(() => {
    if (
      Object.values(userInfo).every(v => v !== "") &&
      Object.values(userInfo).every(v => v !== undefined)
    ) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [userInfo])

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
              <input
                className={styles.formInput}
                onChange={formInputChange}
                value={userInfo.firstName}
                name="firstName"
                required
              />
            </div>
            <div className={styles.col}>
              <label htmlFor="lastName">
                Last name<span className={styles.span}> *</span>
              </label>
              <input
                className={styles.formInput}
                onChange={formInputChange}
                value={userInfo.lastName}
                name="lastName"
                required
              />
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
              onChange={formInputChange}
              value={userInfo.email}
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
              onChange={() => setChecked(!checked)}
            />
            <p className={styles.checkBoxContent}>
              Yes, I would like to receive communications by email and know how
              my donation is driving change in the lives of Nepal. By opting
              out, you will not be added to any Starts mailing lists. You will,
              however, still receive your donation receipt by email.
            </p>
          </div>
          <div className={styles.row}>
            <label htmlFor="phone">
              Phone number<span className={styles.span}> *</span>
            </label>
          </div>
          <div className={styles.row}>
            <PhoneInput
              international
              defaultCountry="US"
              value={userInfo.phoneNumber}
              onChange={value =>
                formInputChange({
                  target: { name: "phoneNumber", value: value },
                })
              }
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
        <div className={styles.col}>
          {showWarning && !showFormDetails && (
            <p
              className={styles.subtitle}
              style={{ color: "red", marginBottom: 0 }}
            >
              Amount input must be at least USD1.00
            </p>
          )}
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
        </div>
        <div className={styles.form}>
          {((onetimeAmountSelected === 3 && !donateMonthly) ||
            (monthlyAmountSelected === 3 && donateMonthly)) &&
            !donateClicked &&
            renderedOtherAmount}
          {showFormDetails ? (
            <DonateButton
              disabled={disabled}
              value={donatedAmount}
              donateMonthly={donateMonthly}
              userInfo={userInfo}
              subscribed={checked}
            />
          ) : (
            <button onClick={onDonateClick} className={styles.btn}>
              Donate Now
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
