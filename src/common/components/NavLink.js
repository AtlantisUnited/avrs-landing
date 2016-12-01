import React, { Component } from 'react'
import { Link } from 'react-router'
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'
import { routerShape } from 'react-router/lib/PropTypes'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    color: '#3F4246',
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontFamily: '"Ubuntu",sans-serif',
    fontWeight: 400,
    '&:hover': {
      opacity: 0.8,
    },
  },
  active: {
    color: '#0665AF',
  },
  light: {
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover': {
      color: '#ffffff',
    },
  },
})

class NavLink extends Component {
  static contextTypes = {
    router: routerShape,
  }

  isActive() {
    const { to } = this.props

    if (canUseDOM) {
      return window.location.pathname.indexOf(to) === 0
    }

    return false
  }

  render() {
    const { children, to, light } = this.props
    const active = this.isActive()

    return (
      <Link
        to={to}
        className={styles({ light, active })}
      >
        {children}
      </Link>
    )
  }
}


export default NavLink
