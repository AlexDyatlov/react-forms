// до какого времени необходимо бронирование

export function bookingTimeDate(bookingTime, timestampStart) {
  const now = new Date();
  const bookedForNMinutes = new Date(bookingTime).getHours() * 60 + new Date(bookingTime).getMinutes();
  const timezoneOffset = now.getTimezoneOffset() * 60; // количество секунд с учетом часового пояса
  const timestamp = Math.floor((timestampStart + timezoneOffset) / 60000) * 60 + bookedForNMinutes * 60;

  return timestamp * 1000; // таймстамп соответствующий N минутам после текущего времени
}
