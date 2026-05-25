export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  ['incidents', 'Incidents Records', 'Incidents priority queue', 'Open', 'Incidents exception list', 'Quality Lead', '$0'],
  ['audits', 'Audits Records', 'Audits priority queue', 'Review', 'Audits exception list', 'Quality Lead', '$0'],
  ['capa', 'CAPA Records', 'CAPA priority queue', 'Action needed', 'CAPA exception list', 'Quality Lead', '$0'],
  ['inspections', 'Inspections Records', 'Inspections priority queue', 'Open', 'Inspections exception list', 'Quality Lead', '$0'],
  ['training', 'Training Records', 'Training priority queue', 'Review', 'Training exception list', 'Operations Lead', '$0'],
  ['policies', 'Policies Records', 'Policies priority queue', 'Action needed', 'Policies exception list', 'Operations Lead', '$0'],
  ['controls', 'Controls Records', 'Controls priority queue', 'Open', 'Controls exception list', 'Operations Lead', '$0'],
  ['findings', 'Findings Records', 'Findings priority queue', 'Review', 'Findings exception list', 'Operations Lead', '$0'],
  ['corrective-actions', 'Corrective Actions Records', 'Corrective Actions priority queue', 'Action needed', 'Corrective Actions exception list', 'Governance Lead', '$0'],
  ['certifications', 'Certifications Records', 'Certifications priority queue', 'Open', 'Certifications exception list', 'Governance Lead', '$0'],
  ['risk-register', 'Risk Register Records', 'Risk Register priority queue', 'Review', 'Risk Register exception list', 'Intelligence Layer Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Action needed', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
