import classNames from 'classnames/bind'
import styles from './Content.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import {
    CopyLinkIcon,
    EmbedIcon,
    RepostIcon,
    SendToFriendsIcon,
    ShareToFacebookIcon,
} from '~/components/Icons'

const cx = classNames.bind(styles)

function ShareMenu({ hanldeMoreOnClick }) {
    return (
        <div className={cx('tippy-wrapper')} tabIndex="-1">
            <ul className={cx('menu-wrapper')}>
                <li className={cx('menu-item')}>
                    <div className={cx('tippy-icon', 'circle-icon')}>
                        <RepostIcon />
                    </div>
                    <span className={cx('tippy-text')}>Repost</span>
                </li>
                <li className={cx('menu-item')}>
                    <div className={cx('tippy-icon')}>
                        <EmbedIcon />
                    </div>
                    <span className={cx('tippy-text')}>Embed</span>
                </li>
                <li className={cx('menu-item')}>
                    <div className={cx('tippy-icon')}>
                        <SendToFriendsIcon />
                    </div>
                    <span className={cx('tippy-text')}>Send to friends</span>
                </li>
                <li className={cx('menu-item')}>
                    <div className={cx('tippy-icon')}>
                        <ShareToFacebookIcon />
                    </div>
                    <span className={cx('tippy-text')}>Share to Facebook</span>
                </li>
                <li className={cx('menu-item')}>
                    <div className={cx('tippy-icon')}>
                        <CopyLinkIcon />
                    </div>
                    <span className={cx('tippy-text')}>Copy link</span>
                </li>
                <li className={cx('menu-item', 'arrow-icon')} onClick={hanldeMoreOnClick}>
                    <div className={cx('tippy-icon')}>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ShareMenu
