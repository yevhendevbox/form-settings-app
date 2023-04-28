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
      <main-info-tab v-show="currentTabIndex === 0" :isAllCompaniesChecked="isAllCompanies"/>
      <locations-tab v-show="currentTabIndex === 1"/>
      <roles-tab v-show="currentTabIndex === 2"/>
    <div class="main-form__footer">
      <div class="footer-actions">
        <div class="footer-actions__toggle" v-show="currentTabIndex === 0">
          <div class="toggler">
            <label class="switch">
            <input type="checkbox" v-model="isAllCompanies">
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
import { ref } from 'vue';

import MainInfoTab from '@/components/MainInfoTab.vue';
import LocationsTab from '@/components/LocationsTab.vue';
import RolesTab from '@/components/RolesTab.vue';

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

    const handleTabClick = (goToIndex) => {
      currentTabIndex.value = goToIndex;
    }
    const handleOnSumbit = () => {
      if (currentTabIndex.value === 2) {
        console.log('User Data just posted to a server!');
        return;
      };

      currentTabIndex.value++;
    }
    return {
      tabs,
      currentTabIndex,
      handleTabClick,
      handleOnSumbit,
      isAllCompanies,
    }
  }
}
</script>

<style scoped>

</style>