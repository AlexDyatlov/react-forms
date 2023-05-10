import { useState } from 'react';

import styles from './bookingForm.module.scss';

import { generateId } from '../../../utils/generateId';

import Button from '../../common/button/button';
import CustomSelect from '../../common/customSelect/customSelect';
import TextAreaField from '../../common/form/textAreaField/textAreaField';
import Calendar from '../../common/calendar/calendar';

const tower = [
  { value: 'А', label: 'А' },
  { value: 'Б', label: 'Б' }
];
const floors = [];
const rooms = [];
const now = new Date();
const fifteenMinutesLater = new Date(now.getTime() + (15 * 60 * 1000)).getTime();
const obj = {
  id: generateId(),
  tower: 'А',
  floor: 3,
  room: 1,
  started_at: now.getTime(),
  booking_at: fifteenMinutesLater,
  message: ''
};

for (let i = 3; i <= 27; i++) {
  floors.push({ value: i, label: i });
}

for (let i = 1; i <= 10; i++) {
  rooms.push({ value: i, label: i });
}

const BookingForm = () => {
  const [data, setData] = useState(obj);

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const handlerReservingRoom = (e) => {
    e.preventDefault();

    const payload = {
      ...data,
      id: generateId()
    };

    console.log('data', payload);
  };

  return (
    <div className={styles.form}>
      <form className={styles.form__wrapper} onSubmit={handlerReservingRoom}>
        <div className={styles.form__info}>
          <CustomSelect
            className={styles.form__select}
            options={tower}
            name="tower"
            defaultLabel={`Башня ${data.tower}`}
            onChange={handleChange}
          />
          <CustomSelect
            className={styles.form__select}
            options={floors}
            name="floor"
            defaultLabel={`Этаж ${data.floor}`}
            onChange={handleChange}
          />
          <CustomSelect
            className={styles.form__select}
            options={rooms}
            name="room"
            defaultLabel={`Комната ${data.room}`}
            onChange={handleChange}
          />
          <TextAreaField
            value={data.message}
            name="message"
            placeholder="Оставьте комментарий"
            onChange={handleChange}
          />
        </div>
        <div className={styles.form__inner}>
          <Calendar
            name="started_at"
            nameBooking="booking_at"
            onChange={handleChange}
          />
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
            onClick={() => setData(obj)}
          >
            Очистить
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
