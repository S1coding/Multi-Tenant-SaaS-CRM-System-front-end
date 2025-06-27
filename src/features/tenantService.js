import axios from "axios";
import { serverLink } from "../utility/serverConfig";

const API_HEADERS = {
  "Content-Type": "application/json",
};

export function generateHeaders(headers = {}) {
  return {
    ...API_HEADERS,
    ...headers,
  };
}

/**
 * Register a new tenant
 * @param {Object} tenantData - Tenant registration data
 * @param {string} tenantData.firstName - Tenant's first name
 * @param {string} tenantData.lastName - Tenant's last name
 * @param {string} tenantData.email - Tenant's email
 * @param {string} tenantData.password - Tenant's password
 * @param {string} tenantData.company - Tenant's company/enterprise
 * @param {string} tenantData.phoneNumber - Tenant's phone number
 * @returns {Promise} Response from the server
 */
export async function registerTenant(tenantData) {
  try {
      console.log({
        tenantData,
        headers: generateHeaders({ "X-Company": tenantData.company })
      });
    const response = await axios.post(
      serverLink("TENANT_REGISTER"),
      tenantData,
      { headers: generateHeaders({ "X-Company": tenantData.company }) }
    );
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    throw new Error(`Registration failed: ${errorMessage}`);
  }
}

export async function registerAdmin(tenantData) {
  try {
    const response = await axios.post(
      serverLink("ADMIN_REGISTER"),
      tenantData,
      { headers: API_HEADERS }
    );
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    throw new Error(`Registration failed: ${errorMessage}`);
  }
}

export async function generateJwt(tenantData) {
  try {
    console.log("Sending generateJwt request:", {
      url: serverLink("TENANT_JWT"),
      data: tenantData,
      headers: generateHeaders({ "X-Company": tenantData.company }),
    });

    const response = await axios.post(serverLink("TENANT_JWT"), tenantData, {
      headers: generateHeaders({ "X-Company": tenantData.company }),
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    throw new Error(`Registration failed: ${errorMessage}`);
  }
}
