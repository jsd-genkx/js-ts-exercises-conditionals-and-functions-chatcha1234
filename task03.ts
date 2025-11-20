// TODO-03: Write if/else if to print:
// Password < 6 chars → "Too short"
// 6–10 chars → "Moderate"
// 11+ chars → "Strong"

const password = "pass123";

const len =  password.length;
let state = "";  // สร้างตัวแปรเก็บ string สำหรับ state

if (len < 6) {
  state = "Weak";
} else if (len >= 6 && len <= 10) {
  state = "Moderate";
} else {
  state = "Strong";
}


console.log(state);