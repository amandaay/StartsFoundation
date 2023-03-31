import React, { useState } from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/Volunteer.module.css"

export default function Volunteer() {
  return (
    <Layout>
      <section className={styles.banner}>
        <div className={styles.container}>
          <div className={styles.form}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfU-6AxrgGSPOmDJX1dfPl1e1yiZW8ehC6dHljx9HWlIcr-rg/viewform?embedded=true"
              width="100%"
              height="100%"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              {" "}
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </Layout>
  )
}
