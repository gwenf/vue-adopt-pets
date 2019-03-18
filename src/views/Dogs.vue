<template>
  <div>
    <h1>Dogs for Adoption</h1>
    <b-table striped hover :items="dogs" />
  </div>
</template>

<script>
import dogs from '@/data/dogs'

export default {
  data() {
    return {
      dogs
    }
  }
}
</script>
