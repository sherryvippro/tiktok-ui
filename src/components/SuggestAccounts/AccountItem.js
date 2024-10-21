import classNames from 'classnames/bind'
import styles from './SuggestAccounts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import rosie from '~/assets/images/rosie.jpg'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img className={cx('avatar')} src={rosie} alt="" />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>roses_are_rosie</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>

                <p className={cx('name')}>Park Chaeyoung</p>
            </div>
        </div>
    )
}

export default AccountItem
