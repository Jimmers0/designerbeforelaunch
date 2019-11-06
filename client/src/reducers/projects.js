const initialState = {
  
    project: [],
    id: ''
    }
    
    
    export default function(state = initialState, action) {
        switch (action.type) {    
        
        case 'GET_PROJECT':
          return {...state, project: action.payload}
        case 'SET_ID':
            return {...state, id: action.payload}
        default:
          return state
      }
        
        

    }