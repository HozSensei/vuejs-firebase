<template>
  <div>
    <form @submit.prevent="userRegistration">
        <h3>Inscription</h3>
        <div class="form-group">
            <label>Nom</label>
            <input type="text" v-model="user.name" />
        </div>

        <div class="form-group">
            <label>Email</label>
            <input type="email" v-model="user.email" />
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="user.password" />
        </div>

        <button type="submit">S'enregister</button>

        <p>Déja enregistrer? <router-link :to="{name: 'login'}">Se connecter?</router-link></p>
    </form>
  </div>
</template>

<script>
import { firebaseRegister } from '@/js/firebase'

export default {
  data () {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    userRegistration () {
      firebaseRegister(this.user.email, this.user.password, this.user.name)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
