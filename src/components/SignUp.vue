<template>
  <div class="SignUp">
    <h2>Sign Up</h2>
    <form @submit="addStudent" action="">
      <div>
        <label for="first-name">First Name</label>
        <input type="text" v-model="student.first_name" name="first-name" />
      </div>
      <div>
        <label for="last-name">Last Name</label>
        <input type="text" v-model="student.last_name" name="last-name" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" v-model="student.email" name="email" />
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
      <div>
        <h4>Sports</h4>
        <label for="football">Football</label>
        <input
          type="checkbox"
          v-model="student.Sports.football"
          name="Sports"
          value="football"
          id="football"
        />
        <label for="Basketball">Basketball</label>
        <input
          type="checkbox"
          name="Sports"
          v-model="student.Sports.Basketball"
          value="Basketball"
          id="Basketball"
        />
        <label for="Tennis">Tennis</label>
        <input
          type="checkbox"
          v-model="student.Sports.Tennis"
          name="Sports"
          value="Tennis"
          id="Tennis"
        />
      </div>
      <div class="submit">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
  <hr />
  <div class="data">
    <p>First name : {{ students.first_name }}</p>
    <p>Last name : {{ students.last_name }}</p>
    <p>Email : {{ students.email }}</p>
    <p>Grade : {{ students.grade }}</p>
    <p>Gender : {{ students.Gender }}</p>
    <p v-for="(value, Sport, i) in students.Sports" :key="i">
      <span v-if="value">{{ Sport }} : {{ value }}</span>
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
  name: "SignUp",
  data() {
    return {
      posts: [],
      student: {
        first_name: "",
        last_name: "",
        email: "",
        grade: "",
        Gender: "",
        Sports: {
          football: "",
          Basketball: "",
          Tennis: "",
        },
      },
      students: {
        first_name: "",
        last_name: "",
        email: "",
        grade: "",
        Gender: "",
        Sports: {
          football: "",
          Basketball: "",
          Tennis: "",
        },
      },
    };
  },
  methods: {
    addStudent() {
      this.students = this.student;
      this.student = {
        first_name: "",
        last_name: "",
        email: "",
        grade: "",
        Gender: "",
        Sports: {
          football: "",
          Basketball: "",
          Tennis: "",
        },
      };
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
    width: 33.3%;
    button {
      margin-top: 20px;
      margin-left: 100%;
      margin-bottom: 12px;
      justify-content: center;
      width: 100%;
    }
  }
}
</style>
