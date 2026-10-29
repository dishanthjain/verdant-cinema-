const movies = [
  {title:"Inception",year:2010,rating:"8.8",genres:["Sci-Fi","Action"],description:"A skilled thief enters dreams to steal secrets, until one final job turns reality into a maze.",poster:"https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",release:"16 July 2010",cast:["Leonardo DiCaprio","Joseph Gordon-Levitt","Elliot Page"],trailer:"https://www.youtube.com/results?search_query=Inception+official+trailer"},
  {title:"Interstellar",year:2014,rating:"8.7",genres:["Sci-Fi","Drama"],description:"A team of explorers travels beyond this galaxy to discover whether mankind has a future among the stars.",poster:"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",release:"7 November 2014",cast:["Matthew McConaughey","Anne Hathaway","Jessica Chastain"],trailer:"https://www.youtube.com/results?search_query=Interstellar+official+trailer"},
  {title:"The Dark Knight",year:2008,rating:"9.0",genres:["Action","Drama"],description:"Batman faces a criminal mastermind whose chaotic plan pushes Gotham and its hero to their limits.",poster:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",release:"18 July 2008",cast:["Christian Bale","Heath Ledger","Aaron Eckhart"],trailer:"https://www.youtube.com/results?search_query=The+Dark+Knight+official+trailer"},
  {title:"La La Land",year:2016,rating:"8.0",genres:["Romance","Drama"],description:"A jazz musician and an aspiring actor fall in love while chasing their dreams in Los Angeles.",poster:"https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",release:"9 December 2016",cast:["Ryan Gosling","Emma Stone","John Legend"],trailer:"https://www.youtube.com/results?search_query=La+La+Land+official+trailer"},
  {title:"Get Out",year:2017,rating:"7.8",genres:["Horror","Drama"],description:"A weekend visit to meet his girlfriend’s family slowly unravels into something far more disturbing.",poster:"https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",release:"24 February 2017",cast:["Daniel Kaluuya","Allison Williams","Bradley Whitford"],trailer:"https://www.youtube.com/results?search_query=Get+Out+official+trailer"},
  {title:"Spider-Man: Across the Spider-Verse",year:2023,rating:"8.6",genres:["Action","Sci-Fi"],description:"Miles Morales swings into a multiverse of Spider-People and discovers what it means to be a hero.",poster:"https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj729.jpg",release:"2 June 2023",cast:["Shameik Moore","Hailee Steinfeld","Brian Tyree Henry"],trailer:"https://www.youtube.com/results?search_query=Across+the+Spider-Verse+official+trailer"},
  {title:"Knives Out",year:2019,rating:"7.9",genres:["Comedy","Drama"],description:"A sharp detective investigates a novelist’s mysterious death, where every member of the family has a secret.",poster:"https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",release:"27 November 2019",cast:["Daniel Craig","Ana de Armas","Chris Evans"],trailer:"https://www.youtube.com/results?search_query=Knives+Out+official+trailer"},
  {title:"Dune: Part Two",year:2024,rating:"8.5",genres:["Sci-Fi","Action"],description:"Paul Atreides unites with Chani and the Fremen while seeking revenge and confronting a future only he can see.",poster:"https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",release:"1 March 2024",cast:["Timothée Chalamet","Zendaya","Rebecca Ferguson"],trailer:"https://www.youtube.com/results?search_query=Dune+Part+Two+official+trailer"},
  {title:"The Grand Budapest Hotel",year:2014,rating:"8.1",genres:["Comedy","Drama"],description:"A legendary concierge and his young protégé become caught up in a caper involving a priceless painting.",poster:"https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",release:"28 March 2014",cast:["Ralph Fiennes","Tony Revolori","Saoirse Ronan"],trailer:"https://www.youtube.com/results?search_query=Grand+Budapest+Hotel+official+trailer"},
  {title:"A Quiet Place",year:2018,rating:"7.5",genres:["Horror","Drama"],description:"A family struggles to survive in silence in a world where mysterious creatures hunt by sound.",poster:"https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",release:"6 April 2018",cast:["Emily Blunt","John Krasinski","Millicent Simmonds"],trailer:"https://www.youtube.com/results?search_query=A+Quiet+Place+official+trailer"},
  {title:"The Notebook",year:2004,rating:"7.8",genres:["Romance","Drama"],description:"A lifelong love story unfolds through memories of two people whose connection survives years of change.",poster:"https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7Dgj3n6eVQ8b.jpg",release:"25 June 2004",cast:["Ryan Gosling","Rachel McAdams","Gena Rowlands"],trailer:"https://www.youtube.com/results?search_query=The+Notebook+official+trailer"},
  {title:"Mad Max: Fury Road",year:2015,rating:"8.1",genres:["Action","Sci-Fi"],description:"In a stark desert wasteland, a drifter joins a fearless rebel in a high-octane escape from a tyrant.",poster:"https://image.tmdb.org/t/p/w500/hA2letf0sJ1vNhe7j1JpJ4j8j2.jpg",release:"15 May 2015",cast:["Tom Hardy","Charlize Theron","Nicholas Hoult"],trailer:"https://www.youtube.com/results?search_query=Mad+Max+Fury+Road+official+trailer"}
];

const grid = document.querySelector("#movieGrid");
const search = document.querySelector("#movieSearch");
const count = document.querySelector("#resultsCount");
const empty = document.querySelector("#emptyState");
const chips = [...document.querySelectorAll(".genre-chip")];
const modal = document.querySelector("#movieModal");
let activeGenre = "All";

function renderMovies() {
  const query = search.value.trim().toLowerCase();
  const filtered = movies.filter(movie => {
    const matchesGenre = activeGenre === "All" || movie.genres.includes(activeGenre);
    const matchesQuery = `${movie.title} ${movie.year} ${movie.genres.join(" ")}`.toLowerCase().includes(query);
    return matchesGenre && matchesQuery;
  });
  count.textContent = `${String(filtered.length).padStart(2,"0")} FILM${filtered.length === 1 ? "" : "S"} TO DISCOVER`;
  grid.innerHTML = filtered.map((movie, index) => `
    <article class="movie-card" style="animation-delay:${Math.min(index * 45, 360)}ms">
      <div class="movie-poster-wrap" data-title="${movie.title.replaceAll('"',"&quot;")}" tabindex="0" role="button" aria-label="View details for ${movie.title}">
        <img class="movie-poster" src="${movie.poster}" alt="${movie.title} movie poster" loading="lazy" onerror="this.style.opacity='.15';this.parentElement.style.background='linear-gradient(145deg,#203b28,#0b1710)'">
        <span class="card-number">${String(movies.indexOf(movie)+1).padStart(2,"0")}</span>
        <span class="card-rating"><span>★</span> ${movie.rating}</span>
        <div class="poster-overlay"><span class="view-details">View details ↗</span></div>
      </div>
      <div class="movie-info">
        <div class="movie-title-row"><h3 class="movie-title">${movie.title}</h3><span class="movie-year">${movie.year}</span></div>
        <p class="movie-description">${movie.description}</p>
        <div class="card-genres">${movie.genres.map(genre => `<span class="card-genre">${genre}</span>`).join("")}</div>
      </div>
    </article>
  `).join("");
  empty.hidden = filtered.length > 0;
  grid.hidden = filtered.length === 0;
}

function openMovie(title) {
  const movie = movies.find(item => item.title === title);
  if (!movie) return;
  document.querySelector("#modalPoster").src = movie.poster;
  document.querySelector("#modalPoster").alt = `${movie.title} movie poster`;
  document.querySelector("#modalTitle").textContent = movie.title;
  document.querySelector("#modalMeta").innerHTML = `<span>★ ${movie.rating}</span><span>${movie.year}</span><span>${movie.release}</span>`;
  document.querySelector("#modalDescription").textContent = movie.description;
  document.querySelector("#modalGenres").innerHTML = movie.genres.map(genre => `<span class="card-genre">${genre}</span>`).join("");
  document.querySelector("#trailerLink").href = movie.trailer;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
  document.querySelector("#modalClose").focus();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

chips.forEach(chip => chip.addEventListener("click", () => {
  activeGenre = chip.dataset.genre;
  chips.forEach(item => item.classList.toggle("selected", item === chip));
  renderMovies();
}));

search.addEventListener("input", renderMovies);
grid.addEventListener("click", event => {
  const poster = event.target.closest(".movie-poster-wrap");
  if (poster) openMovie(poster.dataset.title);
});
grid.addEventListener("keydown", event => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches(".movie-poster-wrap")) {
    event.preventDefault();
    openMovie(event.target.dataset.title);
  }
});
document.querySelector("#resetFilters").addEventListener("click", () => {
  search.value = "";
  activeGenre = "All";
  chips.forEach(chip => chip.classList.toggle("selected", chip.dataset.genre === "All"));
  renderMovies();
});
document.querySelector("#modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    search.focus();
  }
});
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded","false");
}));
renderMovies();