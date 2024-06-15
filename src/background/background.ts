import {
  backgroundMessage,
  extensionStartup,
  firstTimeLaunch,
} from './mssageEvent';

chrome.runtime.onInstalled.addListener(firstTimeLaunch);
chrome.runtime.onStartup.addListener(extensionStartup);
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});
chrome.runtime.onMessage.addListener(backgroundMessage);
