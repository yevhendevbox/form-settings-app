<template>
  <div class="main-form">
    <div class="main-form__header">
      <h1>Invite User</h1>
      <nav class="main-nav">
        <ul class="main-nav__links">
          <li
            class="links-item"
            v-for="(tab, index) in tabs"
            :key="tab.alias"
            @click.prevent="handleTabClick(index)"
          >
            <a
              href="#"
              :class="{'active': index === currentTabIndex, 'checked': currentTabIndex > index}"
            > <span v-if="currentTabIndex > index">
              <img src="@/assets/images/check.svg" alt="Done icon" style="height: 6px;">
            </span>
              <span v-else>{{ index + 1 }}</span>
              {{ tab.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
      <main-info-tab
        v-show="currentTabIndex === 0"
        :isAllCompaniesChecked="isAllCompanies"
        :savedData="mainData.userInfo"/>
      <locations-tab
        v-show="currentTabIndex === 1"
        />
      <roles-tab v-show="currentTabIndex === 2"/>
    <div class="main-form__footer">
      <div class="footer-actions">
        <div class="footer-actions__toggle" v-show="currentTabIndex === 0">
          <div class="toggler">
            <label class="switch">
            <input type="checkbox" v-model="isAllCompanies" :disabled="isInputsDisabled">
            <span class="slider round"></span></label>
          </div>
          <p class="toggler-label">Active in all companies</p>
          <img src="@/assets/images/info.svg" alt="Info icon"
          style="height: 20px; width: auto; opacity: 0.4"
          title="Set user as avaliable in all companies">
        </div>
        <div class="footer-actions__btn">
          <button class="main-btn" @click="handleOnSumbit">
            <span v-if="currentTabIndex !== 2">Next Step</span>
            <span v-else>Invite User</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

import MainInfoTab from '@/components/MainInfoTab.vue';
import LocationsTab from '@/components/LocationsTab.vue';
import RolesTab from '@/components/RolesTab.vue';
import { useUserStore } from '@/stores/UserStore';
import { storeToRefs } from 'pinia';

export default {
  components: {
    MainInfoTab,
    LocationsTab,
    RolesTab,
  },
  setup () {
    const tabs = [
      {
        alias: 'main',
        label: 'Main Info',
      },
      {
        alias: 'location',
        label: 'Available Locations',
      },
      {
        alias: 'roles',
        label: 'Roles',
      }
    ];
    let isAllCompanies = ref();
    const currentTabIndex = ref(0);
    let mainData = {};
    const userStore = useUserStore();
    const { isInputsDisabled } = storeToRefs(userStore);

    const localData = JSON.parse(localStorage.getItem('user-settings'));
    if (localData) {
      mainData = localData;
    }

    const handleTabClick = (goToIndex) => {
      currentTabIndex.value = goToIndex;
      userStore.updateCurrentTab(currentTabIndex.value);
      userStore.updateLocalStorage();
    }
    const handleOnSumbit = () => {
      if (currentTabIndex.value === 2) {
        userStore.submitDataToServer();
        return;
      };

      currentTabIndex.value++;
      userStore.updateCurrentTab(currentTabIndex.value);
      userStore.updateLocalStorage();
    }

    onMounted(() => {
      if (mainData.currentTab) {
        currentTabIndex.value = mainData.currentTab;
      }
    });

    return {
      tabs,
      currentTabIndex,
      handleTabClick,
      handleOnSumbit,
      isAllCompanies,
      mainData,
      isInputsDisabled
    }
  }
}
</script>

<style scoped>

</style>