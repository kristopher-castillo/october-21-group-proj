# Flask React Project

This is the starter for the Flask React project.

## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

## Deploy to Heroku

1. Before you deploy, don't forget to run the following command in order to
ensure that your production environment has all of your up-to-date
dependencies. You only have to run this command when you have installed new
Python packages since your last deployment, but if you aren't sure, it won't
hurt to run it again.

   ```bash
   pipenv lock -r > requirements.txt
   ```

2. Create a new project on Heroku
3. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
4. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
5. Run

   ```bash
   heroku login
   ```

6. Login to the heroku container registry

   ```bash
   heroku container:login
   ```

7. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
8. Push your docker container to heroku from the root directory of your project.
   (If you are using an M1 mac, follow [these steps below](#for-m1-mac-users) instead, then continue on to step 9.)
   This will build the Dockerfile and push the image to your heroku container registry.

   ```bash
   heroku container:push web -a {NAME_OF_HEROKU_APP}
   ```

9. Release your docker container to heroku

      ```bash
      heroku container:release web -a {NAME_OF_HEROKU_APP}
      ```

10. set up your database

      ```bash
      heroku run -a {NAME_OF_HEROKU_APP} flask db upgrade
      heroku run -a {NAME_OF_HEROKU_APP} flask seed all
      ```

11. Under Settings find "Config Vars" and add any additional/secret .env
variables.

12. profit

### For M1 Mac users

(Replaces **Step 8**)

1. Build image with linux platform for heroku servers. Replace
{NAME_OF_HEROKU_APP} with your own tag:

   ```bash=
   docker buildx build --platform linux/amd64 -t {NAME_OF_HEROKU_APP} .
   ```

2. Tag your app with the url for your apps registry. Make sure to use the name
of your Heroku app in the url and tag name:

   ```bash=2
   docker tag {NAME_OF_HEROKU_APP} registry.heroku.com/{NAME_OF_HEROKU_APP}/web
   ```

3. Use docker to push the image to the Heroku container registry:

   ```bash=3
   docker push registry.heroku.com/{NAME_OF_HEROKU_APP}/web
   ```
# Meowdium

Meowdium is an online platform disrupting the feline digital space by providing cats the opportunity to write, publish, share, and discuss knowledge of all types. 

Users are able register for their own accounts, allowing them to publish original written content in the form of pawsts, engage the community through pawments on pawsts, and show their support through catnips. Even without logging into an account, visitors are able to view all pawsts, pawments, and catnips, though they cannot interact.

## Link to live Meowdium site on Heroku

http://meowdium.herokuapp.com/

## Link to wiki docs

https://github.com/kennethmanhonglee/meowdium/wiki

## Discussion of technologies used

Our team utilized a wide variety of technologies in this project. In our back end, 
we relied on Sequelize and PostgreSQL to build and manage our databases. We used Express 
to build and implement interconnected routes. We also used middleware like csurf and 
express validators to secure our routes and provide a smooth user experience. When 
designing the front end, we relied on Pug's powerful and simplified HTML syntax along with 
CSS to create a functional and attractive app. Our skills in DOM manipulation also stand out 
in this project as they allowed us to render features of our site dynamically, encouraging seamless 
navigation and interaction. Finally, we were able to host our site on Heroku so that we might 
share our hardwork with present and future colleagues alike.

## Two stand-out features

* Dynamic comments 
  * Logged-in users are able to post, edit, and delete their own comments. 
    Using DOM manipulation, the comments update dynamically without refreshing 
    the page.
* Dynamic likes
  * All users are able to like posts. Individual users may only like a post 
    once. They may also unlike posts. Using DOM manipulation, the like count 
    updates dynamically.

## Challenges

* Creating the dynamic delete and edit buttons
  * The process of implementing all of the dynamic features was challenging, though 
    it was particularly difficult to create buttons that dynamically edited and deleted content, requiring 
    complex interactions between the front and back ends. Accessing data from the backend 
    to utilize when manipulating the DOM required code that sometimes felt overly long 
    or roundabout. We found the it necessary, and very helpful, to dynamically 
    generate HTML elements when implementing these features. This process, though tedious,
    gave us finite control of what was rendering from our event listeners.
* Styling a site as a team
  * Styling our site was a challenge, not necessarily from a technical standpoint, 
    but from the organizational complexities that arise when a group has to produce a 
    unified full-stack product in a short period time. We were able to overcome this 
    challenge through regular communication and by relying on each other to provide honest 
    feedback. Drafting a wireframe early on in the planning process was also 
    invaluable when it came to developing a harmonious set of pages.
