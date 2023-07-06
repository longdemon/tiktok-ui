import { useState, forwardRef } from 'react';
import image from '@/assets/image';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, placeholder = image.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const hanldeError = () => {
        setFallback(placeholder);
    };
    return (
        <img
            className={cx('wrapper', className)}
            {...props}
            src={fallback || src}
            alt={alt}
            ref={ref}
            onError={hanldeError}
        />
    );
});

export default Image;
