import styles from './svgIcon.module.scss';

import spriteSvg from '../../../assets/sprite.svg';

const SvgIcon = ({ name, size, className }) => {
  return (
    <svg className={`${styles.icon} ${className}`} width={size} height={size}>
      <use xlinkHref={`${spriteSvg}#${name}`} />
    </svg>
  );
};

export default SvgIcon;
