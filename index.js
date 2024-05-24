import {store} from "./store.js";

store.getState();

store.subscribe({type:'ADD'},()=>store.getState());
store.subscribe({type:'SUBTRACT'},()=>store.getState());
store.subscribe({type:'RESET'},()=>store.getState());

store.dispatch({type:'ADD'});
store.dispatch({type:'ADD'});

store.dispatch({type:'SUBTRACT'});

store.dispatch({type:'RESET'});

