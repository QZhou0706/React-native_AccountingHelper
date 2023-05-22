import React, { useState } from 'react';
import DatePicker from '@react-native-community/datetimepicker';

export default function MyDatePicker() {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
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
      textColor="#F5A80F"
    />
  );
}