// import firebase from "@/lib/firebaseClient"
// import getStripe from "./initializeStripe"


// export const createCheckoutSession = async (uid: string) => {
//     const firestore = firebase.firestore()

//     // create a new checkout session in the subcollection inside this users document 
//     const checkoutSessionRef = await firestore
//         .collection("users")
//         .doc(uid)
//         .collection("checkout_sessions")
//         .add({
//             price: "",
//             success_url: window.location.origin,
//             cancel_url: window.location.origin
//         })

//     // wait for checkout session to get attached by the extension
//     checkoutSessionRef.onSnapshot(async (snap) => {
//         const { sessionId } = snap.data()
//         if (sessionId) {
//             // we have a session lets redirect to checkout
//             //init stripe
//             const stripe = await getStripe()
//             console.log("stripe->", stripe)
//             stripe.redirectToCheckout({ sessionId })
//         }
//     })

// }