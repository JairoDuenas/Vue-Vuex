import { reactive } from "vue";
const store = reactive({
  username: "Diana.nerd",
  updateUsername(username) {
    this.username = username;
  },
});

export default store;
