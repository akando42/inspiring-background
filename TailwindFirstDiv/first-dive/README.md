# first-dive

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

## TODO

#### TailwindCSS and VUEJS
[ ] Layout Accoriding to DESIGN.
[ ] Form Asking for User Name.
[ ] Animation Ease In and Out of Scene.

#### VUE STORE 
[ ] Store Current User Name 
[ ] Pulling Motivation Views with Keywords: Hot Girl, Beach Front, Penthouse, Space from Unsplash
API Endpoints...
https://source.unsplash.com/1600x900/?girl
https://source.unsplash.com/1600x900/?penthouse
https://source.unsplash.com/1600x900/?space
https://source.unsplash.com/1600x900/?beachfront

[ ] Pulling Motivation Quotes from GET request ...  API Endpoint: https://type.fit/api/quotes
[ ] Pulling system date and time from Javascript: 
``` 
var min = new Date().getMinutes()
var hour = new Date().getHours()
var date = new Date().getDate();
var month = new Date().getMonth()+ 1;
var year = new Date().getFullYear();
```

[ ] Pulling local weather using LAT & LON FROM BROSWSER: 
```

navigator.geolocation.getCurrentPosition(function(location) {
  console.log(location.coords.latitude, location.coords.longitude);});
```

API Weather ENDPOINT: 
https://api.openweathermap.org/data/2.5/find?lat=21.037446&lon=105.817205&cnt=1&appid=6ffc3493fb6ee96d233ce5825d03a26e
 