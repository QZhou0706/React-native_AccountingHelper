export var data = [
  { type: 'book', behavior: 'expenditure', amount: '1000', time: '2023-05-23', remark: 'none', uuid: '1234' },
  { type: 'fastfood', behavior: 'expenditure', amount: '500', time: '2023-05-23', remark: 'none', uuid: '12345' },
  { type: 'album', behavior: 'income', amount: '2500', time: '2023-05-23', remark: 'none', uuid: '123456' },
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