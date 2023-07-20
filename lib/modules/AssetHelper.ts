import { DeploymentSettingsHelper } from '../alleoWidgetUtils'

export class AssetHelper {
    public static readonly assetsRoot: string =
        DeploymentSettingsHelper.settings?.assetRoot ??
        haptic.config.entryPoint.replace('manifest.json', '').replace('index.html', '') + 'assets/widgetAssets/'

    private widgetContainerSelector: string

    constructor(widgetContainerSelector = '.widget-container') {
        this.widgetContainerSelector = widgetContainerSelector
    }

    public setupCSSUrls(cssArray: { query: string; variable: string; value: string }[]): void {
        cssArray.forEach((css) => {
            haptic.rootNode
                .querySelector<HTMLElement>(this.widgetContainerSelector + ' ' + css.query)
                .style.setProperty(css.variable, 'url(' + css.value + ')')
        })
    }
}
