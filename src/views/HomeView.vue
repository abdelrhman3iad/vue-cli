<template>
  <div class="HomeView">
    <h2>Home View</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quisquam
      nam architecto. Ipsa voluptatibus impedit, libero ad, aliquam, delectus
      doloribus exercitationem nobis illum tenetur deserunt quasi sit ab aliquid
      quibusdam.
    </p>
    <name-list :students="students" @ChangeArray="ChangeArray($event)" />
    <sign-up />
  </div>
</template>

<script>
import NameList from "@/components/NameList.vue";
import SignUp from "@/components/SignUp.vue";
export default {
  components: {
    NameList,
    SignUp,
  },
  data() {
    return {
      students: ["John", "Jane", "Doe", "Smith", "Emily"],
    };
  },
  methods: {
    ChangeArray(data) {
      this.students.push(data);
    },
  },
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>
