import React, { Component } from 'react'

import styles from './styles.css'

class Nav extends Component {
  render () {
    return (
      <div className={styles.container}>
        <span className={styles.me}>
          Jonathan Navarrete<br />
          <span className={styles.position}>Frontend Engineer</span>
        </span>
        <ul className={styles.social}>
          <li>
            <a href='https://www.linkedin.com/in/jonatns' target='_blank'>
              <i className='fab fa-linkedin fa-2x' />
            </a>
          </li>
          <li>
            <a href='https://github.com/jonatns' target='_blank'>
              <i className='fab fa-github fa-2x' />
            </a>
          </li>
          <li>
            <a href='http://bit.ly/2jU1DA9' target='_blank'>
              <i className='fab fa-twitter fa-2x' />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav
