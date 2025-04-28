<template>
  <div class="AboutView">
    <h2>This Is About Page</h2>
    <keep-alive>
      <name-list :students="students" v-if="isActive">
        <template #name>
          <h2>Ahmed</h2>
        </template>
        <template #inputs>
          <input type="password" placeholder="password" />
          <input type="text" placeholder="name" />
        </template>
      </name-list>
    </keep-alive>
    <keep-alive>
      <namelist-two :students="students" v-if="!isActive">
        <template #name>
          <h2>Second</h2>
        </template>
        <template #inputs>
          <input type="text" placeholder="name" />
          <input type="password" placeholder="password" />
        </template>
      </namelist-two>
    </keep-alive>
    <br />
    <button @click="isActive = !isActive">Toggle</button>
  </div>
  <hr />
  <div class="students">
    <li v-for="student in students" :key="student">
      <ul>
        {{
          student.name
        }}
      </ul>
      <ul>
        {{
          student.username
        }}
      </ul>
    </li>
  </div>
</template>

<script>
import NameList from "@/components/NameList.vue";
import NamelistTwo from "@/components/NameList.vue";
import studentMixins from "@/mixins/studentMixins";
export default {
  data() {
    return {
      students: ["Ahmed", "Mohamed", "Mostafa", "Ali", "Hassan"],
      isActive: true,
    };
  },
  components: {
    NameList,
    NamelistTwo,
  },
  mixins: [studentMixins],
};
</script>
