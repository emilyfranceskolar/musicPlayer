import { songs } from './songs.js';
import { generatePlaylist } from './domHandler.js';

const genreContainer = document.querySelector('.genre-container');
const songContainer = document.querySelector('.song-container');

const initApp = () => {
  loadSongs();
};

const loadSongs = () => {
  songContainer.innerHTML = generatePlaylist(songs);
};

document.addEventListener('DOMContentLoaded', initApp);
