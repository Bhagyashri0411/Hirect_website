import axios from 'axios';

export default ({ app }, inject) => {
  inject('sendAppLink', sendAppLink);
};


export function sendAppLink(mobile, page) {
  if (this.$device.isMobile && page !== 'download_modal') {
    return;
  }
  this.$ga.event('click', {
    'event_category': 'Get App Link',
    'event_label': page
  });
  const sendsms = async (smsData) => {
    const response = await axios.post('https://prod.hirect.ai/hirect/login/insms', smsData);
    return response;
  }
  mobile = mobile.trim();
  let errorMsg = '';
  if (mobile.length < 10) {
    return 'Mobile number should have 10 characters';
  } if (/[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{1}/g.test(mobile) === true) {
    return 'Mobile number should not contain alphabets or special characters';
  } if (!(/(6|7|8|9)\d{9}/g.test(mobile))) {
    return 'Mobile number should start with 6,7,8 or 9';
  }
  let smsData = {
    mobile: mobile,
    placement: page,
  };
  let lastTimeStamp = localStorage.getItem('lastSmsTimestamp');

  if (lastTimeStamp) {
    lastTimeStamp = new Date(lastTimeStamp);
    const currentTimeStamp = new Date();
    const hourDiff = lastTimeStamp.getHours() - currentTimeStamp.getHours();
    const minuteDiff = currentTimeStamp.getMinutes() - lastTimeStamp.getMinutes();
    if (hourDiff <= 0 && minuteDiff <= 5) {
      return 'You can send sms only once in 5 minutes';
    }
  }
  errorMsg = sendsms(smsData).then((res) => {
    if (res.status === 429)
      return 'Please wait atleast 1 minute before sending another sms';
    if (res.status === 200) {
      // if (Object.entries(res.data.error).length) {
      //   return 'Something went wrong. Please try again later';
      // }
      localStorage.setItem('lastSmsTimestamp', new Date());
      return 'Success! We have shared the link via SMS';
    } else {
      return 'Something went wrong. Please try again later';
    }
  });

  return errorMsg;
}
