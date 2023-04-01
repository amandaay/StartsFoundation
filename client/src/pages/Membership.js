import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/Membership.module.css"
import { SEO } from "../components/SEO"

/**
 * SEO section
 */
const title = "Starts Foundation Member"
const content =
  "Become a member at Starts Foundation and support their humanitarian work"
export const Head = () => <SEO title={title} content={content} />

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
