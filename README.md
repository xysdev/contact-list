# CONTACT LIST

The scope of this project is to create a simple contact list with [Random User API](https://randomuser.me/).<br/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br/>

**Live Demo:** https://xysdev.github.io/contact-list

## **Table of Contents**

- [What Used In This Project](#what-used-in-this-project)
- [Available Scripts](#available-scripts)
  - [yarn start](#yarn-start)
  - [yarn test](#yarn-test)
  - [yarn build](#yarn-build)
  - [yarn eject](#yarn-eject)
- [Deployment](#deployment)
  - [Docker](#docker)
  - [Gitlab CI/CD](#gitlab-CI-CD)
<a name="what-used-in-this-project"></a>

## **What Used In This Project**

✅ Context API With Thunk Pattern<br />
✅ [Flux Architecture](https://facebook.github.io/flux/docs/in-depth-overview/)<br />
✅ Unit Testing<br />
✅ Responsive<br />
✅ Git CI/CD<br />
✅ Docker<br />
✅ [BEM](http://getbem.com/)<br />
✅ Sass<br />



<a name="available-scripts"></a>

## **Available Scripts**

In the project directory, you can run:

<a name="yarn-start"></a>

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

<a name="yarn-test"></a>

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

<a name="yarn-build"></a>

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

<a name="yarn-eject"></a>

#### `yarn eject`

Note: this is a one-way operation. Once you `eject`, you can’t go back!

<a name="deployment"></a>

## **Deployment**
<a name="docker"></a>

### **Docker**
In order to test the Docker container you need to be able to perform docker commands. Familiarity with building and running images is preferred.<br/>
**Build and run Docker image:**
1. Build docker image
```
docker build -t myImage .
```
2. Run image and add ENV variables to container
```
docker run --name myapp -p 8080:3000 
```
<a name="gitlab-CI-CD"></a>

### **Gitlab CI/CD**
Pushing to the master branch will run the Gitlab CI/CD and the project will be deployed at : <br/>
https://xysdev.github.io/contact-list