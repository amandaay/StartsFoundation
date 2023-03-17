import React, { useState } from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/Contact.module.css"

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
    const mailSent = await res.json()["success"]
    if (mailSent) {
      console.log("Sent Mail Successfully")
    }
  }
  return (
    <Layout>
      <section className={styles.section}>
        <div className="row" style={{ "text-align": "center" }}>
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
              <label for="fullName">Full Name</label>
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
              <label for="Email">Email address</label>
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
              <label for="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                aria-describedby="message"
                placeholder="Message"
                onChange={e => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ margin: "1em" }}
            >
              Submit
            </button>
          </form>
        </div>
        <div className={styles.contact}>
          <div className={styles.phone}>
            <label>Phone</label>
            <p>+9779867504884</p>
          </div>
          <div className={styles.email}>
            <label>Email Address</label>
            <p>startsfoundation@gmail.com</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}