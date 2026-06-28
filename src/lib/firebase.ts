import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";
import firebaseConfig from "../../firebase-applet-config.json";

// Initialize Firebase App
console.log("[FIREBASE_INITIALIZATION] Starting client-side Firebase App initialization");
console.log("[FIREBASE_INITIALIZATION] Config elements present:", {
  projectId: !!firebaseConfig.projectId,
  appId: !!firebaseConfig.appId,
  apiKey: !!firebaseConfig.apiKey,
  authDomain: !!firebaseConfig.authDomain,
  firestoreDatabaseId: !!firebaseConfig.firestoreDatabaseId
});
const app = initializeApp(firebaseConfig);
console.log("[FIREBASE_INITIALIZATION] Firebase client App initialized successfully.");

// Initialize Firebase Auth
export const auth = getAuth(app);
console.log("[FIREBASE_INITIALIZATION] Firebase Auth instance loaded.");

// Initialize Firestore Database with custom databaseId if configured
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
console.log("[FIREBASE_INITIALIZATION] Firestore Database instance loaded. Custom DB ID used:", firebaseConfig.firestoreDatabaseId || "default");

// Initialize Firebase Analytics safely (will not throw errors in iframes)
export let analytics: Analytics | null = null;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
}).catch((err) => {
  console.warn("Analytics initialization skipped or not supported:", err);
});

export default app;
