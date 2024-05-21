import {reducer} from "./reducer.js"

export const store = {
   
    counter : 0
    ,

    getState(){

        console.log(this.counter)

   },

   dispatch(action){

    this.counter =  reducer(this.counter,action)

   },

   subscribe(func){

     func();

   }

}