function createNotification(message) {
  let notification = document.createElement('div');
  notification.classList.add('notification');
  notification.classList.add(message.status);
  notification.innerText = message.text;

  if (!document.querySelector('#notification-field')) {
    let notificationField = document.createElement('div');
    notificationField.id = 'notification-field';
    document.body.appendChild(notificationField);
  }

  document.querySelector('#notification-field').appendChild(notification);

  setTimeout(() => {
    notification.remove();
    removeNotificationField();
  }, 6000);
}

function removeNotificationField() {
  let notification = document.querySelectorAll('.notification');
  if (notification.length === 0) {
    document.querySelector('#notification-field').remove();
  }
}

export { createNotification };