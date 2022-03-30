// 1st
const wordCount = (str) => {
  const maxCount = 200;
  const count = str.split(' ').filter((word) => word !== '').length;
  console.log(`${count}/${maxCount}`);
};
// wordCount(
//   'Lorem ipsum,                    dolor sit amet   consectetur adipisicing elit. Sed maiores deleniti necessitatibus itaque porro praesentium neque sequi obcaecati ipsa autem!'
// );wordCount(
//   'Lorem ipsum,                    dolor sit amet   consectetur adipisicing elit. Sed maiores deleniti necessitatibus itaque porro praesentium neque sequi obcaecati ipsa autem!'
// );
