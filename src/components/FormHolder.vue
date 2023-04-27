<template>
  <div class="main-form">
    <div class="main-form__header">
      <h1>Invite User</h1>
      <nav class="main-nav">
        <ul class="main-nav__links">
          <li class="links-item">
            <a href="#" class="active"><span>1</span> Main Info</a>
          </li>
          <li class="links-item">
            <a href="#"><span>2</span> Available Locations</a>
          </li>
          <li class="links-item">
            <a href="#"><span>3</span> Roles</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="main-form__content">
      <div class="main-form__content--row">
        <div class="input-field">
          <label for="first_name">First Name</label>
          <input type="text" name="first_name">
        </div>
        <div class="input-field">
          <label for="last_name">Last Name</label>
          <input type="text" name="last_name">
        </div>
      </div>
      <div class="main-form__content--row">
        <div class="input-field">
          <label for="email">Email Adress</label>
          <input type="email" name="email">
        </div>
        <div class="input-field">
          <label for="phone">Phone Number</label>
          <input type="tel" name="phone">
        </div>
      </div>
      <div class="main-form__content--row">
        <div class="input-field">
          <label for="position">Position</label>
          <input type="text" name="position">
        </div>
        <div class="input-field">
          <label for="available">Available in company</label>
          <select name="available">
            <option value="">-- Please choose a company -- </option>
            <option value="precoro">Precoro</option>
            <option value="soft_serve">SoftServe</option>
            <option value="epam">EPAM</option>
            <option value="data_art">Data Art</option>
          </select>
        </div>
      </div>
    </div>
    <div class="main-form__locations">
      <div class="main-form__locations--row">
        <div class="input-field">
          <label for="main_location">Main Location <mark>*</mark></label>
          <select name="main_location">
            <option value="">-- Please choose a location -- </option>
            <option value="venice">Venice Office</option>
            <option value="us">US Office</option>
            <option value="canada">Canada Office</option>
            <option value="berlin">Berlin Office</option>
            <option value="poland">Poland Office</option>
            <option value="mexico">Mexico Office</option>
            <option value="ukraine">Ukraine Office</option>
          </select>
        </div>
        <div class="input-field">
          <label for="all_locations" class="checkbox-label">
            <input type="checkbox" name="all_locations" id="all_locations">
            <span>Select All Locations</span>
          </label>
        </div>
      </div>
      <h4 class="location-title">Available Locations</h4>
      <div class="main-form__locations--row">
        <div class="location-row__wrapper">
          <div class="input-field">
            <label for="berlin" class="checkbox-label">
              <input type="checkbox" name="berlin" id="berlin">
              <span>Berlin Office</span>
            </label>
          </div>
          <div class="input-field">
            <label for="poland" class="checkbox-label">
              <input type="checkbox" name="poland" id="poland">
              <span>Poland Office</span>
            </label>
          </div>
        </div>
      </div>
      <div class="main-form__locations--row">
        <div class="location-row__wrapper">
          <div class="input-field">
            <label for="venice" class="checkbox-label">
              <input type="checkbox" name="venice" id="venice">
              <span>Venice Office</span>
            </label>
          </div>
          <div class="input-field">
            <label for="us_office" class="checkbox-label">
              <input type="checkbox" name="us_office" id="us_office">
              <span>US Office</span>
            </label>
          </div>
        </div>
      </div>
      <div class="main-form__locations--row">
        <div class="location-row__wrapper">
          <div class="input-field">
            <label for="canada" class="checkbox-label">
              <input type="checkbox" name="canada" id="canada">
              <span>Canada Office</span>
            </label>
          </div>
          <div class="input-field">
            <label for="mexico" class="checkbox-label">
              <input type="checkbox" name="mexico" id="mexico">
              <span>Mexico Office</span>
            </label>
          </div>
        </div>
      </div>
      <div class="main-form__locations--row">
        <div class="location-row__wrapper">
          <div class="input-field">
            <label for="ukraine" class="checkbox-label">
              <input type="checkbox" name="ukraine" id="ukraine">
              <span>Ukraine Office</span>
            </label>
          </div>
        </div>
      </div>
    </div>
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
              <th style="display: flex; aligne-items: center; gap: 1rem">Management:
                <img
                  src="@/assets/info.svg"
                  alt="Warning logo"
                  style="height: 20px; opacity: 0.5; margin-left: -7rem;"></th>
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
              <img src="@/assets/warn.svg" alt="Warning icon" style="height: 16px; width: 16px;"></span>
            </label></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="main-form__roles--info">
        <div class="info-icon">
          <img src="@/assets/info.svg" alt="Warning logo" style="height: 20px; opacity: 0.5;">
        </div>
        <div class="info-text">
          The user becomes a <a href="#">Power user</a> if at least ONE of the following roles is selected:
          <br> Approve, View only, Configuration, Suppliers and Items, Budgets, Warehouse manager.
        </div>
      </div>
    </div>
    <div class="main-form__footer">
      <div class="footer-actions">
        <div class="footer-actions__toggle">
          <div class="toggler">
            <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span></label>
          </div>
          <p class="toggler-label">Active in all companies</p>
          <img src="@/assets/info.svg" alt="Info icon" style="height: 20px; width: auto; opacity: 0.4">
        </div>
        <div class="footer-actions__btn">
          <button class="main-btn">Next Step</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup () {


    return {}
  }
}
</script>

<style scoped>

</style>