import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'
import config from '~/config'
import Menu from './Menu'
import MenuItem from './Menu/MenuItem'
import {
    FollowingActiveIcon,
    FollowingIcon,
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
} from '~/components/Icons'
import SuggestAccounts from '~/components/SuggestAccounts'

const cx = classNames.bind(styles)
const currentUser = true

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('scrollable')}>
                <div className={cx('content')}>
                    <Menu>
                        <MenuItem
                            tilte="For You"
                            to={config.routes.home}
                            icon={<HomeIcon />}
                            activeIcon={<HomeActiveIcon />}
                        />
                        <MenuItem
                            tilte="Following"
                            to={config.routes.following}
                            icon={<FollowingIcon />}
                            activeIcon={<FollowingActiveIcon />}
                        />
                        <MenuItem
                            tilte="Live"
                            to={config.routes.live}
                            icon={<LiveIcon />}
                            activeIcon={<LiveActiveIcon />}
                        />
                    </Menu>
                    {currentUser ? (
                        <div>
                            {/* <SuggestAccounts label="Suggest accounts" /> */}
                            <SuggestAccounts label="Following accounts" />
                        </div>
                    ) : (
                        <SuggestAccounts label="Following accounts" />
                    )}
                </div>
                <div className={cx('footer')}>
                    <h4 className={cx('header')}>Company</h4>
                    <h4 className={cx('header')}>Program</h4>
                    <h4 className={cx('header-last')}>Terms & Policies</h4>
                    <span className={cx('copyright')}>© 2024 TikTok</span>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
