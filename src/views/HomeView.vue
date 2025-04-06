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
  </div>
</template>

<script>
import HeadingTag from "@/components/HeaderTag.vue";
export default {
  components: {
    HeadingTag,
  },
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>
