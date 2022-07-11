import axios from 'axios';

export default ({ app }, inject) => {
  inject('sendAppLink', sendAppLink);
};

export function sendAppLink(mobile, page) {
  mobile = mobile.trim();
  let errorMsg='';
  if (mobile.length < 10) {
    errorMsg = 'Mobile number should have 10 characters';
  } else if (/[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{1}/g.test(mobile) === true) {
    errorMsg = 'Mobile number should not contain alphabets or special characters';
  } else {
    let smsData = {
      mobile: mobile,
      placement: page,
    };
    if(localStorage.getItem('lastSmsDetails')){
      const lastTimeStamp = new Date(JSON.parse(localStorage.getItem('lastSmsDetails')).createdDateTime);
      const currentTimeStamp = new Date();
      const hourDiff = lastTimeStamp.getHours() - currentTimeStamp.getHours();
      const minuteDiff = lastTimeStamp.getMinutes() - currentTimeStamp.getMinutes();
      if (hourDiff <= 0 && minuteDiff >= 5) {
        axios.post('/server-middleware/sendsms', smsData).then((res) => {
          if (res.data.error) {
            errorMsg = 'Something went wrong. Please try again later';
          } else {
            errorMsg = 'Success! We have shared the link via SMS';
            localStorage.setItem('lastSmsDetails', JSON.stringify(res.data));
          }
        });
      } else {
        errorMsg = 'You can send sms only once in 5 minutes';
      }
    } else {
      axios.post('/server-middleware/sendsms', smsData).then((res) => {
        if (!Object.entries(res.data.error).length) {
          localStorage.setItem('lastSmsDetails', JSON.stringify(res.data));
          errorMsg = 'Success! We have shared the link via SMS';
        } else {
          errorMsg = 'Something went wrong. Please try again later';
        }
      });
    }
  }
  return errorMsg;
}
