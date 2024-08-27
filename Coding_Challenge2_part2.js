// Coding Challenge #2 
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
// 20%. 



//1 định nghĩa hàm calcTip
const calcTip = function(bill){
    return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
}

//2. kiểm tra hàm calcTip
console.log(calcTip(100)); //15

//3. tạo mảng bills
const bills= [125,555,44];

//4. tạo mảng tips  
const tips= bills.map(bill => calcTip(bill));

//5. tạo mảng total
const totals= bills.map((bill, i) => bill + tips[i]);

// In kết quả ra console
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Total:', total);