import {
    AlleoWidget,
    DeploymentSettingsHelper,
    DefaultColors,
    SettingsDialogHelper,
    ColorPickerHelper,
    ColorSwitcherHelper,
    ResizeHelper,
    DefaultLocale,
    AssetHelper,
    ScrollHelper,
    Coordinates,
    EventDisableHelper,
    LoadSharingHelper,
    SharedLock,
    ExposeActionHelper,
    RealIBoardObject,
    isTransparent,
    randomInt,
    waitUntilDomUpdates
} from "alleoWidgetUtils"

const defaultSharedVariables = {
    'text' : <string>(DeploymentSettingsHelper.settings?.defaultValue ?? 'Hello Alleo!'),
    'number' : <number>0,
    'color' : <string>(DeploymentSettingsHelper.settings?.defaultColor ?? DefaultColors.text),
    'backgroundColor' : <string>DefaultColors.background
}

class HelloWorldWidget extends AlleoWidget<typeof defaultSharedVariables> {

    constructor() {
        super(defaultSharedVariables);

        this.updateText()
        this.updateNumber()

        haptic.getFieldChanged$('text').subscribe(() => this.updateText())
        haptic.getFieldChanged$('number').subscribe(() => this.updateNumber())

        ExposeActionHelper.exposeActions([
            {
                name: 'roll',
                action: () => this.roll()
            }
        ])

        haptic.contextMenuButtons = [
            {
                id: 'reset_icon',
                label: 'Roll the number',
                icon: { icon: 'redo', set: 'fas' },
                action: () => this.roll()
            }]

        haptic.actionTriggers = [
                {
                    id: 'widget-hello-onRoll',
                    label: 'Number Rolled'
                }
            ]

        new SettingsDialogHelper({ fields: [
            {
                key: 'text',
                type: 'input',
                defaultValue: this.shared.text,
                templateOptions: {
                    label: 'The text to display'
                }
            }
        ]})

        new ColorPickerHelper(
            'backgroundColor',
            '--widget-background-color',
            this.shared.backgroundColor,
            {label: "Background Color", icon: { icon: 'square', set: 'fas' }, palette:'Text', includeTransparent: false}
        )

        new ColorSwitcherHelper(
            'color',
            '--widget-color',
            this.shared.color,
            {label: "Text Color", icon: { icon: 'text', set: 'fas' }}
        )
    }

    public updateText(): void {
        this.domSelect(".hello-world").innerHTML = this.shared.text
    }

    public roll(): void {
        this.shared.number = randomInt(0, 9);
        haptic.triggerAction("widget-hello-onRoll");
    }

    public updateNumber(): void {
        this.domSelect(".hello-roll").innerHTML = this.shared.number.toString();
    }
}

new HelloWorldWidget()