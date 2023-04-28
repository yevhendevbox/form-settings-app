<template>
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
</template>

<script>
export default {
  name: 'LocationsTab',
  setup () {


    return {}
  }
}
</script>

<style scoped>

</style>