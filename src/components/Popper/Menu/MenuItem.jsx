import Button from '@/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button className={cx('menu-item')} to={data.to}>
            <img src={data.icon} alt="" />
            {data.title}
        </Button>
    );
}

export default MenuItem;