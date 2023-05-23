export var data = [
  { type: 'book', behavior: 'expenditure', amount: '100', time: '2023-05-20', remark: 'none', uuid: '1234' },
  { type: 'fastfood', behavior: 'expenditure', amount: '25', time: '2023-05-20', remark: 'none', uuid: '12345' },
  { type: 'shop', behavior: 'expenditure', amount: '150', time: '2023-05-21', remark: 'none', uuid: '123456' },
  { type: 'business', behavior: 'income', amount: '150', time: '2023-05-21', remark: 'none', uuid: '1234567' },
  { type: 'shop', behavior: 'expenditure', amount: '150', time: '2023-05-23', remark: 'none', uuid: '3214' },
  { type: 'shop', behavior: 'expenditure', amount: '200', time: '2023-05-23', remark: 'none', uuid: '1235123' },
  { type: 'business', behavior: 'income', amount: '150', time: '2023-05-24', remark: 'none', uuid: '12345123' },
  { type: 'festival', behavior: 'income', amount: '1000', time: '2023-05-24', remark: 'none', uuid: '16804968' },
]

export const deleteHandler = (uuid) => {
  const newData = data.filter(item => uuid !== item.uuid);
  data = newData;
}

export const addItemHandler = (item) => {
  const newData = [
    ...data,
    item,
  ]
  data = newData;
}