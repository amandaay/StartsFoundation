import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/contact.module.css"

export default function contact() {
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
          <form className={styles.form}>
            <div className="form-group">
              <label for="fullName">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                aria-describedby="name"
                placeholder="Enter Name"
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
              />
            </div>

            <div className="form-group">
              <label for="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                aria-describedby="message"
                placeholder="Message"
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
      </section>
    </Layout>
  )
}
