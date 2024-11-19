import classNames from 'classnames/bind'
import style from './LogIn.module.scss'
import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode, faXmark } from '@fortawesome/free-solid-svg-icons'
import config from '~/config'
import { Link } from 'react-router-dom'

const cx = classNames.bind(style)

function LogIn({ onClick, onClickUserName }) {
    return (
        <div className={cx('center-wrapper')}>
            <div className={cx('wrapper')}>
                <div onClick={onClick} className={cx('modal-close')}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className={cx('login-container')}>
                    <div className={cx('box-container')}>
                        <h2 className={cx('title')}>Log in to TikTok</h2>
                        <div className={cx('home-container')}>
                            <div className={cx('container')}>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faQrcode} />
                                </div>
                                <div className={cx('text')}>Use QR Code</div>
                            </div>
                            <div className={cx('container')} onClick={onClickUserName}>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faQrcode} />
                                </div>
                                <div className={cx('text')}>Use phone / email / username</div>
                            </div>
                            <div className={cx('container')}>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faQrcode} />
                                </div>
                                <div className={cx('text')}>Continue with Facebook</div>
                            </div>
                            <div className={cx('container')}>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faQrcode} />
                                </div>
                                <div className={cx('text')}>Continue with Google</div>
                            </div>
                            <div className={cx('container')}>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faQrcode} />
                                </div>
                                <div className={cx('text')}>Continue with Twitter</div>
                            </div>
                            <div className={cx('container')}>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faQrcode} />
                                </div>
                                <div className={cx('text')}>Continue with LINE</div>
                            </div>
                            <div className={cx('container')}>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faQrcode} />
                                </div>
                                <div className={cx('text')}>Continue with KakaoTalk</div>
                            </div>
                            <div className={cx('container')}>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faQrcode} />
                                </div>
                                <div className={cx('text')}>Continue with Apple</div>
                            </div>
                        </div>
                        <div className={cx('agreement')}>
                            <p className={cx('text-agreement')}>
                                By continuing with an account located in{' '}
                                <Link className={cx('link')} to={config.routes.home}>
                                    Vietnam
                                </Link>
                                , you agree to our{' '}
                                <Link className={cx('link')} to={config.routes.home}>
                                    Terms of Service
                                </Link>
                                and acknowledge that you have read our{' '}
                                <Link className={cx('link')} to={config.routes.home}>
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('bottom-text')}>Don't have an account?</div>
                    <Button to={config.routes.home} red>
                        Sign up
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LogIn
