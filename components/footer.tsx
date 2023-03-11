import styles from "../styles/Footer.module.css"

export default function Footer() {
    return(
        <>

            <div className={`${styles.color} container`}>
                <div className="row">
                    <div className="col-md-6 text-left">
                        <p className={`${styles.text} text-center`}>Copyright &copy; 2023 <span className={styles.other}>tysonlmao</span></p>
                </div>
                <div className="col-md-6 text-right">
                        <p className={`${styles.text} text-center`}>Engineered by   <i>image</i><span className={styles.other}>Direct</span></p>
                    </div>
                </div>
            </div>
        </>

        
    )
}