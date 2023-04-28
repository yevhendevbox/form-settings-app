import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    data: {
      userInfo: {},
      locationsInfo: {},
      rolesInfo: {},
    }
  }),
  getters: {
  },
  actions: {
    updateData(tabInfo) {
      this.data[tabInfo.tab] = tabInfo.data;
    }
  },
});
