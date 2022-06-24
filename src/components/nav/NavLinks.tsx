import React from 'react'
import type { To } from 'react-router'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'
import styles from './NavLinks.module.scss'
import navStyles from './Nav.module.scss'
import appStyles from '../../App.module.scss'
import Icon, { IconName } from '../Icon/Icon'

type Props = {
    links: { to: To, iconName: IconName }[]
}

const NavLinks = (props: Props) =>
    <div className={classnames(styles.links, appStyles.verticalFlex, appStyles.gap6)}>
        {props.links.map(({ to, iconName }) =>
            <NavLink to={to} className={classnames(navStyles.link, styles.link)} key={iconName}>
                <Icon name={iconName}/>
            </NavLink>)}
        <div className={styles.activeSign}/>
    </div>

export default NavLinks