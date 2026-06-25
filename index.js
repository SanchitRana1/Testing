// VERTICALLY PRINTING WORDS
// -----------------------------
// var printVertically = function(s) {
//     const str = s.split(" ")
//     const out = [];
//     const maxLength = Math.max(...str.map(item => item.length))

//     for(let i=0; i< str.length; i++){
//         for(let j=0; j< maxLength; j++){
//                if(!out[j]){
//                    out[j] = str[i][j] ? str[i][j] : " "
//                } else{
//                    out[j] += str[i][j] ? str[i][j] : " "
//                } 
//             }
//     }
//     const res = out.map(item => item.trimEnd())
//     console.log(res)
// };

// printVertically("TO BE OR NOT TO BE")


// TOW SUM
// -----------------------------
// var twoSum = function(nums, target) {
//     let out = [];
//     for(let i=0; i< nums.length; i++){
//         for(let j=i+1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 out = [i, j]
//             }
//         }
//     }
    
//     console.log(out)
// };

// twoSum([4, -1, -2, -3], -5)

// var twoSum = function(nums, target) {
//   const map = new Map(); // store number -> index
  
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map.has(complement)) {
//       // Found the pair
//       console.log([map.get(complement), i]);
//       return [map.get(complement), i];
//     }

//     map.set(nums[i], i); // store current number with index
//   }

//   console.log([]); // no pair found
//   return [];
// };

// twoSum([4, -1, -2, -3], -5); // Output: [2, 3]


// SORT AN ARRAY
// -----------------------------
// BUBBLE or SELECTION SORT
// -----------------------------
// var sortArray = function(nums) {
//   const length = nums.length;
//   for (let i=0; i<length-1 ; i++) {
//     for (let j=i+1; j<length; j++) {
//         if (nums[i] > nums[j]) {
//             const a = nums[i];
//             nums[i] = nums[j];
//             nums[j] = a;
//         }
//     }
// }
// console.log("Result sorted :",nums)
// };
// // sortArray([5,1,1,2,0,0])
// // 1️⃣ Basic ascending order
// sortArray([5, 2, 9, 1, 5, 6]); 
// // Expected: [1, 2, 5, 5, 6, 9]

// // 2️⃣ Already sorted
// sortArray([1, 2, 3, 4, 5]); 
// // Expected: [1, 2, 3, 4, 5]

// // 3️⃣ Reverse sorted
// sortArray([5, 4, 3, 2, 1]); 
// // Expected: [1, 2, 3, 4, 5]

// // 4️⃣ Contains negative numbers
// sortArray([-3, -1, -7, 4, 2, 0]); 
// // Expected: [-7, -3, -1, 0, 2, 4]

// // 5️⃣ All elements are the same
// sortArray([5, 5, 5, 5]); 
// // Expected: [5, 5, 5, 5]

// // 6️⃣ Single element
// sortArray([42]); 
// // Expected: [42]

// // 7️⃣ Empty array
// sortArray([]); 
// // Expected: []

// // 8️⃣ Mix of positive, negative, and zeros
// sortArray([0, -10, 10, -5, 5]); 
// // Expected: [-10, -5, 0, 5, 10]

// // 9️⃣ Large random numbers
// sortArray([1000, -1000, 500, 0]); 
// // Expected: [-1000, 0, 500, 1000]

// // 🔟 Floating point numbers
// sortArray([3.2, 1.5, -2.8, 0.0]); 
// // Expected: [-2.8, 0.0, 1.5, 3.2] 