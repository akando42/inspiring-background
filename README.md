[DEMO](https://chrome-background.netlify.app)

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

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org)

```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

## TODO
#### TailwindCSS and VUEJS
[X] Layout Accoriding to DESIGN.
[X] Form Asking for User Name.
[X] Animation Ease In and Out of Scene.
[X] Add Black Overlay over Image.
[X] Form Asking Three Top Things That Motivate You

#### VUE STORE 
[X] Store Current User Name 
[X] Pulling Motivation Quotes from GET request ...  API Endpoint: https://type.fit/api/quotes
[X] Pulling system date and time from Javascript: 
``` 
var min = new Date().getMinutes()
var hour = new Date().getHours()
var date = new Date().getDate();
var month = new Date().getMonth()+ 1;
var year = new Date().getFullYear();
```

[X] Pulling local weather using LAT & LON FROM BROWSER: 
```

navigator.geolocation.getCurrentPosition(function(location) {
  console.log(location.coords.latitude, location.coords.longitude);});
```
API OPEN Weather ENDPOINT: 
https://api.openweathermap.org/data/2.5/find?lat=21.037446&lon=105.817205&cnt=1&appid=6ffc3493fb6ee96d233ce5825d03a26e

```
$ curl --request GET \
  --url 'https://api.climacell.co/v3/weather/realtime?lat=21.037446&lon=105.817205&unit_system=si&fields=temp&apikey=EKsI2JvRPj8S1MNDCjleFOQHyZnoLt1m'
```


EKsI2JvRPj8S1MNDCjleFOQHyZnoLt1m


[ ] Pulling Motivation Views with Keywords: Hot Girl, Beach Front, Penthouse, Space from Unsplash
API Endpoints...
https://source.unsplash.com/1600x900/?girl
https://source.unsplash.com/1600x900/?penthouse
https://source.unsplash.com/1600x900/?space
https://source.unsplash.com/1600x900/?beachfront
