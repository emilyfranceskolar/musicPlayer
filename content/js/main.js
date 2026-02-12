import { songs } from './songs.js';
import { generateBtns, generatePlaylist } from './domHandler.js';

const btnsContainer = document.querySelector('.btns-container');
const songContainer = document.querySelector('.song-container');
const genreBtns = btnsContainer.querySelectorAll('.genre-btn');

const initApp = () => {
  loadBtns();
  loadSongs();
};

const loadBtns = () => {
  btnsContainer.innerHTML = generateBtns(songs);
};

const loadSongs = () => {
  songContainer.innerHTML = generatePlaylist(songs);
};

document.addEventListener('DOMContentLoaded', initApp);
