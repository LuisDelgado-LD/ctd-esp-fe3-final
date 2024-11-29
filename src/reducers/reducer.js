export const reducer = (state, action) => {
    switch (action.type){
        case "get_list":
            return {...state, data: action.payload}
    }
}