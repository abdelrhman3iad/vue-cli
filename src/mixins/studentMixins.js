const studentMixin = {
  data() {
    return {
      students: [],
    };
  },
  methods: {
    async getStudents() {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => (this.students = data));
    },
  },
  async mounted() {
    await this.getStudents();
  },
};

export default studentMixin;
