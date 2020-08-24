import { useState, useEffect } from "react"
import { firestore } from "./firebase"

export default function useFirestore(collectionName){
  const [docs, setDocs] = useState([])

  useEffect(() => {
    firestore.collection(collectionName)
      .orderBy("createdAt", "desc")
      .onSnapshot(snap => {
        const documents = []
        snap.docs.forEach(doc => {
          documents.push(doc)
        })
        setDocs(documents)
      })
  }, [collectionName])

  return { docs }
}