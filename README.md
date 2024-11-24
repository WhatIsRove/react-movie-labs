# React Web App Assignment 1

Student name: Grantas Valiukas

Student number: 20065063

## Movie App

### Introduction

This react movie app is a continuation of the work assigned within the movie app labs to create a web app that utilises The Movie Data Base API to retrieve film and movie data and display it accordingly.
During the assignment, more endpoints and features have been considered and applied to the existing application.

### Endpoints

This is a list of the currently used endpoints and their features
- /                     
A homepage that displays list of current discoverable movies
- /movies/upcoming      
Displays list of currunt upcoming movies * **new** *
- /movies/now_playing   
Displays list of now playing movies * **new** *
- /movies/top_rated     
Displays list of top rated movies * **new** *

- /movies/favourites    
Displays all movies added to favourites by user
- /movies/watchlist     
Displays all movies added to watchlist by user * **new** *

- /movies/:id           
Displays selected specific movie details and reviews
- /movies/:id/credits  
Displays selected movie credits * **new** *
- /movies/:id/recommendations   
Displays selected movie recommendations * **new** *
- /reviews/:id          
Displays selected review from details page
- /reviews/form         
User add review page


### Features

Relavent features that have been added to the application:

- Sort by Genre
- Add to favourites
- Add to watchlist * **new** *
- Write review
- Remove from favourites
- Remove from watchlist * **new** *
- Change web app language * **new** *, this affects: 
    - movie title and details
    - genres
    - images
    - recommendations
    - reviews