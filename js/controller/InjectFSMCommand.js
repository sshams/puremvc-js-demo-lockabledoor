/*
 PureMVC State Machine Demo for JS - Lockable Door
 Copyright(c) 2014 Saad Shams <saad.shams@puremvc.org>
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/
puremvc.define(
{
    name: "controller.InjectFSMCommand",
    parent: puremvc.SimpleCommand
},
{
    execute: function(notification) {
        
        var fsm = {
           "@initial": LockableDoor.STATE_CLOSED,
           "state": [
              {
                 "@name": LockableDoor.STATE_CLOSED,
                 "@changed": ApplicationFacade.CHANGED_CLOSED_STATE,
                 "transition": [
                    {
                       "@action": LockableDoor.ACTION_OPEN,
                       "@target": LockableDoor.STATE_OPENED
                    },
                    {
                       "@action": LockableDoor.ACTION_LOCK,
                       "@target": LockableDoor.STATE_LOCKED
                    }
                 ]
              },
              {
                 "@name": LockableDoor.STATE_LOCKED,
                 "transition": [
                    {
                        "@action": LockableDoor.ACTION_UNLOCK,
                        "@target": LockableDoor.STATE_CLOSED
                    }
                 ]
              },
              {
                 "@name": LockableDoor.STATE_OPENED,
                 "@entering": ApplicationFacade.ENTERING_OPENED_STATE,
                 "transition": [
                    {
                    "@action": LockableDoor.ACTION_CLOSE,
                    "@target": LockableDoor.STATE_CLOSED
                    }
                  ]
              }
           ]
        };
        
        var injector = new puremvc.statemachine.FSMInjector(fsm);
        injector.initializeNotifier(this.multitonKey);
        injector.inject();
    }
}
);