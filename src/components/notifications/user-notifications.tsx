import { useAppDispatch, useAppSelector } from '@/hooks/useAppStore'
import { selectAllNotifications } from '@/lib/notifications/notificationSlice'

export const UserNotifications = () => {
  const dispatch = useAppDispatch()
  const notifications = useAppSelector(selectAllNotifications)

  return (
    <div>
      <h1>Notifications</h1>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>{notification.text}</li>
        ))}
      </ul>
    </div>
  )
}
