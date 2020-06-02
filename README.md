## SMS Notification SmartApp - Battery Devices

 
This SmartApp will subscribe **battery** devices and trigger SMS notifications in the following cases:

- If device's battery level is under **30%**.
- If device's health status is **offline**.

_**Note**: To help developers to create self-hosted SmartApp instances, this SmartApp example will be hosted at [Glitch](https://glitch.com)._

---

## Account requirements:

1. An active [SmartThings](https://smartthings.developer.samsung.com/) account.
1. A free-tier [Twilio](https://www.twilio.com/try-twilio) account.
1. A free-tier [Glitch](https://glitch.com) account.

## Setting up SmartApp.

1. Go to _Glitch's_ main page.
1. Create a **New Project** and **Import from GitHub**.
1. Create a `.env` file save the following values: 

        ACCOUNT_SID={twilio-account-sid}
        AUTH_TOKEN={twilio-auth-token}
        ORIG_NUM={trial-number}
        DEST_NUM={registered-number}


    
    