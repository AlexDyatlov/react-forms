import { useState } from 'react';
import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './calendar.module.scss';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [bookingTime, setBookingTime] = useState(new Date().setHours(0, 15));

  return (
    <div className={styles.calendar}>
      <div className={styles.calendar__picker}>
        <label className={styles.calendar__label} htmlFor="date-picker">Забронировать с:</label>
        <DatePicker
          selected={startDate}
          wrapperClassName={styles.calendar__field}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          locale={ru}
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="Время"
          dateFormat="d MMMM, yyyy HH:mm"
          id="date-picker"
          form="external-form"
        />
      </div>
      <div>
        <label className={styles.calendar__label} htmlFor="date-interval">Время бронирования:</label>
        <DatePicker
          selected={bookingTime}
          wrapperClassName={styles.calendar__field}
          onChange={(date) => setBookingTime(date)}
          showTimeSelect
          locale={ru}
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Время"
          dateFormat="HH:mm"
          id="date-interval"
          form="external-form"
        />
      </div>
    </div>
  );
};

export default Calendar;
