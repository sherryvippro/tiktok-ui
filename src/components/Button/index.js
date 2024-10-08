import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    primary = false,
    outline = false,
    disable = false,
    rounded = false,
    text = false,
    small = false,
    large = false,
    children,
    className,
    onClick,
    ...passProp
}) {
    let Components = 'button'
    const props = {
        onClick,
        ...passProp,
    }

    // Remove event listener when button is disabled
    if (disable) {
        delete props.onClick
    }

    // to: internal
    // href: external
    if (to) {
        props.to = to
        Components = Link
    } else if (href) {
        props.href = href
        Components = 'a'
    }

    const classes = cx('wrapper', {
        primary: primary,
        outline: outline,
        disable: disable,
        rounded: rounded,
        [className]: className,
        text: text,
        small: small,
        large: large,
    })

    return (
        <Components className={classes} {...props}>
            <span>{children}</span>
        </Components>
    )
}

export default Button
