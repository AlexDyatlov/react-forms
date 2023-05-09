import styles from './textAreaField.module.scss';

const TextAreaField = ({ name, value, placeholder }) => {
  return (
    <div className={styles.textarea}>
      <label className={styles.textarea__label}>
        <textarea
          className={styles.textarea__field}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
        ></textarea>
      </label>
    </div>
  );
};

export default TextAreaField;
