import { HelloWorld } from "@/business/hello-world";

// state
const state = (): HelloWorld => new HelloWorld();

// getters
const getters = {
  message: (state: HelloWorld): string => state.message,
};

// actions
const actions = {};

// mutations
const mutations = {
  setName(state: HelloWorld, value: string) {
    state.name = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
