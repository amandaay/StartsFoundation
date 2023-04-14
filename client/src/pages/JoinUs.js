import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/JoinUs.module.css"
import { Link } from "gatsby"
import { SEO } from "../components/SEO"

/**
 * SEO section
 */
const title = "Join Starts Foundation"
const content = "Join Starts Foundation and support their humanitarian work"
const keywords =
  "starts foundation, Starts Foundation, Nepal, NGO Nepal, Nonprofit Nepal, Nonprofit organization in Nepal, support starts foundation, starts foundation nepal, Starts Foundation Nepal, NGO Nepal, charity, humanitarian, philanthropy, community service, community service in nepal, Kamal Bhattarai, Aid for Living, Project Canvas,www.startsfoundation.org, startsfoundation.org, A waiting smile"
export const Head = () => (
  <SEO title={title} content={content} keywords={keywords} />
)

export default function JoinUs() {
  return (
    <Layout>
      <section className={styles.banner}>
        <div className={styles.container}>
          <div className={styles.header}>Join Us</div>
          <div className={styles.sections}>
            <div className={styles.subSection}>
              <div className={styles.leftSection}>
                <label className={styles.label}>General Membership</label>
                <Link to="/Membership">
                  <button className={styles.button}>Join Now</button>
                </Link>
              </div>
              <div className={styles.rightSection}>
                Anim voluptate minim adipisicing velit irure deserunt fugiat
                velit culpa id reprehenderit duis ea elit. Culpa pariatur qui
                est tempor quis mollit Lorem ullamco elit mollit ipsum ea. Enim
                elit non sit mollit veniam laboris. Consectetur exercitation id
                labore minim. Do ipsum proident officia irure dolore mollit
                ipsum elit non velit exercitation et pariatur. Irure minim minim
                aliquip elit. Aliqua mollit sint occaecat esse Lorem mollit
                pariatur adipisicing.
              </div>
            </div>
            <div className={styles.subSection}>
              <div className={styles.leftSection}>
                <label className={styles.label}>Volunteer</label>
                <Link to="/Volunteer">
                  <button className={styles.button}>Join Now</button>
                </Link>
              </div>
              <div className={styles.rightSection}>
                Anim voluptate minim adipisicing velit irure deserunt fugiat
                velit culpa id reprehenderit duis ea elit. Culpa pariatur qui
                est tempor quis mollit Lorem ullamco elit mollit ipsum ea. Enim
                elit non sit mollit veniam laboris. Consectetur exercitation id
                labore minim. Do ipsum proident officia irure dolore mollit
                ipsum elit non velit exercitation et pariatur. Irure minim minim
                aliquip elit. Aliqua mollit sint occaecat esse Lorem mollit
                pariatur adipisicing.
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
