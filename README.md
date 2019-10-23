# GitHubOAuth
A node.js application to authenticate using GitHub - OAuth2 authentication

A sample Node.js app created to demonstrate how third party login authentication can be implemented using OAuth2. This app has the feature to authenticate with GitHub.

### Installation:

Download this repository to your local machine, navigate to the root folder and run the following command.

#### `yarn install` or `npm install`

The above command will install the dependencies required to run the app. 

Once the dependencies are installed, run the application with the following command

### `npm start`

This will automatically open the application in the following URL 'http://localhost:8080'


In the homepage, click Login with Github button. Clicking on the button will navigate the user to the GitHub authentication page where user will be either asked to login to the GitHub or asked to authenticate the http://localhost:8080 application.
Doing so will authenticate the app with GitHub. The authentication can be verified if the next screen shows 'Welcome, <your github name>'
