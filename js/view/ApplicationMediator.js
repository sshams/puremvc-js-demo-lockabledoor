/*
 PureMVC State Machine Demo for JS - Lockable Door
 Copyright(c) 2014 Saad Shams <saad.shams@puremvc.org>
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/
puremvc.define(
{
    name: 'view.ApplicationMediator',
    parent: puremvc.Mediator,
    
    constructor: function(viewComponent) {
        puremvc.Mediator.call(this, this.constructor.NAME, viewComponent);
    }
},
{
    onRegister: function() {
        var self = this;
        function ILockableDoor() { 
            this.handleEvent = function(type){self.handleEvent(type)};
        }
        this.viewComponent.setDelegate(new ILockableDoor());
    },
    
    handleEvent: function(type) {
        switch(type) {
            case LockableDoor.ACTION_OPEN:
            case LockableDoor.ACTION_CLOSE:
            case LockableDoor.ACTION_LOCK:
            case LockableDoor.ACTION_UNLOCK:
                this.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, type);
            break;
        }
    },
    
    listNotificationInterests: function() {
        return [
            puremvc.statemachine.StateMachine.CHANGED,
            ApplicationFacade.WRITE
        ];
    },
            
    handleNotification: function(notification) {
        switch(notification.getName()) {
            case puremvc.statemachine.StateMachine.CHANGED:
                this.viewComponent.write('StateMachine.CHANGED ' + notification.getBody().name + "\n\n");
                this.viewComponent.setState(notification.getBody().name);
                break;
            case ApplicationFacade.WRITE:
                this.viewComponent.write(notification.getBody());
                break;
            default:
                console.log(notification);
        }
    }
},
{
    NAME: "view.mediators.ApplicationMediator"
}
);
