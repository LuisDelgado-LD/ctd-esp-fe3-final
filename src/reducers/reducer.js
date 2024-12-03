export const reducer = (state, action) => {
    switch (action.type){
        case "get_list":
            return {...state, dentists: action.payload}
        case "get_dentist":
            return {...state, dentist: action.payload}
        case "change_theme":
            return {...state, theme: action.payload}
        case "add_favs_local":
            return {...state, favsIdList: [...state.favsIdList, action.payload]}
        case "add_favs_list":
            
    }
}