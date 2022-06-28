import React from 'react'
import './Icon.module.scss'
import iconsVariables from '../../style/iconsVariables.scss'
import classNames from 'classnames'

export type IconName = keyof typeof iconsVariables

type Weight = 'thin' | 'light' | 'regular' | 'solid'

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
    name: IconName
    className?: string
    weight?: Weight
    rotateAnimation?: boolean
    rotate?: boolean
    flip?: 'horizontal' | 'vertical' | 'both'
}

const weightToClassName = (weight: Weight) =>
    `fa${weight[0]}`

const Icon = ({ name, weight = 'thin', className, rotateAnimation, rotate, flip, ...props }: Props) => {
    const computedClassName = classNames(
        `icon ${weightToClassName(weight)} fa-${name}`,
        rotateAnimation && 'fa-spin',
        rotate && ['fa-rotate-180', 'fa-flip-vertical'],
        flip && `fa-flip-${flip}`,
        className,
    )

    return <i className={computedClassName} {...props}/>
}

export default Icon