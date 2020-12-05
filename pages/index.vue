<template>
  <div 
    class="container-fluid bg-cover" 
    style="background-image: url('https://source.unsplash.com/1600x900/?beach%20house')"
  >
    <div class="
      bg-black opacity-75 h-screen w-screen 
      grid grid-cols-6 gap-4 p-2"
    >
      <div class="h-12 rounded-md pl-16 pt-4 bg-white-100 text-white font-extrabold text-md col-span-1">
        <transition name="fade">
          <div v-if="name !== null" >
            <div> {{month}} {{date}},{{year}} </div>
            <div> {{hours}}:{{minutes}}:{{seconds}} </div>
          </div>
        </transition>
      </div>

      <div class="h-16 rounded-md flex items-center justify-center text-white font-extrabold text-3xl pt-3 col-span-4">
        Motivational Views
      </div>

      <div class="h-12 rounded-md pr-16 pt-4 bg-white-100 text-white font-extrabold text-right col-span-1">
        <transition name="fade">
          <div v-if="name !== null" >
            <div class=""> 32°C </div>
            <div class=""> Cloudy </div>
          </div>
        </transition>
      </div>
    
      <form 
        class="col-start-3 col-span-2 h-12 mt-20 flex justify-center items-center"
        v-on:submit.prevent="send"
      >
        <input 
          class="bg-transparent w-full border-b-4 border-white text-white 
            placeholder-white text-3xl text-center font-bold
            focus:outline-none"
          v-if="name == null"
          v-model="textInput"
          placeholder="What is your name" 
        />  
        <transition name="fade">
          <div 
            v-if="name !== null" 
            class="text-white font-bold text-5xl animate-bounce"
          > 
            Hi, {{ name }} 
          </div>
        </transition>
      </form>

      <div class="h-12 col-start-3 col-span-2 justify-center nter text-white">
        <transition name="fade">
          <div v-if="name !== null" >
            <div class="italic text-center text-xl">
              {{quotes[quoteIndex].text}}
            </div>
            <div class="italic text-right mt-2">
              {{quotes[quoteIndex].author}}
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      textInput: '',
      motivationInput: '',
      name: null, 
      motivations: [],
      months:[
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC'
      ],

      month: 0,
      date: '',
      year: '',

      hours: 0,
      minutes: 0,  
      seconds: 0,

      coordinate: {}, 
      weather: null, 
      quotes: null,
      quoteIndex: 0,
    }
  }, 
  
  mounted(){
    this.$options.timer = window.setTimeout(this.pullTime, 1000)
    this.getWeather()
    this.pullQuotes()
  },

  methods: {
    send: function(){
      this.name = this.textInput;
      
    },

    addMotivation: function(){
      motivations.push(this.motivationInput);
    },

    pullQuotes: async function(){
      this.quotes = await fetch('https://type.fit/api/quotes').then(res => res.json());
    },

    pullTime: function(){
      const now = new Date();
      // Getting Dates
      this.year = now.getFullYear();
      this.month = this.months[now.getMonth()];
      this.date = now.getDate();

      // Getting Hour - Minute - Seconds Info
      this.hours = ('0'+now.getHours()).slice(-2);
      this.minutes = ('0'+now.getMinutes()).slice(-2);
      this.quoteIndex = now.getMinutes()
      this.seconds = ('0'+now.getSeconds()).slice(-2);

      // Fetching time again after 1 second
      this.$options.timer = window.setTimeout(this.pullTime, 1000);
    },

    getWeather: async function(coordinate){
      await navigator.geolocation.getCurrentPosition(pos => {
        this.coordinate = {
          'lat':pos.coords.latitude,
          'long':pos.coords.longitude
        };

        let weatherString = `https://api.openweathermap.org/data/2.5/find?lat=${this.coordinate.lat}&lon=${this.coordinate.long}&cnt=1&appid=6ffc3493fb6ee96d233ce5825d03a26e`;
      
        let weatherPromise = fetch(weatherString);
        
        weatherPromise.then(response => {
          if (response.status !== 200) {
           console.log('Looks like there was a problem. Status Code: ' + response.status);
           return;
          }
          
          response.json().then(data => {
            console.log(data);
            }).catch(error => {
            console.log(error.message);
          })
        });
      }
    }
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1.6s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family:
      'Quicksand',
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
