export interface EcosystemItem {
  id: string;
  name: string;
  status: 'LIVE' | 'ACTIVE' | 'IN DEV' | 'SOON';
  description: string;
  icon: string;
}

export interface ManifestoPillar {
  title: string;
  content: string;
}
