// Coding Challenge #1 
// We're building a football betting app (soccer for my American friends 
// �
// �)! 
// Suppose we get data from a web service about a certain game ('game' variable on 
// next page). In this challenge we're gonna work with that data.

// Giả sử dữ liệu từ dịch vụ web như sau:
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnabry',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      draw: 3.25,
      team2: 6.5,
    },
  };
  
  // 1. Tạo mảng cầu thủ cho mỗi đội
  const [players1, players2] = game.players;
  
  // 2. Tạo biến cho thủ môn và mảng cầu thủ còn lại của Bayern Munich
  const [gk, ...fieldPlayers] = players1;
  
  // 3. Tạo mảng chứa tất cả cầu thủ của cả hai đội
  const allPlayers = [...players1, ...players2];
  
  // 4. Tạo mảng chứa tất cả cầu thủ ban đầu của Bayern Munich cộng thêm ba cầu thủ dự bị
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  
  // 5. Tạo các biến cho từng tỷ lệ cược
  const { team1, draw, team2 } = game.odds;
  
  // 6. Viết hàm nhận vào số lượng tùy ý tên cầu thủ và in ra từng tên cùng với tổng số bàn thắng
  const printGoals = function (...players) {
    console.log(`${players.length} goals were scored`);
    for (const player of players) {
      console.log(player);
    }
  };
  
  // Kiểm tra hàm với dữ liệu kiểm tra
  printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
  printGoals(...game.scored);
  
  // 7. In ra đội có khả năng thắng cao hơn dựa trên tỷ lệ cược
  team1 < team2 && console.log('Team 1 is more likely to win');
  team1 > team2 && console.log('Team 2 is more likely to win');