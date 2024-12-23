# YouTube_Activity_Automation

📀 Loop - A Chrome Extension for Seamless YouTube Playback
📝 Problem Statement
While enjoying music on YouTube, the platform occasionally pauses playback, displaying the prompt: “Are you still watching?”. This happens when there’s no user activity for a certain period. Although it's a minor inconvenience, it can interrupt your vibe, especially when you’re multitasking, doing chores, or just vibing to your playlist and you are primarily on YouTube, not other streaming platforms liek Spotify and not also on YouTube Music.

Platforms like Spotify exist, but premium subscriptions cost money. So, I decided to create Loop, a simple Chrome extension to simulate user activity and prevent YouTube from pausing your music. 

This tool isn’t solving a massive pain point; it’s more of a fun project that helped me familiarize myself with Chrome Extensions, automation tools, and the Chrome Web Store while solving a small annoyance.

🚀 What is Loop?
Yutu is a lightweight Chrome extension that:

Prevents YouTube from pausing playback by simulating user activity.
Includes smart features like toggling the automation tool on/off and adjusting activity intervals to mimic real user behavior.
Provides a sleek, customizable interface with light/dark mode support.
Whether you’re doing chores, working, or relaxing, Loop ensures uninterrupted playback so you can focus on what matters most.

⚙️ Features
Core Functionality
🎵 Prevent YouTube Pausing: Simulates user activity (like clicks or playback) to stop YouTube from interrupting your playlist.
🎛️ Enable/Disable Toggle: Quickly turn the tool on or off from the popup menu.
🕒 Auto-Rest Mode: The tool pauses itself for a while (configurable) to simulate natural usage, preventing detection.
⏲️ Adjustable Activity Intervals: Customize how frequently the tool simulates activity (e.g., every 15 seconds, 30 seconds).
User Interface (UI)
🌞 Light/Dark Mode: Toggle between light and dark themes for a personalized experience.
⚙️ Settings Page: Fine-tune the extension's behavior, including activity intervals, auto-rest configurations, and reset options.
Other Features
🔔 Optional Notifications: Get alerts when the tool toggles on/off or encounters issues (optional in settings).
💾 Saves Preferences: Automatically saves user settings like theme, toggle state, and interval preferences using Chrome’s storage.
🚀 Lightweight & Fast: Optimized for minimal resource usage (CPU/memory).
📂 Project Structure

📁 Loop Project Structure
├── 📁 icons         // Icons for the extension (16x16, 48x48, 128x128)
├── 📁 popup         // Popup UI files
│   ├── popup.html
│   ├── popup.css
│   ├── popup.js
├── 📁 settings      // Settings page files
│   ├── settings.html
│   ├── settings.css
│   ├── settings.js
├── 📁 styles        // Stylesheets for light/dark mode
│   ├── light.css
│   ├── dark.css
├── background.js    // Background script for activity automation
├── manifest.json    // Extension configuration
└── README.md        // Project documentation
📦 How to Use Loop
1. Install the Extension Locally
Clone the repository:
bash
Copy code
git clone git@github.com:JerryTarus/YouTube_Activity_Automation.git
cd yutu-extension
Open Chrome and navigate to chrome://extensions/.
Enable Developer Mode in the top-right corner.
Click on Load unpacked and select the project folder.
The extension will appear in the toolbar, ready for use! 🎉
🎨 Design and Icons
Icons: Designed using Canva with modern, minimalistic visuals.
Sizes:
16x16 (Toolbar icon).
48x48 (Extensions page).
128x128 (Web Store and promotional use).
All icons are stored in the /icons folder.
🌐 Publishing to Chrome Web Store
Step 1: Create a Developer Account
Go to the Chrome Web Store Developer Dashboard.
Pay the one-time developer registration fee (currently $5).
Step 2: Prepare the Package
Zip the project files:
bash
Copy code
zip -r loop.zip . -x "*.git*"
Ensure your manifest.json is properly configured with:
Versioning (increment for updates).
Icons.
Permissions (e.g., tabs, storage).
Step 3: Upload to the Web Store
Upload the ZIP file and fill out the required information (description, screenshots, etc.).
Submit your extension for review.
Step 4: Promote Your Extension
Once approved, share the link with others and gather user feedback!

🛠️ How to Test Loop
Install the extension locally as described above.
Open YouTube and start playing a video.
Activate the tool by toggling it ON in the popup menu.
Wait for inactivity (or skip ahead by triggering YouTube’s auto-pause manually).
Verify that Loop prevents pausing by simulating activity.
Experiment with different settings like interval durations, auto-rest, and light/dark modes.
📖 Lessons Learned
Building Loop taught me the basics of Chrome Extension Development, including how to work with:
Background scripts.
Popup UI and settings pages.
Chrome APIs like chrome.tabs and chrome.storage.
It was a great way to practice automation, JavaScript, and explore the Chrome Web Store publishing process.
🎯 Future Plans
Loop is a simple tool with room for improvement. Future iterations may include:

Auto search music on YouTube
Multi-platform support (e.g., Spotify Web).
Advanced themes or animations for better UX.
Activity logs to track actions.
Keyboard shortcuts for quick toggling.
📬 Feedback
Found a bug or have a suggestion? Feel free to open an issue or contribute to the project!

💡 Why Loop?
This project was inspired by a minor inconvenience but turned into a fun and educational journey. By solving a small problem, I’ve laid the foundation for creating more advanced automation tools and gaining confidence as a Chrome Extension Developer.

So, the next time YouTube asks, “Are you still watching?”, let Loop take care of it for you! 😊

Enjoy uninterrupted music! 🎶

------------------------------ Jerry Tarus ----------------------------------
 





