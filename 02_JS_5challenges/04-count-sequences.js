
// count sequences, three numbers, first equals to third
// and middle one different, all three numbers equal does not count [4,4,4]

const first = [8, 6, 8, 6, 7, 4, 7]
// [8,6,8], [6,8,6], [7,4,7];
const second = [4, 5, 5, 7, 5, 5, 9]
// [5,7,6]
const third = [3, 3, 2, 8, 7, 6, 5]
//

//reduce this code to 2 lines of code
const count = (data) => {return data.reduce((total, item, index) => {
    return match = item === data[index + 2] && item !== data[index + 1] ?total+ 1:total},0)}
console.logcount(first)
console.log(count(second))
