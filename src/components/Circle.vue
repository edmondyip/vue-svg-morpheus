<template>
  <div class="hello">
    <ul>
      <li>
        <router-link to="/">One Square</router-link>
      </li>
      <li>
        <router-link to="test">One Circle</router-link>
      </li>
      <li>
        <router-link to="circle">Two Circle</router-link>
      </li>
      <li>
        <router-link to="square">Two Square</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {}

</script>

<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
