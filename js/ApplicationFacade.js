puremvc.define(
{
    name: 'ApplicationFacade',
    parent: puremvc.Facade,
    
    constructor: function(multitonKey) {
        puremvc.Facade.call(this, multitonKey);
    }
},
{ 
    initializeController: function() {
        puremvc.Facade.prototype.initializeController.call(this);
        this.registerCommand(ApplicationFacade.STARTUP, controller.StartupCommand);
        this.registerCommand(ApplicationFacade.EXITING_CLOSED_STATE, controller.ExitingClosedStateCommand);
        this.registerCommand(ApplicationFacade.ENTERING_OPENED_STATE, controller.EnteringOpenedStateCommand);
        this.registerCommand(ApplicationFacade.CHANGED_CLOSED_STATE, controller.ChangedClosedStateCommand);
        this.registerCommand(ApplicationFacade.ENTER, controller.EnterCommand);
        this.registerCommand(ApplicationFacade.EXIT, controller.ExitCommand);
    },
    
    initializeModel: function () {
        puremvc.Facade.prototype.initializeModel.call(this);
    },
    
    initializeView: function () {
        puremvc.Facade.prototype.initializeView.call(this);
    },
    
    startup: function(app) {
        this.sendNotification(ApplicationFacade.STARTUP, app);
    }
},
{   
    getInstance: function(multitonKey) {
        var instanceMap = puremvc.Facade.instanceMap;
        instance = instanceMap[multitonKey];
        if(instance) {
            return instance;
        }
        return instanceMap[multitonKey] = new ApplicationFacade(multitonKey);
    },
    
    NAME: "ApplicationFacade",
    
    STARTUP: "startup",
    
    WRITE: "write",
    EXITING_CLOSED_STATE: "exitingClosedState",
    ENTERING_OPENED_STATE: "enteringOpenedState",
    CHANGED_CLOSED_STATE: "changedClosedState",
    
    ENTER: "enter",
    EXIT: "exit"
}
);