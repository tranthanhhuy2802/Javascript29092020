//15 : Map method
// 1: tạo mảng mới và không ghi đè mảng cũ
// 2: thay đổi giá trị trong phần tử và không thêm hoặc xóa phần tử

// const arrNumbers = [5, 2, 10, 20, 11, 15];
// const newArrNumbers = arrNumbers.map(function (value, index) {
//   return value * 2;
// });
// console.log(newArrNumbers);

// namesOnly([
//   {
//     name: "Angelina Jolie",
//     age: 80,
//   },
//   {
//     name: "Eric Jones",
//     age: 2,
//   },
//   {
//     name: "Paris Hilton",
//     age: 5,
//   },
//   {
//     name: "Kayne West",
//     age: 16,
//   },
//   {
//     name: "Bob Ziroll",
//     age: 100,
//   },
// ]);

// function namesOnly(arr) {
//   console.log(
//     (names = arr.map(function (person, index) {
//       return person.name;
//     }))
//   );
// }

//16 : hàm filter
// 1 : tạo ra mảng mới và không ghi đè mảng cũ
// 2 : thay dổi kích thước của mảng chứ không thay đổi giá tri của phần tử
//vi du
// const arrNums = [5, 2, 10, 20, 11, 15];
// const newArr = arrNums.filter(function (num, index) {
//   if (index % 2 == 0) {
//     return true;
//   }
//   return false;
// });
// console.log(newArr);

// function findDivisibleNum(arr,x){
//     const result = arr.filter(function(num){
//         if(num % x==0){
//             return true;
//         }
//         return false;
//     })
// }
// console.log(findDivisibleNum([1,3,4], 2))

// var listProducts = [
//   { id: 1, categoryId: 1, name: "Tivi" },
//   { id: 2, categoryId: 1, name: "Tủ lạnh" },
//   { id: 3, categoryId: 3, name: "Ghế sofa" },
//   { id: 4, categoryId: 1, name: "Máy giặt" },
//   { id: 5, categoryId: 2, name: "Chén bát" },
//   { id: 6, categoryId: 2, name: "Nồi cơm điện" },
//   { id: 7, categoryId: 3, name: "Cửa kính" },
//   { id: 8, categoryId: 1, name: "Điều hoà" },
//   { id: 9, categoryId: 3, name: "Bàn tròn" },
//   { id: 10, categoryId: 2, name: "Lò vi sóng" },
// ];

// function filterProductsByCategoryId(products, categoryId) {
//   return products.filter(function (products) {
//     if (products.categoryId === categoryId) {
//       return true;
//     }
//     return false;
//   }).map(function (product) {
//       return {id: product.id, name: product.name}
//   })
// }
// console.log(filterProductsByCategoryId(listProducts,1))

// 17 : hàm reduce
// const arrNums = [5, 2, 10, 20, 11, 15];
// const result = arrNums.reduce(function (prev, cur) {
//   console.log("prev: " + prev);
//   console.log("cur: " + cur);
//   return 5;
// });
// console.log(result);
// const arrNums = [5, 2, 10, 20, 11, 15];
// const result = arrNums.reduce(function (accumulator, cur) {
//   console.log("accum: " + accumulator);
//   console.log("cur: " + cur);
//   return accumulator + cur;
// }, 0);
// console.log(result);

