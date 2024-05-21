import {store} from "./store.js";

store.getState();

store.dispatch({type:'ADD'});
store.subscribe(()=>console.log(store.counter));
store.dispatch({type:'ADD'});
store.subscribe(()=>console.log(store.counter));

store.dispatch({type:'SUBTRACT'});
store.subscribe(()=>console.log(store.counter));
store.dispatch({type:'RESET'});
store.subscribe(()=>console.log(store.counter));

