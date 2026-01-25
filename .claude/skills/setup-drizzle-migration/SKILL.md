---
name: setup-drizzle-migration
description: Create DB schema changes with migration generation. Use for new tables or relations.
argument-hint: [table-name] [columns]
allowed-tools: Bash(drizzle-kit:*)
---

Define new Drizzle schema and generate PostgreSQL migration.

## Current Database Status
- Existing tables: !`grep -r "pgTable" --include="*.ts" packages/db/src/ | wc -l` defined
- Database URL: !`echo "DATABASE_URL configured: $(grep -q DATABASE_URL .env* && echo 'YES' || echo 'NO')"`
- Migrations count: !`ls packages/db/migrations/ 2>/dev/null | wc -l 2>/dev/null || echo "0"`

Create:
- Update `@repo/db/schema.ts` with new table/relations
- Run `drizzle-kit generate` to create migration file
- Commit migration to repository

## Schema Generation Steps
1. Define table with $ARGUMENTS columns
2. Add relations for foreign keys if needed
3. Include Zod validation schemas
4. Export types from schema file

Schema conventions:
- Use camelCase for column names (maps to snake_case in DB)
- Define relations for foreign keys with `relations()`
- Include Zod schemas for type safety alongside Drizzle schemas
- Use PostgreSQL types with Drizzle enums where needed
- Add indexes for frequently queried columns

## Example Generated Schema
```typescript
export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    email: varchar('email', { length: 256 }).notNull().unique(),
    createdAt: timestamp('created_at').defaultNow(),
});

// Zod schema for validation
export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);
```

## Migration Testing
After generation, test migration with:
```bash
pnpm db:push  # Apply to dev DB
pnpm db:studio  # Verify in Drizzle Studio
```