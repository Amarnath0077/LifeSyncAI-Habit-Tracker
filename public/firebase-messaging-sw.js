importScripts("https://www.gstatic.com/firebasejs/12.14.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.14.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "lifesyncai-f9630.firebaseapp.com",
  projectId: "lifesyncai-f9630",
  storageBucket: "lifesyncai-f9630.firebasestorage.app",
  messagingSenderId: "1095392109549",
  appId: "1:1095392109549:web:c84124e94a7729d299bde4"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  const notificationTitle =
    payload.notification?.title || "LifeSync AI";

  const notificationOptions = {
    body:
      payload.notification?.body ||
      "You have a new notification",
    icon: "/icon-192.png",
    badge: "/icon-192.png",
    data: payload.data || {},
  };

  self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow("/")
  );
});
