### Set up the app locally

In the root folder create a new file `_env.sh` and add:

```sh
export githubClientSecret=YOUR_CLIENT_SECRET
```

In client/public/app/routes.js:

```javascript
app.config(['$authProvider', function($authProvider){
  $authProvider.github({
    url: '/auth/github',
    clientId: UPDATE_CLIENT_ID
    redirectUri: window.location.origin
  });
  console.log(window.location.origin);
}]);
```

In the command line run: 

```sh
source _env.sh
gulp
```

#### all set!