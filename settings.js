// DOM Elements
const activityIntervalInput = document.getElementById("activity-interval");
const autoRestModeCheckbox = document.getElementById("auto-rest-mode");
const restSettingsDiv = document.getElementById("rest-settings");
const restDurationInput = document.getElementById("rest-duration");
const activeDurationInput = document.getElementById("active-duration");
const themeToggleSelect = document.getElementById("theme-toggle");
const saveSettingsButton = document.getElementById("save-settings");

// Load settings on page load
document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get(
    ["activityInterval", "autoRestMode", "restDuration", "activeDuration", "theme"],
    (data) => {
      activityIntervalInput.value = data.activityInterval || 15;
      autoRestModeCheckbox.checked = data.autoRestMode || false;
      restDurationInput.value = data.restDuration || 30;
      activeDurationInput.value = data.activeDuration || 60;
      themeToggleSelect.value = data.theme || "light";

      // Show/hide rest settings based on auto-rest mode
      toggleRestSettingsVisibility();
    }
  );
});

// Save settings
saveSettingsButton.addEventListener("click", () => {
  const settings = {
    activityInterval: parseInt(activityIntervalInput.value, 10),
    autoRestMode: autoRestModeCheckbox.checked,
    restDuration: parseInt(restDurationInput.value, 10),
    activeDuration: parseInt(activeDurationInput.value, 10),
    theme: themeToggleSelect.value,
  };

  chrome.storage.sync.set(settings, () => {
    alert("Settings saved successfully!");
  });
});

// Toggle visibility of rest settings
autoRestModeCheckbox.addEventListener("change", toggleRestSettingsVisibility);

function toggleRestSettingsVisibility() {
  if (autoRestModeCheckbox.checked) {
    restSettingsDiv.classList.remove("hidden");
  } else {
    restSettingsDiv.classList.add("hidden");
  }
}
