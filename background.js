chrome.tabs.onActivated.addListener(async function(activeInfo) {
    // Get the current tab details
    let tab = await chrome.tabs.get(activeInfo.tabId);
    // Send a message to the content script to resume the video if the tab is YouTube
    if (tab.url.includes("youtube.com/watch")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: resumeVideo
      });
    }
  });
  
  // Function to pause the video
  function pauseVideo() {
    const video = document.querySelector('video');
    if (video && !video.paused) {
      video.pause();
    }
  }
  
  // Function to resume the video
  function resumeVideo() {
    const video = document.querySelector('video');
    if (video && video.paused) {
      video.play();
    }
  }
  
  chrome.tabs.onUpdated.addListener(async function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.url.includes("youtube.com/watch")) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: resumeVideo
      });
    }
  });
  
  chrome.tabs.onHighlighted.addListener(async function(highlightInfo) {
    const tabs = await chrome.tabs.query({highlighted: true});
    tabs.forEach(tab => {
      if (tab.url.includes("youtube.com/watch")) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: resumeVideo
        });
      }
    });
  });
  
  chrome.tabs.onRemoved.addListener(async function(tabId, removeInfo) {
    chrome.tabs.query({}, function(tabs) {
      tabs.forEach(tab => {
        if (tab.url.includes("youtube.com/watch")) {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: pauseVideo
          });
        }
      });
    });
  });
  