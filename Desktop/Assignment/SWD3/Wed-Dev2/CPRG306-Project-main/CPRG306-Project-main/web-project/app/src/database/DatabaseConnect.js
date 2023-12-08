import {db} from "../_utilities/firebase";
import { collection, getDocs, addDoc, query, where, updateDoc, doc } from "firebase/firestore";

export async function getTasks() {
    try {
        const queryCollection = query(collection(db, "toDoLists"));
        const snapshot = await getDocs(queryCollection);
        return  snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    } catch (error) {
        console.log("Error getting tasks: ", error);
    }
}

export async function getTasksFromList(displayList) {
    try {
        const queryCollection = query(collection(db, "toDoLists"), where("listText", "==", displayList));
        const snapshot = await getDocs(queryCollection);
        snapshot.forEach((doc) => { console.log(doc.id, " => ", doc.data()); });
        return  snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    } catch (error) {
        console.log("Error getting tasks: ", error);
    }
}

export async function addTasks(task) {
    const data = { task: task.task, type: task.type, listText: task.listText, complete: task.complete };
    console.log(data);
    try {
        const add = await addDoc(collection(db, "toDoLists"), data);
        console.log("Added", add.id);
    } catch (error) {
        console.log("Error adding task: ", error);
    }
}

export async function updateTasks(task) {
    try {
        const taskRef = doc(db, "toDoLists", task.id);
        await updateDoc(taskRef, {
            complete: task.complete,
        });
    } catch (error) {
        console.log("Error updating task: ", error);
    }
}