import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import image from '@/assets/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import AccountItem from '@/components/AccountItem';
import Button from '@/components/Button';
import Menu from '@/components/Popper/Menu';
import {
    CoinIcon,
    KeyboardIcon,
    LanguageIcon,
    LogoutIcon,
    MessageIcon,
    ModeIcon,
    NotifyIcon,
    PlusIcon,
    ProfileIcon,
    QuestionIcon,
    SettingIcon,
    TagIcon,
} from '@/components/Icons';
import Image from '@/components/Image';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    const MENU_ITEM = [
        {
            icon: <LanguageIcon />,
            title: 'English',
            subMenu: {
                title: 'Language',
                data: [
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <QuestionIcon />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <KeyboardIcon />,
            title: 'Keyboard shotcuts',
        },
        {
            icon: <ModeIcon />,
            title: 'Dark mode',
        },
    ];

    const userMenu = [
        {
            icon: <ProfileIcon />,
            title: 'View Profile',
        },
        {
            icon: <TagIcon />,
            title: 'Favorites',
        },
        {
            icon: <CoinIcon />,
            title: 'Get Coins',
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
        },

        ...MENU_ITEM,
        {
            icon: <LogoutIcon />,
            title: 'Log out',
            separate: true,
        },
    ];

    setTimeout(() => {
        setSearchResult([]);
    }, 0);

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="logo" />
                </div>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>

                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search" spellCheck={false} />
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <span className={cx('span-spliter')}></span>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button black className={cx('upload-btn')}>
                                <PlusIcon />
                                Upload
                            </Button>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('action-header')} to="/messages">
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Notify" placement="bottom">
                                <button className={cx('action-header')}>
                                    <NotifyIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button black className={cx('upload-btn')}>
                                <PlusIcon />
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('avatar-header')}
                                src="https://cdn.popsww.com/blog/sites/2/2022/02/demon-slayer-nezuko.jpg"
                                alt="avatar"
                                placeholder={image.noAvatar}
                            />
                        ) : (
                            <>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
