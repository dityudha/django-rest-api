# Getting Started with django REST API with react
Technology used for this project:<br/>
React.js is a front-end JavaScript library used to build interactive user interfaces for applications.<br/>
Django is a Python open-source backend framework that is built solely on a model-template-view architecture.<br/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Available Scripts

In the project directory, you can run:

### Create django virtual environment

Go to django-rest-api directory and run this command:<br/>
python -m venv <virtual env name>

Go to virtual environment directory and run this command to install library:<br/>
python -m pip install django djangorestframework django-cors-headers

### Start django virtual environment

Go to the env directory, and run this command "env\Scripts\activate".<br/>
After running this command, you should see the name of the virtual environment enclosed in brackets.

### Start Backend

Go to backend directory and run this command:<br/>
py manage.py runserver

### Start Frontend

Go to frontend directory and run "npm start"<br/>
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Migrate Database

Go to backend directory and run this command:<br/>
py manage.py makemigrations<br/>
py manage.py migrate<br/>
py manage.py migrate --run-syncdb (generate new local default sqlite database)<br/>





