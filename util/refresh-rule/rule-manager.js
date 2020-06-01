'use strict';
require('dotenv').config();

const { refreshSchedule } = require('./refresh-rule-schedule');

exports.refreshRuleManager = function(context){
    const devices = context.config.batteryDevices.map(deviceData => deviceData.deviceConfig.deviceId)
    const scheduleRule = refreshSchedule(devices)
    // Check Refresh Rule existence.
    context.api.rules.list(context.locationId).then(rules => {
        if (!rules){
            // If no rules: Create it.
            context.api.rules.create(scheduleRule, context.locationId).then(response => console.log('\"nRefresh Schedule" Rule created. ',response));
        } 
        else {    
            // If user has rules, track Refresh Schedule Rule.
            rules.forEach(r => {
                if (r.name == scheduleRule.name){
                    // Delete Rule to avoid duplications.
                    // FIXME: Use update method.
                    context.api.rules.delete(r.id, context.locationId).then(res => console.log('\nUpdating "Refresh Schedule" Rule...'))
                }
            })
            // Recreate Refresh Schedules Rule.
            context.api.rules.create(scheduleRule, context.locationId).then(response => console.log('\n"Refresh Schedule" Rule updated.',response));
        }
    });
};
