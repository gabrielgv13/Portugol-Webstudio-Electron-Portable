export const environment = {
  production: true,
  desktop: true,
  // Minimal firebase placeholder so TypeScript checks that reference `environment.firebase`.
  // Desktop builds disable Firebase at runtime, but the config must exist at compile time.
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
  },
};