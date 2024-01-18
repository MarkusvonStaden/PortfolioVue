# SpotiVote

## Voting System for Spotify

### Overview

This project is a voting system for Spotify to simplify music selection at events. The idea is that every guest can vote for songs on a website. When the current song is finished, the most popular song is played next and the votes for this song are reset.

### Technical Details

- #### Frontend

  The front end is developed in Vue. It makes it possible to see the currently most popular songs, search for songs and vote for these songs. Votes are saved in the session so that they can be revoked.

- #### Backend

  The backend was written in Python. It allows users to log in to Spotify via oAuth2. Once a user is logged in, the endpoints for searching and voting are available. The backend also controls music playback via the Spotify API.

  The songs and votes are stored in a Redis database.

  I am currently working on converting the backend to ExpressJS in order to gain experience here.
