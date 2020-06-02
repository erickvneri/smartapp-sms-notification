## SMS Notification SmartApp - Battery Devices

 
This SmartApp will subscribe **battery** devices and trigger SMS notifications in the following cases:

- If device's battery level is under **30%**.
- If device's health status is **offline**.

_**Note**: To help developers to create self-hosted SmartApp instances, this SmartApp example will be hosted at [Glitch](https://glitch.com)._

---

## Account requirements:

1. An active [SmartThings](https://smartthings.developer.samsung.com/) account.
1. A [Twilio](https://www.twilio.com/try-twilio) account (_free tier_).
1. A [Glitch](https://glitch.com) account(_free-tier and _).

## Setting up Glitch server.

1. Go to _Glitch's_ main page.
1. Create a **New Project**(_hello-express_).
1. At the bottom-left, open **Tools**.
1. Click *Import and export*/**Import from GitHub**.
1. Write up the GitHub's path (_e.g. smartthings/smartapp-sms-notification_).

## Setting up environment.
1. From your _Twilio_ account, get the followig info:
    - Account Sid.
    - Authorization Token.
    - Trial Number.
    - The number that you've registered (_including the country code_).
1. Create a `.env` file save those values as following: 

        ACCOUNT_SID = xxxxxxxxxxxxxxxx
        AUTH_TOKEN = xxxxxxxxxxxxxxxx
        ORIG_NUM = +0000000000
        DEST_NUM = +0000000000


    
    