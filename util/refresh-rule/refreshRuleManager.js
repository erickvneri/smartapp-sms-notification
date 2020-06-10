"use strict";
const { refreshSchedule } = require("./refreshSchedule");

exports.refreshRuleManager = function (batteryDevices, rulesApi, locationId) {
  const devices = batteryDevices.map(
    (deviceData) => deviceData.deviceConfig.deviceId
  );

  const scheduleRule = refreshSchedule(devices);
  // Check current list of Rules installed.
  rulesApi.list(locationId).then((rules) => {
    if (rules) {
      rules.forEach((r) => {
        if (r.name == scheduleRule.name) {
          // If "Refresh Schedule" is found.
          rulesApi
            .delete(r.id, locationId)
            .then(() => console.log("\nUpdating Rules..."));
        }
      });
    }
    // Create "Refresh Schedules" Rule.
    rulesApi
      .create(scheduleRule, locationId)
      .then((response) =>
        console.log('\n"Refresh Schedule" created.', response)
      );
  });
};
