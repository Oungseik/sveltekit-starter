---
name: audit-security
description: Scan codebase for security vulnerabilities. Use for pre-deploy security checks.
disable-model-invocation: false
allowed-tools: Grep
---

Perform security audit across the codebase, including current repository context.

## Current Repository Status
- Recent commits: !`git log -5 --oneline`
- Database migrations: !`ls migrations/ | head -5 || echo "No migrations found"`
- Exposed files: !`find . -name "*.env*" -o -name "*secret*" | head -5`

## Audit Tasks

Scan for:
- Exposed environment variables (console.log, hardcoded secrets)
- Auth bypass in routes/handlers (!`grep -r "locals.session" --include="*.ts" src/`)
- Insecure defaults in ORPC/Better Auth configs
- SQL injection risks in Drizzle queries (!`grep -r "sql\.\|db\." --include="*.ts" src/`)
- XSS/CSRF in Svelte components
- Open ports/services without rate limiting

## Findings Summary
- **Environment**: Check for leaked secrets in git history (!`git log --all --full-history -S "$DATABASE_URL" -p | head -20`)
- **Auth**: Verify all protected routes have session checks
- **Data**: Ensure input validation in all handlers
- **Security conventions**:
  - Use `$env/static/private` for secrets
  - Validate all user inputs with Zod
  - Log auth failures without exposing details
  - Rotate keys regularly in .env files

## Auto-generated Report
Based on the repository context above, identify and flag any security shortcuts currently in place.