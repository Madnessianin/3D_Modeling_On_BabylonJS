const  SET_DATA: string = '3dmodelingBabylonJS/SET_DATA' 

const initialState: Object = {
    data: {}
}


const mineReducer = (state: Object = initialState, action: any) => {
    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,
                data: {
                    ...action.data
                }
            }
        }
        default: {
            return state;
        }
    }
}

export const setData = (data: Object) => ({type: SET_DATA, data})

export default mineReducer;