import {AlleoWidget, ColorPickerHelper, DefaultColors, SettingsDialogHelper} from "alleoWidgetUtils"

class HelloWorldWidget extends AlleoWidget {

    constructor() {
        super({
            'text' : <string>'Hello Alleo!',
            'color' : <string>DefaultColors.text
        })

        this.updateText(this.shared.text)

        haptic.getFieldChanged$('text').subscribe((text: string) => this.updateText(text))

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
            'color',
            '--widget-color',
            this.shared.color,
            {label: "Text Color", icon: { icon: 'text', set: 'fas' }, palette:'Text', includeTransparent: false}
        )
    }

    public updateText(text: string): void {
        this.dom.innerHTML = text
        haptic.setSize(150, 40)
        haptic.setSize(this.dom.offsetWidth, 40)
    }
}

new HelloWorldWidget()