---
name: generate-shadcn-component
description: Add a new shadcn-svelte component with theming support. Use for consistent, styled widgets.
argument-hint: [component-name] [variant]
allowed-tools: Edit, Write
---

Generate a new shadcn-svelte component with proper theming.

Create:
- Component file in `packages/ui/src/lib/components/`
- Update component exports if needed
- Apply Tailwind OKLCH color variables
- Support dark mode via .dark class
- Use tailwind-variants for variants

Component conventions:
- PascalCase naming (e.g., MyButton)
- Use Svelte 5 runes
- Follow shadcn patterns from components.json
- Include class prop for custom styling
- Reference CSS vars from app.css for theming

See [examples.md](examples.md) for sample components.