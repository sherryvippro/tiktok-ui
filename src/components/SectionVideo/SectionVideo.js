import { useEffect, useRef, useState } from 'react'
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

function Video({ isMuted, toggleMute }) {
    const [clickOnVideo, setClickOnVideo] = useState(false)
    const [more, setMore] = useState(false)
    const [inView, setInView] = useState(false)

    const videoRef = useRef()

    const description =
        '48 hours in Paris Paris Paris Paris Paris Paris Paris Paris Paris Paris Paris Paris Paris'
    const minLengthDescription = 60

    useEffect(() => {
        const currentVideo = videoRef.current
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries
                // check video in view
                setInView(entry.isIntersecting)
            },
            {
                // video in view 50%
                threshold: 0.5,
            },
        )

        // video element tracking
        if (currentVideo) {
            observer.observe(currentVideo)
        }

        // cleanup
        return () => {
            if (currentVideo) {
                observer.unobserve(currentVideo)
            }
        }
    }, [])

    useEffect(() => {
        if (inView) {
            if (isMuted) {
                videoRef.current.muted = true
                console.log('muted')
            } else {
                videoRef.current.muted = false
                console.log('unmuted')
            }
            videoRef.current.play()
        } else {
            videoRef.current.pause()
            videoRef.current.currentTime = 0
        }
    }, [inView, isMuted])

    const handleOnClickVideo = () => {
        setClickOnVideo((prev) => !prev)

        if (clickOnVideo) {
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }
    }

    const handleOnClickMoreButton = () => {
        setMore((prev) => !prev)
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
                onClick={handleOnClickVideo}
                className={cx('video')}
                src={video.karina}
                autoPlay
                loop
                muted={isMuted}
            />
            <div className={cx('media-icon')}>
                <div className={cx('icon')}>
                    <div className={cx('volume-icon')} onClick={toggleMute}>
                        {!isMuted ? (
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
                            <h1 className={cx('description')}>
                                {!more && description.length > minLengthDescription
                                    ? description.substring(0, 50).concat('...')
                                    : description}
                            </h1>
                        </div>
                        <button className={cx('more-btn')} onClick={handleOnClickMoreButton}>
                            {more ? 'less' : 'more'}
                        </button>
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
