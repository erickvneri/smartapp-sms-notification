exports.refreshSchedule = function(devices){
    return {
        name: 'refresh',
        actions: [
            {
                every: {
                    interval: {
                        value: {
                            integer: 3
                        },
                        unit: 'Hour'
                    }
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
        ]
    }
};