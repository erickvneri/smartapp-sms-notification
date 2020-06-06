exports.refreshSchedule = function (devices) {
  return {
    name: "Battery Monitor SmartApp example - Refresh Schedule Rule",
    actions: [
      {
        every: {
          interval: {
            value: {
              integer: 3,
            },
            unit: "Hour",
          },
          actions: [
            {
              command: {
                devices: devices,
                commands: [
                  {
                    component: "main",
                    capability: "refresh",
                    command: "refresh",
                    arguments: [],
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  };
};
