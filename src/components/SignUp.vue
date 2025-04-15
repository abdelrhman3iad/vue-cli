<template>
  <div class="SignUp">
    <h2>Sign Up</h2>
    <form @submit="addStudent" action="">
      <div>
        <label for="first-name">First Name</label>
        <input type="text" v-model="student.first_name" name="first-name" />
      </div>
      <div>
        <label for="FavouriteSport">Favourite Sport</label>
        <input
          type="text"
          v-model="student.FavouriteSport"
          name="FavouriteSport"
        />
        <input type="submit" value="Add" @click="addSport" />
      </div>
      <div>
        <h4>Grade</h4>
        <select name="grade" v-model="student.grade" id="grade">
          <option value="One">One</option>
          <option value="Two">Two</option>
          <option value="Three">Three</option>
        </select>
      </div>
      <div>
        <h4>Gender</h4>
        <label for="Male">Male</label>
        <input
          type="radio"
          name="Gender"
          v-model="student.Gender"
          value="Male"
          id="Male"
        />
        <label for="Female">Female</label>
        <input
          type="radio"
          name="Gender"
          v-model="student.Gender"
          value="Female"
          id="Female"
        />
      </div>
      <div class="submit">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
  <hr />
  <div class="data">
    <p>First name : {{ first_name }}</p>
    <p>Last name : {{ last_name }}</p>
    <p>Email : {{ email }}</p>
    <p>Grade : {{ grade }}</p>
    <p>Gender : {{ Gender }}</p>
    <p v-for="(Sport, i) in FavouriteSport" :key="i">
      <span v-if="value">Favourite Sport : {{ Sport }}</span>
    </p>
  </div>
  <hr />
  <h2>Posts</h2>
  <div v-for="(post, index) in posts.posts" :key="index">
    <p>Title : {{ post.title }}</p>
    <p>Body : {{ post.body }}</p>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: {
        first_name: "",
        last_name: "",
        email: "",
        grade: "",
        Gender: "",
        FavouriteSport: "",
      },
      Sports: [],
      posts: [],
      data: [],
    };
  },
  methods: {
    addSport() {
      this.Sport.push(this.FavouriteSport);
      this.FavouriteSport = "";
    },
    addData() {
      this.data = this.student;
      console.log(this.data);
    },
    async postsData() {
      await fetch("https://dummyjson.com/posts")
        .then((response) => response.json())
        .then((data) => (this.posts = data));
    },
  },
  async mounted() {
    await this.postsData();
  },
};
</script>

<style lang="scss">
form {
  display: flex;
  flex-wrap: wrap;

  div {
    width: 50%;
    button {
      margin-top: 20px;
      margin-left: 50%;
      margin-bottom: 12px;
      justify-content: center;
      width: 100%;
    }
  }
}
</style>
