import fs from "fs";
import https from "https";

const API_URL =
  process.env.API_URL ||
  "https://127.0.0.1:3000";

  const cert = fs.readFileSync(
  process.cwd() + "/cert.pem"
);

const agent = new https.Agent({
  ca: cert,
});

/**
 *  This function fetches a list of all certificates from the backend API. 
 * It makes a GET request to the `/certificates` endpoint and returns the response as JSON. 
 * If the request fails, it throws an error indicating that the certificates could not be fetched.
 * @returns JSON response containing the list of certificates.
 */
export async function getCertificates() {
  const response = await fetch(
    `${API_URL}/certificates`,
    {
      cache: "no-store",
      // agent: agent,
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch certificates"
    );
  }

  return response.json();
}

/**
 *  This function fetches the details of a specific certificate based on the provided ID. 
 * It makes a GET request to the `/getCertificate/{id}` endpoint, where `{id}` is the ID of the certificate to be retrieved. 
 * The function returns the response as JSON, which contains the details of the specified certificate. 
 * If the request fails, it throws an error indicating that the certificate could not be fetched.
 * @param id 
 * @returns JSON response containing the details of a specific certificate based on the provided ID.
 */
export async function getCertificateID(
  id: string
) {
  const response =
    await fetch(
      `${API_URL}/getCertificate/${id}`,
      {
        cache: "no-store"
      }
    );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch certificate"
    );
  }

  return response.json();
}