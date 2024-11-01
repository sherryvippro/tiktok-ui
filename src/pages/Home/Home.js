import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import Content from '~/layouts/components/Content/Content'

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('wrapper')}>
            <article className={cx('container')}>
                <Content />
            </article>
            <article className={cx('container')}>
                <Content />
            </article>
            <article className={cx('container')}>
                <Content />
            </article>
            <article className={cx('container')}>
                <Content />
            </article>
            <article className={cx('container')}>
                <Content />
            </article>
            <article className={cx('container')}>
                <Content />
            </article>
            <article className={cx('container')}>
                <Content />
            </article>
            <article className={cx('container')}>
                <Content />
            </article>
            <article className={cx('container')}>
                <Content />
            </article>
        </div>
    )
}

export default Home
