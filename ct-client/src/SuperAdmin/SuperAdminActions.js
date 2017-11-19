import * as ActionTypes from "./SuperAdminActionTypes";

export const addNewAdmin = (newAdmin) => ({
    type: ActionTypes.ADD_NEW_ADMIN,
    newAdmin,
});

export const setAdminList = (adminList) => ({
    'type':  ActionTypes.SET_ADMIN_LIST,
    adminList,
});
