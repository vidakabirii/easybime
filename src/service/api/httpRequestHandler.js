import axios from "axios";

export const BaseURL =
  "https://server.easybimeh.com/api/InsurancePolicyPlan";

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config) {
  config.headers["Accept"] = "application/json";
  return config;
});

export default {
  async post(requestUrl, payload) {
    const URL = `${BaseURL}/${requestUrl}`;
    return await axios(URL, {
      method: "POST",
      data: payload,
    })
      .then((response) => {
        return { data: response.data, status: response.status };
      })
      .catch((error) => {
        return error;
      });
  },

  async patch(requestUrl, payload) {
    const URL = `${BaseURL}/${requestUrl}`;
    return await axios(URL, {
      method: "PATCH",
      data: payload,
    })
      .then((response) => {
        return { data: response.data, status: response.status };
      })
      .catch((error) => {
        return error;
      });
  },

  async get(requestUrl) {
    const URL = `${BaseURL}/${requestUrl}`;
    return await axios(URL, {
      method: "GET",
    })
      .then((response) => {
        return { data: response.data, status: response.status };
      })
      .catch((error) => {
        return error;
      });
  },

  async remove(requestUrl) {
    const URL = `${BaseURL}/${requestUrl}`;
    return await axios(URL, {
      method: "DELETE",
    })
      .then((response) => {
        return { data: response.data, status: response.status };
      })
      .catch((error) => {
        return error;
      });
  },

  async removeWithPayload(requestUrl, payload) {
    const URL = `${BaseURL}/${requestUrl}`;
    return await axios(URL, {
      method: "DELETE",
      data: payload,
    })
      .then((response) => {
        return { data: response.data, status: response.status };
      })
      .catch((error) => {
        return error;
      });
  },

  async put(requestUrl, payload) {
    const URL = `${BaseURL}/${requestUrl}`;
    return await axios(URL, {
      method: "PUT",
      data: payload,
    })
      .then((response) => {
        return { data: response.data, status: response.status };
      })
      .catch((error) => {
        return error;
      });
  },

};
