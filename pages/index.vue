<template>
  <div class="container-fluid bg-cover h-screen w-screen grid grid-cols-3 gap-4 p-2" style="background-image: url('https://source.unsplash.com/1600x900/?hot%20girl')">
    <div class="h-12 rounded-md pl-16 pt-4 bg-white-100 text-white font-extrabold text-md">
      <div> Dec 2, 2020 </div>
      <div> 08:24 AM </div>
    </div>
    
    <div class="h-16 rounded-md flex items-center justify-center text-white font-extrabold text-3xl pt-3">
      Motivational Views
    </div>

    <div class="h-12 rounded-md pr-16 pt-4 bg-white-100 text-white font-extrabold text-right">
      <div class=""> 32°C </div>
      <div class=""> Cloudy </div>
    </div>
  </div>
</template>

<script>
export default {}
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
