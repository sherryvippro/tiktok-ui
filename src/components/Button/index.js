import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    red,
    primary = false,
    outline = false,
    disable = false,
    rounded = false,
    text = false,
    small = false,
    large = false,
    children,
    leftIcon,
    rightIcon,
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
        red: red,
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
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Components>
    )
}

export default Button
