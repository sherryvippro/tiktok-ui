import classNames from 'classnames/bind'
import styles from './Following.module.scss'
import Content from '~/layouts/components/Content/Content'

const cx = classNames.bind(styles)

function Following() {
    return (
        <div className={cx('wrapper')}>
            <article className={cx('container')}>
                <Content followed={true} />
            </article>
            <article className={cx('container')}>
                <Content followed={true} />
            </article>
            <article className={cx('container')}>
                <Content followed={true} />
            </article>
            <article className={cx('container')}>
                <Content followed={true} />
            </article>
            <article className={cx('container')}>
                <Content followed={true} />
            </article>
        </div>
    )
}

export default Following
