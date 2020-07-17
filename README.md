# PersonalWebsite-YingTuo

<https://tuoying.herokuapp.com>

## issues
 - **Issue 1** After I create-reate-app by using `npx create-react-app my-app`, I try to run my server by `npm start`, it throw an error:
```javascript 
events.js:174 throw er; 
  // Unhandled 'error' event ^ Error: getaddrinfo ENOTFOUND x86_64-apple-darwin13.4.0
```
I sloved this by command `unset HOST` from [Issue1](https://github.com/facebook/create-react-app/issues/5863)

 - **Issue 2** In `App.js`
 I coded and error reported:
```javascript 
  class App extends Component () {...}
     TypeError: Cannot set property 'props' of undefined
```
I sloved this from [Issue2](https://stackoverflow.com/questions/38484490/react-router-typeerror-cannot-set-property-props-of-undefined)
```javascript 
   class App extends Component {...}
```
In object-oriented programing it's called inheritance, when I extend/inherit a class to use its component, you called by its name and it's not function. Here I extend Component class not function, that's why I don't use parenthesis and also function need a parameter.

  - **Issue 3** 
  After I changed the name of `src/components/portfolioList` to `src/components/PortfolioList`, I filed to develope my App on heroku:
  ```javascript 
    remote: npm ERR! code ELIFECYCLE
    remote: npm ERR! errno 1
    remote: npm ERR! mysite@0.1.0 build: `react-scripts build`
    remote: npm ERR! Exit status 1
    remote: npm ERR! 
    remote: npm ERR! Failed at the mysite@0.1.0 build script.
    remote: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
    remote: 
    remote: npm ERR! A complete log of this run can be found in:
    remote: npm ERR!     /tmp/npmcache.u1Pt3/_logs/2020-06-12T02_15_56_993Z-debug.log
    remote: 
    remote: -----> Build failed
    remote:        
    remote:        We're sorry this build is failing! You can troubleshoot common issues here:
    remote:        https://devcenter.heroku.com/articles/troubleshooting-node-deploys
    remote:        
    remote:        Some possible problems:
    remote:        
    remote:        - Node version not specified in package.json
    remote:          https://devcenter.heroku.com/articles/nodejs-support#specifying-a-node-js-version
    remote:        
    remote:        Love,
    remote:        Heroku
    remote:        
    remote:  !     Push rejected, failed to compile Node.js app.
    remote: 
    remote:  !     Push failed
    remote: Verifying deploy...
    remote: 
    remote: !	Push rejected to tuoying.
    remote: 
    To https://git.heroku.com/tuoying.git
    ! [remote rejected]   master -> master (pre-receive hook declined)
    error: failed to push some refs to 'https://git.heroku.com/tuoying.git'
  ```
  After I changed it back to `src/components/portfolioList`, it works! But I do not know why...