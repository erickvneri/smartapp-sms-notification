'use strict';
require('dotenv').config();

// INIT SMS NOTIFICATION SERVICE
const ACCOUNT_SID = process.env.ACCOUNT_SID;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
const smsClient = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);

exports.smsNotification = function(message){
    return smsClient.messages
        .create({
            body: message,
            from: process.env.ORIG_NUM,
            to: process.env.DEST_NUM
        })
};
