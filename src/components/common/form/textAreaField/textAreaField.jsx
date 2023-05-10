import styles from './textAreaField.module.scss';

const TextAreaField = ({ name, value, placeholder, onChange }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className={styles.textarea}>
      <label className={styles.textarea__label} htmlFor={name}></label>
      <textarea
        className={styles.textarea__field}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextAreaField;
