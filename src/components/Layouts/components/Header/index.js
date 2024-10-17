import { Fragment, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleHalfStroke,
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import styles from './Header.module.scss'
import images from '~/assets/images/logo.svg'
import rosie from '~/assets/images/rosie.jpg'
import Image from '~/components/Images'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu'
import { MessageIcon, NotificationIcon, SearchIcon, UploadIcon } from '~/components/Icons'

const cx = classNames.bind(styles)
const currentUser = true

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleHalfStroke} />,
        title: 'Dark mode',
        children: {
            title: 'Dark mode',
            data: [
                {
                    type: 'auto',
                    title: 'Auto',
                },
                {
                    type: 'dark',
                    title: 'Dark mode',
                },
                {
                    type: 'light',
                    title: 'Light mode',
                },
            ],
        },
    },
]

function Header() {
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

    const handleMenuClick = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@roses_are_rosie',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images} alt="TikTok" height="42" width="118" />
                </div>
                <div>
                    <HeadlessTippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input placeholder="Search accounts and videos" spellCheck={false} />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />

                            <button className={cx('search-btn')}>
                                <SearchIcon />
                            </button>
                        </div>
                    </HeadlessTippy>
                </div>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button text leftIcon>
                                <UploadIcon content="Upload" />
                                Upload
                            </Button>
                            <Tippy content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon content="Message" />
                                </button>
                            </Tippy>
                            <Tippy content="Notification" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <NotificationIcon content="Notification" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Fragment>
                            <Button primary>Log in</Button>
                        </Fragment>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onClick={handleMenuClick}>
                        {currentUser ? (
                            <Image className={cx('user-avatar')} src={rosie} alt="Park Chaeyoung" fallback="" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header
