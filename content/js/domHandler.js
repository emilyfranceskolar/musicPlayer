export const generateBtns = (songs) => {
  let html = '';
  let genreTypes = songs.map((song) => song.genre);
  genreTypes = ['All', ...new Set(genreTypes)];
  genreTypes.forEach((song) => {
    html += `
      <button type="button" class="genre-btn" id="${song}">${song}</button>
    `;
  });
  return html;
};

export const generatePlaylist = (songs) => {
  let html = '';
  songs.forEach((song) => {
    html += `
        <div class="song-card">
          <img src="${song.img}" alt="picture" class="class-image">
          <h4>${song.artist}</h4>
          <p>${song.title}</p>
          <p class="genre"> ${song.genre}</p>
        </div>
        `;
  });
  return html;
};
