
# Jumpstarter

Jumpstarter is Kickstarter clone that allows users to post their own projects and receive support through crowdfunding.

Users are able register for their own accounts, allowing them to create their own projects with custom funding goals. Other registered users are then able to pledge funds towards these projects to help them meet their goal. User funds are tracked in their profile where they can be conveniently increased. Users without accounts are still able to view projects, which are organized by category and searchable by title.

## Link to live Jumpstarter site on Heroku

http://jumpstarter21.herokuapp.com/

## Link to wiki docs

https://github.com/kristopher-castillo/october-21-group-proj/wiki

## Discussion of technologies used

Our team utilized a wide variety of technologies in this project. In our back end, 
we relied on Flask-SQLAlchemy to manage our database. We used Flask 
to build and implement interconnected routes. We also used WTForms to provide seamless backend validations to our forms. When 
designing the front end, we relied on React's powerful HTML syntax along with 
CSS to create a functional and attractive app. These technologies were enhanced by our use of Redux to manage and manipulate our state, producing a dynamic final product. Finally, we were able to host our site on Heroku so that we might share our hardwork with present and future colleagues alike.

## Challenges

* Mantaining and manipulating state
  * The React-Redux cycle is a challenging, but rewarding, technology to utlize. As such, we faced several hurdles when managing multiple slices of states, particularly when different components where making simultaneous calls to the backend.
* Integerating a Python-based backend with a JS-based frontend
  * Though Python proved to be a powerful language for building our backend through Flask, managing the movement of data to our Javascript-based frontend was not always seamless. We had to be cautious about issues with parsing data types unique to Python and ensured that we were correctly building our JSON requests.
