<template>
    <div class="main-form__locations">
      <div class="main-form__locations--row">
        <div class="input-field">
          <label for="main_location">Main Location <mark>*</mark></label>
          <select name="main_location" v-model="locationsInfo.mainLocation" :disabled="isInputsDisabled">
            <option
              v-for="location in locationsOptions"
              :key="location.alias"
              :value="location.alias"
              :selected="locationsInfo.mainLocation"
            >{{ location.value }}</option>
          </select>
        </div>
        <div class="input-field">
          <label for="all_locations" class="checkbox-label">
            <input
              type="checkbox"
              name="all_locations"
              id="all_locations"
              @click="checkAll" :disabled="isInputsDisabled">
            <span>Select All Locations</span>
          </label>
        </div>
      </div>
      <h4 class="location-title">Available Locations</h4>
      <div class="main-form__locations--row">
        <div class="location-row__wrapper">
          <div class="input-field">
            <label for="berlin" class="checkbox-label">
              <input
                type="checkbox"
                name="berlin"
                value="berlin"
                data-locations="berlin"
                id="berlin"
                v-model="locationsInfo.locations" :disabled="isInputsDisabled"
              >
              <span>Berlin Office</span>
            </label>
          </div>
          <div class="input-field">
            <label for="poland" class="checkbox-label">
              <input
                type="checkbox"
                name="poland"
                value="poland"
                data-locations="poland"
                id="poland"
                v-model="locationsInfo.locations" :disabled="isInputsDisabled">
              <span>Poland Office</span>
            </label>
          </div>
        </div>
      </div>
      <div class="main-form__locations--row">
        <div class="location-row__wrapper">
          <div class="input-field">
            <label for="venice" class="checkbox-label">
              <input
                type="checkbox"
                name="venice"
                value="venice"
                data-locations="venice"
                id="venice"
                v-model="locationsInfo.locations" :disabled="isInputsDisabled">
              <span>Venice Office</span>
            </label>
          </div>
          <div class="input-field">
            <label for="us_office" class="checkbox-label">
              <input
                type="checkbox"
                name="us_office"
                value="us_office"
                data-locations="us_office"
                id="us_office"
                v-model="locationsInfo.locations" :disabled="isInputsDisabled">
              <span>US Office</span>
            </label>
          </div>
        </div>
      </div>
      <div class="main-form__locations--row">
        <div class="location-row__wrapper">
          <div class="input-field">
            <label for="canada" class="checkbox-label">
              <input
                type="checkbox"
                name="canada"
                value="canada"
                data-locations="canada"
                id="canada"
                v-model="locationsInfo.locations" :disabled="isInputsDisabled">
              <span>Canada Office</span>
            </label>
          </div>
          <div class="input-field">
            <label for="mexico" class="checkbox-label">
              <input
                type="checkbox"
                name="mexico"
                value="mexico"
                data-locations="mexico"
                id="mexico"
                v-model="locationsInfo.locations" :disabled="isInputsDisabled">
              <span>Mexico Office</span>
            </label>
          </div>
        </div>
      </div>
      <div class="main-form__locations--row">
        <div class="location-row__wrapper">
          <div class="input-field">
            <label for="ukraine" class="checkbox-label">
              <input
                type="checkbox"
                name="ukraine"
                value="ukraine"
                data-locations="ukraine"
                id="ukraine"
                v-model="locationsInfo.locations" :disabled="isInputsDisabled">
              <span>Ukraine Office</span>
            </label>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { reactive, watch, ref } from 'vue';
import { useUserStore } from '@/stores/UserStore';
import { storeToRefs } from 'pinia';
import { handleCheckAll } from '@/helpers/checkAllFunc.js';

export default {
  name: 'LocationsTab',
  setup () {
    const locationsInfo = reactive({
      mainLocation: '',
      locations: [],
    });
    const isAllChecked = ref(false);
    const locationsOptions = [
      { alias: '', value: '-- Please choose a location --'},
      { alias: 'venice', value: 'Venice Office'},
      { alias: 'us', value: 'US Office'},
      { alias: 'canada', value: 'Canada Office'},
      { alias: 'berlin', value: 'Berlin Office'},
      { alias: 'poland', value: 'Poland Office'},
      { alias: 'mexico', value: 'Mexico Office'},
      { alias: 'ukraine', value: 'Ukraine Office'}
    ]
    const userStore = useUserStore();
    const { isInputsDisabled } = storeToRefs(userStore);

    const localData = JSON.parse(localStorage.getItem('user-settings'));
    if (localData) {
      const { mainLocation, locations } = localData.locationsInfo;
      locationsInfo.mainLocation = mainLocation;
      locationsInfo.locations = locations;
      userStore.updateData({ tab: 'locationsInfo', data: { ... locationsInfo} });
    }

    const checkAll = () =>
    handleCheckAll(isAllChecked, 'data-locations', locationsInfo, 'locations');

    watch(
      () => ({ ... locationsInfo }),
      () => {
        userStore.updateData({ tab: 'locationsInfo', data: { ... locationsInfo} });
        userStore.updateLocalStorage();
      }
    );

    return {
      locationsInfo,
      checkAll,
      isAllChecked,
      locationsOptions,
      isInputsDisabled
    }
  }
}
</script>

<style scoped>

</style>