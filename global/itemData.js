export var data = [
  { type: 'Apple', behavior: 'expenditure', amount: '1000', time: '2023-05-23', remark: 'none', uuid: '1234' },
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