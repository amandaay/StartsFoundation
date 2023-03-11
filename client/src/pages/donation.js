import React from "react"
import DonationForm from "../components/DonationForm"
import Layout from "../components/Layout"
import * as styles from "../styles/donation.module.css"

export default function donation() {
  return (
    <Layout>
      <section className={styles.banner}>
        <div className={styles.container}>
          <div className={styles.firstSection}>
            <div className={styles.donationBox}>
              <div className={styles.donationForm}>
                <h1>Donate Now</h1>
                <div className={styles.subtitle}>
                  Join Starts Foundation to save and support the life of people
                  in Nepal.
                </div>
                <DonationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.secondSection}>
          <div className={styles.secondSectionContent}>
            <h1>AID FOR LIVING LIFE</h1>
            <p>
              In Nepal, unexpected disasters strip many people from the stable
              foundations through which they live and survive. These adversities
              devastate their physical and psychological well being as well as
              their means of sustenance.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.thirdSection}>
          <p>
            Our journey of Aid For Living Life began with the vision of
            providing expeditious aid to those struck by unexpected adverse
            circumstances in Nepal.
          </p>
          <p>
            In 2017, two people - one Nepali and one Norwegian, connected
            together in a time when floods were ravaging this nation and
            disrupting homes and lives of many. They had a vision to provide
            immediate needed support to those in need and so, the Aid For Living
            Life Project commenced by distributing relief packages to about 200
            affected families.
          </p>
          <p>
            We are going strong since, and have recently distributed about 900
            relief packages in the face of the COVID-19 pandemic.
          </p>
        </div>
      </section>
    </Layout>
  )
}
