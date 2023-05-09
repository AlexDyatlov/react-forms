import styles from './bookingForm.module.scss';

import Button from '../../common/button/button';
import CustomSelect from '../../common/customSelect/customSelect';
import TextAreaField from '../../common/form/textAreaField/textAreaField';
import Calendar from '../../common/calendar/calendar';

const options = [
  { value: '1', label: '1' },
  { value: '2', label: '2' }
];

const handleChangeStatus = (value) => {
  console.log('value', value);
};

const handlerReservingRoom = () => {};

const BookingForm = () => {
  return (
    <div className={styles.form}>
      <form className={styles.form__wrapper} onSubmit={handlerReservingRoom}>
        <div className={styles.form__info}>
          <CustomSelect
            className={styles.form__select}
            options={options}
            defaultLabel={'Label'}
            onChange={handleChangeStatus}
          />
          <CustomSelect
            className={styles.form__select}
            options={options}
            defaultLabel={'Label'}
            onChange={handleChangeStatus}
          />
          <CustomSelect
            className={styles.form__select}
            options={options}
            defaultLabel={'Label'}
            onChange={handleChangeStatus}
          />
          <TextAreaField placeholder="Оставьте комментарий" />
        </div>
        <div className={styles.form__inner}>
          <Calendar />
          <Button
            className={`${styles.form__btn} ${styles.form__btn_send}`}
            tag="btn"
            type="submit"
          >
            Отправить
          </Button>
          <Button
            className={`${styles.form__btn} ${styles.form__btn_clear}`}
            tag="btn"
            type="button"
          >
            Очистить
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
