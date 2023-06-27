import AuthGaurd from "@/HOC/AuthGaurd";
import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";

type Props = { userInfo: any; users: any };

async function getFriends({ users, userInfo }: Props) {
  const friendId = users?.filter((user: any) => user !== userInfo.uid);

  const docRef = doc(db, "users", friendId[0]);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}

export default getFriends;
