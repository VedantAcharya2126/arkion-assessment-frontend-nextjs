import Link from "next/link";
import { getCertificates }
    from "@/lib/api";
import Dashboard from "../../components/Dashboard";

/**
 *  This InventoryPage component is responsible for fetching and displaying a list of all certificates in the inventory.
 * It makes an API call to retrieve the certificate data and renders it in a structured format, showing the subject and issuer for each certificate.
 * Each certificate entry is wrapped in a Link component that navigates to a detailed view of the certificate when clicked. 
 */
export default async function InventoryPage() {

    const certificates =
        await getCertificates();

    return (
        <main className="p-8">

            <h1 className="text-3xl font-bold mb-6">
                Certificate Inventory
            </h1>
            <Dashboard />
            <ul className="space-y-3">

                {certificates.map(
                    (certificate: any) => (

                        <li key={certificate.id} className="borderroundedp-4">

                            <Link href={`/inventory/${certificate.id}`}>
                                <div>

                                    <p>
                                        <strong>
                                            Subject:
                                        </strong>{" "}
                                        {certificate.subject}
                                    </p>

                                    <p>
                                        <strong>
                                            Issuer:
                                        </strong>{" "}
                                        {certificate.issuer}
                                    </p>

                                </div>

                            </Link>

                        </li>
                    )
                )}

            </ul>

        </main>
    );
}
