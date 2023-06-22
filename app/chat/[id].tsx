/* import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase";


export async function getServerSideProps(context: any) {
  const docRef = doc(db, "chats", context.query?.id);
  const docSnap = await getDoc(docRef);
  return {
    props: {
      chat: JSON.stringify(docSnap.data()),
      id: context.query.id,
    }
  };
} */