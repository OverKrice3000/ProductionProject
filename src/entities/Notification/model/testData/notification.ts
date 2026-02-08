import type { AppNotification } from "../..";

export const testNotification: AppNotification = {
  id: `1`,
  title: `Notification`,
  description: `Test notification`,
};

export const testHrefNotification: AppNotification = {
  id: `2`,
  title: `Href Notification`,
  description: `Test href notification`,
  href: `https://example.com/`,
};

export const getTestGeneralNotificationsList = (size: number, startId = 0) => new Array(size).fill(0).map((_, index) => ({
  ...testNotification,
  id: (startId + index).toString(),
}));

export const getTestHrefNotificationsList = (size: number, startId = 0) => new Array(size).fill(0).map((_, index) => ({
  ...testHrefNotification,
  id: (startId + index).toString(),
}));

export const testNotificationsList =
    [
      ...getTestGeneralNotificationsList(2),
      ...getTestHrefNotificationsList(2, 2),
    ];
