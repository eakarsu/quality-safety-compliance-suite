# Quality Safety Compliance Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIQualityManagement`
- `AISafetyIncidentAnalyzer`
- `AIAuditPrepAssistant`
- `AIComplianceControlMonitor`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/quality-safety-compliance-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4610`

Seeded users:
- `admin@quality-safety.local / admin123`
- `manager@quality-safety.local / manager123`
- `analyst@quality-safety.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/quality-safety-compliance-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4610 npm run smoke
```
