'use strict';
require('dotenv').config();

// Main imports
const express = require('express');
const SmartApp = require('@smartthings/smartapp');

// Sms notification service import
const { notificationManager } = require('./util/sms-notification/notification-manager');
const { refreshRuleManager } = require('./util');

// Server init
const server = express();
server.use(express.json());
// SmartApp init
const smartApp = new SmartApp();

// SmartApp definition
smartApp.appId('SmartApp example')
        // Uncomment below to check full lifecycle logs.
        // .enableEventLogging(2) 
        .disableCustomDisplayName(true)
        .disableRemoveApp(true)
        .defaultPage()
        .permissions(['r:devices:*', 'x:devices:*', 'r:rules:*', 'w:rules:*', 'r:locations:*'])
        .page('mainPage', (ctx, page, configData) => {
            page.complete(true)
                .name('Battery monitor')
                // Introduction of SmartApp example section
                .section('About this example', section => {
                    section.paragraphSetting('')
                        .name('The "Battery Monitor" SmartApp example will trigger an SMS Notification on critical device status.')
                        .description('- Battery level dropping under 30%.\n- Device going offline.')       
                })
                // Devices input section
            page.section('Batter devices:', section => {
                section.deviceSetting('batteryDevices')
                    .name('')
                    .description('Tap to select')
                    .capabilities(['battery'])
                    .required(true)
                    .multiple(true)
                    .permissions('rx')
            })
        })
        .updated(async (context, updateData) => {
            // Create refresh Rule
            await refreshRuleManager(context);
            
            // Create subscriptions
            context.api.subscriptions.unsubscribeAll();
            context.api.subscriptions.subscribeToDevices(context.config.batteryDevices, 'battery', 'battery', 'batterySubscription');
            context.api.subscriptions.subscribeToDevices(context.config.batteryDevices, 'healthCheck', '*', 'healthSubscription');
        })
        .subscribedEventHandler('batterySubscription', async (context, event) => {
            // Battery events handler
            console.log('Battery level update:', event);  
            await notificationManager(context, event);
        })
        .subscribedEventHandler('healthSubscription', async (context, event) => {
            // Health check events handler
            console.log('Health Status update:', event);
            await notificationManager(context, event);
        });

// Enable server routing
server.post('/', (req, res) => {
    console.log('\nLifecycle handled:', req.body.lifecycle)
    smartApp.handleHttpCallback(req, res);
});

// Server listener
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log('SmartApp running at port', PORT);
});
