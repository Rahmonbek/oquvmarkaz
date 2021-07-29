import React from 'react'
import styles from '../../Css/ExampleApple.module.css'
import SecondBody from '../SecondBody'
import FirstBody from '../FirstBody'
export default function ExampleApple() {
    return (
        <div className={styles.ExampleApple}>
            <div className={styles.FirstBody}><FirstBody/></div>
            <div className={styles.SecondBody}><SecondBody/></div>
        </div>
    )
}
