import { createStore } from "vuex";
import helloWorld from "./modules/hello-world";

const store = createStore({
  modules: {
    helloWorld,
  },
});

export default store;
