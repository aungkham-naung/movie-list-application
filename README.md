# Movie-List Application

## Overview

Movie List Application is a dynamic and interactive platform for movie enthusiasts to explore, catalog, and manage their favorite films. Powered by React and Vite, this single-page application fetches real-time movie data from the OMDb API, offering users an engaging and responsive experience for browsing, reviewing, and tracking watched movies.

State management and data caching with localStorage ensure that your movie lists are preserved even after closing the app, creating a seamless user experience.

## Features

- **Real-Time Movie Data**: Integrates the OMDb API to retrieve up-to-date information on movies, ensuring users have access to current and comprehensive movie details.
- **Interactive Dashboard**: Offers a responsive interface for easy movie exploration and cataloging.
- **Customizable "Watched" List**: Enables users to add movies to a personalized "watched" list, offering an easy way to keep track of movies they have seen.
- **Persistent Data Storage**: Uses localStorage to cache movie data locally, allowing users to resume their browsing experience and maintain their watched list even after closing the application
- **Built-in Rating System**: Includes a star rating component for easy user reviews and ratings.

## Installation Guide

Follow these steps to set up and run the Pizza Menu application locally:

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v14 or above)
- **npm** (comes with Node.js) or **Yarn** as the package manager

### Steps

1. **Clone the Repository**:
   Clone the repository to your local machine using:
   ```bash
   git clone https://github.com/aungkham-naung/movie-list-application.git
   ```
2. **Navigate to Project Directory**:

   ```bash
   cd movie-list-applicaiton
   ```

3. **Install Dependency**:
   Install the required dependencies using npm or yarn:

   ```bash
     npm install
   ```

   or

   ```bash
     yarn install
   ```

4. **Run Server**:
   Start the development server with Vite:

   ```bash
     npm run dev
   ```

   or

   ```bash
    yarn dev
   ```

## Technology Stack

- **Front-End**: ReactJs

- **Back-End**: External API: [https://www.omdbapi.com/](https://www.omdbapi.com/)

## Project Structure

```plaintext
movie-list-application/
│
├── index.html                   # Root HTML file for the app
├── node_modules                 # Installed dependencies (auto-generated)
├── package-lock.json            # Locks dependencies to specific versions
├── package.json                 # Project metadata, scripts, and dependencies
├── README.md                    # Project documentation
├── vite.config.js               # Configuration file for Vite (build tool)
├── public/                      # Public assets available to the app
|── src/                         # Main source code for the application
│   ├── App.jsx                  # Main app component, sets up app routes
│   ├── main.jsx                 # Entry point for React, renders the app
│   └── index.css                # Global Stylesheet for the application
│   ├── custom-hooks/            # Reusable custom react hooks
|        ├----
|
│   ├── navbar-folder/           # Reusable nav components
|        ├----
|
│   ├── watchedbox-folder/       # Reusable watched components
|        ├----
|
│   ├── movelistbox-folder       # Reusable list components
|        ├----
|
│   ├── utils-folder/            # Reusable UI components
|        ├----
|        ├---- star-component    # Resuable star component for reviews

```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
