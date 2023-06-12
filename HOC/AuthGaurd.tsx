"use client";

/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
// import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const AuthGaurd = (Component: any) => {
  return function Gaurd(props: any) {
    const [userInfo, setUserInfo] = React.useState<any>(false);

    React.useEffect((): any => {
      const unsubscribe = onAuthStateChanged(auth, async (user: any) => {
        console.log("this usr in HOC", user);
        if (user) {
          const currUser = {
            uid: user.uid,
            email: user.email || "useremail@domain.com",
            username: "username",
            displayname: user.displayName || "userDisplayname",
            phoneNumber: user.phoneNumber || "111111",
            photoURL:
              user.photoURL ||
              "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=1024x1024&w=is&k=20&c=6XEZlH2FjqdpXUqjUK4y0LlWF6yViZVWn9HZJ-IR8gU=",
            emailVerified: user.emailVerified /* boolean */,
            // ...user,
          };
          //   const userCollectionRef = collection(db, "users"); // takes only two arguments
          //   await getDoc(doc(userCollectionRef, `${user.uid}`)).then(
          //     (docSnap) => {
          //       setUserInfo({ ...currUser, ...docSnap.data() }); // docSnap returns a complex object but .data() converts it to the actuall stuff.
          //     }
          //   );
          setUserInfo(currUser);
        } else setUserInfo(null);
      });
      return () => unsubscribe;
    }, []);

    return typeof userInfo !== "boolean" ? (
      <Component {...props} userInfo={userInfo} />
    ) : (
      <p>Loading...</p>
    );
  };
};

export default AuthGaurd;
