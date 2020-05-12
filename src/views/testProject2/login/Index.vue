<template>
  <div>
    login
  </div>
</template>
<script>
import * as apiServices from '@/services/api'

export default {
  name: 'Login',
  methods: {
    login () {
      apiServices.login().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.login()
  }
}
</script>