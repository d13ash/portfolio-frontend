export interface Achievement {
  _id: string;
  title: string;
  issuer?: string;
  url?: string;
  isCertification: boolean;
  date?: string;
}
