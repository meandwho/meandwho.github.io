// Set the target date and time for the countdown
<<<<<<< HEAD
const targetDate = new Date("2023-07-07T00:00:00").getTime();
=======
const targetDate = new Date("2023-07-04T00:00:00").getTime();
>>>>>>> e14c7b4927d93285559a999622ba0a42a00bed08

// Update the countdown every second
const countdownInterval = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const remainingTime = targetDate - now;

  // Check if the countdown has ended
  if (remainingTime <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "fini !";
    return;
  }

  // Calculate the days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML =
    days +
    ` jour${days <2 ? '' : 's'}, ` +
    hours +
    ` heure${hours < 2 ? '' : 's'}, ` +
    minutes +
    ` minute${minutes < 2 ? '' : 's'}, ` +
    seconds +
    ` seconde${seconds < 2 ? '' : 's'}`;

  // Check if it's time for the weekly notification (every Monday at 12:00 PM)
  const currentTime = new Date().getTime();
  const currentDay = new Date().getDay();
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();

  if (
    currentDay === 1 && // Monday (0 for Sunday, 1 for Monday, etc.)
    currentHour === 12 && // 12:00 PM (24-hour format)
    currentMinute === 0
  ) {
    showNotification("Notification hebdomadaire !");
  }
}, 1000);

function activateNotification() {
  // Check if the browser supports notifications
  if (!('Notification' in window)) {
    console.log('This browser does not support desktop notification');
    return;
  }

  // Check the permission status for notifications
  if (Notification.permission === 'granted') {
    showNotification('Notification activated!');
    document.getElementById('notificationButton').innerHTML = 'Notifications activées !';
    document.getElementById('notificationButton').style.display = 'none';
    setNotificationStatusCookie(true);
  } else if (Notification.permission !== 'denied') {
    // Request permission for notifications
    Notification.requestPermission().then(function (permission) {
      // If permission is granted, create a notification
      if (permission === 'granted') {
        showNotification('Notification activated!');
        document.getElementById('notificationButton').innerHTML = 'Notifications activées !';
        document.getElementById('notificationButton').style.display = 'none';
        setNotificationStatusCookie(true);
      }
    });

function showNotification(message) {
  // Create a notification
  const notification = new Notification('Countdown Notification', {
    body: message,
  });
}

function setNotificationStatusCookie(enabled) {
  document.cookie = 'notificationStatus=' + enabled;
}

function getNotificationStatusCookie() {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('notificationStatus=')) {
      return cookie.substring('notificationStatus='.length);
    }
  }
  return null;
}

function checkNotificationStatus() {
  const notificationStatus = getNotificationStatusCookie();
  if (notificationStatus === 'true') {
    document.getElementById('notificationButton').style.display = 'none';
  }
}

checkNotificationStatus();
}
}
