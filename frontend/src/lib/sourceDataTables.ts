export type SourceDataColumn = {
  name: string;
  type: string;
  nullable: boolean;
  primaryKey: boolean;
  unique: boolean;
  defaultValue: string;
  sourceLine: string;
};

export type SourceDataTable = {
  id: string;
  sourceProject: string;
  name: string;
  displayName: string;
  framework: string;
  sourceFile: string;
  columns: SourceDataColumn[];
};

export const sourceDataTables: SourceDataTable[] = [
  {
    "id": "ai-building-safety-inspector-backend-routes-agents-js-agent-runs",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "agent_runs",
    "displayName": "Agent Runs",
    "framework": "SQL",
    "sourceFile": "backend/routes/agents.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "task",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "task TEXT NOT NULL"
      },
      {
        "name": "site_name",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_name TEXT"
      },
      {
        "name": "personas",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "personas TEXT[]"
      },
      {
        "name": "steps",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "steps JSONB"
      },
      {
        "name": "final_output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "final_output TEXT"
      },
      {
        "name": "requested_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requested_by VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-seed-js-ai-analyses",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "ai_analyses",
    "displayName": "Ai Analyses",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "analysis_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "analysis_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "site_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_name VARCHAR(255)"
      },
      {
        "name": "input_data",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data TEXT"
      },
      {
        "name": "ai_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_response TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'completed'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'completed'"
      },
      {
        "name": "requested_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requested_by VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-seed-js-compliance-documents",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "compliance_documents",
    "displayName": "Compliance Documents",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "document_title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document_title VARCHAR(255) NOT NULL"
      },
      {
        "name": "document_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "site_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "regulatory_body",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "regulatory_body VARCHAR(255) NOT NULL"
      },
      {
        "name": "issue_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issue_date DATE"
      },
      {
        "name": "expiry_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiry_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "responsible_person",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "responsible_person VARCHAR(255)"
      },
      {
        "name": "document_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document_number VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "renewal_required",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "renewal_required BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-seed-js-corrective-actions",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "corrective_actions",
    "displayName": "Corrective Actions",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "action_title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action_title VARCHAR(255) NOT NULL"
      },
      {
        "name": "related_violation",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "related_violation VARCHAR(100)"
      },
      {
        "name": "related_incident",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "related_incident VARCHAR(100)"
      },
      {
        "name": "site_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "assigned_to",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to VARCHAR(255) NOT NULL"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "priority VARCHAR(50) NOT NULL"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE NOT NULL"
      },
      {
        "name": "completion_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completion_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'open'"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT NOT NULL"
      },
      {
        "name": "root_cause",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "root_cause TEXT"
      },
      {
        "name": "corrective_steps",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "corrective_steps TEXT"
      },
      {
        "name": "preventive_measures",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "preventive_measures TEXT"
      },
      {
        "name": "verification_method",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "verification_method TEXT"
      },
      {
        "name": "verified_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "verified_by VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-seed-js-daily-reports",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "daily_reports",
    "displayName": "Daily Reports",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "report_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "report_date DATE NOT NULL"
      },
      {
        "name": "site_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "submitted_by",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "submitted_by VARCHAR(255) NOT NULL"
      },
      {
        "name": "weather",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "weather VARCHAR(100)"
      },
      {
        "name": "temperature",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "temperature VARCHAR(50)"
      },
      {
        "name": "workers_onsite",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "workers_onsite INTEGER"
      },
      {
        "name": "work_summary",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "work_summary TEXT NOT NULL"
      },
      {
        "name": "safety_observations",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "safety_observations TEXT"
      },
      {
        "name": "incidents_today",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "incidents_today INTEGER DEFAULT 0"
      },
      {
        "name": "near_misses",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "near_misses INTEGER DEFAULT 0"
      },
      {
        "name": "toolbox_talk_topic",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "toolbox_talk_topic VARCHAR(255)"
      },
      {
        "name": "visitors",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "visitors TEXT"
      },
      {
        "name": "equipment_issues",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipment_issues TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'submitted'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'submitted'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-seed-js-emergency-plans",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "emergency_plans",
    "displayName": "Emergency Plans",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "plan_title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plan_title VARCHAR(255) NOT NULL"
      },
      {
        "name": "plan_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plan_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "site_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "emergency_coordinator",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "emergency_coordinator VARCHAR(255) NOT NULL"
      },
      {
        "name": "coordinator_phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "coordinator_phone VARCHAR(50)"
      },
      {
        "name": "last_drill_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_drill_date DATE"
      },
      {
        "name": "next_drill_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_drill_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "evacuation_routes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "evacuation_routes TEXT"
      },
      {
        "name": "assembly_points",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assembly_points TEXT"
      },
      {
        "name": "emergency_contacts",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "emergency_contacts TEXT"
      },
      {
        "name": "last_updated",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_updated DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-seed-js-equipment-inspections",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "equipment_inspections",
    "displayName": "Equipment Inspections",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "equipment_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipment_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "equipment_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipment_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "equipment_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipment_id VARCHAR(100) NOT NULL"
      },
      {
        "name": "site_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "inspector_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "inspection_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_date DATE NOT NULL"
      },
      {
        "name": "next_inspection_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_inspection_date DATE"
      },
      {
        "name": "condition",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "condition VARCHAR(50) NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "hours_used",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hours_used DECIMAL(10,1)"
      },
      {
        "name": "findings",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "findings TEXT"
      },
      {
        "name": "maintenance_needed",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "maintenance_needed TEXT"
      },
      {
        "name": "certification_expiry",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certification_expiry DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-routes-gap-frontend-pages-folder-is-empty-no-spa-ui-shipped-js-gap-features",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_frontend_pages_folder_is_empty_no_spa_ui_shipped.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-routes-gap-no-ai-checklist-generator-from-local-building-code-js-gap-features",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_ai_checklist_generator_from_local_building_code.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-routes-gap-no-ai-training-content-generator-from-incidents-js-gap-features",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_ai_training_content_generator_from_incidents.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-routes-gap-no-direct-gc-platform-api-client-procore-plangrid-js-gap-features",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_direct_gc_platform_api_client_procore_plangrid.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-routes-gap-no-drone-footage-inspection-ingestion-js-gap-features",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_drone_footage_inspection_ingestion.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-routes-gap-no-mobile-offline-mode-for-inspectors-js-gap-features",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_mobile_offline_mode_for_inspectors.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-routes-gap-no-payroll-integrated-certification-expiry-alerts-js-gap-features",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_payroll_integrated_certification_expiry_alerts.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-routes-gap-no-qr-code-site-asset-tagging-js-gap-features",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_qr_code_site_asset_tagging.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-routes-gap-no-video-cctv-stream-analytics-only-photo-analysis-js-gap-features",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_video_cctv_stream_analytics_only_photo_analysis.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-routes-gap-notification-routes-exist-but-no-sms-push-delivery-js-gap-features",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_notification_routes_exist_but_no_sms_push_delivery.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-seed-js-hazard-assessments",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "hazard_assessments",
    "displayName": "Hazard Assessments",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "hazard_title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hazard_title VARCHAR(255) NOT NULL"
      },
      {
        "name": "hazard_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hazard_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "site_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "location_detail",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_detail VARCHAR(255)"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_level VARCHAR(50) NOT NULL"
      },
      {
        "name": "probability",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "probability VARCHAR(50) NOT NULL"
      },
      {
        "name": "impact",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "impact VARCHAR(50) NOT NULL"
      },
      {
        "name": "assessed_by",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assessed_by VARCHAR(255) NOT NULL"
      },
      {
        "name": "assessment_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assessment_date DATE NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT NOT NULL"
      },
      {
        "name": "control_measures",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "control_measures TEXT"
      },
      {
        "name": "residual_risk",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "residual_risk VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "review_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "review_date DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-seed-js-incident-reports",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "incident_reports",
    "displayName": "Incident Reports",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "incident_number",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "incident_number VARCHAR(50) UNIQUE NOT NULL"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "incident_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "incident_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(50) NOT NULL"
      },
      {
        "name": "site_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "location_detail",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_detail VARCHAR(255)"
      },
      {
        "name": "incident_date",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "incident_date TIMESTAMP NOT NULL"
      },
      {
        "name": "reported_by",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reported_by VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT NOT NULL"
      },
      {
        "name": "injuries_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "injuries_count INTEGER DEFAULT 0"
      },
      {
        "name": "injury_details",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "injury_details TEXT"
      },
      {
        "name": "root_cause",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "root_cause TEXT"
      },
      {
        "name": "immediate_actions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "immediate_actions TEXT"
      },
      {
        "name": "witnesses",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "witnesses TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'reported'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'reported'"
      },
      {
        "name": "osha_recordable",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "osha_recordable BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-routes-notifications-js-notifications",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "notifications",
    "displayName": "Notifications",
    "framework": "SQL",
    "sourceFile": "backend/routes/notifications.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "channel",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "channel VARCHAR(20) NOT NULL"
      },
      {
        "name": "recipient",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recipient TEXT NOT NULL"
      },
      {
        "name": "subject",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject TEXT"
      },
      {
        "name": "body",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body TEXT NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'pending'"
      },
      {
        "name": "attempts",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "attempts INT DEFAULT 0"
      },
      {
        "name": "last_error",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_error TEXT"
      },
      {
        "name": "created_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "sent_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sent_at TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-seed-js-ppe-inventory",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "ppe_inventory",
    "displayName": "Ppe Inventory",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "item_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100) NOT NULL"
      },
      {
        "name": "ppe_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ppe_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "manufacturer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manufacturer VARCHAR(255)"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(255)"
      },
      {
        "name": "site_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "quantity_in_stock",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity_in_stock INTEGER NOT NULL"
      },
      {
        "name": "minimum_stock",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "minimum_stock INTEGER NOT NULL"
      },
      {
        "name": "unit_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_cost DECIMAL(10,2)"
      },
      {
        "name": "condition",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'good'",
        "sourceLine": "condition VARCHAR(50) DEFAULT 'good'"
      },
      {
        "name": "last_inspection_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_inspection_date DATE"
      },
      {
        "name": "expiry_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiry_date DATE"
      },
      {
        "name": "storage_location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "storage_location VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'in_stock'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'in_stock'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-seed-js-safety-checklists",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "safety_checklists",
    "displayName": "Safety Checklists",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "checklist_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "checklist_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "site_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100) NOT NULL"
      },
      {
        "name": "assigned_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to VARCHAR(255)"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE"
      },
      {
        "name": "completion_percentage",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "completion_percentage INTEGER DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "total_items",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_items INTEGER NOT NULL"
      },
      {
        "name": "completed_items",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "completed_items INTEGER DEFAULT 0"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority VARCHAR(50) DEFAULT 'medium'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-routes-safety-rag-js-safety-kb-documents",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "safety_kb_documents",
    "displayName": "Safety Kb Documents",
    "framework": "SQL",
    "sourceFile": "backend/routes/safetyRag.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title TEXT NOT NULL"
      },
      {
        "name": "source",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source TEXT"
      },
      {
        "name": "content",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content TEXT NOT NULL"
      },
      {
        "name": "tags",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags TEXT[]"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-seed-js-safety-training",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "safety_training",
    "displayName": "Safety Training",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "training_title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "training_title VARCHAR(255) NOT NULL"
      },
      {
        "name": "training_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "training_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "instructor",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "instructor VARCHAR(255) NOT NULL"
      },
      {
        "name": "site_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_name VARCHAR(255)"
      },
      {
        "name": "training_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "training_date DATE NOT NULL"
      },
      {
        "name": "duration_hours",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_hours DECIMAL(4,1) NOT NULL"
      },
      {
        "name": "attendees_count",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "attendees_count INTEGER NOT NULL"
      },
      {
        "name": "max_capacity",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "max_capacity INTEGER"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'scheduled'"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "materials_provided",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "materials_provided TEXT"
      },
      {
        "name": "certification_awarded",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "certification_awarded BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-seed-js-site-inspections",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "site_inspections",
    "displayName": "Site Inspections",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "site_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "site_address",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_address VARCHAR(500) NOT NULL"
      },
      {
        "name": "inspector_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "inspection_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_date DATE NOT NULL"
      },
      {
        "name": "inspection_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "overall_rating",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "overall_rating VARCHAR(50) NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "findings",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "findings TEXT"
      },
      {
        "name": "recommendations",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendations TEXT"
      },
      {
        "name": "weather_conditions",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "weather_conditions VARCHAR(100)"
      },
      {
        "name": "num_workers_onsite",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "num_workers_onsite INTEGER"
      },
      {
        "name": "next_inspection_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_inspection_date DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-routes-tenants-js-tenants",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "tenants",
    "displayName": "Tenants",
    "framework": "SQL",
    "sourceFile": "backend/routes/tenants.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(80) UNIQUE NOT NULL"
      },
      {
        "name": "display_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "display_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "logo_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "logo_url TEXT"
      },
      {
        "name": "primary_color",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "primary_color VARCHAR(20)"
      },
      {
        "name": "support_email",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "support_email TEXT"
      },
      {
        "name": "custom_domain",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "custom_domain TEXT"
      },
      {
        "name": "config_json",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'::jsonb",
        "sourceLine": "config_json JSONB DEFAULT '{}'::jsonb"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-seed-js-users",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "full_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "full_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'inspector'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'inspector'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-seed-js-violations",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "violations",
    "displayName": "Violations",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "violation_code",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "violation_code VARCHAR(50) NOT NULL"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT NOT NULL"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(50) NOT NULL"
      },
      {
        "name": "site_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "location_detail",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_detail VARCHAR(255)"
      },
      {
        "name": "date_identified",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_identified DATE NOT NULL"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'open'"
      },
      {
        "name": "assigned_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to VARCHAR(255)"
      },
      {
        "name": "fine_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fine_amount DECIMAL(10,2)"
      },
      {
        "name": "osha_standard",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "osha_standard VARCHAR(100)"
      },
      {
        "name": "corrective_action",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "corrective_action TEXT"
      },
      {
        "name": "photo_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "photo_url VARCHAR(500)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-routes-webhooks-js-webhooks",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "webhooks",
    "displayName": "Webhooks",
    "framework": "SQL",
    "sourceFile": "backend/routes/webhooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "url",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "url TEXT NOT NULL"
      },
      {
        "name": "events",
        "type": "TEXT[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ARRAY['inspection.completed']::text[]",
        "sourceLine": "events TEXT[] NOT NULL DEFAULT ARRAY['inspection.completed']::text[]"
      },
      {
        "name": "secret",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "secret VARCHAR(255)"
      },
      {
        "name": "active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-building-safety-inspector-backend-seed-js-worker-certifications",
    "sourceProject": "AIBuildingSafetyInspector",
    "name": "worker_certifications",
    "displayName": "Worker Certifications",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "worker_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_id VARCHAR(50) NOT NULL"
      },
      {
        "name": "certification_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certification_type VARCHAR(255) NOT NULL"
      },
      {
        "name": "certification_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certification_number VARCHAR(100)"
      },
      {
        "name": "issuing_authority",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issuing_authority VARCHAR(255) NOT NULL"
      },
      {
        "name": "issue_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issue_date DATE NOT NULL"
      },
      {
        "name": "expiry_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiry_date DATE NOT NULL"
      },
      {
        "name": "site_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_name VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-seed-js-airquality",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "airquality",
    "displayName": "Airquality",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "zone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone VARCHAR(100)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "pm25",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pm25 DECIMAL(6,2)"
      },
      {
        "name": "pm10",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pm10 DECIMAL(6,2)"
      },
      {
        "name": "co_level",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "co_level DECIMAL(6,2)"
      },
      {
        "name": "no2_level",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "no2_level DECIMAL(6,2)"
      },
      {
        "name": "o3_level",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "o3_level DECIMAL(6,2)"
      },
      {
        "name": "voc_level",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "voc_level DECIMAL(6,2)"
      },
      {
        "name": "aqi_index",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aqi_index INTEGER"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "ai_recommendation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_recommendation TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-seed-js-emergency",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "emergency",
    "displayName": "Emergency",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(100)"
      },
      {
        "name": "zone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone VARCHAR(100)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(50)"
      },
      {
        "name": "trigger",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trigger VARCHAR(255)"
      },
      {
        "name": "responders_needed",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "responders_needed INTEGER"
      },
      {
        "name": "evacuation_route",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "evacuation_route VARCHAR(255)"
      },
      {
        "name": "assembly_point",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assembly_point VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "response_time",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "response_time DECIMAL(6,2)"
      },
      {
        "name": "ai_protocol",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_protocol TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-seed-js-environmental",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "environmental",
    "displayName": "Environmental",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "zone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone VARCHAR(100)"
      },
      {
        "name": "temperature",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "temperature DECIMAL(5,2)"
      },
      {
        "name": "humidity",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "humidity DECIMAL(5,2)"
      },
      {
        "name": "wind_speed",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "wind_speed DECIMAL(5,2)"
      },
      {
        "name": "visibility",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "visibility DECIMAL(5,2)"
      },
      {
        "name": "uv_index",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "uv_index DECIMAL(4,2)"
      },
      {
        "name": "weather",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "weather VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "ai_recommendation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_recommendation TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-seed-js-equipment",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "equipment",
    "displayName": "Equipment",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(100)"
      },
      {
        "name": "serial_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serial_number VARCHAR(100)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "last_inspection",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_inspection DATE"
      },
      {
        "name": "next_inspection",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_inspection DATE"
      },
      {
        "name": "condition",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "condition VARCHAR(50)"
      },
      {
        "name": "inspector",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "ai_assessment",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_assessment TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-seed-js-falls",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "falls",
    "displayName": "Falls",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_name VARCHAR(255)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "zone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone VARCHAR(100)"
      },
      {
        "name": "fall_height",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fall_height DECIMAL(6,2)"
      },
      {
        "name": "impact_force",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "impact_force DECIMAL(6,2)"
      },
      {
        "name": "sensor_triggered",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sensor_triggered VARCHAR(100)"
      },
      {
        "name": "response_time",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "response_time DECIMAL(6,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(50)"
      },
      {
        "name": "ai_assessment",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_assessment TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-seed-js-fatigue",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "fatigue",
    "displayName": "Fatigue",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_name VARCHAR(255)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role VARCHAR(100)"
      },
      {
        "name": "shift_start",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shift_start TIMESTAMP"
      },
      {
        "name": "hours_worked",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hours_worked DECIMAL(4,2)"
      },
      {
        "name": "fatigue_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fatigue_score INTEGER"
      },
      {
        "name": "heart_rate_variability",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "heart_rate_variability DECIMAL(6,2)"
      },
      {
        "name": "reaction_time",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reaction_time DECIMAL(6,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "ai_recommendation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_recommendation TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-routes-gap-hazards-ppe-lack-ai-risk-scoring-js-gap-features",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_hazards_ppe_lack_ai_risk_scoring.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-routes-gap-limited-integration-with-wearable-apis-apple-watch-fitbit-ou-js-gap-features",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_limited_integration_with_wearable_apis_apple_watch_fitbit_ou.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-routes-gap-maintenance-lacks-predictive-maintenance-scheduling-ai-js-gap-features",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_maintenance_lacks_predictive_maintenance_scheduling_ai.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-routes-gap-no-geofenced-site-map-management-js-gap-features",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_geofenced_site_map_management.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-routes-gap-no-insurance-liability-tracking-or-claims-module-js-gap-features",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_insurance_liability_tracking_or_claims_module.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-routes-gap-no-payment-billing-module-js-gap-features",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_payment_billing_module.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-routes-gap-no-webhooks-for-sensor-pushes-js-gap-features",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_webhooks_for_sensor_pushes.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-routes-gap-proximity-falls-lack-dedicated-ai-endpoints-for-collision-pr-js-gap-features",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_proximity_falls_lack_dedicated_ai_endpoints_for_collision_pr.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-seed-js-hazards",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "hazards",
    "displayName": "Hazards",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(100)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(50)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "zone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "detected_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "detected_by VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "ai_recommendation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_recommendation TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-seed-js-heatstress",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "heatstress",
    "displayName": "Heatstress",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_name VARCHAR(255)"
      },
      {
        "name": "zone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone VARCHAR(100)"
      },
      {
        "name": "body_temp",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body_temp DECIMAL(5,2)"
      },
      {
        "name": "ambient_temp",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ambient_temp DECIMAL(5,2)"
      },
      {
        "name": "humidity",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "humidity DECIMAL(5,2)"
      },
      {
        "name": "wbgt_index",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "wbgt_index DECIMAL(5,2)"
      },
      {
        "name": "hydration_level",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hydration_level DECIMAL(5,2)"
      },
      {
        "name": "work_rest_ratio",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "work_rest_ratio VARCHAR(20)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "ai_recommendation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_recommendation TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-seed-js-incidents",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "incidents",
    "displayName": "Incidents",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(100)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(50)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "worker_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_name VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "injuries",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "injuries VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "ai_analysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-seed-js-maintenance",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "maintenance",
    "displayName": "Maintenance",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "equipment_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipment_name VARCHAR(255)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(100)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "health_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "health_score INTEGER"
      },
      {
        "name": "vibration_level",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vibration_level DECIMAL(6,2)"
      },
      {
        "name": "temperature",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "temperature DECIMAL(6,2)"
      },
      {
        "name": "usage_hours",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "usage_hours INTEGER"
      },
      {
        "name": "predicted_failure",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "predicted_failure VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "ai_recommendation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_recommendation TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-seed-js-noise",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "noise",
    "displayName": "Noise",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "zone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone VARCHAR(100)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "decibel_level",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "decibel_level DECIMAL(5,2)"
      },
      {
        "name": "peak_level",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "peak_level DECIMAL(5,2)"
      },
      {
        "name": "duration_hours",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_hours DECIMAL(4,2)"
      },
      {
        "name": "exposure_limit",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "exposure_limit DECIMAL(5,2)"
      },
      {
        "name": "hearing_protection",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hearing_protection VARCHAR(100)"
      },
      {
        "name": "workers_affected",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "workers_affected INTEGER"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "ai_recommendation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_recommendation TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-seed-js-ppe",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "ppe",
    "displayName": "Ppe",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_name VARCHAR(255)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role VARCHAR(100)"
      },
      {
        "name": "zone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone VARCHAR(100)"
      },
      {
        "name": "helmet",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "helmet BOOLEAN DEFAULT true"
      },
      {
        "name": "vest",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "vest BOOLEAN DEFAULT true"
      },
      {
        "name": "gloves",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "gloves BOOLEAN DEFAULT true"
      },
      {
        "name": "boots",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "boots BOOLEAN DEFAULT true"
      },
      {
        "name": "goggles",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "goggles BOOLEAN DEFAULT false"
      },
      {
        "name": "harness",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "harness BOOLEAN DEFAULT false"
      },
      {
        "name": "compliance_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "compliance_score INTEGER"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "ai_note",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_note TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-seed-js-proximity",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "proximity",
    "displayName": "Proximity",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_name VARCHAR(255)"
      },
      {
        "name": "zone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone VARCHAR(100)"
      },
      {
        "name": "equipment_nearby",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipment_nearby VARCHAR(255)"
      },
      {
        "name": "distance",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "distance DECIMAL(6,2)"
      },
      {
        "name": "alert_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alert_type VARCHAR(100)"
      },
      {
        "name": "speed",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "speed DECIMAL(5,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(50)"
      },
      {
        "name": "ai_recommendation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_recommendation TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-seed-js-training",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "training",
    "displayName": "Training",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_name VARCHAR(255)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role VARCHAR(100)"
      },
      {
        "name": "certification",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certification VARCHAR(255)"
      },
      {
        "name": "training_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "training_type VARCHAR(100)"
      },
      {
        "name": "completion_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completion_date DATE"
      },
      {
        "name": "expiry_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiry_date DATE"
      },
      {
        "name": "score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "score INTEGER"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "ai_recommendation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_recommendation TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-seed-js-users",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'user'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'user'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-construction-wearable-safety-monitor-backend-seed-js-workers",
    "sourceProject": "AIConstructionWearableSafetyMonitor",
    "name": "workers",
    "displayName": "Workers",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role VARCHAR(100)"
      },
      {
        "name": "site",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site VARCHAR(255)"
      },
      {
        "name": "heart_rate",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "heart_rate INTEGER"
      },
      {
        "name": "body_temp",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body_temp DECIMAL(5,2)"
      },
      {
        "name": "oxygen_level",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "oxygen_level DECIMAL(5,2)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_level VARCHAR(50)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-seed-js-ada-compliance",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "ada_compliance",
    "displayName": "Ada Compliance",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "building_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "building_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "building_address",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "building_address VARCHAR(500) NOT NULL"
      },
      {
        "name": "building_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "building_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "has_ramp",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "has_ramp BOOLEAN"
      },
      {
        "name": "has_elevator",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "has_elevator BOOLEAN"
      },
      {
        "name": "accessible_restrooms",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accessible_restrooms INTEGER"
      },
      {
        "name": "accessible_parking",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accessible_parking INTEGER"
      },
      {
        "name": "door_width",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "door_width DECIMAL(5,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-init-db-js-ai-results",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "backend/initDb.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "endpoint",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endpoint VARCHAR(100)"
      },
      {
        "name": "entity_table",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_table VARCHAR(100)"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "result_json",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-seed-js-code-violations",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "code_violations",
    "displayName": "Code Violations",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "property_address",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property_address VARCHAR(500) NOT NULL"
      },
      {
        "name": "violation_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "violation_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "code_section",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "code_section VARCHAR(100) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(50)"
      },
      {
        "name": "reported_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reported_by VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Open'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-seed-js-document-reviews",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "document_reviews",
    "displayName": "Document Reviews",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "document_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "document_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "submitted_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "submitted_by VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "page_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "page_count INTEGER"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Pending",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Pending Review'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-routes-integrations-js-document-versions",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "document_versions",
    "displayName": "Document Versions",
    "framework": "SQL",
    "sourceFile": "backend/routes/integrations.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "document_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document_id INTEGER NOT NULL"
      },
      {
        "name": "version_number",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version_number INTEGER NOT NULL"
      },
      {
        "name": "file_path",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_path TEXT"
      },
      {
        "name": "uploaded_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "uploaded_by INTEGER"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-seed-js-environmental-assessments",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "environmental_assessments",
    "displayName": "Environmental Assessments",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "property_address",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property_address VARCHAR(500) NOT NULL"
      },
      {
        "name": "assessment_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assessment_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "ecosystem_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ecosystem_type VARCHAR(100)"
      },
      {
        "name": "acreage",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "acreage DECIMAL(10,2)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-seed-js-fire-safety-checks",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "fire_safety_checks",
    "displayName": "Fire Safety Checks",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "building_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "building_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "building_address",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "building_address VARCHAR(500) NOT NULL"
      },
      {
        "name": "building_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "building_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "square_footage",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "square_footage INTEGER"
      },
      {
        "name": "num_floors",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "num_floors INTEGER"
      },
      {
        "name": "has_sprinklers",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "has_sprinklers BOOLEAN"
      },
      {
        "name": "has_fire_alarm",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "has_fire_alarm BOOLEAN"
      },
      {
        "name": "fire_exits",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fire_exits INTEGER"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-routes-gap-feat-code-without-code-js-gap-features",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_code_without_code.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-routes-gap-feat-existing-aihistory-js-and-aipermit-js-stubs-need-r-js-gap-features",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_existing_aihistory_js_and_aipermit_js_stubs_need_r.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-routes-gap-feat-inspections-without-inspection-js-gap-features",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_inspections_without_inspection.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-routes-gap-feat-limited-frontend-only-7-pages-for-19-js-gap-features",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_limited_frontend_only_7_pages_for_19.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-routes-gap-feat-limited-integration-with-title-deed-records-integr-js-gap-features",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_limited_integration_with_title_deed_records_integr.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-routes-gap-feat-no-audit-log-only-1-audit-reference-js-gap-features",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_no_audit_log_only_1_audit_reference.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-routes-gap-feat-no-cad-gis-integration-plan-viewer-parcel-maps-js-gap-features",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_no_cad_gis_integration_plan_viewer_parcel_maps.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-routes-gap-feat-no-document-versioning-for-plans-js-gap-features",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_no_document_versioning_for_plans.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-routes-gap-feat-no-fee-calculation-engine-js-gap-features",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_no_fee_calculation_engine.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-routes-gap-feat-no-notifications-layer-grep-shows-only-1-mention-js-gap-features",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_no_notifications_layer_grep_shows_only_1_mention.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-routes-gap-feat-no-public-portal-online-permit-tracking-doc-submis-js-gap-features",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_no_public_portal_online_permit_tracking_doc_submis.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-routes-gap-feat-no-webhooks-for-inspection-scheduling-triggers-js-gap-features",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_no_webhooks_for_inspection_scheduling_triggers.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-routes-gap-feat-plans-without-plan-js-gap-features",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_plans_without_plan.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-routes-gap-feat-violations-without-violation-js-gap-features",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_violations_without_violation.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-seed-js-historical-reviews",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "historical_reviews",
    "displayName": "Historical Reviews",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "property_address",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property_address VARCHAR(500) NOT NULL"
      },
      {
        "name": "building_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "building_name VARCHAR(255)"
      },
      {
        "name": "year_built",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "year_built INTEGER"
      },
      {
        "name": "historic_district",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "historic_district VARCHAR(255)"
      },
      {
        "name": "landmark_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "landmark_status VARCHAR(100)"
      },
      {
        "name": "proposed_changes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "proposed_changes TEXT"
      },
      {
        "name": "architectural_style",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "architectural_style VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Under",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Under Review'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-seed-js-inspections",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "inspections",
    "displayName": "Inspections",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "property_address",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property_address VARCHAR(500) NOT NULL"
      },
      {
        "name": "inspection_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "inspector_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector_name VARCHAR(255)"
      },
      {
        "name": "inspection_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_date DATE"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Scheduled'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Scheduled'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-routes-jurisdiction-rules-js-jurisdiction-rules",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "jurisdiction_rules",
    "displayName": "Jurisdiction Rules",
    "framework": "SQL",
    "sourceFile": "backend/routes/jurisdictionRules.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "jurisdiction",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "jurisdiction VARCHAR(255) NOT NULL"
      },
      {
        "name": "rule_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rule_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "requirement",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requirement TEXT NOT NULL"
      },
      {
        "name": "effective_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "effective_date DATE"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-seed-js-noise-compliance",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "noise_compliance",
    "displayName": "Noise Compliance",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "property_address",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property_address VARCHAR(500) NOT NULL"
      },
      {
        "name": "noise_source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "noise_source VARCHAR(255)"
      },
      {
        "name": "decibel_level",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "decibel_level INTEGER"
      },
      {
        "name": "time_of_operation",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "time_of_operation VARCHAR(100)"
      },
      {
        "name": "zone_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone_type VARCHAR(100)"
      },
      {
        "name": "mitigation_measures",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mitigation_measures TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-seed-js-occupancy-classifications",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "occupancy_classifications",
    "displayName": "Occupancy Classifications",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "building_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "building_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "building_address",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "building_address VARCHAR(500) NOT NULL"
      },
      {
        "name": "building_use",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "building_use VARCHAR(255) NOT NULL"
      },
      {
        "name": "square_footage",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "square_footage INTEGER"
      },
      {
        "name": "num_floors",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "num_floors INTEGER"
      },
      {
        "name": "max_occupants",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "max_occupants INTEGER"
      },
      {
        "name": "construction_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "construction_type VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-seed-js-parking-requirements",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "parking_requirements",
    "displayName": "Parking Requirements",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "property_address",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property_address VARCHAR(500) NOT NULL"
      },
      {
        "name": "building_use",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "building_use VARCHAR(255)"
      },
      {
        "name": "square_footage",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "square_footage INTEGER"
      },
      {
        "name": "num_units",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "num_units INTEGER"
      },
      {
        "name": "proposed_spaces",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "proposed_spaces INTEGER"
      },
      {
        "name": "ada_spaces",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ada_spaces INTEGER"
      },
      {
        "name": "zone_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone_type VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-seed-js-permit-applications",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "permit_applications",
    "displayName": "Permit Applications",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "applicant_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "applicant_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "property_address",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property_address VARCHAR(500) NOT NULL"
      },
      {
        "name": "permit_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "permit_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "estimated_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_cost DECIMAL(12,2)"
      },
      {
        "name": "square_footage",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "square_footage INTEGER"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Pending",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Pending Review'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-seed-js-plan-reviews",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "plan_reviews",
    "displayName": "Plan Reviews",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "plan_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plan_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "architect",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "architect VARCHAR(255)"
      },
      {
        "name": "engineer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "engineer VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "building_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "building_type VARCHAR(100)"
      },
      {
        "name": "stories",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stories INTEGER"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Submitted'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Submitted'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-seed-js-setback-calculations",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "setback_calculations",
    "displayName": "Setback Calculations",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "property_address",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property_address VARCHAR(500) NOT NULL"
      },
      {
        "name": "zone_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "lot_width",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lot_width DECIMAL(8,2)"
      },
      {
        "name": "lot_depth",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lot_depth DECIMAL(8,2)"
      },
      {
        "name": "front_setback",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "front_setback DECIMAL(6,2)"
      },
      {
        "name": "rear_setback",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rear_setback DECIMAL(6,2)"
      },
      {
        "name": "side_setback",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "side_setback DECIMAL(6,2)"
      },
      {
        "name": "proposed_structure",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "proposed_structure VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Calculated'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Calculated'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-seed-js-stormwater-management",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "stormwater_management",
    "displayName": "Stormwater Management",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "property_address",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property_address VARCHAR(500) NOT NULL"
      },
      {
        "name": "site_area",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "site_area DECIMAL(10,2)"
      },
      {
        "name": "impervious_area",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "impervious_area DECIMAL(10,2)"
      },
      {
        "name": "drainage_basin",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "drainage_basin VARCHAR(100)"
      },
      {
        "name": "soil_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "soil_type VARCHAR(50)"
      },
      {
        "name": "proposed_bmp",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "proposed_bmp VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-init-db-js-uploaded-documents",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "uploaded_documents",
    "displayName": "Uploaded Documents",
    "framework": "SQL",
    "sourceFile": "backend/initDb.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "original_filename",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "original_filename VARCHAR(255)"
      },
      {
        "name": "file_path",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_path VARCHAR(500)"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100)"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER"
      },
      {
        "name": "uploaded_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "uploaded_by INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-seed-js-users",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'reviewer'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'reviewer'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-seed-js-zoning-checks",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "zoning_checks",
    "displayName": "Zoning Checks",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "property_address",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "property_address VARCHAR(500) NOT NULL"
      },
      {
        "name": "zone_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "proposed_use",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "proposed_use VARCHAR(255) NOT NULL"
      },
      {
        "name": "current_use",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_use VARCHAR(255)"
      },
      {
        "name": "lot_size",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lot_size DECIMAL(10,2)"
      },
      {
        "name": "building_height",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "building_height DECIMAL(6,2)"
      },
      {
        "name": "lot_coverage",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lot_coverage DECIMAL(5,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-permit-zoning-compliance-backend-routes-custom-views-js-zoning-rules",
    "sourceProject": "AIPermitZoningCompliance",
    "name": "zoning_rules",
    "displayName": "Zoning Rules",
    "framework": "SQL",
    "sourceFile": "backend/routes/customViews.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "zone_code",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone_code VARCHAR(50) NOT NULL"
      },
      {
        "name": "rule_label",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rule_label VARCHAR(255) NOT NULL"
      },
      {
        "name": "front_setback_ft",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "front_setback_ft NUMERIC(8,2) DEFAULT 0"
      },
      {
        "name": "side_setback_ft",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "side_setback_ft NUMERIC(8,2) DEFAULT 0"
      },
      {
        "name": "rear_setback_ft",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "rear_setback_ft NUMERIC(8,2) DEFAULT 0"
      },
      {
        "name": "max_density_units_per_acre",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "max_density_units_per_acre NUMERIC(8,2) DEFAULT 0"
      },
      {
        "name": "max_height_ft",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "max_height_ft NUMERIC(8,2) DEFAULT 0"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-seed-js-ai-results",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "endpoint",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endpoint VARCHAR(100)"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "metadata",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metadata JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-routes-extensions-js-biometric-readings",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "biometric_readings",
    "displayName": "Biometric Readings",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_id INTEGER"
      },
      {
        "name": "heart_rate",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "heart_rate INTEGER"
      },
      {
        "name": "spo2",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "spo2 INTEGER"
      },
      {
        "name": "temperature_c",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "temperature_c DOUBLE PRECISION"
      },
      {
        "name": "recorded_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "recorded_at TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "provider",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider TEXT"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-routes-extensions-js-bodycam-streams",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "bodycam_streams",
    "displayName": "Bodycam Streams",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_id INTEGER"
      },
      {
        "name": "stream_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stream_url TEXT"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status TEXT DEFAULT 'pending'"
      },
      {
        "name": "cv_findings",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cv_findings JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-seed-js-check-ins",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "check_ins",
    "displayName": "Check Ins",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_id INTEGER REFERENCES workers(id) ON DELETE CASCADE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'safe'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'safe' CHECK (status IN ('safe','help_needed','no_response'))"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "checked_in_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "checked_in_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-seed-js-compliance-records",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "compliance_records",
    "displayName": "Compliance Records",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_id INTEGER REFERENCES workers(id) ON DELETE CASCADE"
      },
      {
        "name": "requirement",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requirement VARCHAR(255) NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('compliant','non_compliant','pending','expired'))"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE"
      },
      {
        "name": "completed_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_date DATE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-seed-js-device-heartbeats",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "device_heartbeats",
    "displayName": "Device Heartbeats",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_id INTEGER REFERENCES workers(id) ON DELETE CASCADE"
      },
      {
        "name": "lat",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lat DECIMAL(10, 7)"
      },
      {
        "name": "lng",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lng DECIMAL(10, 7)"
      },
      {
        "name": "battery_pct",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "battery_pct INTEGER"
      },
      {
        "name": "recorded_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "recorded_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-routes-extensions-js-dispatch-calls",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "dispatch_calls",
    "displayName": "Dispatch Calls",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_id INTEGER"
      },
      {
        "name": "incident_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "incident_id INTEGER"
      },
      {
        "name": "provider",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider TEXT"
      },
      {
        "name": "external_call_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "external_call_id TEXT"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status TEXT DEFAULT 'pending'"
      },
      {
        "name": "location",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-seed-js-emergencies",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "emergencies",
    "displayName": "Emergencies",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_id INTEGER REFERENCES workers(id) ON DELETE CASCADE"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'sos'",
        "sourceLine": "type VARCHAR(50) DEFAULT 'sos' CHECK (type IN ('sos','medical','fire','security','other'))"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active','responding','resolved'))"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'high'",
        "sourceLine": "priority VARCHAR(50) DEFAULT 'high' CHECK (priority IN ('low','medium','high','critical'))"
      },
      {
        "name": "triggered_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "triggered_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "resolved_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolved_at TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-seed-js-emergency-events",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "emergency_events",
    "displayName": "Emergency Events",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_id INTEGER REFERENCES workers(id) ON DELETE CASCADE"
      },
      {
        "name": "emergency_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "emergency_id INTEGER REFERENCES emergencies(id) ON DELETE SET NULL"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'sos'",
        "sourceLine": "type VARCHAR(50) DEFAULT 'sos'"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "response_plan",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "response_plan TEXT"
      },
      {
        "name": "timestamp",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "timestamp TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-seed-js-equipment-inspections",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "equipment_inspections",
    "displayName": "Equipment Inspections",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "equipment_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipment_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "equipment_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipment_type VARCHAR(100)"
      },
      {
        "name": "inspector_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector_id INTEGER REFERENCES workers(id) ON DELETE SET NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'passed'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'passed' CHECK (status IN ('passed','failed','needs_repair','retired'))"
      },
      {
        "name": "last_inspection",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_inspection TIMESTAMP"
      },
      {
        "name": "next_inspection",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_inspection TIMESTAMP"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-seed-js-escalation-chains",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "escalation_chains",
    "displayName": "Escalation Chains",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_id INTEGER REFERENCES workers(id) ON DELETE CASCADE"
      },
      {
        "name": "level",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "level INTEGER NOT NULL"
      },
      {
        "name": "contact_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_name VARCHAR(100)"
      },
      {
        "name": "contact_phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_phone VARCHAR(20)"
      },
      {
        "name": "contact_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_email VARCHAR(100)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-routes-gap-feat-compliance-without-audit-js-gap-features",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapFeat_compliance_without_audit.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-routes-gap-feat-equipment-without-equipment-js-gap-features",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapFeat_equipment_without_equipment.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-routes-gap-feat-limited-multi-js-gap-features",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapFeat_limited_multi.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-routes-gap-feat-no-integration-with-emergency-services-911-auto-js-gap-features",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapFeat_no_integration_with_emergency_services_911_auto.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-routes-gap-feat-no-native-mobile-app-despite-field-js-gap-features",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapFeat_no_native_mobile_app_despite_field.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-routes-gap-feat-no-notifications-module-dedicated-route-relies-on-js-gap-features",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapFeat_no_notifications_module_dedicated_route_relies_on_.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-routes-gap-feat-no-real-js-gap-features",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapFeat_no_real.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-routes-gap-feat-no-wearable-device-integration-smartwatch-beacon-js-gap-features",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapFeat_no_wearable_device_integration_smartwatch_beacon.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-routes-gap-feat-no-webhooks-for-external-dispatch-systems-js-gap-features",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapFeat_no_webhooks_for_external_dispatch_systems.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-routes-gap-feat-shifts-without-burnout-js-gap-features",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapFeat_shifts_without_burnout.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-seed-js-geofences",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "geofences",
    "displayName": "Geofences",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "zone_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone_type VARCHAR(100)"
      },
      {
        "name": "boundary",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "boundary JSONB"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "risk_level VARCHAR(50) DEFAULT 'medium'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-seed-js-hazards",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "hazards",
    "displayName": "Hazards",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'low'",
        "sourceLine": "severity VARCHAR(50) DEFAULT 'low' CHECK (severity IN ('low','medium','high','critical'))"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'identified'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'identified' CHECK (status IN ('identified','assessed','mitigated','closed'))"
      },
      {
        "name": "reported_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reported_by INTEGER REFERENCES workers(id) ON DELETE SET NULL"
      },
      {
        "name": "reported_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "reported_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "mitigated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mitigated_at TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-routes-extensions-js-i18n-translations",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "i18n_translations",
    "displayName": "I18n Translations",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "locale",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "locale TEXT NOT NULL"
      },
      {
        "name": "namespace",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "namespace TEXT"
      },
      {
        "name": "value",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "value TEXT NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-seed-js-incidents",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "incidents",
    "displayName": "Incidents",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "worker_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_id INTEGER REFERENCES workers(id) ON DELETE SET NULL"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'low'",
        "sourceLine": "severity VARCHAR(50) DEFAULT 'low' CHECK (severity IN ('low','medium','high','critical'))"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'open' CHECK (status IN ('open','investigating','resolved','closed'))"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "reported_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "reported_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "resolved_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolved_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-routes-extensions-js-iot-sensor-readings",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "iot_sensor_readings",
    "displayName": "Iot Sensor Readings",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "sensor_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sensor_id TEXT"
      },
      {
        "name": "worker_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_id INTEGER"
      },
      {
        "name": "sensor_type",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sensor_type TEXT"
      },
      {
        "name": "value",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "value DOUBLE PRECISION"
      },
      {
        "name": "unit",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit TEXT"
      },
      {
        "name": "recorded_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "recorded_at TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "metadata",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metadata JSONB"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-seed-js-locations",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "locations",
    "displayName": "Locations",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_id INTEGER REFERENCES workers(id) ON DELETE CASCADE"
      },
      {
        "name": "latitude",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "latitude DECIMAL(10, 7)"
      },
      {
        "name": "longitude",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "longitude DECIMAL(10, 7)"
      },
      {
        "name": "address",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address VARCHAR(255)"
      },
      {
        "name": "zone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone VARCHAR(100)"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'low'",
        "sourceLine": "risk_level VARCHAR(50) DEFAULT 'low'"
      },
      {
        "name": "recorded_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "recorded_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-seed-js-shifts",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "shifts",
    "displayName": "Shifts",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_id INTEGER REFERENCES workers(id) ON DELETE CASCADE"
      },
      {
        "name": "start_time",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_time TIMESTAMP NOT NULL"
      },
      {
        "name": "end_time",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_time TIMESTAMP NOT NULL"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'day'",
        "sourceLine": "type VARCHAR(50) DEFAULT 'day' CHECK (type IN ('day','night','swing','overtime'))"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'scheduled' CHECK (status IN ('scheduled','active','completed','cancelled'))"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-routes-custom-views-js-sos-events",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "sos_events",
    "displayName": "Sos Events",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/customViews.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_id INTEGER"
      },
      {
        "name": "worker_name",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_name TEXT"
      },
      {
        "name": "triggered_by",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "triggered_by TEXT"
      },
      {
        "name": "notified",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notified JSONB"
      },
      {
        "name": "escalation_chain",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "escalation_chain JSONB"
      },
      {
        "name": "ack_status",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "ack_status TEXT DEFAULT 'pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-seed-js-training-records",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "training_records",
    "displayName": "Training Records",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_id INTEGER REFERENCES workers(id) ON DELETE CASCADE"
      },
      {
        "name": "course_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "course_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'not_started'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'not_started' CHECK (status IN ('not_started','in_progress','completed','expired'))"
      },
      {
        "name": "score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "score INTEGER"
      },
      {
        "name": "completed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_at TIMESTAMP"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-seed-js-users",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'user'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'user'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-routes-extensions-js-wearable-links",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "wearable_links",
    "displayName": "Wearable Links",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "worker_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "worker_id INTEGER"
      },
      {
        "name": "provider",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider TEXT NOT NULL"
      },
      {
        "name": "external_user_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "external_user_id TEXT"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'linked'",
        "sourceLine": "status TEXT DEFAULT 'linked'"
      },
      {
        "name": "last_synced_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_synced_at TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-safety-lone-worker-monitor-backend-src-seed-js-workers",
    "sourceProject": "AIPersonalSafetyLoneWorkerMonitor",
    "name": "workers",
    "displayName": "Workers",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(50)"
      },
      {
        "name": "department",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "department VARCHAR(100)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active','inactive','emergency','offline'))"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'low'",
        "sourceLine": "risk_level VARCHAR(50) DEFAULT 'low'"
      },
      {
        "name": "last_check_in",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_check_in TIMESTAMP"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "check_in_interval_minutes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "60",
        "sourceLine": "check_in_interval_minutes INTEGER DEFAULT 60"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vehicle-inspection-certification-server-routes-gap-critical-no-ai-for-damage-assessment-from-photos-js-gap-features",
    "sourceProject": "AIVehicleInspectionCertification",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapCriticalNoAiForDamageAssessmentFromPhotos.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vehicle-inspection-certification-server-routes-gap-no-audit-logging-js-gap-features",
    "sourceProject": "AIVehicleInspectionCertification",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoAuditLogging.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vehicle-inspection-certification-server-routes-gap-no-customer-self-service-portal-js-gap-features",
    "sourceProject": "AIVehicleInspectionCertification",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoCustomerSelfServicePortal.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vehicle-inspection-certification-server-routes-gap-no-fraud-detection-on-inspection-data-js-gap-features",
    "sourceProject": "AIVehicleInspectionCertification",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoFraudDetectionOnInspectionData.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vehicle-inspection-certification-server-routes-gap-no-insurance-claim-integration-direct-insurer-api-js-gap-features",
    "sourceProject": "AIVehicleInspectionCertification",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoInsuranceClaimIntegrationDirectInsurerApi.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vehicle-inspection-certification-server-routes-gap-no-insurance-estimate-generation-ai-js-gap-features",
    "sourceProject": "AIVehicleInspectionCertification",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoInsuranceEstimateGenerationAi.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vehicle-inspection-certification-server-routes-gap-no-integration-with-oem-recall-databases-only-manual-js-gap-features",
    "sourceProject": "AIVehicleInspectionCertification",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoIntegrationWithOemRecallDatabasesOnlyManual.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vehicle-inspection-certification-server-routes-gap-no-parts-supplier-integration-js-gap-features",
    "sourceProject": "AIVehicleInspectionCertification",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoPartsSupplierIntegration.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vehicle-inspection-certification-server-routes-gap-no-predictive-maintenance-ml-js-gap-features",
    "sourceProject": "AIVehicleInspectionCertification",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoPredictiveMaintenanceMl.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vehicle-inspection-certification-server-routes-gap-no-third-party-repair-shop-network-js-gap-features",
    "sourceProject": "AIVehicleInspectionCertification",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoThirdPartyRepairShopNetwork.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vehicle-inspection-certification-server-routes-gap-no-webhooks-notifications-for-recall-events-js-gap-features",
    "sourceProject": "AIVehicleInspectionCertification",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoWebhooksNotificationsForRecallEvents.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  }
];
