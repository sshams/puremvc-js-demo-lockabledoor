puremvc.define(
{
    name: "controller.EnteringOpenedStateCommand",
    parent: puremvc.SimpleCommand
},
{
    execute: function(notification) {
        this.sendNotification(ApplicationFacade.WRITE, "entering StateMachineDemo.STATE_OPENED\n");   
    }
},
{
}
);