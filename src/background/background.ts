chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

chrome.runtime.onMessage.addListener(function (
  msg,
  // sender, sendResponse
) {
  if (msg.action === 'updateIcon') {
    if (msg.value) {
      console.log(chrome);
      chrome.browserAction.setBadgeText({ text: `${msg.value}` });
    }
  }
});
