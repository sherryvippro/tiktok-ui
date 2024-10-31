import classNames from 'classnames/bind'
import styles from './SectionButton.module.scss'
import { Link } from 'react-router-dom'
import config from '~/config'
import Tippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '../Popper'
import AccountPreview from '../SuggestAccounts/AccountPreview'

const cx = classNames.bind(styles)

function SectionButton({
    avt,
    icon,
    onClickFollowButton,
    onClickLikeButton,
    children,
    click,
    like,
}) {
    const renderPreview = () => {
        return (
            <div tabIndex="-1">
                <PopperWrapper>
                    <AccountPreview outline />
                </PopperWrapper>
            </div>
        )
    }
    return (
        <button className={cx('wrapper')}>
            {avt ? (
                <div className={cx('section-avatar')}>
                    <div>
                        <Tippy
                            interactive
                            delay={[700, 500]}
                            render={renderPreview}
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
                <div onClick={onClickLikeButton} className={cx('section-button')}>
                    {like ? (
                        <span className={cx('active-icon')}>{icon}</span>
                    ) : (
                        <span className={cx('icon')}>{icon}</span>
                    )}

                    <strong className={cx('label')}>{children}</strong>
                </div>
            )}
        </button>
    )
}

export default SectionButton
