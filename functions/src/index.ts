import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
const app = admin.initializeApp();
const firestore = app.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
export const userUpdate = functions
    .firestore.document('users/{uid}')
    .onUpdate(async (change, context) => {
        const { uid } = context.params;
        const { after } = change;
        console.log('after', JSON.stringify(after.data()));
        const allUsers = await firestore.collectionGroup('users').get();
        allUsers.docs.forEach(async doc => {
            if(doc.id === uid) {
                console.log('docs --> ', doc.id, doc.ref.path)
                await doc.ref.update({
                    ...after.data()
                })
            }
        })
        return null
    });