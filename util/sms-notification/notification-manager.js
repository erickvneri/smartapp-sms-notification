'use strict';
const { smsNotification } = require('./sms-notification-service');

exports.notificationManager = async function(context, event){
    const device = await context.api.devices.get(event.deviceId);
    let statusMsg;
    // If Battery level is under 30%
    if (event.capability == 'battery' && event.value <= 30){
        statusMsg = `Device: "${device.label}"\nBattey: ${event.value}%\nStatus: online`;
    }
    // If Health Status is Offline
    else if(event.capability == 'healthCheck' && event.value == 'offline'){
        statusMsg = `WARNING!!\nDevice "${device.label}" is offline`;
    }
    if (!!statusMsg){
        const sms = await smsNotification(statusMsg);
        console.log('\nSMS Notification sent.');
    }
};