import classNames from 'classnames/bind'
import styles from './SectionVideo.module.scss'
import { video } from '~/assets/videos'

const cx = classNames.bind(styles)

function Video() {
    return (
        <div className={cx('wrapper')}>
            <video className={cx('video')} src={video.karina} autoPlay loop />
        </div>
    )
}

export default Video
