/*
 PureMVC MultiCore Demo for JS - Lockable Door
 Copyright(c) 2014 Saad Shams <saad.shams@puremvc.org>
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/
puremvc.define(
{
    name: "LockableDoor",
    constructor: function() {
        this.consoleText = document.getElementById("consoleText");
        this.vStack = document.getElementById("vStack");
        this.stateLabel = document.getElementById("stateLabel");
        
        var self = this; 
        document.getElementById("open").addEventListener("click", function(event){self.sendEvent(self.constructor.ACTION_OPEN)});
        document.getElementById("close").addEventListener("click", function(event){self.sendEvent(self.constructor.ACTION_CLOSE)});
        document.getElementById("lock").addEventListener("click", function(event){self.sendEvent(self.constructor.ACTION_LOCK)});
        document.getElementById("unlock").addEventListener("click", function(event){self.sendEvent(self.constructor.ACTION_UNLOCK)});
        
        ApplicationFacade.getInstance(LockableDoor.NAME).startup(this);
    }
},
{
    delegate: null,
    consoleText: null,
    vStack: null,
    state: null,
    stateLabel: null,
    
    sendEvent: function(eventName) {
        this.delegate.handleEvent(eventName);
    },
    
    setState: function(name) {
        this.state = name;
        this.stateLabel.innerHTML = name;
        this.changeViewStack();
    },
    
    changeViewStack: function() {
        switch(this.state) {
            case this.constructor.STATE_CLOSED:
                this.vStack.style.backgroundImage = "url(images/closed.png)";
                document.getElementById("open").removeAttribute("disabled");
                document.getElementById("lock").removeAttribute("disabled");
                document.getElementById("close").setAttribute("disabled", "true");
                document.getElementById("unlock").setAttribute("disabled", "true");
                break;
            case this.constructor.STATE_OPENED:
                this.vStack.style.backgroundImage = "url(images/opened.png)";
                document.getElementById("close").removeAttribute("disabled");
                document.getElementById("open").setAttribute("disabled", "true");
                document.getElementById("lock").setAttribute("disabled", "true");
                document.getElementById("unlock").setAttribute("disabled", "true");
                break;
            case this.constructor.STATE_LOCKED:
                this.vStack.style.backgroundImage = "url(images/locked.png)";
                document.getElementById("unlock").removeAttribute("disabled");
                document.getElementById("open").setAttribute("disabled", "true");
                document.getElementById("close").setAttribute("disabled", "true");
                document.getElementById("lock").setAttribute("disabled", "true");
                break;
        }
    },
    
    write: function(text) {
        this.consoleText.value += text;   
    }
},
{
    NAME: "LockableDoor",
    
    STATE_CLOSED: "LockableDoor/states/closed",
    STATE_OPENED: "LockableDoor/states/opened",
    STATE_LOCKED: "LockableDoor/states/locked",
    
    ACTION_OPEN: "LockableDoor/actions/open",
    ACTION_CLOSE: "LockableDoor/actions/close",
    ACTION_LOCK: "LockableDoor/actions/lock",
    ACTION_UNLOCK: "LockableDoor/actions/unlock"
}
);