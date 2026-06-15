const API_URL =
  process.env.API_URL ||
  "http://127.0.0.1:3000";

/**
 *  This Dashboard component is responsible for fetching and displaying summary statistics about the certificates in the inventory. 
 * It makes an API call to the backend to retrieve the total number of certificates and the number of certificates that are expiring soon. 
 * The component then renders this information in a simple dashboard format, allowing users to quickly see key metrics about their certificate inventory.
 *
 */
export default async function Dashboard() {

  const response =
    await fetch(
      `${API_URL}/dashboard`,
      {
        cache: "no-store"
      }
    );

  const stats =
    await response.json();

  return (

    <div className="
    border
    rounded
    p-4
    mb-6
    ">

      <h2 className="
      text-xl
      font-bold
      mb-3
      ">
        Dashboard
      </h2>

      <p>
        Total Certificates:
        {" "}
        {stats.total_certificates}
      </p>

      <p>
        Expiring Soon:
        {" "}
        {stats.expiring_soon}
      </p>

    </div>

  );
}