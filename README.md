# smartapp-sms-notification
SmartApp that will trigger an SMS notification when battery of devices is under 25%

# SMS Notification SmartApp

### Insights

- SMS Notifications based on critical status of devices or local disconnections (_Presence Sensor,
Health Check, Motion Sensor, Location Modes, etc._).
- Self-hosted, via AWS Lambda function or at Glitch express builder.
- Easy environment registration and code installation.
- SmartApp settings as database-repository of ids.

--- 

- Twilio setup:
1. Create an account at [Twilio](https://www.twilio.com/try-twilio).
1. Get a trial number.
1. At the end, yyour .env file should looks like following:

        ACCOUNT_SID={account-sid}
        TWILIO_AUTH_TOKEN={auth-token}
        APP_NUMBER={free-trial-number}
        DEST_NUMBER={number-registered}