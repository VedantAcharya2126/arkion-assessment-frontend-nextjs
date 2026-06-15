import { getCertificateID }
from "@/lib/api";


/*** 
 * This page component fetches the details of a specific certificate based on the ID provided in the URL parameters. 
 * It retrieves the certificate information from the API and displays it in a structured format, including the subject, issuer, expiration date, and SAN entries. 
 * The page is designed to provide a detailed view of a single certificate when a user clicks on it from the inventory list. 
 */
export default async function DetailsPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } =
    await params;

  const certificate =
    await getCertificateID(id);

  return (
    <main className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Certificate Details
      </h1>

      <div className="
      border
      rounded
      p-6
      ">

        <p>
          <strong>ID:</strong>
          {" "}
          {certificate.id}
        </p>

        <p>
          <strong>Subject:</strong>
          {" "}
          {certificate.subject}
        </p>

        <p>
          <strong>Issuer:</strong>
          {" "}
          {certificate.issuer}
        </p>

        <p>
          <strong>Expiration:</strong>
          {" "}
          {certificate.expiration}
        </p>

        <h3 className="mt-4 font-bold">
          SAN Entries
        </h3>

        <ul>

          {certificate.san_entries.map(
            (san: string) => (
              <li key={san}>
                {san}
              </li>
            )
          )}

        </ul>

      </div>

    </main>
  );
}