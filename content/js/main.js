import { songs } from './songs.js';
import { generateBtns, generatePlaylist } from './domHandler.js';
const songContainer = document.querySelector('.song-container');

const initApp = () => {
  loadBtns();
  loadSongs();
  sortSongs();
};

const loadBtns = () => {
  const btnsContainer = document.querySelector('.btns-container');
  btnsContainer.innerHTML = generateBtns(songs);
};
const loadSongs = () => {
  songContainer.innerHTML = generatePlaylist(songs);
};

const sortSongs = () => {
  const genreBtns = document.querySelectorAll('.genre-btn');
  const data = songs;
  let tempData = songs;

  genreBtns.forEach((button) =>
    button.addEventListener('click', () => {
      if (button.textContent.toLowerCase() === 'all') {
        tempData = data;
        songContainer.innerHTML = generatePlaylist(tempData);
      } else {
        tempData = data.filter(
          (item) =>
            item.genre.toLowerCase() === button.textContent.toLowerCase(),
        );
        songContainer.innerHTML = generatePlaylist(tempData);
      }
    }),
  );
};

document.addEventListener('DOMContentLoaded', initApp);
