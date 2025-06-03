// firebase.config.ts
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { provideAuth, getAuth } from "@angular/fire/auth";
import { environment } from "../environments/environment";

// ❌ NO pongas ": EnvironmentProviders"
// ✅ Deja que TypeScript infiera el tipo correctamente
export const firebaseProviders = [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
];