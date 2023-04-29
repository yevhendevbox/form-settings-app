<template>
<div class="main-form__roles">
  <div class="table_wrapper">
    <table>
      <colgroup>
        <col style="width: 200px; text-align: left;">
        <col>
        <col>
        <col>
        <col style="padding: 0 10rem">
        <col style="border-left: 1px solid hsla(232, 13%, 88%, 1);">
      </colgroup>
      <thead>
        <tr>
          <th>Access to:</th>
          <th>View only</th>
          <th>Create</th>
          <th>Approve</th>
          <th>Pay</th>
          <th style="display: flex; gap: 1rem">Management:
            <img
              src="@/assets/images/info.svg"
              alt="Warning logo"
              style="height: 20px; opacity: 0.5; margin-right: auto;"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>All bellow</td>
          <td>
            <input
              type="checkbox" :disabled="isInputsDisabled" @click="checkAllViewOnly">
          </td>
          <td><input type="checkbox" :disabled="isInputsDisabled" @click="checkAllCreate"></td>
          <td><input type="checkbox" :disabled="isInputsDisabled" @click="checkAllApprove"></td>
          <td><input type="checkbox" :disabled="isInputsDisabled" @click="checkAllPay"></td>
          <td><label for="all_below" class="checkbox-label">
          <input type="checkbox" :disabled="isInputsDisabled" name="canada" id="all_below" @click="checkAllManagement">
          <span>All bellow</span>
        </label></td>
        </tr>
        <tr>
          <td>Warehouse requests</td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-only_view="only_view"
              value="warehouse_requests"
              v-model="rolesInfo.only_view">
          </td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-create="create"
              value="warehouse_requests"
              v-model="rolesInfo.create"
            ></td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-approve="approve"
              value="warehouse_requests"
              v-model="rolesInfo.approve"
            ></td>
          <td></td>
          <td><label for="configuration" class="checkbox-label">
          <input
            type="checkbox"
            :disabled="isInputsDisabled"
            data-management="management"
            value="configuration"
            v-model="rolesInfo.management"
            id="configurations"
            >
          <span>Configuration</span>
        </label></td>
        </tr>
        <tr>
          <td>Purchase requests</td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-only_view="only_view"
              value="purchase_request"
              v-model="rolesInfo.only_view">
          </td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-create="create"
              value="purchase_request"
              v-model="rolesInfo.create">
          </td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-approve="approve"
              value="purchase_request"
              v-model="rolesInfo.approve"
            >
          </td>
          <td></td>
          <td><label for="supliers_items" class="checkbox-label">
            <input
              type="checkbox" :disabled="isInputsDisabled"
              data-management="management"
              value="suppliers_and_items"
              v-model="rolesInfo.management"
              id="supliers_items"
              >
          <span>Suppliers and items</span>
        </label></td>
        </tr>
        <tr>
          <td>Request for proposals</td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-only_view="only_view"
              value="request_proposals"
              v-model="rolesInfo.only_view"
            >
          </td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-create="create"
              value="request_proposals"
              v-model="rolesInfo.create">
          </td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-approve="approve"
              value="request_proposals"
              v-model="rolesInfo.approve">
          </td>
          <td></td>
          <td><label for="budgets" class="checkbox-label">
            <input
              type="checkbox" :disabled="isInputsDisabled"
              data-management="management"
              value="budgets"
              v-model="rolesInfo.management"
              id="budgets"
              >
          <span>Budgets</span>
        </label></td>
        </tr>
        <tr>
          <td>Purchase orders</td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-only_view="only_view"
              value="purchase_orders"
              v-model="rolesInfo.only_view"
            >
          </td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-create="create"
              value="purchase_orders"
              v-model="rolesInfo.create"
            ></td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-approve="approve"
              value="purchase_orders"
              v-model="rolesInfo.approve"
            ></td>
          <td></td>
          <td><label for="warehouse" class="checkbox-label">
            <input
              type="checkbox" :disabled="isInputsDisabled"
              data-management="management"
              value="warehouse_manager"
              v-model="rolesInfo.management"
              id="warehouse"
              >
          <span>Warehouse manager</span>
        </label></td>
        </tr>
        <tr>
          <td>Receipts</td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-only_view="only_view"
              value="receipts"
              v-model="rolesInfo.only_view">
          </td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-create="create"
              value="receipts"
              v-model="rolesInfo.create"
            >
            </td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-approve="approve"
              value="receipts"
              v-model="rolesInfo.approve"
            ></td>
          <td></td>
          <td><label for="reports" class="checkbox-label">
            <input
              type="checkbox" :disabled="isInputsDisabled"
              data-management="management"
              value="reports"
              v-model="rolesInfo.management"
              id="reports"
              >
          <span>Reports</span>
        </label></td>
        </tr>
        <tr>
          <td>Invoices</td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-only_view="only_view"
              value="invoices"
              v-model="rolesInfo.only_view">
          </td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-create="create"
              value="invoices"
              v-model="rolesInfo.create"
            ></td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-approve="approve"
              value="invoices"
              v-model="rolesInfo.approve"
            ></td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-pay="pay"
              value="invoices"
              v-model="rolesInfo.pay"
            ></td>
          <td></td>
        </tr>
        <tr>
          <td>Expenses</td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-only_view="only_view"
              value="expenses"
              v-model="rolesInfo.only_view">
          </td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-create="create"
              value="expenses"
              v-model="rolesInfo.create"
            ></td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-approve="approve"
              value="expenses"
              v-model="rolesInfo.approve"
            ></td>
          <td>
            <input
              type="checkbox"
              :disabled="isInputsDisabled"
              data-pay="pay"
              value="expenses"
              v-model="rolesInfo.pay"
            ></td>
          <td><label for="admin" class="checkbox-label">
            <input
              type="checkbox" :disabled="isInputsDisabled"
              value="admin"
              id="admin"
              @click="checkAllProperties"
            >
          <span>Admin (Full access)
          <img src="@/assets/images/warn.svg" alt="Warning icon" style="height: 16px; width: 16px;"></span>
        </label></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="main-form__roles--info">
    <div class="info-icon">
      <img src="@/assets/images/info.svg" alt="Warning logo">
    </div>
    <div class="info-text">
      The user becomes a <a href="#">Power user</a> if at least ONE of the following roles is selected:
      <br> Approve, View only, Configuration, Suppliers and Items, Budgets, Warehouse manager.
    </div>
  </div>
