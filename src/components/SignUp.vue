<template>
  <div class="SignUp">
    <h2>Sign Up</h2>
    <form action="" @submit.prevent="submitForm">
      <div>
        <label for="currency">Currency</label>
        <select name="currency" v-model="selectedCurrency" id="">
          <option v-for="(code, name, i) in currencies" :key="i" :value="name">
            {{ code }}
          </option>
        </select>
      </div>
      <div class="submit">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
  <hr />
</template>

<script>
export default {
  data() {
    return {
      currencies: [],
      selectedCurrency: "",
    };
  },
  methods: {
    async currenciesData() {
      await fetch(
        "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.currencies = data;
        });
    },
    async getRate() {
      const requestData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currency: this.selectedCurrency,
        }),
      };
      await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${this.selectedCurrency}.json`,
        requestData
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    },
    async submitForm() {
      await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${this.selectedCurrency}.json`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    },
  },
  async mounted() {
    await this.currenciesData();
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
      margin-left: -50%;
      margin-bottom: 12px;
      justify-content: center;
      width: 100%;
    }
  }
}
</style>
