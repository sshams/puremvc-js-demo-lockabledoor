puremvc.define(
{
    name: "controller.PrepViewCommand",
    parent: puremvc.SimpleCommand
},
{
    execute: function(notification) {
        this.facade.registerMediator(new view.ApplicationMediator(notification.getBody()));
    }
},
{
}
);