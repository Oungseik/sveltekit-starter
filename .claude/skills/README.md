# Claude Code Skills for Svelte Starter Repository

This directory contains custom skills to accelerate development in this SvelteKit monorepo project.

## Available Skills

### 🚀 Core Development (High Priority)
Use these for fundamental development tasks:

- **`add-orpc-handler`** - Generate new RPC endpoints
  ```bash
  /add-orpc-handler createUser auth
  ```

- **`scaffold-auth-route`** - Create authenticated UI pages
  ```bash
  /scaffold-auth-route /dashboard Dashboard
  ```

### ⚡ Optimization (Medium Priority)
Use these for performance and maintenance:

- **`setup-drizzle-migration`** - Define database schemas
  ```bash
  /setup-drizzle-migration users "name:string, email:string"
  ```

- **`integrate-rate-limit`** - Add API throttling
  ```bash
  /integrate-rate-limit /api/user 10
  ```

### 🏗️ Infrastructure (Medium Priority)
Use these for project structure:

- **`create-shared-package`** - Add reusable packages
  ```bash
  /create-shared-package logger
  ```

### 🔍 Analysis (Low Priority)  
Use these for review and audit:

- **`audit-security`** - Check for vulnerabilities
  ```bash
  /audit-security
  ```

- **`add-theming`** - Enable dark mode support
  ```bash
  /add-theming packages/ui/src/lib/components/Button.svelte
  ```

### 🎯 Complex Tasks (Low Priority)
Use for large feature implementation:

- **`full-stack-crud`** - Generate complete entity CRUD
  ```bash
  /full-stack-crud posts "title:string, content:text, author_id:uuid"
  ```

## Skill Usage

- **Auto-invocation**: Some skills (with `disable-model-invocation: false`) activate automatically when relevant to your conversation
- **Manual invocation**: Use `/skill-name args` for direct control
- **Subagent tasks**: Skills like `full-stack-crud` run in isolated contexts for complex workflows

## Development Guidelines

- Skills follow project conventions: ORPC RPC layer, Svelte 5 runes, shadcn theming, Drizzle DB
- Manual-only skills require explicit `/` commands (prevent accidental destructive operations)
- All skills enforce type safety and code quality standards
- Test skills in development before production use

## Adding New Skills

1. Create directory under `.claude/skills/your-skill/`
2. Add `SKILL.md` with YAML frontmatter and instructions
3. Include supporting files (templates, examples) as needed
4. Update this README
