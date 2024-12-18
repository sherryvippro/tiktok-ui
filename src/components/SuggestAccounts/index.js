import classNames from 'classnames/bind'
import styles from './SuggestAccounts.module.scss'
import AccountItem from './AccountItem'

const cx = classNames.bind(styles)

function SuggestAccount({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem label={label} />
            <AccountItem label={label} />
            <AccountItem label={label} />
            <AccountItem label={label} />

            <p className={cx('more-btn')}>See all</p>
        </div>
    )
}

export default SuggestAccount
