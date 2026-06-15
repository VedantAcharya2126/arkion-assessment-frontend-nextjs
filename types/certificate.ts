//This file defines TypeScript interfaces for the Certificate and CertificateDetails objects used in the application.
export interface Certificate {
  id: string;
  subject: string;
  issuer: string;
  expiration: string;
}

export interface CertificateDetails {
  id: string;
  subject: string;
  issuer: string;
  expiration: string;
  san_entries: string[];
}