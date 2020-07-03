function saveToName(name, data) {
  if (
    !localStorage.getItem(name) ||
    confirm("Do you want to overwrite this save?")
  )
    localStorage.setItem(name, JSON.stringify(data));
}

function loadSave(name) {
  return JSON.parse(localStorage.getItem(name));
}

function autosave(data) {
  if (!localStorage.getItem("autosavePos")) {
    localStorage.setItem("autosavePos", 0);
  }
  let pos = localStorage.getItem("autosavePos");
  localStorage.setItem("autosave" + pos, JSON.stringify(data));
  localStorage.setItem("autosavePos", (parseInt(pos) + 1) % 5);
}

function deleteSave(name) {
  if (
    localStorage.getItem(name) &&
    confirm("Do you want to overwrite this save?")
  ) {
    localStorage.removeItem(name);
  }
}


