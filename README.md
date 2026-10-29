# Verdant Cinema

A responsive movie discovery website with a minimal dark-green and black visual style. This is a poster catalogue only: it does not stream or play movies.

## Features

- Cinematic hero section and responsive navigation
- Movie poster cards with title, rating, release year, short description, and genres
- Search by movie title, year, or genre
- Genre filters: Action, Comedy, Horror, Sci-Fi, Drama, and Romance
- Movie detail modal with full description, cast, release date, rating, and a link to find the trailer on YouTube
- Responsive mobile layout, hover effects, subtle entrance animations, and keyboard support
- No backend, database, API key, or package installation required

## Run the project

1. Download and extract the ZIP.
2. Open the `verdant-cinema` folder.
3. Double-click `index.html` to open it in your browser.

For the best experience, use a current version of Chrome, Firefox, Safari, or Edge. An internet connection is required for Google Fonts and remote poster images.

## Project structure

```text
verdant-cinema/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Customization

The movie catalogue is stored in the `movies` array in `script.js`. Each item contains its title, year, rating, genres, description, poster image URL, release date, cast, and trailer search link. Add or edit entries there to customize the collection.

## Credits and image availability

Poster artwork is loaded from TMDB image URLs. The website is an independent educational/demo project and is not affiliated with TMDB or the films shown. Remote image availability can change. No movie playback is included.
