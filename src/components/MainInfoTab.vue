<template>
      <div class="main-form__content">
      <div class="main-form__content--row">
        <div class="input-field">
          <label for="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            v-model.lazy="userInfo.firstName"
            placeholder="John"
            :disabled="isInputsDisabled"
          >
        </div>
        <div class="input-field">
          <label for="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            v-model.lazy="userInfo.lastName"
            placeholder="Doe"
            :disabled="isInputsDisabled"
          >
        </div>
      </div>
      <div class="main-form__content--row">
        <div class="input-field">
          <label for="email">Email Adress</label>
          <input
            type="email"
            name="email"
            v-model.lazy="userInfo.email"
            placeholder="example@email.com"
            :disabled="isInputsDisabled"
          >
        </div>
        <div class="input-field">
          <label for="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            v-model.lazy="userInfo.phone"
            placeholder="099 999 99 99"
            :disabled="isInputsDisabled"
          >
        </div>
      </div>
      <div class="main-form__content--row">
        <div class="input-field">
          <label for="position">Position</label>
          <input
            type="text"
            name="position"
            v-model.lazy="userInfo.position"
            placeholder="your position here"
            :disabled="isInputsDisabled"
          >
        </div>
        <div class="input-field">
          <label for="available">Available in company</label>
          <select name="available" v-model="userInfo.selectedCompany"
          :disabled="isAllCompaniesChecked || isInputsDisabled">
            <option
                v-for="company in companiesOptions"
                :key="company.alias"
                :value="company.alias"
                :selected="userInfo.selectedCompany"
            >{{ company.value }}</option>
          </select>
        </div>
      </div>
    </div>
</template>

<script>
import { watch, reactive, onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/UserStore';
import { storeToRefs } from 'pinia';

export default {
  name: 'MainInfoTab',
  props: {
    isAllCompaniesChecked: {
      type: Boolean,
      required: true,
      default: false,
    },
    savedData: {
      type: Object,
      required: false
    },
  },
  setup (props) {
    let userInfo = reactive({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      selectedCompany: '',
      companies: [],
    });
    const isAllCompaniesSelected = ref(false);

    const companiesOptions = [
      { alias: 'precoro', value: 'Precoro' },
      { alias: 'soft_serve', value: 'SoftServe' },
      { alias: 'epam', value: 'EPAM' },
      { alias: 'data_art', value: 'Data Art' },
      { alias: '', value: '-- Please choose a company --' },
     ]

     const userStore = useUserStore();
    const { isInputsDisabled } = storeToRefs(userStore);

    const setAllCompaniesToUserInfo = () => {
      isAllCompaniesSelected.value = !isAllCompaniesSelected.value;
      if (isAllCompaniesSelected.value) {
        userInfo.selectedCompany = '';
        const companies = companiesOptions.filter(company => company.alias);
        userInfo.companies = companies.map(company => company.value);
        return;
      }
      userInfo.companies = [];
    }

    onMounted(() => {
      if (props.savedData) {
        const { firstName, lastName, email, phone, position, companies, selectedCompany } = props.savedData;
        userInfo.firstName = firstName;
        userInfo.lastName = lastName;
        userInfo.email = email;
        userInfo.phone = phone;
        userInfo.position = position;
        userInfo.companies = companies;
        userInfo.selectedCompany = selectedCompany;
        userStore.updateData({ tab: 'userInfo', data: { ... userInfo} });
      }
    });

    watch(
      () => props.isAllCompaniesChecked,
      () => setAllCompaniesToUserInfo()
    );
    watch(
      () => ({ ... userInfo }),
      () => {
        userStore.updateData({ tab: 'userInfo', data: { ... userInfo} });
        userStore.updateLocalStorage();
      }
    );

    return {
      userInfo,
      companiesOptions,
      setAllCompaniesToUserInfo,
      isAllCompaniesSelected,
      isInputsDisabled,
    }
  }
}
</script>

<style scoped>

</style>