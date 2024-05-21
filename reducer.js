
export const  reducer = (state,action)=>{

     if(action.type === 'ADD'){
        return state + 1
        
     }
     else if(action.type === 'SUBTRACT'){

        return state - 1
        
     }
     else if(action.type === 'RESET'){
        return 0
        
     }

}