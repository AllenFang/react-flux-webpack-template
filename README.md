# react-flux-webpack-template
### Overview
It's a react and flux template with webpack, it will be improved consistently in future.

This package include these features
- Written by ECMAScript 6.
- A simple react and flux demo.
- A workflow with webpack, include javascript and style bundling, live reload, vendor handling ...etc.
- This demo written by es6 and use babel to transfer to es5.
- Use Bootstrap as css framework and integrated with webpack also.
- Perform async request to backend in flux architecture.
- Use [fetch](https://github.com/github/fetch) to perform a http request not the jquery.
- Use express as a pure backend restful service.
- A components testing with Jest.
- Integrate eslint with webpack.


### Development

At first, execute following commands for preparing development.

```
$ git clone https://github.com/AllenFang/react-flux-webpack-template.git
$ cd react-flux-webpack-template
$ npm install
$ bower install  #make sure bower has been installed in global.
```
Use following command to start backend server(restful)
```
$ npm run start
```
Open another terminal and start webpack-dev-server
```
$ npm run dev
```
open this url in your browser
```
http://localhost:8080/
```

### Production

```
$ npm run prod
```

### Test
```
$ npm test
```


### Todo & Roadmap
- Maybe change http request library, I consider [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) will be batter.

- Include other flux implementations, like [alt](https://github.com/goatslacker/alt).

- Add [immutable.js](https://github.com/facebook/immutable-js) to this architecture.

- Flux testing not yet finish.

- Improve flux demo.
