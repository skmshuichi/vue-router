<template>
  <div class="post">
    <h1>This is an Post Show page</h1>
    <div>{{ $route.params.id }}</div>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$route)
  }
}
</script>