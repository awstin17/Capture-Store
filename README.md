# Snapz-frontend
Snapz is a typescript based hybrid mobile app that allows you to take and save pictures to your profile with title and description. The backend API uses MongoDB as a data source for a loopback api server. The corresponding backend server can be found at: 

```
https://github.com/awstin17/Snapz-backend
```

Getting started
----------------------------------

#### Prerequisites: 

Please make sure you have all these installed on your local machine before starting:

* Node JS 8.11.2 (at least)
* NPM 5.6 (at least)
* Ionic CLI 4.1.2 (at least)

#### Installation:

Clone the remote repository

```
https://github.com/awstin17/Snapz-frontend.git
```

From within the `Snapz-frontend` directory, run `npm install` to install all dependencies.

```
npm install
```

#### Serving App Locally

Use `ionic serve` to get a local copy running
and voila! There should now be an instance of the app on:

```
http://localhost:8100/
```
Just open a web browser and copy and paste that in to view.

## Branches

There are two important branches this project has:

1) Master - This branch has all the code to make the app a hybrid mobile app with native camera functionality built in (Thanks to [Cordova](https://cordova.apache.org/)).
2) Snapz-Demo - This branch has all the code to make this app a progressive web app that works in a browser.

### So, what's the difference?

- Master is meant to run like a native application would on a phone, but as of right now, I cannot demo as it only works through the [ionic devApp](https://ionicframework.com/docs/appflow/devapp/). 

- Snapz-demo exists so any device can open a browser and use the app like it is supposed to be used. It's the branch that is deployed to the demo site [here](https://snapz-demo.firebaseapp.com/).

**Snapz-demo is by far the branch you will want to serve and view. It has the most updated stylings and functionality that the master branch currently does not have.**

## Built With

* [Ionic](https://ionicframework.com/)
* [Cordova](https://cordova.apache.org/)
* [Angular](https://angular.io/)
* [MongoDB](https://www.mongodb.com/)
* [Loopback](http://loopback.io/)
