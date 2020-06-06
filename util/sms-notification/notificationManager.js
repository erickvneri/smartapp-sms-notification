"use strict";
const { smsNotification } = require("./smsNotification");
exports.notificationManager = function (device, capability, value) {
  let statusMsg;
  // If Battery level is under 30%
  if (capability == "battery" && value <= 30) {
    statusMsg = `Device: "${device.label}"\nBattey: ${value}%\nStatus: online`;
  }
  // If Health Status is Offline
  else if (capability == "healthCheck" && value == "offline") {
    statusMsg = `WARNING!!\nDevice "${device.label}" is offline`;
  }
  if (statusMsg) {
    smsNotification(statusMsg);
    console.log("\nSMS Notification sent.");
  }
};
