const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.onFirstLogin = functions.auth.user().onCreate(async (user) => {
    // Set a custom claim on the user's token to indicate that it's their first login
    await admin.auth().setCustomUserClaims(user.uid, { isFirstLogin: true });
});