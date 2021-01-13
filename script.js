function showNotification() {
  console.log('PUSH');
  var notify = new Notification('Posture check', {
    body: 'Check your posture!',
    icon: 'posture.png',
  });
}

window.addEventListener('load', function () {
  notifyMe();
});

function notifyMe() {
  if (!window.Notification) {
    console.log('Browser does not support notifications.');
  } else {
    // check if permission is already granted
    if (Notification.permission === 'granted') {
      // show notification here
      setInterval(() => showNotification(), 300000);
    } else {
      // request permission from user
      Notification.requestPermission()
        .then(function (p) {
          if (p === 'granted') {
            setInterval(() => showNotification(), 300000);
          } else {
            console.log('User blocked notifications.');
          }
        })
        .catch(function (err) {
          console.error(err);
        });
    }
  }
}
