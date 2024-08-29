// Coding Challenge #1 
// Given an array of forecasted maximum temperatures, the thermometer displays a 
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."


// Hàm 'printForecast' nhận vào một mảng 'arr' và in ra chuỗi kết quả
function printForecast(arr) {
    let result = '... ';
    for (let i = 0; i < arr.length; i++) {
      result += `${arr[i]}ºC in ${i + 1} days ... `;
    }
    console.log(result);
  }
  
  // Dữ liệu kiểm tra
  const data1 = [17, 21, 23];
  const data2 = [12, 5, -5, 0, 4];
  
  // Gọi hàm 'printForecast' với dữ liệu kiểm tra
  printForecast(data1); // "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
  printForecast(data2); // "... 12ºC in 1 days ... 5ºC in 2 days ... -5ºC in 3 days ... 0ºC in 4 days ... 4ºC in 5 days ..."