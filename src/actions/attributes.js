import axios from "axios";
import { browserHistory } from "react-router";
import {
  SET_SURVIVAL,
  SET_BLEEDING,
  SET_ATTRIBUTES,
  SET_MANY_ARMOR,
  SET_MANY_ATTRIBUTES
} from "./types.js";

const KDM_API = require("KDM_API");

export function setAttributes(survivor_id, data) {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/survivor/set_attribute/${survivor_id}`,
      data: data
    }).then(res => {
      dispatch(setAttributesAsync(data, survivor_id));
      return true;
    });
  };
}

export function setManyArmor(survivor_id, data) {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/survivor/set_many_attributes/${survivor_id}`,
      data: data
    }).then(res => {
      dispatch(setManyArmorAsync(data, survivor_id));
      return true;
    });
  };
}

export function setManyAttributes(survivor_id, data) {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/survivor/set_many_attributes/${survivor_id}`,
      data: data
    }).then(res => {
      dispatch(setManyAttributesAsync(data, survivor_id));
      return true;
    });
  };
}

export function setSurvival(survivor_id, data) {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/survivor/set_survival/${survivor_id}`,
      data: data
    }).then(res => {
      dispatch(setSurvivalAsync(data, survivor_id));
      return true;
    });
  };
}

export function setBleeding(survivor_id, data) {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/survivor/set_bleeding_tokens/${survivor_id}`,
      data: data
    }).then(res => {
      dispatch(setBleedingAsync(data, survivor_id));
      return true;
    });
  };
}

function setManyArmorAsync(data, survivor_id) {
  return {
    survivor_id,
    type: SET_MANY_ARMOR,
    payload: data
  };
}
function setManyAttributesAsync(data, survivor_id) {
  return {
    survivor_id,
    type: SET_MANY_ATTRIBUTES,
    payload: data
  };
}
function setAttributesAsync(data, survivor_id) {
  return {
    survivor_id,
    type: SET_ATTRIBUTES,
    payload: data
  };
}
function setSurvivalAsync(data, survivor_id) {
  return {
    survivor_id,
    type: SET_SURVIVAL,
    payload: data
  };
}
function setBleedingAsync(data, survivor_id) {
  return {
    survivor_id,
    type: SET_BLEEDING,
    payload: data
  };
}
