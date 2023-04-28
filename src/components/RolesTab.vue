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
          <td><input type="checkbox"></td>
          <td><input type="checkbox"></td>
          <td><input type="checkbox"></td>
          <td><input type="checkbox"></td>
          <td><label for="all_below" class="checkbox-label">
          <input type="checkbox" name="canada" id="all_below">
          <span>All bellow</span>
        </label></td>
        </tr>
        <tr>
          <td>Warehouse requests</td>
          <td><input type="checkbox"></td>
          <td><input type="checkbox"></td>
          <td><input type="checkbox"></td>
          <td></td>
          <td><label for="configuration" class="checkbox-label">
          <input type="checkbox" name="canada" id="configuration">
          <span>Configuration</span>
        </label></td>
        </tr>
        <tr>
          <td>Purchase requests</td>
          <td><input type="checkbox"></td>
          <td><input type="checkbox"></td>
          <td><input type="checkbox"></td>
          <td></td>
          <td><label for="supliers_items" class="checkbox-label">
          <input type="checkbox" name="canada" id="supliers_items">
          <span>Suppliers and items</span>
        </label></td>
        </tr>
        <tr>
          <td>Request for proposals</td>
          <td><input type="checkbox"></td>
          <td><input type="checkbox"></td>
          <td><input type="checkbox"></td>
          <td></td>
          <td><label for="budgets" class="checkbox-label">
          <input type="checkbox" name="canada" id="budgets">
          <span>Budgets</span>
        </label></td>
        </tr>
        <tr>
          <td>Purchase orders</td>
          <td><input type="checkbox"></td>
          <td><input type="checkbox"></td>
          <td><input type="checkbox"></td>
          <td></td>
          <td><label for="warehouse" class="checkbox-label">
          <input type="checkbox" name="canada" id="warehouse">
          <span>Warehouse manager</span>
        </label></td>
        </tr>
        <tr>
          <td>Receipts</td>
          <td><input type="checkbox"></td>
          <td><input type="checkbox"></td>
          <td><input type="checkbox"></td>
          <td></td>
          <td><label for="reports" class="checkbox-label">
          <input type="checkbox" name="canada" id="reports">
          <span>Reports</span>
        </label></td>
        </tr>
        <tr>
          <td>Invoices</td>
          <td><input type="checkbox"></td>
          <td><input type="checkbox"></td>
          <td><input type="checkbox"></td>
          <td><input type="checkbox"></td>
          <td></td>
        </tr>
        <tr>
          <td>Expenses</td>
          <td><input type="checkbox"></td>
          <td><input type="checkbox"></td>
          <td><input type="checkbox"></td>
          <td><input type="checkbox"></td>
          <td><label for="admin" class="checkbox-label">
          <input type="checkbox" name="canada" id="admin">
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
export default {
  name: 'RolesTab',
  setup () {


    return {}
  }
}
</script>

<style scoped>

</style>