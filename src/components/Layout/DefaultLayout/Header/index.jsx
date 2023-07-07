import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import image from '@/assets/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
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
import Search from '../../Search';

const cx = classNames.bind(styles);

function Header() {
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

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="logo" />
                </div>
                <Search />
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
