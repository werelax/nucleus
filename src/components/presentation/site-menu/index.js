import React, { Component } from 'react'
import classNames from 'classnames'
import ScrollAwareLateralMenu from './scroll-aware-lateral-menu'
import styles from './site-menu.module.css'

const MenuItem = (props) => (
  <li {...props} className={classNames(props.className, styles.menuItem)}>{props.children}</li>
)

const MenuTitle = (props) => (
  <li {...props} className={classNames(props.className, styles.menuTitle)}>{props.children}</li>
)

class SiteMenu extends Component {
  render() {
    return (
      <ScrollAwareLateralMenu className={styles.siteMenu}>
        <MenuTitle>Intro</MenuTitle>
        <MenuItem sectionid='block-1'>Section 1</MenuItem>
        <MenuItem sectionid='block-2'>Section 2</MenuItem>
        <MenuTitle>Product</MenuTitle>
        <MenuItem sectionid='block-3'>Section 3</MenuItem>
        <MenuTitle>Contact</MenuTitle>
        <MenuItem sectionid='block-4'>Section 4</MenuItem>
      </ScrollAwareLateralMenu>
    )
  }
}

export default SiteMenu
