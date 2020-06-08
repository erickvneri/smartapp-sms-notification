"use strict";
// TWILIO SMS NOTIFICATION SERVICE
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const smsClient = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

exports.smsNotification = function (message) {
  return smsClient.messages.create({
    body: message,
    from: process.env.TWILIO_ORIG_NUM,
    to: process.env.TWILIO_DEST_NUM,
  });
};
