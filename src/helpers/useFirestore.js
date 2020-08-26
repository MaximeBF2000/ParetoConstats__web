import { useState, useEffect } from "react"
import { firestore } from "./firebase"

export default function useFirestore(collectionName){
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const unsubscribe = firestore.collection(collectionName)
      .orderBy("createdAt", "desc")
      .onSnapshot(snap => {
        const documents = []
        snap.docs.forEach(doc => {
          documents.push(doc)
        })
        setDocs(documents)
      })

    return () => unsubscribe()
  }, [collectionName])

  return { docs }
}