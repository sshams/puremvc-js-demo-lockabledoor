/*
 PureMVC MultiCore Demo for JS - Lockable Door
 Copyright(c) 2014 Saad Shams <saad.shams@puremvc.org>
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/
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