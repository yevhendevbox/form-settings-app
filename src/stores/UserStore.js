import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    data: {
      userInfo: {},
      locationsInfo: {},
      rolesInfo: {},
      currentTab: 0,
    },
    isInputsDisabled: false,
  }),
  getters: {
  },
  actions: {
    updateData(tabInfo) {
      this.data[tabInfo.tab] = tabInfo.data;
    },
    updateCurrentTab(position) {
      console.log(position);
      this.data.currentTab = position;
    },
    updateLocalStorage() {
      const localData = JSON.stringify(this.data);
      localStorage.setItem('user-settings', localData);
    },
    clearData() {
      this.data = {
        userInfo: {},
        locationsInfo: {},
        rolesInfo: {},
        currentTab: 0,
      }
    },
    async submitDataToServer() {
      const dataToSend = {
        userInfo: this.data.userInfo,
        locationsInfo: this.data.locationsInfo,
        rolesInfo: this.data.rolesInfo,
      };
      this.isInputsDisabled = true;
      setTimeout(() => {
        console.log(JSON.stringify(dataToSend));
      }, 1000);
      this.clearData();
      this.updateLocalStorage();
    }
  },
});
