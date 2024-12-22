chrome.storage.sync.get("isEnabled", (data) => {
    if (data.isEnabled) {
      simulateActivity();
    }
  });
  
  function simulateActivity() {
    const video = document.querySelector("video");
    if (video && video.paused) {
      video.play();
    }
  }
  