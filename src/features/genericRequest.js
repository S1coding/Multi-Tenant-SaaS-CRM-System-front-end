import { serverLink } from "../utility/serverConfig";
import axios from "axios";
import {getJwtTokenCookie, getCompanyCookie} from "../utility/cookieUtils";

const getAuthHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getJwtTokenCookie()}`,
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
      headers: getAuthHeaders(),
      params: {
        company: getCompanyCookie(),
      }
    };
    
    const response = await axios.get(
      serverLink(requestName),
      config
    );
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    throw new Error(`Request failed: ${errorMessage}`);
  }
}
