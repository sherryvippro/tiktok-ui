import { Fragment, useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleHalfStroke,
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { MessageIcon, NotificationIcon, UploadIcon } from '~/components/Icons'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'
import images from '~/assets/images/logo.svg'
import rosie from '~/assets/images/rosie.jpg'
import Image from '~/components/Images'
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu'
import Search from '../Search'
import config from '~/config'
import LogIn from '~/components/LogIn/LogIn'
import ReactModal from 'react-modal'

const cx = classNames.bind(styles)

// This is needed so screen readers don't see main content when modal is opened
ReactModal.setAppElement('#root')

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
    const [currentUser, setCurrentUser] = useState(false)
    const [isModalLoginOpen, setIsModalLoginOpen] = useState(false)
    const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false)

    // useEffect(() => {
    //     if (currentUser) {
    //         console.log('User is logged in')
    //     } else {
    //         console.log('User is logged out')
    //     }
    // }, [currentUser])

    const handleMenuClick = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break
            case 'logout':
                handleOpenModalLogout()
                break
            default:
        }
    }

    const handleOpenModalLogin = () => {
        setIsModalLoginOpen(true)
    }

    const handleCloseModalLogin = () => {
        setIsModalLoginOpen(false)
    }

    const handleOpenModalLogout = () => {
        setIsModalLogoutOpen(true)
    }

    const hanldeOnClickUserName = () => {
        setCurrentUser((prev) => !prev)
        setIsModalLoginOpen(false)
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
            // to: '/logout',
            separate: true,
            type: 'logout',
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images} alt="TikTok" height="42" width="118" />
                </Link>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button text leftIcon={<UploadIcon content="upload" />}>
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
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Fragment>
                            <Button primary onClick={handleOpenModalLogin}>
                                Log in
                            </Button>
                        </Fragment>
                    )}
                    <Menu items={!currentUser ? userMenu : MENU_ITEMS} onClick={handleMenuClick}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src={rosie}
                                alt="Park Chaeyoung"
                                fallback=""
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
                <ReactModal
                    isOpen={isModalLoginOpen}
                    contentLabel="Log in to TikTok"
                    className={cx('modal')}
                    overlayClassName={cx('overlay')}
                >
                    <LogIn
                        onClick={handleCloseModalLogin}
                        onClickUserName={hanldeOnClickUserName}
                    />
                </ReactModal>
                <ReactModal
                    isOpen={isModalLogoutOpen}
                    contentLabel="Logout confirmation"
                    className={cx('modal')}
                    overlayClassName={'overlay'}
                >
                    <div className={cx('logout-confirm-container')}>
                        <div>Are you sure you want to log out?</div>
                        <div className={cx('button-wrapper')}>
                            <Button text>Cancel</Button>
                            <Button outline>Log out</Button>
                        </div>
                    </div>
                </ReactModal>
            </div>
        </header>
    )
}

export default Header
