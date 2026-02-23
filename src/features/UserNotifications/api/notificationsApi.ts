import { rtkApi } from "@/shared/api/rtkApi/rtkApi";
import type { AppNotification } from "@/entities/Notification";

const notificationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<AppNotification[], void>({
      query: () => ({
        url: `/notifications`,
      }),
    }),
  }),
});

export const useNotifications = notificationsApi.useGetNotificationsQuery;
