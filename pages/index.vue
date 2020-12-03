<template>
  <div 
    class="
      container-fluid bg-cover
      bg-gradient-to-r from-black-100 via-black-350 to-black-700
      h-screen w-screen 
      grid grid-cols-6 gap-4 p-2
    " 
    style="background-image: url('https://source.unsplash.com/1600x900/?hot%20girl')"
  >
    <div class="h-12 rounded-md pl-16 pt-4 bg-white-100 text-white font-extrabold text-md col-span-1">
      <div v-if="name !== null"> Dec 2, 2020 </div>
      <div v-if="name !== null"> 08:24 AM </div>
    </div>
  
    <div class="h-16 rounded-md flex items-center justify-center text-white font-extrabold text-3xl pt-3 col-span-4">
      Motivational Views
    </div>

    <div class="h-12 rounded-md pr-16 pt-4 bg-white-100 text-white font-extrabold text-right col-span-1">
      <div v-if="name !== null" class=""> 32°C </div>
      <div v-if="name !== null" class=""> Cloudy </div>
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
      <div 
        v-if="name != null"
        class="text-white font-bold text-5xl"
      > Hi, {{ name }} </div>
    </form>

    <div class="h-12 col-start-3 col-span-2 justify-center nter text-white">
      <div class="italic text-center text-xl" v-if="name !== null"> A House Divided Against Itself Can Not Stand </div>
      <div class="italic text-right mt-2" v-if="name !== null"> Abraham Lincoln </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      textInput: '',
      name: null
    }
  }, 
  methods: {
    send: function(){
      this.name = this.textInput;
    }
  }

}
</script>

<style>
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
