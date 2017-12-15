import axios from "axios";
import {
  GET_SURVIVOR,
  CREATE_SURVIVOR,
  CONTROLS_OF_DEATH,
  SET_NAME,
  SET_RETIRED,
  ADD_FAVORITE,
  RM_FAVORITE
} from "./types";

const KDM_API = require("KDM_API");

function getSurvivorAsync(data) {
  return {
    type: GET_SURVIVOR,
    payload: data.sheet
  };
}

export function getSurvivor() {
  return dispatch => {
    axios({
      method: "post",
      // url: `${KDM_API}/survivor/get/56de585d421aa91a9e10e91e`
      url: `${KDM_API}/survivor/get/5827ae438740d92d907d1d3d`
    }).then(res => {
      console.log("SURVIVOR", res);
      dispatch(getSurvivorAsync(res.data));
    });
  };
}

function createSurvivorAsync(data) {
  return {
    type: CREATE_SURVIVOR,
    payload: data.sheet
  };
}

export function createSurvivor(settlementId, data) {
  let auth = localStorage.getItem("access_token");
  let userId = localStorage.getItem("userId");
  return axios({
    method: "post",
    url: `${KDM_API}/new/survivor`,
    data: {
      user_id: userId,
      settlement: settlementId,
      name: data.name,
      sex: data.gender,
      mother: data.mother,
      father: data.father
    }
  });
}
/*******************************************
************ CONTROLS OF DEATH**************
********************************************/
export function controlsOfDeath(survivor_id, data) {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/survivor/controls_of_death/${survivor_id}`,
      data: data
    }).then(res => {
      dispatch(controlsOfDeathAsync(data, survivor_id));
      return true;
    });
  };
}

function controlsOfDeathAsync(data, survivor_id) {
  return {
    survivor_id,
    type: CONTROLS_OF_DEATH,
    payload: data
  };
}
/*******************************************
************ SET NAME **************
********************************************/
export function setName(survivor_id, data) {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/survivor/set_name/${survivor_id}`,
      data: data
    }).then(res => {
      dispatch(setNameAsync(data, survivor_id));
      return true;
    });
  };
}

function setNameAsync(data, survivor_id) {
  return {
    survivor_id,
    type: SET_NAME,
    payload: data
  };
}
/*******************************************
************ SET RETIRED **************
********************************************/
export function setRetired(survivor_id, data) {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/survivor/set_retired/${survivor_id}`,
      data: data
    }).then(res => {
      dispatch(setRetiredAsync(data, survivor_id));
      return true;
    });
  };
}

function setRetiredAsync(data, survivor_id) {
  return {
    survivor_id,
    type: SET_RETIRED,
    payload: data
  };
}
/*******************************************
************ ADD FAVORITE **************
********************************************/
export function addFavorite(survivor_id, data) {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/survivor/add_favorite/${survivor_id}`,
      data: data
    }).then(res => {
      dispatch(addFavoriteAsync(data, survivor_id));
      return true;
    });
  };
}

function addFavoriteAsync(data, survivor_id) {
  return {
    survivor_id,
    type: ADD_FAVORITE,
    payload: data
  };
}
/*******************************************
************ REMOVE FAVORITE H**************
********************************************/
export function removeFavorite(survivor_id, data) {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/survivor/rm_favorite/${survivor_id}`,
      data: data
    }).then(res => {
      dispatch(removeFavoriteAsync(data, survivor_id));
      return true;
    });
  };
}

function removeFavoriteAsync(data, survivor_id) {
  return {
    survivor_id,
    type: RM_FAVORITE,
    payload: data
  };
}
