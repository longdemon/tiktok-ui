import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/122b95d1cd9bd6f885598a039dc6b74d~c5_300x300.webp?x-expires=1688648400&x-signature=G5aDGdvIWTbnyBT9zv5HqxNi%2F8I%3D"
                alt=""
                className={cx('avatar')}
            />
            <div className="info">
                <h4 className={cx('username')}>
                    <p>hoa_2309</p>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('fullname')}>Ngô Ngọc Hòa</span>
            </div>
        </div>
    );
}

export default AccountItem;
