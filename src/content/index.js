import React, { Component } from 'react'
import MobileDetect from 'mobile-detect'

const md = new MobileDetect(window.navigator.userAgent);

import Modal from '../modal'

import styles from './styles.css'

class Content extends Component {
  state = {
    modalOpen: false,
    currentModal: ''
  }

  handleItemClick = (e, currentModal) => {
    e.preventDefault()

    this.setState({ modalOpen: true, currentModal })
  }

  handleGoBack = () => {
    this.setState({ modalOpen: false, currentModal: '' })
  }

  render () {
    let { container, content, item, text, textTransition } = styles

    setTimeout(() => {
      text = `${text} ${textTransition}`
    }, 1000);

    return (
      <div className={container}>
        <div className={content}>
          <a
            href=''
            onClick={(e) => this.handleItemClick(e, 'about-me')}
            className={item}
          >
            <img src={require('../assets/images/my-pic.jpg')} />
            <span className={text}>About me</span>
          </a>
          <a
            href=''
            onClick={(e) => this.handleItemClick(e, 'education')}
            className={item}
          >
            <img src={require('../assets/images/education.jpeg')} />
            <span className={text}>Education</span>
          </a>
          <a
            href=''
            onClick={(e) => this.handleItemClick(e, 'experience')}
            className={item}
          >
            <img src={require('../assets/images/experience.jpeg')} />
            <span className={text}>Experience</span>
          </a>
          <a
            href=''
            onClick={(e) => this.handleItemClick(e, 'skills')}
            className={item}
          >
            <img src={require('../assets/images/skills.jpeg')} />
            <span className={text}>Skills</span>
          </a>
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          currentModal={this.state.currentModal}
          goBack={this.handleGoBack}
        />
      </div>
    )
  }
}

export default Content
