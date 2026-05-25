export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AIQualityManagement', ownership: 'Incidents source capabilities and workflows', coverage: ['Incidents', 'Audits', 'CAPA'] },
  { name: 'AISafetyIncidentAnalyzer', ownership: 'Audits source capabilities and workflows', coverage: ['Inspections', 'Training', 'Policies'] },
  { name: 'AIAuditPrepAssistant', ownership: 'CAPA source capabilities and workflows', coverage: ['Controls', 'Findings', 'Corrective Actions'] },
  { name: 'AIComplianceControlMonitor', ownership: 'Inspections source capabilities and workflows', coverage: ['Certifications', 'Risk Register', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Incidents', value: '84', note: 'Active' },
  { label: 'Audits', value: '61', note: 'Open' },
  { label: 'CAPA', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Incidents operating view', 'Audits operating view', 'CAPA operating view', 'Inspections operating view', 'Training operating view', 'Policies operating view', 'Controls operating view', 'Findings operating view'];
export const workflowHighlights = ['Incidents workflow with records, approvals, audit, and reporting', 'Audits workflow with records, approvals, audit, and reporting', 'CAPA workflow with records, approvals, audit, and reporting', 'Inspections workflow with records, approvals, audit, and reporting', 'Training workflow with records, approvals, audit, and reporting'];
