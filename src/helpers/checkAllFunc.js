export const handleCheckAll = (inputFlag, atr, dataCollection, key) => {
  const checkboxes = [...document.querySelectorAll(`[${atr}]`)];
  inputFlag.value = !inputFlag.value;
  if (inputFlag.value) {
    dataCollection[key] = [];
    checkboxes.forEach(box => {
      box.checked = true;
      dataCollection[key].push(box.value);
    });
  }
  if (!inputFlag.value) {
    checkboxes.forEach(box => {
      box.checked = false;
      dataCollection[key] = [];
    });
  }
}

export const handleAdminCheckAll = (inputFlag, dataCollection) => {
  const checksTable = document.querySelector('table');
  const checkboxes = [...checksTable.querySelectorAll('[type="checkbox"]')];
  inputFlag.value = !inputFlag.value;

  if (inputFlag.value) {
    for (let key in dataCollection) {
      const collectionProperty = checkboxes.filter(el => el.dataset[key]);
      dataCollection[key] = [];
      collectionProperty.forEach(el => {
        el.checked = true;
        dataCollection[key].push(el.value);
      })
    }
  }

  if (!inputFlag.value) {
    for (let key in dataCollection) {
      const collectionProperty = checkboxes.filter(el => el.dataset[key]);
      collectionProperty.forEach(el => {
        el.checked = false;
        dataCollection[key] = [];
      })
    }
  }
};