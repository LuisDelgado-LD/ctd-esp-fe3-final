export const reducer = (state, action) => {
    switch (action.type){
        case "get_list":
            return {...state, dentists: action.payload}
        case "get_dentist":
            return {...state, dentist: action.payload}
    }
}