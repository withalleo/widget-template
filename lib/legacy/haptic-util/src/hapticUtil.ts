import {
  BoardObjectExtraDataType,
  IWidgetApi,
  ObjectExtraDataCreatedDto,
  ObjectSyncMessageDto
} from "../../../../alleo";

export { IWidgetApi } from "../../../../alleo";
export declare const haptic: IWidgetApi;

let dataStores: HapticStore<any>[] = [];

export function subscribe<T extends Record<string, any>>(
  cb: (p: { value: T; sync: boolean }) => void,
  params?: { sync?: boolean; log?: boolean }
) {
  params = {
    sync: params?.sync ?? false,
    log: params?.log ?? false
  };

  haptic.dataChanged$.subscribe((v: any) => {
    cb({
      value: v,
      sync: false
    });
  });

  if (params.sync) {
    haptic.syncMessage$.subscribe((message: ObjectSyncMessageDto) => {
      haptic.logService.debug(
        "SYNC message received",
        haptic.widgetId,
        message
      );
      if (message.hasOwnProperty("data")) {
        cb({
          value: message.data,
          sync: true
        });
      }
    });
  }
}

type UpdateParams = { log?: boolean; sync?: boolean };

export function update<T extends Record<string, any>>(
  v: T,
  params?: UpdateParams,
  delta = false
) {
  params = {
    log: params?.log ?? false,
    sync: params?.sync ?? false
  };
  params?.log && haptic.logService.debug("setDataField payload", v);
  haptic.setDataField(v as any, null, delta);

  if (params?.sync) {
    params?.log && haptic.logService.debug("SYNC send update", v);
    haptic.sendSyncMessage(v);
  }
}

/**
 * Setup performs necessary boilerplate setup wrap all of your haptic related code in the function
 * @param cb Your code
 */
export function setup(cb: () => void, params?: { log: boolean }) {
  subscribe(
    ({ value, sync }) => {
      //console.log("START SUBSCRIBE METHOD");
      dataStores.map(i => {
        //console.log(i);
        //console.log(value);
        if (sync) {
          if (i.params?.sync) {
            i.noHapticSet(value?.[i.key]);
          }
        } else {
          i.noHapticSet(value?.[i.key]);
        }
      });
      //console.log("FINISH SUBSCRIBE METHOD");
    },
    { sync: true, log: params?.log }
  );

  cb();
  haptic.widgetReady();
}

export class HapticStore<T> {
  subscribers: ((v: T) => void)[];
  key: string;
  lastValue: T;
  params?: UpdateParams;

  constructor(key: string, params?: UpdateParams & { default?: T }) {
    this.subscribers = [];
    this.key = key;

    const getValueRes = this.getValue();
    this.lastValue =
      typeof getValueRes === "undefined" ? params?.default : getValueRes;
    this.params = params;

    dataStores = [...dataStores, this];
  }

  getValue() {
    const value = haptic.getDataField(this.key);

    console.log("getValue()", { key: this.key, value });
    return value;
  }

  noHapticSet(v: T) {
    //console.log("noHapticSet", { key: this.key, v });
    this.subscribers.forEach(s => s(v));
    this.lastValue = v;
  }

  set(v: T) {
    const theNewValue = {
      ...Object.fromEntries(dataStores.map(item => [item.key, item.lastValue])),
      [this.key]: v
    };
    //console.log("THE NEW VALUE",theNewValue)
    update(theNewValue, this.params);
    this.lastValue = v;
    this.subscribers.forEach(s => s(v));
  }

  subscribe(f: (v: T) => void) {
    this.subscribers = [...this.subscribers, f];
    //console.log("subscribe", { f, current, key: this.key });
    f(this.lastValue);

    const lthis = this;
    return function unsubscribe() {
      lthis.subscribers = lthis.subscribers.filter(sub => sub !== f);
    };
  }
}

export function consumeExtraData<T extends { [k: string]: unknown }>(
  key: BoardObjectExtraDataType
) {
  return {
    async create(value: T) {
      const id = haptic.utils.newGuid();
      console.log(key, value, id);
      await haptic.createExtraData(key, value, id);
    },
    async get(take: number, skip = 0) {
      return await haptic.queryExtraData({
        dataType: key,
        skip,
        take
      });
    },
    subscribe(cb: (data: ObjectExtraDataCreatedDto) => void) {
      haptic.extraDataCreated$.subscribe((data: ObjectExtraDataCreatedDto) => {
        cb(data);
      });
    }
  };
}

declare let __HAPTIC_WIDGET_VERSION_NUMBER__: string;
export const WIDGET_VERSION =
  typeof __HAPTIC_WIDGET_VERSION_NUMBER__ === "undefined"
    ? "no version"
    : __HAPTIC_WIDGET_VERSION_NUMBER__;

export const getBoardObjectById = (id: string) => {
  return haptic.board.objects.getAll().find(o => o.id === id);
};
