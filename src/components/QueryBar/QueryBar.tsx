import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import appStyles from '../../App.module.scss'
import styles from './QueryBar.module.scss'
import Icon from '../Icon/Icon'

interface Props {
    value: string,
    setValue: (value: string) => void
}

const QueryBar = ({ value, setValue }: Props) => {
    return (
        <div className={classNames(appStyles.horizontalFlex, appStyles.box, appStyles.alignCenter, styles.container)}>
            <Icon className={styles.icon} name='magnifying-glass'/>
            <input className={classNames(appStyles.input, styles.input)} value={value} onInput={event => setValue(event.currentTarget.value)} placeholder='חפש מתנדב...' />
        </div>
    )
}

export default QueryBar