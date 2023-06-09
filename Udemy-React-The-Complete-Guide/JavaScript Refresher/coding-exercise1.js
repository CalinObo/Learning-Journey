function transformToObjects(numberArray) {
  const newArray = numberArray.map(el => {
    return { val: el };
  });
  return newArray;
}
console.log(transformToObjects([1,2,3]));
