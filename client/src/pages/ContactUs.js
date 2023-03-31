import React, { useState } from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/contact.module.css"
import { navigate } from "gatsby"

export default function Contact() {
  const [email, setEmail] = useState("")
  const [fName, setFName] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()

    const data = {
      email,
      fName,
      message,
    }
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    const { mailSent } = await res.json()
    if (mailSent) {
      console.log("Sent Mail Successfully")
      window.alert(
        "Hi, Thanks for reaching out. Our team will Contact you soon through email"
      )
    } else {
      window.alert(
        "There were some issue in mail server. Our team will fix it Soon!! In the meantime, you could contact us directly through below mentioned email or phone"
      )
    }
    navigate("/")
  }
  return (
    <Layout>
      <section className={styles.section}>
        <div className="row">
          <div className={styles.header}>
            <h3>Contact Us</h3>
            <p>
              Leave us a message or contact us!
              <br />
              We’d be happy to answer your queries.
            </p>
          </div>
          <form
            className={styles.form}
            id="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                aria-describedby="name"
                placeholder="Enter Name"
                onChange={e => setFName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="Email"
                aria-describedby="email"
                placeholder="Enter email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                rows="4"
                id="message"
                aria-describedby="message"
                placeholder="Message"
                onChange={e => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ margin: "1em"}}
            >
              Submit
            </button>
          </form>
        </div>
        <div className={styles.contact}>
          <div className={styles.phone}>
            <label htmlFor="phone">Phone</label>
            <p>+9779867504884</p>
          </div>
          <div className={styles.email}>
            <label htmlFor="email">Email Address</label>
            <p>startsfoundation@gmail.com</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
