export let validateQuery = (query) =>{
    let validationRx = new RegExp(/\S/g)
    return validationRx.test(query);
}