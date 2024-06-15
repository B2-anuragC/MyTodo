// import ExtensionMessageEvent from 'chrome';

interface ExtensionMessageEvent {
  msg: any;
  sender: any;
  sendResponse: any;
}

export function backgroundMessage(msgEvent: ExtensionMessageEvent) {
  console.log('background');
  console.log(msgEvent);
}

export function extensionStartup() {}

export function firstTimeLaunch() {}

// function unhandleEvent(msgEvent: ExtensionMessageEvent) {
//   console.log('Message event not handled', msgEvent.msg);
// }
