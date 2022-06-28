import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { NavLink, useLocation } from 'react-router-dom'
import NavLinks from './NavLinks'
import appStyles from '../../App.module.scss'
import styles from './Nav.module.scss'

const user = {
    sub: 'auth0|6280b70b0738e60068bc92e1',
    name: 'John Doe',
    nickname: 'Johnny',
    email: 'john@doe.com',
    email_verified: true,
    picture: 'https://picsum.photos/200',
    updated_at: '2022-05-17T15:10:12.513Z',
}

const Nav = () => {
    const location = useLocation()
    const [pathes, setPathes] = useState<Map<string, string>>(new Map)

    useEffect(() => {
        const newPathes = new Map(pathes)

        newPathes.set(location.pathname, location.pathname + location.search)

        setPathes(newPathes)
    }, [location.search])

    const getPath = (keyOrDefault: string) =>
        pathes.get(keyOrDefault) ?? keyOrDefault

    if (!user) {
        return <></>
    }

    return (
        <>
            <nav className={classNames(appStyles.box, appStyles.verticalFlex, appStyles.shadowed)}>
                {/* Logo */}
                <div className={classNames(appStyles.flexGrow2, appStyles.verticalFlex, appStyles.gap6)}>
                    <NavLink to={getPath('/')}>
                        <img src='/logo512.png' className={classNames(styles.link, styles.logoLink)}/>
                    </NavLink>
                    {/* Main links */}
                    <NavLinks links={[
                        { to: getPath('/'), iconName: 'person' },
                        { to: getPath('/volunteer'), iconName: 'heart' },
                    ]}/>
                </div>

                {/* Profile & settings links */}
                <div className={classNames(appStyles.verticalFlex, appStyles.flexGrow4, appStyles.gap6, appStyles.justifyEnd)}>
                    <NavLinks links={[
                        { to: getPath('/settings'), iconName: 'cog' },
                    ]}/>
                    <div className={styles.user}>
                        <img src={user.picture}/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav