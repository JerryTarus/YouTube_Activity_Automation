let intervalId = null;

// Listen for messages from popup or content script
chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "start") {
    startAutomation();
  } else if (request.action === "stop") {
    stopAutomation();
  }
});

// Simulate user activity
function startAutomation() {
  if (intervalId) return; // Avoid duplicates

  intervalId = setInterval(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: simulateActivity,
      });
    });
  }, 15000); // Default interval: 15 seconds
}

function stopAutomation() {
  clearInterval(intervalId);
  intervalId = null;
}

function simulateActivity() {
  const video = document.querySelector("video");
  if (video) {
    video.play();
  }
}
