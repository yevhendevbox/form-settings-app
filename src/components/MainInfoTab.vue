<template>
      <div class="main-form__content">
      <div class="main-form__content--row">
        <div class="input-field">
          <label for="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            v-model="userInfo.firstName"
            placeholder="John"
          >
        </div>
        <div class="input-field">
          <label for="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            v-model="userInfo.lastName"
            placeholder="Doe"
          >
        </div>
      </div>
      <div class="main-form__content--row">
        <div class="input-field">
          <label for="email">Email Adress</label>
          <input
            type="email"
            name="email"
            v-model="userInfo.email"
            placeholder="example@email.com"
          >
        </div>
        <div class="input-field">
          <label for="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            v-model="userInfo.phone"
            placeholder="099 999 99 99"
          >
        </div>
      </div>
      <div class="main-form__content--row">
        <div class="input-field">
          <label for="position">Position</label>
          <input
            type="text"
            name="position"
            v-model="userInfo.position"
            placeholder="your position here"
          >
        </div>
        <div class="input-field">
          <label for="available">Available in company</label>
          <select name="available" v-model="userInfo.companies" :disabled="isAllCompaniesChecked">
            <option
                v-for="company in companiesOptions"
                :key="company.alias"
                :value="company.alias"
            >{{ company.value }}</option>
            <option value="" disabled>-- Please choose a company -- </option>
          </select>
        </div>
      </div>
    </div>
</template>

<script>
import { watch, reactive } from 'vue';

export default {
  name: 'MainInfoTab',
  props: {
    isAllCompaniesChecked: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  setup (props) {
    const userInfo = reactive({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      companies: [],
    });

    const companiesOptions = [
      { alias: 'precoro', value: 'Precoro' },
      { alias: 'soft_serve', value: 'SoftServe' },
      { alias: 'epam', value: 'EPAM' },
      { alias: 'data_art', value: 'Data Art' },
     ]

    const setAllCompaniesToUserInfo = () => {
      userInfo.companies = companiesOptions.map(company => company.value);
    }

    watch(
      () => props.isAllCompaniesChecked,
      () => setAllCompaniesToUserInfo()
    );

    return {
      userInfo,
      companiesOptions,
      setAllCompaniesToUserInfo
    }
  }
}
</script>

<style scoped>

</style>