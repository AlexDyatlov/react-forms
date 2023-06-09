import styles from './title.module.scss';

const getTagName = (tag) => {
  let value;

  switch (tag) {
  case 'h1':
    value = 'h1';
    break;
  case 'h2':
    value = 'h2';
    break;
  case 'h3':
    value = 'h3';
    break;
  default:
    value = 'div';
    break;
  };

  return value;
};

const Title = ({ className, children, tag }) => {
  const TagName = getTagName(tag);

  return <TagName className={`${className} ${styles.title}`}>{children}</TagName>;
};

export default Title;
