# Getting Started with django REST API with react
Technology used for this project :
React.js is a front-end JavaScript library used to build interactive user interfaces for applications.
Django is a Python open-source backend framework that is built solely on a model-template-view architecture.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Available Scripts

In the project directory, you can run:

### `Create django virtual environment

Go to django-rest-api directory and run this command:
python -m venv <virtual env name>

Go to virtual environment directory and run this command to install library:
python -m pip install django djangorestframework django-cors-headers

### `Start django virtual environment

Go to the env directory, and run this command "env\Scripts\activate". After running this command, you should see the name of the virtual environment enclosed in brackets.

### Start Backend

Go to backend directory and run this command:
py manage.py runserver

### Start Frontend

Go to frontend directory and run "npm start"
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Migrate Database

Go to backend directory and run this command:
py manage.py makemigrations
py manage.py migrate
py manage.py migrate --run-syncdb (generate new local default sqlite database)





