---
name: add-theming
description: Enable dark mode and CSS variable theming on components. Use for consistent theming.
argument-hint: [component]
allowed-tools: Edit
---

Add theming support to existing components.

Update component to:
- Use CSS custom properties from app.css (--primary, etc.)
- Support .dark class for dark mode
- Ensure OKLCH color compatibility
- Handle theme transitions smoothly

Theming conventions:
- Reference app.css vars like var(--primary)
- Use conditional classes for theme differences
- Test in both light and dark modes
- Follow OKLCH for vibrant neutrality

See [examples.md](examples.md) for themed component patterns.