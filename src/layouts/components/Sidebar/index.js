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

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem tilte="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    tilte="Following"
                    to={config.routes.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingActiveIcon />}
                />
                <MenuItem tilte="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestAccounts label="Suggest accounts" />
            <SuggestAccounts label="Following accounts" />
        </aside>
    )
}

export default Sidebar
