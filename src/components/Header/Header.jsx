import React, { Component } from 'react'
import styles from './Header.module.scss';
import Logo from '../../images/logo.jpg';
export default class Header extends Component {
  render() {
    return (
      <div className={`${styles.header} ${styles.poster}`}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <a href="https://github.com/UlichIgor" target="_blank" rel="noopener noreferrer">
              <img src={Logo} alt="Product Logo" />
            </a>
          </div>
          <div className={styles.contacts}>
            {/* Добавьте здесь контактную информацию */}
            <button className={styles.phone}><a href='tel:380123456789' className={styles.links}>+380123456789</a></button>
            <button className={styles.email}><a href='mailto:example@gmail.com' className={styles.links}>example@gmail.com</a></button>
          </div>
        </div>
        <h1 className={styles.title}>Шкіряні гаманці</h1>
        <p className={styles.slogan}>Найкраща якість для вас</p>
        
      </div>
    )
  }
}
