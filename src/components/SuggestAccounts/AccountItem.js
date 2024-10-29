import classNames from 'classnames/bind'
import styles from './SuggestAccounts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless'

import { avatar } from '~/assets/images'
import { Wrapper as PopperWrapper } from '../Popper'
import AccountPreview from './AccountPreview'

const cx = classNames.bind(styles)

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                render={renderPreview}
                placement="bottom"
                offset={[-25, 3]}
            >
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} src={avatar.avatar} alt="" />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>roses_are_rosie</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>

                        <p className={cx('name')}>Park Chaeyoung</p>
                    </div>
                </div>
            </Tippy>
        </div>
    )
}

export default AccountItem
