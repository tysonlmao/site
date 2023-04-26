import React from "react";
import Nav from "../../components/nav";
import styles from "../../styles/Resume.module.css";

export default function resume() {
  return (
    <>
      <Nav />
      <div className={`${styles.root}`}>
        <div className={`${styles.header}`}>
          <p className={styles.sub}>ABOUT ME</p>
          <h2 className={styles.heading}>Tyson Gill</h2>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div>
                <h2 className={styles.headingsm}>Experience</h2>
                <div className={`${styles.content} ${styles.color}`}>
                  <h3 className={styles.sub}>Image Direct</h3>
                  <span className={styles.duration}>June 2022 - PRESENT</span>
                  <p className={styles.description}>
                    During my work experience at the company, I was humbled to
                    receive a job offer based on my potential and skillset. As a
                    developer, I honed my skills and learned how to create websites
                    with WordPress. Additionally, I picked up valuable techniques
                    along the way that have helped me to become a better developer.
                    I am grateful for the opportunity to have worked at the company,
                    as it played an instrumental role in my growth and development
                    as a professional.
                  </p>
                </div>
                <div className={`${styles.content} ${styles.color}`}>
                  <h3 className={styles.sub}>Certificate IV in IT (Web Development)</h3>
                  <span className={styles.duration}>September 2022 - PRESENT</span>
                  <p>Holmesglen Institute</p>
                </div>
              </div>
            </div>
            {/* col 2 */}
            <div className={`col-md-6 ${styles.side}`}>
              <div className={styles.content}>
                <h2 className={styles.headingsm}>Contact</h2>
                <p className={styles.description}>0434 258 778</p>
                <a href="mailto:tyson@tysonlmao.dev" className={styles.description}>tyson@tysonlmao.dev</a>
              </div>
              <div className={styles.content}>
                <h2 className={styles.headingsm}>Skills</h2>
                <p className={styles.description}>WordPress</p>
                <p className={styles.description}>React/Next.js</p>
                <p className={styles.description}>HTML & CSS</p>
                <p className={styles.description}>JavaScript</p>
              </div>
              <div>
                <h2 className={styles.headingsm}>Education</h2>
                <div className={`${styles.content}`}>
                  <p className={styles.sub}>Trafalgar High School</p>
                  <span className={styles.duration}>Janurary 2019 - November 2022</span>
                  <br />
                  <p className={styles.sub}>Holmesglen Institute</p>
                  <span className={styles.duration}>September 2022 - PRESENT</span>
                  <p>Certificate IV in IT (Web Development)</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
