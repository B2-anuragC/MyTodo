import { backgroundMessage } from './mssageEvent';

chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

chrome.runtime.onMessage.addListener(backgroundMessage);
