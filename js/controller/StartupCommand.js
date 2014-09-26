/*
 PureMVC MultiCore Demo for JS - Lockable Door
 Copyright(c) 2014 Saad Shams <saad.shams@puremvc.org>
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/
puremvc.define(
{
    name: "controller.StartupCommand",
    parent: puremvc.MacroCommand
},
{
    initializeMacroCommand: function() {
        this.addSubCommand(controller.PrepModelCommand);
        this.addSubCommand(controller.PrepViewCommand);
        this.addSubCommand(controller.InjectFSMCommand);
    }
},
{
}
);