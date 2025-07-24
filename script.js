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
    name: "8 Ball Pool",
    rating: "4.5",
    size: "70MB",
    category: "Sports",
    img: "8 Ball Pool.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.miniclip.eightballpool"
  }
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
