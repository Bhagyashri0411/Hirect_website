<template>
  <div id="app">
    <input type="checkbox" value="foo" v-model="checked"> foo
    <input type="checkbox" value="bar" v-model="checked"> bar
    <input type="checkbox" value="baz" v-model="checked"> baz
    <p>{{ checked }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: []
    }
  }
}
</script>


