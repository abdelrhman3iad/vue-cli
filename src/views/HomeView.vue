<template>
  <div class="HomeView">
    <h2>Home View</h2>
    <HeadingTag />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quisquam
      nam architecto. Ipsa voluptatibus impedit, libero ad, aliquam, delectus
      doloribus exercitationem nobis illum tenetur deserunt quasi sit ab aliquid
      quibusdam.
    </p>
    <name-list :students="students" @ChangeArray="ChangeArray($event)" />
  </div>
</template>

<script>
import HeadingTag from "@/components/HeaderTag.vue";
import NameList from "@/components/NameList.vue";
export default {
  components: {
    HeadingTag,
    NameList,
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
