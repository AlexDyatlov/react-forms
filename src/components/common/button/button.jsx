import styles from './button.module.scss';

const getTagName = (tag) => {
  let value;

  switch (tag) {
  case 'btn':
    value = 'button';
    break;
  case 'link':
    value = 'a';
    break;
  default:
    value = 'div';
    break;
  };

  return value;
};

const Button = ({ className, children, tag, onClick, ...rest }) => {
  const TagName = getTagName(tag);

  return (
    <TagName
      className={`${className} ${styles.btn}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </TagName>
  );
};

export default Button;
