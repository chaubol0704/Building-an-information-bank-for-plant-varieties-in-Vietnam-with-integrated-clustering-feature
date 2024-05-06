const actionTypes = {
  LOGIN: "LOGIN",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  LOGOUT: "LOGUOT",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",

  GET_ALLSPECIES: "GET_ALLSPECIES",
  GET_SPECIES: "GET_SPECIES",
  GET_PROPERTY_SPECIES: "GET_PROPERTY_SPECIES",
  GET_FILTERSPECIES: "GET_FILTERSPECIES",
  GET_ADDSPECIES: "GET_ADDSPECIES",
  GET_ALLADDSPECIES: "GET_ALLADDSPECIES",
  // GET_SPECIESLIMIT: "GET_SPECIESLIMIT",
  SAVE_SPECIES: "SAVE_SPECIES",

  // user
  GET_CURRENT: "GET_CURRENT",
  GET_USER: "GET_USER",
  GET_ALLUSER: "GET_ALLUSER",
  EDIT_USER: "EDIT_USER",

  //menu
  GET_ALLPROVINCE: "GET_ALLPROVINCE",
  GET_PROVINCE: "GET_PROVINCE",
  GET_PROVINCE_LIMIT: "GET_PROVINCE_LIMIT",
  EDIT_PROVINCE: "EDIT_PROVINCE",
  SAVEDATA: "SAVEDATA",

  GET_PROPERTIES: "GET_PROPERTIES",
  GET_PROPERTIES_GENUS: "GET_PROPERTIES_GENUS",
  GET_PROPERTIES_LIMIT: "GET_PROPERTIES_LIMIT",
  EDIT_PROPERTIES: "EDIT_PROPERTIES",

  GET_GENUS: "GET_GENUS",

  // order
  GET_ALL: "GET_ALL",
  GET_ALLORDER: "GET_ALLORDER",
  GET_ORDER: "GET_ORDER",
  GET_ORDERMENU: "GET_ORDERMENU",
  EDIT_BOOK: "EDIT_BOOK",
  EDIT_TABLE: "EDIT_TABLE",
  EDIT_BOOKMENU: "EDIT_BOOKMENU",
  GET_TABLE: "GET_TABLE",
  GET_STATISTICS: "GET_STATISTICS",
  GET_STATISTICS_YEAR: "GET_STATISTICS_YEAR",
};

export default actionTypes;
