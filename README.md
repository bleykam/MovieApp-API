# MovieApp-API
BrainStation Hackathon Project with @ThePinkFedora

This is the server-side code for the MovieApp. It provides an API for managing a movie watchlist.

### Getting Started

To get started with the server, follow these steps:

   Clone the repository:

    git clone https://github.com/bleykam/MovieApp-API.git

   Install the dependencies:

    cd MovieApp-API
    npm install

  Run the server:
  
    npm start

The server will start running on http://localhost:8080.

### API Endpoints

The server exposes the following API endpoints:
GET /watchlist

    Description: Get the current movie watchlist.
    Request Method: GET
    Response: JSON object containing the movie watchlist.

POST /watchlist

    Description: Add a movie to the watchlist.
    Request Method: POST
    Request Body: JSON object with the movie ID (id property).
    Response: JSON object containing the updated movie watchlist.

DELETE /watchlist/:id

    Description: Remove a movie from the watchlist.
    Request Method: DELETE
    Request Parameter: id - ID of the movie to be removed.
    Response: JSON object containing the updated movie watchlist.

### Dependencies

The server uses the following dependencies:

    cors - Enables Cross-Origin Resource Sharing (CORS) middleware.
    express - Fast, unopinionated, minimalist web framework for Node.js.
