<template>
      <div class="main-form__content">
      <div class="main-form__content--row">
        <div class="input-field">
          <label for="first_name" :class="{ 'invalid': v$.firstName.$error }">First Name</label>
          <input
            type="text"
            name="first_name"
            :class="{ 'error': v$.firstName.$error }"
            v-model.lazy="userInfo.firstName"
            placeholder="John"
            :disabled="isInputsDisabled"
            @blur="v$.firstName.$touch()"
          >
          <span
            class="invalid"
            v-if="v$.firstName.$error"
            style="margin-top: 1rem">{{ v$.firstName.$silentErrors[0].$message }}</span>
        </div>
        <div class="input-field">
          <label for="last_name" :class="{ 'invalid': v$.lastName.$error }">Last Name</label>
          <input
            type="text"
            name="last_name"
            :class="{ 'error': v$.lastName.$error }"
            v-model.lazy="userInfo.lastName"
            placeholder="Doe"
            :disabled="isInputsDisabled"
            @blur="v$.lastName.$touch()"
          >
          <span
            class="invalid"
            v-if="v$.lastName.$error"
            style="margin-top: 1rem">{{ v$.lastName.$silentErrors[0].$message }}</span>
        </div>
      </div>
      <div class="main-form__content--row">
        <div class="input-field">
          <label for="email" :class="{ 'invalid': v$.email.$error }">Email Adress</label>
          <input
            type="email"
            name="email"
            :class="{ 'error': v$.email.$error }"
            v-model.lazy="userInfo.email"
            placeholder="example@email.com"
            :disabled="isInputsDisabled"
            @blur="v$.email.$touch()"
          >
          <span
            class="invalid"
            v-if="v$.email.$error"
            style="margin-top: 1rem">{{ v$.email.$silentErrors[0].$message }}</span>
        </div>
        <div class="input-field">
          <label for="phone" :class="{ 'invalid': v$.phone.$error }">Phone Number</label>
          <input
            type="tel"
            name="phone"
            :class="{ 'error': v$.phone.$error }"
            v-model.lazy="userInfo.phone"
            placeholder="+380998880088"
            :disabled="isInputsDisabled"
            @blur="v$.phone.$touch()"
          >
          <span
            class="invalid"
            v-if="v$.phone.$error"
            style="margin-top: 1rem">{{ v$.phone.$silentErrors[0].$message }}</span>
        </div>
      </div>
      <div class="main-form__content--row">
        <div class="input-field">
          <label for="position" :class="{ 'invalid': v$.position.$error }">Position</label>
          <input
            type="text"
            name="position"
            :class="{ 'error': v$.position.$error }"
            v-model.lazy="userInfo.position"
            placeholder="your position"
            :disabled="isInputsDisabled"
            @blur="v$.position.$touch()"
          >
          <span
            class="invalid"
            v-if="v$.position.$error"
            style="margin-top: 1rem">{{ v$.position.$silentErrors[0].$message }}</span>
        </div>
        <div class="input-field">
          <label for="available">Available in company</label>
          <select name="available" v-model="userInfo.selectedCompany"
          :disabled="isAllCompaniesChecked || isInputsDisabled">
            <option value="" selected disabled>-- Please choose a company --</option>
            <option
                v-for="company in companiesOptions"
                :key="company.alias"
                :value="company.alias"
            >{{ company.value }}</option>
          </select>
        </div>
      </div>
    </div>
</template>

<script>
import { watch, reactive, onMounted, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import {
  userNameValidator,
  userPhoneValidator,
  requiredValidator,
  emailMinLength,
  emailMaxLength,
  emailValidator
 } from '@/utils/validators.js';
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
     ]
     const rules = {
        firstName: { userNameValidator, requiredValidator },
        lastName: { userNameValidator, requiredValidator },
        email: { emailMaxLength, emailMinLength, emailValidator, requiredValidator },
        phone: { userPhoneValidator, requiredValidator },
        position: { userNameValidator },
     }
     const v$ = useVuelidate(rules, userInfo);

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
      v$,
    }
  }
}
</script>

<style scoped>

</style>