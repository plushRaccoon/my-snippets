    // функция для добавления 0, если число состоит из одной цифры  

function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

getZero(2);
