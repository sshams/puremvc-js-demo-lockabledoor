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