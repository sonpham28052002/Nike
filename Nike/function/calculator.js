const calcStar = (data) => {
  if (data.length == 0) return 0;
  if (data.length == 1) return data[0].star
  return data.reduce((accumulator, currentValue) =>
    (accumulator.star + currentValue.star)) / data.length
}

export { calcStar }