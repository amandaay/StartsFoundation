import React, { useRef, useState } from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/ContactUs.module.css"
import { navigate } from "gatsby"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const form = useRef()
  const [show, setShow] = useState()

  const handleSubmit = async evt => {
    evt.preventDefault()
    emailjs
      .sendForm(
        "service_ho4liy5",
        "template_yiirtov",
        form.current,
        "wZoxrZhi4F0zR5541"
      )
      .then(
        function () {
          setShow(true)
        },
        function () {}
      )
  }
  return (
    <Layout>
      <section className={styles.banner}>
        <div
          className={styles.container}
          style={show ? { opacity: 0.1 } : { opacity: 1 }}
        >
          <div className={styles.section}>
            <div className={styles.header}>
              <h3>Contact Us</h3>
              <div className={styles.pDiv}>
                <p className={styles.p}>
                  Leave us a message or contact us!
                  <br />
                  We’d be happy to answer your queries.
                </p>
              </div>
            </div>
            <div className={styles.formDiv}>
              <form
                className={styles.form}
                id="contactForm"
                onSubmit={handleSubmit}
                ref={form}
              >
                <div className={styles.formGroup}>
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    aria-describedby="name"
                    placeholder="Enter Name"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="Email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    aria-describedby="email"
                    placeholder="Enter Email"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    aria-describedby="message"
                    placeholder="Message"
                    rows="4"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className={styles.contact}>
            <div className={styles.phone}>
              <label>Phone</label>
              <p className={styles.info}>+9779867504884</p>
            </div>
            <div className={styles.email}>
              <label>Email Address</label>
              <p className={styles.info}>startsfoundation@gmail.com</p>
            </div>
          </div>
        </div>

        <div
          className="modal"
          id="exampleModal"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={show ? { display: "block" } : { display: "none" }}
        >
          <div className="modalAlign">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  Thank you for contacting us. Our team will reach out to you
                  shortly.
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={() => {
                      navigate("/")
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
