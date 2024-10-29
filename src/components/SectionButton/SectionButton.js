import classNames from 'classnames/bind'
import styles from './SectionButton.module.scss'
import { Link } from 'react-router-dom'
import config from '~/config'
import Tippy from '@tippyjs/react'
import { Wrapper as PopperWrapper } from '../Popper'
import AccountPreview from '../SuggestAccounts/AccountPreview'

const cx = classNames.bind(styles)

function SectionButton({ avt, icon, children, onClick, ...passProps }) {
    const renderPreview = () => {
        return (
            <div tabIndex="-1">
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }
    return (
        <button className={cx('wrapper')} {...passProps}>
            {avt ? (
                <div className={cx('section-avatar')}>
                    <div>
                        <Tippy
                            interactive
                            delay={[800, 0]}
                            render={renderPreview}
                            placement="bottom-start"
                            offset={[-5, 20]}
                        >
                            <Link to={config.routes.profile}>
                                <img className={cx('img-avatar')} src={avt} alt="avatar" />
                            </Link>
                        </Tippy>
                    </div>
                    <span className={cx('icon-avatar')}>{icon}</span>
                </div>
            ) : (
                <div className={cx('section-button')}>
                    <span className={cx('icon')}>{icon}</span>
                    <strong className={cx('label')}>{children}</strong>
                </div>
            )}
        </button>
    )
}

export default SectionButton
