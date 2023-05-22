import React, { useState } from 'react';
import DatePicker from '@react-native-community/datetimepicker';

export default function MyDatePicker({setTime, color}) {
  const [date, setDate] = useState(new Date());
  
  var timeString = '';

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    const year = currentDate.getFullYear();
    const month = parseInt(currentDate.getMonth()) + 1;
    const day = currentDate.getDate();

    timeString = year + '-' + month + '-' + day;
    setTime(timeString);
  };

  return (
    <DatePicker
      style={{ height: 60, flex: 1 }}
      value={date}
      mode="date"
      display="spinner"
      minimumDate={new Date('2020-05-01')}
      maximumDate={new Date('2025-06-01')}
      onChange={onChange}
      textColor={color}
    />
  );
}