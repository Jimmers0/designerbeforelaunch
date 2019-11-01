const initialState = {
  
    project: []
    }
    
    
    export default function(state = initialState, action) {
        switch (action.type) {    
        
        case 'SET_PROJECT':
          return {...state, project: action.payload}
        default:
          return state
      }
    }