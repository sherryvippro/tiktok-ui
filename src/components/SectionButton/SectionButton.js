import classNames from 'classnames/bind'
import styles from './SectionButton.module.scss'
import { Link } from 'react-router-dom'
import config from '~/config'
import Tippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '../Popper'
import AccountPreview from '../SuggestAccounts/AccountPreview'
import { forwardRef } from 'react'

const cx = classNames.bind(styles)

const SectionButton = forwardRef(
    (
        {
            avt,
            icon,
            onClickButton,
            onClickFollowButton,
            children,
            click,
            love,
            comment,
            favorite,
            share,
        },
        ref,
    ) => {
        const classes = cx('section-button', {
            love: love,
            comment: comment,
            favorite: favorite,
            share: share,
        })

        return (
            <button ref={ref} className={cx('wrapper')}>
                {avt ? (
                    <div className={cx('section-avatar')}>
                        <div>
                            <Tippy
                                interactive
                                delay={[700, 500]}
                                render={() => (
                                    <div tabIndex="-1">
                                        <PopperWrapper>
                                            <AccountPreview outline />
                                        </PopperWrapper>
                                    </div>
                                )}
                                placement="bottom-start"
                                offset={[-5, 20]}
                            >
                                <Link to={config.routes.profile}>
                                    <img className={cx('img-avatar')} src={avt} alt="avatar" />
                                </Link>
                            </Tippy>
                        </div>
                        <span
                            onClick={onClickFollowButton}
                            className={click ? cx('icon-check') : cx('icon-avatar')}
                        >
                            {children}
                        </span>
                    </div>
                ) : (
                    <div className={classes} onClick={onClickButton}>
                        <span className={cx('icon')}>{icon}</span>
                        <strong className={cx('label')}>{children}</strong>
                    </div>
                )}
            </button>
        )
    },
)

export default SectionButton
