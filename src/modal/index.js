import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import styles from './styles.css'

class Modal extends Component {
  handleBack = (e) => {
    e.preventDefault()
    this.props.goBack()
  }

  render () {
    let backgroundColor = '#9E9E9E'
    let title = '';
    let body = '';

    switch (this.props.currentModal) {
      case 'about-me': {
        title = 'About Me 🤓';
        body = 'Hello! My name is Jonathan. If you\'re reading this, you\'re awesome! I\'m a coffee lover, entrepreneur, nerd, classical guitarist, cyclist, music producer, phew... that\'s all. Oh and I 💙 React and React Native.';
        backgroundColor = '#4CAF50'
        break;
      }
      case 'education': {
        title = 'Education 🎓';
        body = 'Insert body here'
        backgroundColor = '#f44336'
        break;
      }
      case 'experience': {
        title = 'Insert title here';
        body = 'Insert body here'
        backgroundColor = '#2196F3'
        break;
      }
      case 'skills': {
        title = 'Insert title here';
        body = 'Insert body here'
        backgroundColor = '#FFC107'
        break;
      }
      default: {
        backgroundColor = '#9E9E9E'
        body = 'Insert body here'
        break;
      }
    }

    return ReactDOM.createPortal(
      <div className={[styles.container, this.props.isOpen && styles.active].join(' ')} style={{ backgroundColor }}>
        <a href='' onClick={this.handleBack} className={styles.back}>
          <i className="fa fa-times fa-3x"></i>
        </a>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>{title}</div>
          </div>
          <div className={styles.body}>
            <p>{body}</p>
          </div>
        </div>
      </div>,
      document.body,
    );
  }
}

export default Modal
