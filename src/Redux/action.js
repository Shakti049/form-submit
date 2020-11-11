// ACTIONS is a funtion that returns a object
export const createEvent = (data) => {
    return {
        type: "CREATE_EVENT",
        payload: data,
    }
};