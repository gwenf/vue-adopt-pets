<template>
  <div>
    <h1>Cats for Adoption</h1>
    <b-table striped hover :items="cats" />
  </div>
</template>

<script>
import cats from '@/data/cats'

export default {
  data() {
    return {
      cats
    }
  }
}
</script>
