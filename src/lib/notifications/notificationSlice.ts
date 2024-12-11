import { createSlice } from '@reduxjs/toolkit'

export interface Notification {
  id: number
  text: string
  type: 'info' | 'success' | 'warning' | 'error'
}

export interface NotificationState {
  notifications: Notification[]
}

interface AddNotificationAction {
  type: string
  payload: Notification
}

interface RemoveNotificationAction {
  type: string
  payload: number
}

export const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
  } as NotificationState,
  reducers: {
    addNotification: (
      state: NotificationState,
      action: AddNotificationAction,
    ) => {
      state.notifications.push(action.payload)
    },
    removeNotification: (
      state: NotificationState,
      action: RemoveNotificationAction,
    ) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload,
      )
    },
  },

  selectors: {
    selectAllNotifications: (state: NotificationState) => state.notifications,
    selectNotificationById: (state: NotificationState, id: number) =>
      state.notifications.find((notification) => notification.id === id),
  },
})

export const { addNotification, removeNotification } = notificationSlice.actions
export const { selectAllNotifications, selectNotificationById } =
  notificationSlice.selectors
