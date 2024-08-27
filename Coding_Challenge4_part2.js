// Let's improve Steven's tip calculator even more, this time using loops! 
// Your tasks: 
// 1. Create an array 'bills' containing all 10 test bill values 
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals') 
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
// tips and total values (bill + tip) for every bill value in the bills array. Use a for 
// loop to perform the 10 calculations!

// Hàm tính tiền tip
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  // 1. Tạo mảng 'bills' chứa 10 giá trị hóa đơn
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  
  // 2. Tạo các mảng rỗng 'tips' và 'totals'
  const tips = [];
  const totals = [];
  
  // 3. Sử dụng hàm 'calcTip' để tính toán tiền tip và tổng giá trị cho mỗi hóa đơn
  for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
  }
  
  // In kết quả ra console
  console.log('Bills:', bills);
  console.log('Tips:', tips);
  console.log('Totals:', totals);
  
  // 4. Viết hàm 'calcAverage' để tính trung bình của tất cả các số trong mảng
  function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  
  // Gọi hàm 'calcAverage' với mảng 'totals'
  const averageTotal = calcAverage(totals);
  console.log('Average Total:', averageTotal);