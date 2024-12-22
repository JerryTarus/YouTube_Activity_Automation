const toggleAutomation = document.getElementById("toggleAutomation");
const toggleTheme = document.getElementById("toggleTheme");
const status = document.getElementById("status");

// Load saved settings
chrome.storage.sync.get(["isEnabled", "theme"], (data) => {
  toggleAutomation.checked = data.isEnabled || false;
  status.textContent = data.isEnabled ? "Tool is Active" : "Tool is Inactive";

  // Apply theme
  if (data.theme === "dark") {
    document.body.classList.add("dark");
  }
});

// Toggle automation
toggleAutomation.addEventListener("change", () => {
  const isEnabled = toggleAutomation.checked;
  chrome.storage.sync.set({ isEnabled });
  status.textContent = isEnabled ? "Tool is Active" : "Tool is Inactive";

  chrome.runtime.sendMessage({ action: isEnabled ? "start" : "stop" });
});

// Toggle theme
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  chrome.storage.sync.set({ theme });
});
