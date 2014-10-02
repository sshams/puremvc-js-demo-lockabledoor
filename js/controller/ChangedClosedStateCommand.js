/*
 PureMVC State Machine Demo for JS - Lockable Door
 Copyright(c) 2014 Saad Shams <saad.shams@puremvc.org>
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/
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