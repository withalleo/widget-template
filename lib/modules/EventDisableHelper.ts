export class EventDisableHelper {
    protected htmlElement: HTMLElement
    public events: string[]
    public static ALL_EVENTS: string[] = [
        'mousewheel',
        'click',
        'contextmenu',
        'dblclick',
        'mousedown',
        'mouseenter',
        'mouseleave',
        'mousemove',
        'mouseout',
        'mouseover',
        'show',
        'touchcancel',
        'touchenter',
        'touchleave',
        'touchmove',
        'touchstart',
        'pointerover',
        'pointerenter',
        'pointerdown',
        'pointermove',
        'pointercancel',
        'pointerout',
        'pointerleave',
        'gotpointercapture',
        'lostpointercapture',
        'dragstart',
        'dragend',
        'drag',
    ]

    constructor(element: HTMLElement = haptic.rootNode, events: string[] = EventDisableHelper.ALL_EVENTS) {
        this.htmlElement = element
        this.events = events
    }

    public disableEvents(events: string[] = this.events): void {
        for (const eventName of events) {
            this.htmlElement.addEventListener(eventName, (event) => event.stopPropagation())
        }
    }

    public enableEvents(events: string[] = this.events): void {
        for (const eventName of events) {
            this.htmlElement.removeEventListener(eventName, (event) => event.stopPropagation())
        }
    }
}
