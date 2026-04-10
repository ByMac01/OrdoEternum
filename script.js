document.addEventListener('DOMContentLoaded', (event) => {
  const personagens = {
    'TPI': [
      { name: 'Yamamoto Aiko', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/imagem_2025-02-01_225655272.png?v=1738461416332', page:'personagens/aiko.html' },
      { name: 'Takeda Hiroshi', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/imagem_2025-02-01_225801524.png?v=1738461482608', page:'personagens/hiroshi.html' },
      { name: '??? Kenta', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/imagem_2025-02-01_225832538.png?v=1738461513672', page:'personagens/kenta.html' },
      { name: 'Sato Daisuke', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/imagem_2025-02-01_225914990.png?v=1738461556049', page:'personagens/daisuke.html' },    
      { name: 'Sakurai Togoshi', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/imagem_2025-02-01_223057151.png?v=1738459858292', page: 'personagens/togo.html' },
      { name: 'Kitsuri Hamon', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/imagem_2025-02-01_230007987.png?v=1738461609065', page: 'personagens/hamon.html' },
      { name: 'Sasaki Mizuki', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/imagem_2025-02-01_230058004.png?v=1738461659445', page: 'personagens/mizuki.html' },
      { name: 'Sato Akira', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/imagem_2025-02-01_230133542.png?v=1738461694598', page: 'personagens/akira.html' },
      { name: 'Hanzo Matsumoto', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/imagem_2025-02-01_230209002.png?v=1738461729971', page: 'personagens/hanzo.html' },
    ],
    'SDP': [
      { name: 'Yamamoto Aiko', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/imagem_2025-02-01_225655272.png?v=1738461416332', page:'personagens/aiko.html' },
      { name: 'Sakurai Togoshi', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/imagem_2025-02-01_225005788.png?v=1738461006870', page: 'personagens/togo.html' },
      { name: 'Kitsuri Hamon', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/imagem_2025-02-01_225056401.png?v=1738461057364', page: 'personagens/hamon.html' },
      { name: 'Sato Akira', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/imagem_2025-02-01_225155231.png?v=1738461116394', page: 'personagens/akira.html' },
      { name: 'Sasaki Yukito', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/imagem_2025-02-01_225311472.png?v=1738461192551', page: 'personagens/yukito.html' },
      { name: 'Sasaki Mizuki', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/imagem_2025-02-01_225407814.png?v=1738461248917', page: 'personagens/mizuki.html' },
      { name: 'Kurokage', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/imagem_2025-02-01_225530663.png?v=1738461331641', page: 'personagens/kurokage.html'}
    ],
    'LE': [
      { name: 'Yamamoto Aiko', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/Portrait%20Aiko.png?v=1747253172767', page:'personagens/aiko.html' },
      { name: 'Sakurai Togoshi', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/imagem_2025-02-01_205354430.png?v=1738454035489', page: 'personagens/togo.html' },
      { name: 'Kitsuri Hamon', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/imagem_2025-02-01_222712956.png?v=1738459634386', page: 'personagens/hamon.html' },
      { name: 'Sato Akira', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/imagem_2025-02-01_222842112.png?v=1738459723129', page: 'personagens/akira.html' },
      { name: 'Sasaki Yukito', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/65eb5e8a-f772-43f2-80f6-1cdaff14852e.image.png?v=1738459784692', page: 'personagens/yukito.html' },
      { name: 'Sasaki Mizuki', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/Mizuki%20(Portrait).png?v=1746314979517', page: 'personagens/mizuki.html' },
      { name: 'Hanzo Matsumoto', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/Hanzo%20-%20Portrait.png?v=1746316860610', page: 'personagens/hanzo.html' },
      { name: '??? ???', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/Inaya%20Jindal%20-%20Portrait.png?v=1746317528756', page: 'personagens/inaya.html'},
      { name: '??? ???', img: 'https://cdn.glitch.global/dea70241-0383-42e2-8503-bf393bd23b59/Tenzin%20Arjan%20-%20Portrait.png?v=1746317699947', page: 'personagens/tenzin.html'}
    ],
  };

   document.querySelectorAll('.season-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      updatePersonagensGrid(e.target.getAttribute('data-season'));
    });
  });

  function updatePersonagensGrid(season) {
    const grid = document.querySelector('.personagens-grid');
    grid.innerHTML = personagens[season] && personagens[season].length > 0 
      ? personagens[season].map(p => `
          <div class="personagem-card" onclick="location.href='${p.page}'">
            <img src="${p.img}" alt="${p.name}">
            <p>${p.name}</p>
          </div>
        `).join('') 
      : '<p style="font-size: 0.7rem;">Nenhum personagem encontrado para esta temporada.</p>';
  }

  updatePersonagensGrid('TPI');
});

const toggleMenu = document.getElementById('toggle-menu');
const navLinks = document.querySelector('.nav-links');

navLinks.addEventListener('click', () => {
  toggleMenu.checked = false;
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= 768) {
    const livrosSection = document.querySelector('.livros-section');
    const livrosHeading = livrosSection.querySelector('h2');
    const livrosBox = livrosSection.querySelector('.livros-box');

    livrosHeading.addEventListener('click', () => {
      livrosSection.classList.toggle('active');
      if (livrosBox.style.display === 'none' || livrosBox.style.display === '') {
        livrosBox.style.display = 'flex';
      } else {
        livrosBox.style.display = 'none';
      }
    });
  }
});

function mostrarAviso() {
    const aviso = document.getElementById("aviso");
    aviso.classList.add("show");

    setTimeout(() => {
        aviso.classList.remove("show");
    }, 3000); // 3 segundos
}