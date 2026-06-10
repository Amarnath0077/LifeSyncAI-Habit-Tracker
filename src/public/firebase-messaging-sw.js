importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCaqqnhf8VIW9WTNk6B2rVmAbpch1er398",
  authDomain: "lifesyncai-f9630.firebaseapp.com",
  projectId: "lifesyncai-f9630",
  messagingSenderId: "1095392109549",
  appId: "1:1095392109549:web:c84124e94a7729d299bde4"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/icon.png'
  });
});
