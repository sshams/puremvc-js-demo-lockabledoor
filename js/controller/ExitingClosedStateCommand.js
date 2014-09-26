puremvc.define(
{
    name: "controller.ExitingClosedStateCommand",
    parent: puremvc.SimpleCommand
},
{
    execute: function(notification) {
        this.sendNotification(ApplicationFacade.WRITE, "exiting StateMachineDemo.STATE_CLOSED\n");
    }
},
{
}
);