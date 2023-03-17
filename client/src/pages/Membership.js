import React, { useState } from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/Membership.module.css"

export default function Membership() {
  return (
    <Layout>
      <section className={styles.section}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeey8Bowh5r4BkioVHIFHA67pykZITCvh3YNayQzMqt6Y54cQ/viewform?embedded=true"
          width="640"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </section>
    </Layout>
  )
}
