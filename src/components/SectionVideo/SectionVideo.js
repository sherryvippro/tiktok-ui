import { useRef, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './SectionVideo.module.scss'
import Tippy from '@tippyjs/react/headless'

import { video } from '~/assets/videos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAnglesUp,
    faEllipsis,
    faHeartBroken,
    faMusic,
    faVolumeHigh,
    faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import config from '~/config'
import { faFlag } from '@fortawesome/free-regular-svg-icons'

const cx = classNames.bind(styles)

function Video() {
    const [clickOnVideo, setClickOnVideo] = useState(false)
    const [clickOnIcon, setClickOnIcon] = useState(true)
    const [isOverflowed, setIsOverflowed] = useState(false)
    const [isExpanded, setExpanded] = useState(false)

    const videoRef = useRef()
    const descriptionRef = useRef()

    const handleOnClick = () => {
        setClickOnVideo(!clickOnVideo)

        if (clickOnVideo) {
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }
    }

    const handleOnClickButton = () => {
        setExpanded(!isExpanded)
    }

    const handleOnClickIcon = () => {
        setClickOnIcon(!clickOnIcon)
        if (clickOnIcon) {
            videoRef.current.muted = true
            console.log('muted')
        } else {
            videoRef.current.muted = false
            console.log('unmuted')
        }
    }

    const renderMoreButton = () => {
        return (
            <ul className={cx('menu-wrapper')}>
                <li className={cx('menu-item')}>
                    <div className={cx('tippy-icon')}>
                        <FontAwesomeIcon icon={faAnglesUp} />
                    </div>
                    <span className={cx('tippy-text')}>Auto scroll</span>
                </li>
                <li className={cx('menu-item')}>
                    <div className={cx('tippy-icon')}>
                        <FontAwesomeIcon icon={faHeartBroken} />
                    </div>
                    <span className={cx('tippy-text')}>Not interested</span>
                </li>
                <li className={cx('menu-item')}>
                    <div className={cx('tippy-icon')}>
                        <FontAwesomeIcon icon={faFlag} />
                    </div>
                    <span className={cx('tippy-text')}>Report</span>
                </li>
            </ul>
        )
    }

    return (
        <div className={cx('wrapper')}>
            <video
                ref={videoRef}
                onClick={handleOnClick}
                className={cx('video')}
                src={video.karina}
                autoPlay
                loop
            />
            <div className={cx('media-icon')}>
                <div className={cx('icon')}>
                    <div className={cx('volume-icon')} onClick={handleOnClickIcon}>
                        {clickOnIcon ? (
                            <FontAwesomeIcon icon={faVolumeHigh} />
                        ) : (
                            <FontAwesomeIcon icon={faVolumeXmark} />
                        )}
                    </div>
                </div>
                <div className={cx('icon')}>
                    <div className={cx('more-icon')}>
                        <Tippy
                            interactive
                            delay={[0, 0]}
                            render={renderMoreButton}
                            placement="right"
                            offset={[44, 30]}
                        >
                            <FontAwesomeIcon icon={faEllipsis} />
                        </Tippy>
                    </div>
                </div>
            </div>
            <div className={cx('media-info')}>
                <div className={cx('tag-container')}></div>
                <div className={cx('author-wrapper')}>
                    <div className={cx('author-container')}>
                        <Link to={config.routes.profile} className={cx('author-anchor')}>
                            <h3 className={cx('author-title')}>roses_are_rosie</h3>
                            <span> · </span>
                            <span className={cx('author-sub-title')}>20h ago</span>
                        </Link>
                    </div>
                </div>
                <div className={cx('description-wrapper')}>
                    <div className={cx('description-container')}>
                        <div className={cx('multiline-text')}>
                            <h1
                                ref={descriptionRef}
                                className={cx('description', { expand: isExpanded })}
                            >
                                48 hours in paris paris paris paris paris paris paris paris paris
                                paris
                            </h1>
                        </div>
                        {!isOverflowed && (
                            <button className={cx('more-btn')} onClick={handleOnClickButton}>
                                {isExpanded ? 'less' : 'more'}
                            </button>
                        )}
                    </div>
                </div>
                <div className={cx('music-wrapper')}>
                    <h4 className={cx('video-music')}>
                        <Link to="/" className={cx('music-link')}>
                            <div className={cx('music-icon')}>
                                <FontAwesomeIcon icon={faMusic} />
                            </div>
                            <div className={cx('music-title')}>
                                Sweet Strawberry (Live) - eas Ratta
                            </div>
                        </Link>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Video