</div>
</template>

<script>
import { reactive, ref, watch } from 'vue';
import { handleCheckAll, handleAdminCheckAll } from '@/helpers/checkAllFunc.js';
import { useUserStore } from '@/stores/UserStore';
import { storeToRefs } from 'pinia';

export default {
  name: 'RolesTab',
  setup () {
    const rolesInfo = reactive({
      only_view: [],
      create: [],
      approve: [],
      pay: [],
      management: [],
    });
    const isViewOnlyAllChecked = ref(false);
    const isCreateAllChecked = ref(false);
    const isApproveAllChecked = ref(false);
    const isPayAllChecked = ref(false);
    const isManagementAllChecked = ref(false);
    const isAdmin = ref(false);

    const userStore = useUserStore();
    const { isInputsDisabled } = storeToRefs(userStore);

    const localData = JSON.parse(localStorage.getItem('user-settings'));
    if (localData) {
      const { only_view, create, approve, pay, management } = localData.rolesInfo;
      rolesInfo.only_view = only_view;
      rolesInfo.create = create;
      rolesInfo.approve = approve;
      rolesInfo.pay = pay;
      rolesInfo.management = management;
      userStore.updateData({ tab: 'rolesInfo', data: { ... rolesInfo} });
    }

    const checkAllViewOnly = () => handleCheckAll(isViewOnlyAllChecked, 'data-only_view', rolesInfo, 'only_view');
    const checkAllCreate = () => handleCheckAll(isCreateAllChecked, 'data-create', rolesInfo, 'create');
    const checkAllApprove = () => handleCheckAll(isCreateAllChecked, 'data-approve', rolesInfo, 'approve');
    const checkAllPay = () => handleCheckAll(isCreateAllChecked, 'data-pay', rolesInfo, 'pay');
    const checkAllManagement = () => handleCheckAll(isManagementAllChecked, 'data-management', rolesInfo, 'management');
    const checkAllProperties = () => handleAdminCheckAll(isAdmin, rolesInfo);

    watch(
      () => ({ ... rolesInfo }),
      () => {
        console.log('i am from watch');
        userStore.updateData({ tab: 'rolesInfo', data: { ... rolesInfo} });
        userStore.updateLocalStorage();
      }
    );

    return {
      rolesInfo,
      isViewOnlyAllChecked,
      isCreateAllChecked,
      isApproveAllChecked,
      isPayAllChecked,
      isManagementAllChecked,
      isAdmin,
      checkAllViewOnly,
      checkAllCreate,
      checkAllApprove,
      checkAllPay,
      checkAllManagement,
      checkAllProperties,
      isInputsDisabled,
    }
  }
}
</script>

<style scoped>

</style>