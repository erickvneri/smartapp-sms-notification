'use strict';
require('dotenv').config();

const { refreshSchedule } = require('./refresh-rule-schedule');

exports.refreshRuleManager = function(context){
    const devices = context.config.batteryDevices.map(deviceData => deviceData.deviceConfig.deviceId);
    const scheduleRule = refreshSchedule(devices);
    // Check "Refresh Rule" existence at Rules API.
    context.api.rules.list(context.locationId).then(rules => {
        if (!rules){
            // If no Rules installed, then create it.
            context.api.rules.create(scheduleRule, context.locationId).then(response => console.log('\"nRefresh Schedule" Rule created. ',response));
        } 
        else {    
            // If user has Rules installed, track "Refresh Schedule" Rule.
            rules.forEach(r => {
                if (r.name == scheduleRule.name){
                    // If found, delete "Refresh" to avoid duplications.
                    context.api.rules.delete(r.id, context.locationId).then(res => console.log('\nUpdating "Refresh Schedule" Rule...'))
                }
            })
            // Recreate Refresh Schedules Rule.
            context.api.rules.create(scheduleRule, context.locationId).then(response => console.log('\n"Refresh Schedule" Rule updated.',response));
        }
    });
};
