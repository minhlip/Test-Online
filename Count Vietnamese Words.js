/**
 * Cách gõ các chữ cái Tiếng Việt bằng các chữ cái latin của kiểu gõ telex như sau: ă=aw, â=aa, đ=dd, ê=ee, ô=oo, ơ=ow, ư=w

Hãy xây dựng 1 chức năng cho phép đếm số lượng các chữ cái Tiếng Việt có thể được tạo thành trong 1 chuỗi chữ cái latin nhập vào từ bàn phím. Chuỗi nhập vào không giới hạn số lượng ký tự, không bao gồm các ký tự đặc biệt và khoảng trắng

Ví dụ:
Input: hfdawhwhcoomdd
Output: 4 (aw, w, oo, dd)
*
Yêu cầu: 
Bài giải cần được refactor code
 */

//Solution 1
const countVietnameseWords = (input) => {
    let regex = /(?:aw|aa|dd|ee|oo|ow|w)/g
    let matches = input.match(regex)
    return matches ? matches.length : 0   
}

console.log(countVietnameseWords("hfdawhwhcoomdd")) //4


// Solution 2
function countVietnameseCharacters(str) {
    const vietnameseChars = ['aw', 'aa', 'dd', 'ee', 'oo', 'ow', 'w'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < vietnameseChars.length; j++) {
        const char = vietnameseChars[j];
        if (str.slice(i).startsWith(char)) {
          count++;
          i += char.length - 1;
          break;
        }
      }
    }
    return count;
  }
console.log(countVietnameseCharacters("hfdawhwhcoomdd")) //4

