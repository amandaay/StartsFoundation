import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/Volunteer.module.css"
import { SEO } from "../components/SEO"

/**
 * SEO section
 */
const title = "Starts Foundation Volunteer"
const content =
  "Become a Volunteer at Starts Foundation and support their humanitarian work"
export const Head = () => <SEO title={title} content={content} />
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
