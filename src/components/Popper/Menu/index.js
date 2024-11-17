import { useState } from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItem from './MenuItem'
import Header from './Header'
import styles from './Menu.modlue.scss'

const cx = classNames.bind(styles)

const defaultfn = () => {}

function Menu({ children, items = [], hideOnClick = false, onChange = defaultfn }) {
    const [history, setHistory] = useState([{ data: items }])
    const [title, setTitle] = useState('')
    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children // convert boolen

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children])
                            setTitle(item.title)
                        } else {
                            onChange(item)
                        }
                    }}
                />
            )
        })
    }

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1))
    }

    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1))
    }

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[20, 8]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title={title} onBack={handleBack} />}
                        <div className={cx('menu-scrollable')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    )
}

export default Menu
