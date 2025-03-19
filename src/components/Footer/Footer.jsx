import React, { Component } from 'react'
import styles from './Footer.module.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <h3>О нас</h3>
              <p>Магазин ексклюзивних шкіряних виробів представляє натуральну шкіру найвищої якості в поєднанні з елегантним дизайном. Наш асортимент вражає розкішними моделями: від вічних класичних рішень до сучасних трендів, які підкреслять стиль як чоловіків, так і жінок. Виберіть свій унікальний акцент у світі моди!</p>
            </div>
            <div className={styles.column}>
              <h3>Контакты</h3>
              <ul>
                <li><a href="mailto:info@company.com">info@company.com</a></li>
                <li><a href="tel:+1234567890">+1 234 567 890</a></li>
              </ul>
            </div>
            <div className={styles.column}>
              <h3>Социальные сети</h3>
              <ul>
                <li><a href="https://facebook.com">Facebook</a></li>
                <li><a href="https://twitter.com">Twitter</a></li>
                <li><a href="https://instagram.com">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
