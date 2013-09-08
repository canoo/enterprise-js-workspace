# Exercise - Cordova Plugins

## plugin installation

### install a standard plugin (e.g. vibration)
```bash
cordova plugins add https://git-wip-us.apache.org/repos/asf/cordova-plugin-vibration.git
```

#### list of standard plugins

https://git-wip-us.apache.org/repos/asf/cordova-plugin-*

## Exercise: Add a delete confirmation dialog

Install dialogs plugin:

- see http://cordova.apache.org/docs/en/3.0.0/cordova_notification_notification.md.html

- usage:
```JavaScript
navigator.notification.confirm(
        'Do you really want to delete this entry?', // message
        function(buttonIndex) { // callback to invoke with index of button pressed
            if (buttonIndex === 1) {
                me.deleteItem2($item);
            }
        },
        'Confirmation', // title
        'Delete,Cancel' // buttonLabels
);
```

- use dialogs plugin in delete callback (DetailView.js)

