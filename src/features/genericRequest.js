import { serverLink } from "../utility/serverConfig";
import axios from "axios";
import { getToken } from "../utility/jwtStorage";

const getAuthHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`
  };
};

export async function postToServer(requestName, data) {
  try {
    const config = {
      headers: getAuthHeaders(),
      responseType: requestName === 'REPORT_PDF' ? 'arraybuffer' : 'json'
    };

    const response = await axios.post(
      serverLink(requestName),
      data,
      config
    );
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    throw new Error(`Request failed: ${errorMessage}`);
  }
}


export async function getToServer(requestName, data = null) {
  try {
    const config = {
      headers: getAuthHeaders()
    };
    
    const response = await axios.get(
      serverLink(requestName),
      data ? { ...config, data } : config
    );
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    throw new Error(`Request failed: ${errorMessage}`);
  }
}
