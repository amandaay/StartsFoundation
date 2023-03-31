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
      <section className={styles.section}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeey8Bowh5r4BkioVHIFHA67pykZITCvh3YNayQzMqt6Y54cQ/viewform?embedded=true"
          width="640"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </section>
    </Layout>
  )
}
