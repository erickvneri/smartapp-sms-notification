## SMS Notification SmartApp - Battery Devices

 
This SmartApp will subscribe **battery** devices and trigger SMS notifications in the following cases:

- If device's battery level is under **30%**.
- If device's health status is **offline**.

_**Note**: To help developers to integrate their SmartApp instance, this SmartApp example will be hosted at [Glitch](https://glitch.com)._

---

## 1. Account requirements:
1. An active [SmartThings](https://smartthings.developer.samsung.com/) account.
1. A [Twilio](https://www.twilio.com/try-twilio) account (_free tier_).
1. A [Glitch](https://glitch.com) account(_free-tier_).

## 2. Setting up Glitch server.
1. Go to _Glitch's_ main page.
1. Create a **New Project** (_hello-express_).
1. At the bottom-left, open **Tools**.
1. Click *Import and export*/**Import from GitHub**.
1. Write the GitHub's path of the project (_e.g. "git-username/smartapp-battery-sms-notification"_).

## 3. Setting up environment.
1. From your _Twilio_ account, get the followig info:
    - Account Sid.
    - Authorization Token.
    - Trial Number.
    - The number that you've registered (_including the country code_).
1. Save these values in a `.env` file following the format of the `.env.example` file, _e.g._: 

        # SERVER SETTINGS
        PORT=8000

        ## TWILIO SETTINGS
        TWILIO_ACCOUNT_SID=xxxxxxxxxxxxxxx
        TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxx
        TWILIO_ORIG_NUM=+0000000000
        TWILIO_DEST_NUM=+0000000000


## 4. Create your SmartApp Automation project.
1. From Glitch, copy the **live Url** (_top-left of screen, Share/**live Url**_).
1. Go to your [Developer Workspace](https://smartthings.developer.samsung.com/workspace).
1. Create a _New Project_ - **_Automation for the SmartThings App_**.
1. _Registe App_ as **Webhook endpoint** and paste the _live Url_ as your **Target Url**. 
1. White list the following permission scopes: `r:devices:*`, `x:devices:*`, `r:locations:*`,  `r:rules:*` and `w:rules:*`
1. Click **next** and save your project. No additional configuration is required.
1. Back to **Glitch**, copy the **confirmation Url** from the  logs (_bottom-left of screen, Tools/**Logs**_) and paste it at your browser.
1. Once your SmartApp gets _verified_, **deploy it to test**.

## 5. Install your SmartApp at the SmartThings app.
1. Open your SmartThings app.
1. Access the SmartApp catalog (_at the main screen, tap "+" icon/**SmartApp**_).
1. You will find your SmartApp listed at the bottom of the SmartApps catalog.
1. Select it and proceed to install it.

---
For more information, please check the [SmartThings Documentation](https://smartthings.developer.samsung/docs) or visit our  [Community Forums](https://community.smartthings.com)

    
    
