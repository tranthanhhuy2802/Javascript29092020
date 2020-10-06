// 10: vòng lặp
// console.log("hello");
// const arrNumbers1 = [1, 2, 3, 4, 5];
// const arrNumbers2 = [10, 20, 30];

// for (var i = 0; i < arrNumbers1.length; i++) {
//   for (var y = 0; y < arrNumbers2.length; y++) {
//     console.log(arrNumbers1[i] * arrNumbers2[y]);
//   }
// }

// (iterator)
// 11 : for..of lấy giá trị trong mảng (biến đếm)

// const arrname = ["Ti", "Teo", "Tun", "Tin"];
// for (const value of arrname) {
//   console.log(value);
// }

// function multiply(arr) {
//   var result = 1;
//   for (const value of arr) {
//     result *= value;
//   }
//   return result;
// }
// console.log(multiply([2, 3, 4]));

//12 : for..in (lấy key trong mảng) (đối tượng)
// const arrname = ["ti", "tun", "tin"];
// for (var key in arrname) {
//   console.log(key);
// }
// const teo = {
//   name: "Nguyen van teo",
//   age: 18,
// };
// for (var key in teo) {
//   console.log(key);
// }
//vd
// var apartment = {
//   bedroom: {
//     area: 20,
//     bed: {
//       type: "twin-bed",
//       price: 100,
//     },
//   },
// };
// function getkey(object) {
//   for (const keyobject in object) {
//     console.log(keyobject);
//     for (const keybedroom in object[keyobject]) {
//       console.log(keybedroom);
//       for (const keybed in object[keyobject][keybedroom]) {
//         console.log(keybed);
//       }
//     }
//   }
// }
// getkey(apartment);
// function getkey(object) {
//   for (const key in object) {
//     console.log(key);
//     if (typeof object[key] === "object") {
//       getkey(object[key]);
//     }
//   }
// }
// getkey(apartment);

//13: array method
// const arrNums = [5, 1, 10, 20, 30];
// thêm phần tử vào cuối mảng
// arrNums.push();
// // xóa phần tử cuối
// arrNums.pop();
// // thêm phần tử ở đầu
// arrNums.unshift();
// // xóa phần tử ở đầu
// arrNums.shift();
// // xóa phần tử ở giữa
// arrNums.splice(1, 3);
// // thêm phần tử ở giữa
// arrNums.splice(1, 0, 50);
// console.log(arrNums);

// 14 : callback là tham số

function insochan() {
  for (var i = 1; i < 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
function insole() {
  for (var i = 0; i < 100; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}
function insochia3du1() {
  for (var i = 0; i < 100; i++) {
    if (i % 3 === 1) {
      console.log(i);
    }
  }
}
function insochinhphuong() {
  for (var i = 0; i < 100; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      console.log(i);
    }
  }
}
insochinhphuong();

