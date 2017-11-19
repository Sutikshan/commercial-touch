import SuperAdminApi from "./SuperAdminApi";
import { setAdminList } from './SuperAdminActions';

function getAdminList () {
  return (dispatch) => {
    return SuperAdminApi.getAdminList()
      .then(response => {
        dispatch(setAdminList(response.data));
      });
  }
};

export default {
  getAdminList,
}
