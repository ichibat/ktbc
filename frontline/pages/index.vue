<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        frontline
      </h1>
      <h2 class="subtitle">
        axios test started
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';

import axios from "axios";
import Joke from '../../components/Joke'
import SearchJokes from '../../components/SearchJokes'

export default {
  components: {
    Joke,
    SearchJokes
  },
  data() {
    return {
      jokes: []
    }
  },
  async created() {
    const config = {
      headers: {
        'Accept': 'application/json'
      }
      }

      try {
          const res = await axios.get('https://icanhazdadjoke.com/search', config);
          this.jokes = res.data.results;
      } catch (error) {
        console.log(err)
      }
  },
  methods: {
    async searchText(text){
      const config = {
      headers: {
        'Accept': 'application/json'
      }
      }

      try {
          const res = await axios.get(`https://icanhazdadjoke.com/search?term=${text}`, config);
          this.jokes = res.data.results;
      } catch (error) {
        console.log(err)
      }
    }
  },
  head(){
    return {
      title: 'Dad Jokes',
      meta: [
        {
        hid: 'description',
        name: 'description',
        content: 'Best place for corny dad jokes'
        }
      ]
    }
  }
};
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
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
