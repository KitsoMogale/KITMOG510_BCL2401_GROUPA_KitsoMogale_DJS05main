import {reducer} from "./reducer.js"

export const store = {
   
    counter : 0
    ,

    getState(){

        console.log(`count:${this.counter}`);

   },
   subscribers: [],

   dispatch(action){

    this.counter =  reducer(this.counter,action);

     this.subscribers.forEach((item)=>{
       
       if(action.type == item.act){

          item.callBack();

      }
    }
    )

   },

   subscribe(action,func){
    
    this.subscribers.push({act:action.type,callBack:func });

   }

}
