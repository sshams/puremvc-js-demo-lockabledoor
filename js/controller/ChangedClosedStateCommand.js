puremvc.define(
{
    name: "controller.ChangedClosedStateCommand",
    parent: puremvc.SimpleCommand
},
{
    execute: function(notification) {
        this.sendNotification(ApplicationFacade.WRITE, "changed StateMachineDemo.STATE_CLOSED\n");
    }
},
{
}
);