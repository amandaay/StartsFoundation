import React, { useState } from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/Membership.module.css"

export default function Membership() {
  return (
    <Layout>
      <section className={styles.banner}>
        <div className={styles.container}>
          <div className={styles.form}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeey8Bowh5r4BkioVHIFHA67pykZITCvh3YNayQzMqt6Y54cQ/viewform?embedded=true"
              width="100%"
              height="100%"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </Layout>
  )
}
