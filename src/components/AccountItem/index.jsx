import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/profile/${data.nickname}`} className={cx('wrapper')}>
            <Image src={data.avatar} alt="" className={cx('avatar')} />
            <div className="info">
                <h4 className={cx('username')}>
                    <p>{data.nickname}</p>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                </h4>
                <span className={cx('fullname')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
