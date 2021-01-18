<template>
    <div class="vue-tempalte">
        <form @submit.prevent="userLogin">
            <h3>Login</h3>

            <div class="form-group">
                <label>Email</label>
                <input type="email" v-model="user.email" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="user.password" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Se connecter</button>

            <p>Pas encore inscrit? <router-link :to="{name: 'register'}">S'inscrire?</router-link></p>
        </form>
    </div>
</template>

<script>
import { firebaseLogin } from '@/js/firebase'

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    userLogin () {
      firebaseLogin(this.user.email, this.user.password)
    }
  }
}
</script>
