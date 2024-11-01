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

function Content({ followed = false }) {
    const [click, setClick] = useState(false)
    const [like, setLike] = useState(false)
    const [comment, setComment] = useState(false)
    const [favorite, setFavorite] = useState(false)

    const handleOnClickFollowButton = () => {
        setClick((prev) => !prev)
    }

    const handleOnClickLikeButton = () => {
        setLike((prev) => !prev)
    }

    const handleOnClickCommentButton = () => {
        setComment((prev) => !prev)
    }

    const handleOnClickFavoriteButton = () => {
        setFavorite((prev) => !prev)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-video')}>
                <Video />
            </div>

            <div className={cx('wrapper-icon')}>
                {followed ? (
                    <SectionButton click={followed} avt={avatar.avatar}>
                        <FontAwesomeIcon icon={faCheck} />
                    </SectionButton>
                ) : (
                    <SectionButton
                        onClickFollowButton={handleOnClickFollowButton}
                        click={click}
                        avt={avatar.avatar}
                    >
                        {click ? (
                            <FontAwesomeIcon icon={faCheck} />
                        ) : (
                            <FontAwesomeIcon icon={faPlus} />
                        )}
                    </SectionButton>
                )}
                {like ? (
                    <SectionButton
                        onClickButton={handleOnClickLikeButton}
                        love
                        icon={<FontAwesomeIcon icon={faHeart} />}
                    >
                        144.4K
                    </SectionButton>
                ) : (
                    <SectionButton
                        onClickButton={handleOnClickLikeButton}
                        icon={<FontAwesomeIcon icon={faHeart} />}
                    >
                        144.4K
                    </SectionButton>
                )}
                {comment ? (
                    <SectionButton
                        onClickButton={handleOnClickCommentButton}
                        comment
                        icon={<FontAwesomeIcon icon={faCommentDots} />}
                    >
                        905
                    </SectionButton>
                ) : (
                    <SectionButton
                        onClickButton={handleOnClickCommentButton}
                        icon={<FontAwesomeIcon icon={faCommentDots} />}
                    >
                        905
                    </SectionButton>
                )}
                {favorite ? (
                    <SectionButton
                        onClickButton={handleOnClickFavoriteButton}
                        favorite
                        icon={<FontAwesomeIcon icon={faBookmark} />}
                    >
                        1296
                    </SectionButton>
                ) : (
                    <SectionButton
                        onClickButton={handleOnClickFavoriteButton}
                        icon={<FontAwesomeIcon icon={faBookmark} />}
                    >
                        1296
                    </SectionButton>
                )}
                <SectionButton icon={<FontAwesomeIcon icon={faShare} />}>50.4K</SectionButton>
            </div>
        </div>
    )
}

export default Content
