<template>
  <div class="SignUp">
    <form @submit.prevent>
      <div>
        <label>First Name</label>
        <input v-model="student.firstName" type="text" />
        <p>The Result is : {{ student.firstName }}</p>
      </div>
      <div>
        <label>Last Name</label>
        <input v-model.lazy="student.lastName" type="text" />
        <p>The Result is : {{ student.lastName }}</p>
      </div>
      <div>
        <label>Email</label>
        <input v-model.lazy="student.email" type="email" />
        <p>The Result is : {{ student.email }}</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      student: {
        firstName: "",
        lastName: "",
        email: "",
      },
    };
  },
};
</script>
