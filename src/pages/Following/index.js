import classNames from 'classnames/bind'
import styles from './Following.module.scss'
import Content from '~/layouts/components/Content/Content'
import { useState } from 'react'

const cx = classNames.bind(styles)

function Following() {
    const [isMuted, setIsMuted] = useState(true)

    const toggleMute = () => {
        setIsMuted((prev) => !prev)
    }

    return (
        <div className={cx('wrapper')}>
            <article className={cx('container')}>
                <Content isMuted={isMuted} toggleMute={toggleMute} />
            </article>
            <article className={cx('container')}>
                <Content isMuted={isMuted} toggleMute={toggleMute} />
            </article>
            <article className={cx('container')}>
                <Content isMuted={isMuted} toggleMute={toggleMute} />
            </article>
            <article className={cx('container')}>
                <Content isMuted={isMuted} toggleMute={toggleMute} />
            </article>
            <article className={cx('container')}>
                <Content isMuted={isMuted} toggleMute={toggleMute} />
            </article>
            <article className={cx('container')}>
                <Content isMuted={isMuted} toggleMute={toggleMute} />
            </article>
            <article className={cx('container')}>
                <Content isMuted={isMuted} toggleMute={toggleMute} />
            </article>
            <article className={cx('container')}>
                <Content isMuted={isMuted} toggleMute={toggleMute} />
            </article>
            <article className={cx('container')}>
                <Content isMuted={isMuted} toggleMute={toggleMute} />
            </article>
        </div>
    )
}

export default Following
