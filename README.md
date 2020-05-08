#Beatles Front-End Readme

# The Beatles' Lyrics Database

##### This app is designed to be a resource to organize and view The Beatles' extensive cataolog of music. We specifically designed this application with users in mind. Users can search the API we built to view Beatles songs and their lyrics. We also decided to include each band member's solo catalogs as well. Users can then make updates to song name, delete songs, and add new songs. If a user decised to add a new song the "artist" value must be one previously used.

### Project by:
- [Stu Kelly](sbkelly9@gmail.com)
- [Dami Komolafe](damik94@gmail.com)
- [Scott Kutler](scott.kutler@gmail.com)
#

### Screenshot

![Beatles API Front End Screenshot ](https://github.com/skut21x-ga/beatles-mern-project/blob/master/src/img/screenshot.png?raw=true" "Screenshot")

#
#### Deployed URL: beatlesapi.netlify.app

### How to Install

##### In order to install the app clone it down from the repository on GitHub. Change into the beates-mern file and run npm install. Then run npm start to host it on a local server.

#

### How to Login / Create User
##### We utilized JWT on our backend to authenticate users. Once authenticated, users can traverse our navigation bar to view all Beatle's artists and also enter new song lyrics. Without logging in, this isn't possible. 
##### To login to a test account, use the credentials "testuser@google.com" for the username and "password" for the password". To create a new user, type in a full e-mail address and a password into the signup field. If signup is succesful, it will automatically log you in. 

#### Dependencies/Stacks Used

##### For this project we firstbuilt an API using Node, Express, and Mongoose that serves JSON data. We then utilized the following technologies for this front-end projet : React, React-Router, Material-UI, Axios, Passport, NPM , & Node. The front end was built using React that updates the UI and makes requests to the API. We used elements from Material-UI for a smoother UI. We also have a Storybook Component Library [available](https://skut21x-ga.github.io/Beatles%20Storybook/?path=/story/components--website-banner)

#### Project Status/Tracking

##### For this project we tracked our progress using Trello. ![Trello Screenshot](https://github.com/skut21x-ga/beatles-mern-project/blob/master/planning/Trello%204-24-20%20Screenshot.png?raw=true" "Screenshot") The public link to our tracker is available at: https://trello.com/b/ntYWVGyf/sei-36-project-8

#

### Notes/Resources

##### This project was built as part of a group project for General Assembly's immersive coding bootcamp. Code from https://git.generalassemb.ly/ga-wdi-lessons/react-walk-it-out-front-end was utilized for some of our forms. MaterialUI was utilzied for some of our UI components. Dedicated to John, Paul, George and Ringo.
