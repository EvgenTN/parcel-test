<template>
  <div class="container">
    <Card/>
  </div>
</template>

<script>
import Card from './components/Card'
export default {
  components: {
    Card
  },
  data() {
    return {
      bundler: 'parcel'
    }
  }
}
</script>
