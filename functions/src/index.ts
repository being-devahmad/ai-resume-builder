// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

import { createCheckoutSession } from './stripe';

export { createCheckoutSession };