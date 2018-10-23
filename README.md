<h1>PFDb: Your Personal Film Database</h1>

[Back End Repo](https://github.com/ebrault/film-diary-api/)
[Front End Deployment](https://ebrault.github.io/film-diary-client/)
[API Deployment](https://film-diary-ebrault.herokuapp.com)

<h1>Description</h1>
This is a simple front-end client responsible for allowing a user to sign up, sign in, change password, sign out, and perform simple CRUD actions (Create, Index, Show, Update, Destroy) by sending AJAX requests to a Ruby On Rails based API using RESTful routes and displaying the responses.

<h1>Technologies Used</h1>
* JavaScript
* jQuery
* AJAX
* HTML5
* CSS3




<h1>Development History</h1>
<h4>The development period lasted from 18/10/2018 until 23/10/2018</h4>
* Preliminary Work: Completed the Full Stack Project practice for planning, completing wireframes, ERDs, and user stories for project. In addition, downloaded templates from General Assembly, created individual repos for front and back end, and deployed initial commits to both Heroku and GH pages.
* Day 1 (18/10/2018): The project began by building the back end (API) using Ruby On Rails. Starting from the Rails API Template provided by General Assembly, I scaffolded out the single resource, checked the database files for consistency, and added the initial columns to the table through migration. I refactored the code slightly to make it more to my liking, and wrote curl scripts in order to test CRUD actions on the single resource. Once these actions were successful, I then wrote curl scripts to test the CRUD actions for authentication. Following this, I added relationship macros the the film resource and the user (e.g., user has many films, films belong to user). I figured the best way to protect user information at this time was to make the film controller inherit from protected controller rather than Open Read controller. I then retested all the film curl scripts without authentication to 401 unauthorized errors, and with authentication to the various 200 OK status codes. At this point I decided that my back end was complete, commited it to Heroku, and moved on to building the front end. Starting from the Browser Template provided by General Assembly, I began by coding the HTML, referring back to the Get Form Fields configuration file in order to structure submission forms. I created forms and buttons for all CRUD actions based on the back end. From here, I built out the user event scripts in JavaScript / jQuery / AJAX starting with the AJAX requests based on the back end, the events based on the AJAX requests, and the UI responses based on the events success or failure. I then added the relevant events to the event handlers in the app.js file. I ran both servers and tested in order to make sure authentication actions were working as expected. Following this, I repeated the process for my resource, building out the film event scripts in JavaScript / jQuery / AKAX starting with the AJAX requests based on the back end, the events based on the AJAX requests, and the UI responses based on the events success or failure. I then retested the website to ensure that the front end and back end were communicating with each other locally and that user could CRUD the resource after signing in. Following this, I committed both repos to GitHub, redeployed both sites to GH-pages and Heroku, and tested the live version to success. At this point I was essentially finished with the project and ready to move on to stretch goals
* Day 2 (19/10/2018): This day was spent working on what I had considered for my v2 of the app during the planning process, which was having multiple resources that the user could CRUD on. Since films have only one director (typically) but directors have many films, and so on for other characteristics, I began building out these multiple resources. I soon ran into issues finding out that once these other resources were created the user could not CRUD on them unless the user had ownership over them (i.e. films belong to users, users have many films, directors have many films, films belong to directors, users have many directors, directors belong to user.) Three additional resources were scaffolded out in an attempt to work around this, but I was unsuccessful.
* Weekend (20/10/2018 - 21/10/2018): No work was done on the app over the weekend
* Day 3 (22/10/2018): This day was devoted to reconsidering my planning for the stretch goals, rolling back changes made to the API on Day 2, and attempting to integrate a third party API. I sat down with an instructor for a 1-on-1 to devise a new plan and decided the most prudent course of action would be to utilize a third party API to control the data that would be returned to my app. I registered with the API and received a key and was able to perform some basic authentication. The rest of the day was devoted to troubleshooting authentication and reading API documentation in an attempt to integrate it into my app. Later on, I found a Rails wrapper someone had already developed for this API and chose to integrate it into further versions of my app.
* Day 4 (23/10/2018): This day was devoted to styling my V1 in order to make it more presentable and integrating the third party API / wrapper into my app.

<h1>Changes To Be Made In Future Iterations</h1>
* Successfully Integrate Third Party API including remote auth
* Create User Profiles so that users have more CRUD ability (create lists, write reviews)
* Utilize Open Read Controller / develop website into a social media site

<h1>ERD</h1>
![ERD](https://i.imgur.com/ySUfA1E.jpg)

<h1>Wireframes</h1>
![Wireframe 1](https://i.imgur.com/fpUgIqk.jpg)
![Wireframe 2](https://i.imgur.com/e8lIM7G.jpg)
![Wireframe 3](https://i.imgur.com/8rPny7N.jpg)

<h1>User Stories</h1>
- As a user, I want to be able to create an account
- As a user, I want to be able to add films to a personal database
- As a user, I want to be able to delete films from a personal database
- As a user, I want to be able to get all/one films from a personal database
- - As a user, I want to be able to rate films in a personal database
- As a user, I want to be able to change film details in a personal database
- As a user, I do not want other users to have access to my data
- As a user, I want to be able to get films by certain characteristics (get films by personal rating, get films by director, get films by country, get films by language, get films by release date, get films by genre, get films watched in a timeframe, etc.)
