//==================Here is the SERVICE ROUTES=======================
export const SERVICE_ROUTES = {
  //AUTH
  SIGN_IN: '',
};
//===================Here is the Methods==============================
export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
  PATCH: 'PATCH',
};
// ==================Here Is The  ReplaceUrl code======================
export const replaceUrl = (url, data) => {
  var regex = new RegExp(':(' + Object.keys(data).join('|') + ')', 'g');
  return url?.replace(regex, (m, $1) => data[$1] || m);
};
