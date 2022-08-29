import { reqPost } from './request.js';

export default ({ app }, inject) => {
  inject('sendToEsData', sendToEsData);
};
// get operating system information
function getOsInfo() {
  const userAgent = navigator.userAgent.toLowerCase();
  // console.log('getOsInfo ===> navigator = ', navigator)

  let name = 'Unknown';
  let version = 'Unknown';
  let browser = 'Unknown';
  let browserVersion = 'Unknown';
  let distinct_id = 'Unknown';
  let side = 'Unknown'

  // get / set distinct_id
  if (!window.localStorage.getItem('distinct_id')) {
    window.localStorage.setItem('distinct_id', (`${new Date().getTime()}${Math.floor(Math.random() * 10000)}`));
  }
  distinct_id = window.localStorage.getItem('distinct_id');

  if (userAgent.indexOf('win') > -1) {
    name = 'Windows';
    side = 'pc'
    if (userAgent.indexOf('windows nt 5.0') > -1) {
      version = 'Windows 2000';
    } else if (userAgent.indexOf('windows nt 5.1') > -1 || userAgent.indexOf('windows nt 5.2') > -1) {
      version = 'Windows XP';
    } else if (userAgent.indexOf('windows nt 6.0') > -1) {
      version = 'Windows Vista';
    } else if (userAgent.indexOf('windows nt 6.1') > -1 || userAgent.indexOf('windows 7') > -1) {
      version = 'Windows 7';
    } else if (userAgent.indexOf('windows nt 6.2') > -1 || userAgent.indexOf('windows 8') > -1) {
      version = 'Windows 8';
    } else if (userAgent.indexOf('windows nt 6.3') > -1) {
      version = 'Windows 8.1';
    } else if (userAgent.indexOf('windows nt 6.2') > -1 || userAgent.indexOf('windows nt 10.0') > -1) {
      version = 'Windows 10';
    } else {
      version = 'Unknown';
    }
  } else if (userAgent.indexOf('iphone') > -1) {
    name = 'Iphone';
    side = 'mobile'
    version = 'Iphone';
  } else if (userAgent.indexOf('mac') > -1) {
    name = 'Mac';
    side = 'pc'
    version = userAgent.substring(userAgent.indexOf('mac os') + 6, userAgent.indexOf('mac os') + 16);
  } else if (userAgent.indexOf('x11') > -1 || userAgent.indexOf('unix') > -1 || userAgent.indexOf('sunname') > -1 || userAgent.indexOf('bsd') > -1) {
    name = 'Unix';
    side = 'pc'
  } else if (userAgent.indexOf('linux') > -1) {
    if (userAgent.indexOf('android') > -1) {
      name = 'Android';
      side = 'mobile'
    } else {
      name = 'Linux';
      side = 'pc'
    }
  } else {
    name = 'Unknown';
  }

  // get browser
  if (userAgent.indexOf('opera') > -1 || userAgent.indexOf('opr') > -1) {
    browser = 'Opera';
  } else if (userAgent.indexOf('compatible') > -1 && userAgent.indexOf('msie') > -1) {
    browser = 'IE';
  } else if (userAgent.indexOf('edge') > -1) {
    browser = 'Edge';
  } else if (userAgent.indexOf('firefox') > -1) {
    browser = 'Firefox';

    const index = userAgent.indexOf('firefox/');
    browserVersion = userAgent.substr(index + 8, 4);
  } else if (userAgent.indexOf('safari') > -1 && userAgent.indexOf('chrome') === -1) {
    browser = 'Safari';

    const index = userAgent.indexOf('version/');
    browserVersion = userAgent.substr(index + 8, 6);
  } else if (userAgent.indexOf('chrome') > -1 && userAgent.indexOf('safari') > -1) {
    browser = 'Chrome';

    const index = userAgent.indexOf('chrome/');
    browserVersion = userAgent.substr(index + 7, 12);
  } else if (!!window.ActiveXObject || 'ActiveXObject' in window) {
    browser = 'IE>=11';
  } else {
    browser = 'Unkonwn';
  }

  return {
    name, version, browser, browserVersion, distinct_id, side
  };
}

export async function sendToEsData(eventName, data, uid = '') {
  const {
    name, version, browser, browserVersion, distinct_id, side
  } = getOsInfo();
  const eventData = {
    distinctId: window.localStorage.getItem('distinctId'),
    uid,
    eventName,
    properties: {
      webVersion: '1.0.0',
      webVersionCode: 1,
      manufacturer: name,
      os: name,
      model: version,
      side: side,
      browser,
      browser_version: browserVersion,
      build_type: 'debug',
      role: 'recruiter',
      region: window.localStorage.getItem('region'),
      email: window.localStorage.getItem('email'),
      mobile: window.localStorage.getItem('mobile'),
      distinct_id,
    },
  };
  if (data) {
    Object.assign(eventData.properties, data);
  }
  const result = await reqPost('/hirect/datastatistics/data', eventData);

  if (result.data.code === 2000) {
    // console.log('send ES')
  }
}
