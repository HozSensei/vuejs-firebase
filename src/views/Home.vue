<template>
    <div class="vue-tempalte">
      <div id="nav">
        <router-link to="/">Home</router-link>
      </div>
      <h3>Welcome</h3>
      <template v-if="user">
        <p>{{user.displayName}}</p>
        <p>{{user.email}}</p>
      </template>
      <button type="submit" @click="logOut()">Se déconnecter</button>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data () {
    return {
      user: null
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user
      } else {
        this.user = null
      }
    })
  },
  methods: {
    logOut () {
      firebase.auth().signOut().then(() => {
        firebase.auth().onAuthStateChanged(() => {
          this.$router.push('login')
        })
      })
    }
  }
}
</script>
