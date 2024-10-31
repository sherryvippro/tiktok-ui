import classNames from 'classnames/bind'
import styles from './Content.module.scss'
import Video from '~/components/SectionVideo/SectionVideo'
import SectionButton from '~/components/SectionButton/SectionButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBookmark,
    faCheck,
    faCommentDots,
    faHeart,
    faPlus,
    faShare,
} from '@fortawesome/free-solid-svg-icons'
import { avatar } from '~/assets/images'
import { useState } from 'react'

const cx = classNames.bind(styles)

function Content() {
    const [click, setClick] = useState(false)
    const [like, setLike] = useState(false)

    const handleOnClickFollowButton = () => {
        setClick(!click)
    }

    const handleOnClickLikeButton = () => {
        setLike(!like)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-video')}>
                <Video />
            </div>
            <div className={cx('wrapper-icon')}>
                <SectionButton
                    onClickFollowButton={handleOnClickFollowButton}
                    click={click}
                    avt={avatar.avatar}
                >
                    {click ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faPlus} />}
                </SectionButton>
                <SectionButton
                    onClickLikeButton={handleOnClickLikeButton}
                    like={like}
                    icon={<FontAwesomeIcon icon={faHeart} />}
                >
                    144.4K
                </SectionButton>
                <SectionButton icon={<FontAwesomeIcon icon={faCommentDots} />}>905</SectionButton>
                <SectionButton icon={<FontAwesomeIcon icon={faBookmark} />}>1296</SectionButton>
                <SectionButton icon={<FontAwesomeIcon icon={faShare} />}>50.4K</SectionButton>
            </div>
        </div>
    )
}

export default Content
