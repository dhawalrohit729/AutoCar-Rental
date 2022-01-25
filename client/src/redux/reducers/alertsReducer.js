const initialData = {
    loading : false
};

const LOADING = 'LOADING';

export const alertsReducer = (state=initialData, action) =>{

    switch(action.type){
        case LOADING : {
            return{
                ...state,
                loading : action.payload
            }
        }
        default : return state
    }
}