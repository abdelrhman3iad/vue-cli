<template>
  <div class="NameList">
    <hr />
    <ul>
      <li v-for="(student, i) in studentsArray" :key="i">{{ student }}</li>
    </ul>
    <br />
    <button @click="ChangeArray">Change Array</button>
    <hr />
    <slot name="name"></slot>
    <slot name="inputs"></slot>
  </div>
</template>

<script>
export default {
  props: {
    students: {
      type: Array,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      studentsArray: this.students,
    };
  },
  methods: {
    ChangeArray() {
      this.$emit("ChangeArray", "Mostafa");
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
