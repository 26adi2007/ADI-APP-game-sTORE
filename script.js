const apps = [
  {
    name: "UNO!™",
    rating: "4.5",
    size: "351MB",
    category: "Card",
    img: "UNO.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.matteljv.uno"
  },
  {
    name: "Subway Surfers",
    rating: "4.6",
    size: "200MB",
    category: "Arcade",
    img: "Subway Surfers.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf"
  },
  {
    name: "BGMI: Online Multiplayer Game",
    rating: "4.2",
    size: "1.1GB",
    category: "Battle Royale",
    img: "BGMI.jpg",
    link: "https://play.google.com/store/apps/details?id=com.pubg.imobile"
  },
  {
    name: "Ludo King",
    rating: "4.2",
    size: "60MB",
    category: "Board",
    img: "Ludo King.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.ludo.king"
  },
  {
    name: "Free Fire MAX",
    rating: "4.1",
    size: "800MB",
    category: "Battle Royale",
    img: "freefire.jpg",
    link: "https://play.google.com/store/apps/details?id=com.dts.freefiremax"
  },
  {
    name: "Candy Crush Saga",
    rating: "4.4",
    size: "90MB",
    category: "Puzzle",
    img: "Candy Crush Saga.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.king.candycrushsaga"
  },
  {
    name: "Clash Royale",
    rating: "4.3",
    size: "150MB",
    category: "Strategy",
    img: "Clash Royale.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.supercell.clashroyale"
  },
  {
    name: "Temple Run 2",
    rating: "4.3",
    size: "140MB",
    category: "Running",
    img: "Temple Run 2.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.imangi.templerun2"
  },
   {
    name: "Minecraft:Dream it,Build it!",
    rating: "4.6",
    size: "512MB",
    category: "Running",
    img: "minecraft.jpeg",
    link: "https://mcpedl.org/downloading/"
  },
  {
    name: "8 Ball Pool",
    rating: "4.5",
    size: "70MB",
    category: "Sports",
    img: "8 Ball Pool.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.miniclip.eightballpool"
  },
  {
    name: "Carrom Pool",
    rating: "4.3",
    size: "45MB",
    category: "Board",
    img: "Carrom Pool.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.miniclip.carrom"
  },
  {
    name: "Snakes and Ladders King",
    rating: "4.1",
    size: "35MB",
    category: "Board",
    img: "Snakes and Ladders King.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.gametion.snakesladders&pcampaignid=web_share"
  },
  {
    name: "Chess - Play and Learn",
    rating: "4.5",
    size: "52MB",
    category: "Board",
    img: "Chess.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.chess"
  },
 
  {
    name: "Among Us",
    rating: "4.4",
    size: "125MB",
    category: "Casual",
    img: "Among Us.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.innersloth.spacemafia"
  },
  {
    name: "Real Cricket™ 20",
    rating: "4.2",
    size: "500MB",
    category: "Sports",
    img: "Real Cricket 20.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.nautilus.RealCricket3D"
  },
  {
    name: "Garena Call of Duty®",
    rating: "4.3",
    size: "2.1GB",
    category: "Shooter",
    img: "Call of Duty.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.garena.game.codm"
  },
  {
    name: "Hill Climb Racing",
    rating: "4.4",
    size: "80MB",
    category: "Racing",
    img: "Hill Climb Racing.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.fingersoft.hillclimb"
  },
  {
    name: "Real Racing 3",
    rating: "4.5",
    size: "1.5GB",
    category: "Racing",
    img: "Real Racing 3.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.ea.games.r3_row"
  },
  {
    name: "Tic Tac Toe Glow",
    rating: "4.3",
    size: "19MB",
    category: "Puzzle",
    img: "Tic Tac Toe Glow.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.arcsys.tictactoe"
  },
 
  {
    name: "2048",
    rating: "4.6",
    size: "12MB",
    category: "Puzzle",
    img: "2048.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.androbaby.game2048"
  },
  {
    name: "Fruit Ninja®",
    rating: "4.5",
    size: "150MB",
    category: "Arcade",
    img: "Fruit Ninja.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.halfbrick.fruitninja"
  },
  {
    name: "Brain Out: Can you pass it?",
    rating: "4.3",
    size: "97MB",
    category: "Puzzle",
    img: "Brain Out.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.mind.quiz.brain.out"
  },
  {
    name: "Pou",
    rating: "4.4",
    size: "23MB",
    category: "Casual",
    img: "Pou.jpeg",
    link: "https://play.google.com/store/apps/details?id=me.pou.app"
  },

];

const appList = document.getElementById('app-list');

function renderApps(list) {
  appList.innerHTML = "";
  list.forEach(app => {
    appList.innerHTML += `
      <div class="app-card">
        <img src="${app.img}" alt="${app.name}">
        <div class="app-info">
          <h3>${app.name}</h3>
          <p>⭐ ${app.rating} | 🗜 ${app.size} | 🎮 ${app.category}</p>
          <button onclick="window.open('${app.link}', '_blank')">Download</button>
        </div>
      </div>
    `;
  });
}

document.getElementById('search').addEventListener('input', function() {
  const keyword = this.value.toLowerCase();
  renderApps(apps.filter(a => a.name.toLowerCase().includes(keyword)));
});

// Initial render
renderApps(apps);
