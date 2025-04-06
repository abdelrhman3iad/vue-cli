<template>
  <nav class="NavBar">
    <div class="logo">
      <router-link to="/about-page"
        ><img src="@/assets/logo.png" alt="" srcset=""
      /></router-link>
    </div>
    <div class="link">
      <ul>
        <li v-for="link in links" :key="link">{{ link }}</li>
      </ul>
    </div>
    <div class="btns">
      <button id="btn1">Login</button>
      <button>Sign Up</button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      icon: "icon",
      links: ["Link One", "Link Two", "Link Three", "Link Four"],
    };
  },
};
</script>

<style>
.NavBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul {
  display: flex;
  justify-content: space-between;
  gap: 50px;
  list-style: none;
}
img {
  width: 50px;
}
nav {
  background-color: aquamarine;
  height: 20px;
  box-shadow: 2px 2px 2px -2px #000;
}
button {
  background-color: #16536f;
  color: #ffffff;
  border: none;
  padding: 10px 15px;
  border-radius: 15px;
  cursor: pointer;
}
#btn1 {
  margin-right: 10px;
}
</style>
