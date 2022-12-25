const leaner_search = (list, value) => {
  let isMatch = false;
  let i = 0;
  let exist;

  while (i < list.length && !isMatch) {
    exist = -1;
    if (list[i] === value) {
      isMatch = true;
      exist = i;
    }
    i++;
  }

  return exist;
};

console.log(leaner_search([1, 2, 3, 4, 4], 4));
