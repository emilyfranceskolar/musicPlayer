export const generatePlaylist = (songs) => {
  let html = '';
  songs.forEach((song) => {
    html += `
        <article class="song-card">
        <h4>${song.artist}</h4>
        <p>${song.title}</p>
        <p class="genre"> ${song.genre}</p>
        </article>`;
  });
  return html;
};
