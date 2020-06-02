exports.refreshSchedule = function(devices){
    return {
        name: 'Test Device Health Care SmartApp - Refresh Schedule Rule',
        actions: [
            {
                every: {
                    interval: {
                        value: {
                            integer: 3
                        },
                        unit: 'Hour'
                    },
                    actions: [
                        {
                            command: {
                                devices: devices,
                                commands: [
                                    {
                                        component: 'main',
                                        capability: 'refresh',
                                        command: 'refresh',
                                        arguments: []
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }
};