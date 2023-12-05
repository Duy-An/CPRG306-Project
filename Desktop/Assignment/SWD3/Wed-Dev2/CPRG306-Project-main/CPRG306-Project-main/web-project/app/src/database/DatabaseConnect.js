import {db} from "../utilities/firebase";
import { collection, getDocs, addDoc, query, where, updateDoc, doc } from "firebase/firestore";

export async function getTasks(userId, listText, condition) {
    try {
        const taskCollection = collection(db, "users", userId, "tasks");
        console.log(taskCollection)
        const queryCollection = query(taskCollection, where("listText", "==", listText), where("complete", "==", condition));
        console.log(queryCollection);
        const taskArray = await getDocs(queryCollection);
        console.log(taskArray)
        const taskEach = taskArray.docs.map(doc => {
            console.log(doc);
            return ({id: doc.id, ...doc.data()});
        });
        console.log(taskEach);
        return taskEach;
    } catch (error) {
        console.log("Error getting tasks: ", error);
    }
}

export async function addTasks(userId, task) {
    try {
        console.log(task);
        const taskCollection = collection(db, "users", userId, "tasks");
        console.log(taskCollection);
        const queryCollection = query(taskCollection, where("listText", "==", task.listText));
        console.log(queryCollection);
        const taskDoc = await addDoc(queryCollection, task);
        console.log(taskDoc);
        return taskDoc;
    } catch (error) {
        console.log("Error adding task: ", error);
    }
}

export async function updateTasks(userId, task) {
    try {
        const taskId = task.id; 
        const taskCollection = collection(db, "users", userId, "tasks");
        const queryCollection = doc(taskCollection, taskId);
        const result = await updateDoc(queryCollection, {complete: true});
        // const queryCollection = query(taskCollection, where(task.id, "==", taskId));
        // const result = await queryCollection.doc(taskId).updateDoc(task.complete = true);
        console.log(result);
        return result;
    } catch (error) {
        console.log("Error updating task: ", error);
    }
}