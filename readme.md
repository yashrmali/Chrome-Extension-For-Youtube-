# 📺 YouTube Tab Manager

**YouTube Tab Manager** is a Chrome extension that automatically pauses YouTube videos when you switch to another tab and resumes them when you return to the YouTube tab.

## ✨ Features

- ⏸️ Automatically pauses YouTube videos when you switch to another tab.
- ▶️ Automatically resumes YouTube videos when you return to the YouTube tab.

## 🚀 Installation

1. 📥 **Clone this repository** or **download the code** as a ZIP file and extract it.
2. 🌐 Open Google Chrome and navigate to `chrome://extensions/`.
3. 🛠️ Enable "Developer mode" by clicking the toggle switch in the top right corner.
4. 📂 Click the "Load unpacked" button and select the directory where you cloned or extracted the code.

## 📂 Project Structure

- **`manifest.json`**: The manifest file that defines the extension's properties and permissions.
- **`background.js`**: The background script that manages tab activation and sends messages to the content script.
- **`content.js`**: The content script that pauses and resumes the YouTube video based on window focus and blur events.

## 📝 Manifest File

Defines the extension's metadata, permissions, and background scripts.

```json
{
  "manifest_version": 3,
  "name": "YouTube Tab Manager",
  "version": "1.0",
  "description": "Pauses YouTube videos when switching tabs and resumes when returning.",
  "permissions": [
    "tabs",
    "activeTab",
    "scripting"
  ],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["*://www.youtube.com/*"],
      "js": ["content.js"]
    }
  ]
}
```
## 🛠️ Background Script
Handles tab activation events and injects scripts to pause and resume videos.

## 📜 Content Script
Listens for window focus and blur events to pause and resume the YouTube video.

## 📖 Usage
📺 Open YouTube in a Chrome tab and start playing a video.
🔄 Switch to another tab. The video will automatically pause.
↩️ Switch back to the YouTube tab. The video will automatically resume.


## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.



Thank you for using YouTube Tab Manager! 🌟
