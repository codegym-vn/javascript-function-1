//Bai1
function checkArray(arr) {
  let array1 = [];
  let array2 = [];
  let array3 = [];
  for (const value of arr) {
    let type = typeof (value);
    if (type == 'number') {
      if (value >= 0) {
        array1.push(value);
      } else {
        array2.push(value);
      }
    }

    if (type == 'string') {
      array3.push(value);
    }
  }
  console.log(array1, "1");
  console.log(array2, "2");
  console.log(array3.join(" "));
};
let array = [1, "Hello", 6, -100, 7, -9, "world!", 6, 8, -24, 789];
checkArray(array);

//bai 2
const upperCase = (str) => {
  const array1 = str.split(' ');
  let newArray1 = [];
  for(let i = 0; i < array1.length; i++) {
    let value = array1[i].charAt(0).toUpperCase() + array1[i].slice(1);
    newArray1.push(value);
  }
  console.log(newArray1, "newArray1")
  console.log(newArray1.join(' '));
}
upperCase('xin chào các bạn');
