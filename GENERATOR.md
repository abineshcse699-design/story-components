# Angular Artifact Generator - Quick Reference

## 🚀 Quick Start

Generate Angular artifacts for the upov-ui library using simple commands:

```bash
# Full command
npm run generate <type> <name>

# Quick aliases
npm run g <alias> <name>
```

## ⚡ Quick Aliases

| Alias       | Type        | Example                  |
|-------------|-------------|--------------------------|
| `c`, `comp` | Component   | `npm run g c button`     |
| `d`, `dir`  | Directive   | `npm run g d tooltip`    |
| `p`         | Pipe        | `npm run g p truncate`   |
| `s`, `svc`  | Service     | `npm run g s api`        |
| `g`         | Guard       | `npm run g g auth`       |
| `i`, `int`  | Interceptor | `npm run g i http-error` |
| `if`        | Interface   | `npm run g if user`      |
| `e`         | Enum        | `npm run g e status`     |
| `cl`        | Class       | `npm run g cl validator` |

## 📝 Examples

### Component

```bash
npm run g c card
# Creates: projects/upov-ui/src/lib/components/card/
#   ├── card.ts
#   ├── card.html
#   └── card.scss
# Exports: Added to components/index.ts
```

### Directive

```bash
npm run g d highlight
# Creates: projects/upov-ui/src/lib/directives/highlight/
#   └── highlight.ts
# Exports: Added to directives/index.ts
```

### Pipe

```bash
npm run g p capitalize
# Creates: projects/upov-ui/src/lib/pipes/
#   └── capitalize-pipe.ts
# Exports: Added to pipes/index.ts (auto-created)
```

### Service

```bash
npm run g s user
# Creates: projects/upov-ui/src/lib/services/
#   └── user.ts
# Exports: Added to services/index.ts (auto-created)
```

## 📁 Generated Structure

```
projects/upov-ui/src/lib/
├── components/          # ✓ Subfolders (--flat=false)
│   ├── index.ts        # Auto-maintained barrel file
│   └── button/
│       ├── button.ts
│       ├── button.html
│       └── button.scss
├── directives/         # ✓ Subfolders (--flat=false)
│   ├── index.ts
│   └── tooltip/
│       └── tooltip.ts
├── pipes/              # ✗ Flat (default)
│   ├── index.ts
│   └── truncate-pipe.ts
├── services/           # ✗ Flat (default)
│   ├── index.ts
│   └── api.ts
├── guards/             # ✗ Flat (default)
│   ├── index.ts
│   └── auth.ts
├── interceptors/       # ✗ Flat (default)
│   ├── index.ts
│   └── http.ts
├── models/             # ✗ Flat (existing)
│   └── index.ts
└── index.ts           # Main barrel (auto-updated)
```

## ✨ Features

- ✅ **Automatic barrel file creation** - Creates `index.ts` in new folders
- ✅ **Automatic barrel exports** - Adds exports to appropriate barrel files
- ✅ **Proper folder structure** - Components/directives in subfolders, others flat
- ✅ **Auto lib/index.ts updates** - New categories auto-exported from main barrel
- ✅ **Standalone by default** - Uses Angular 20+ standalone components/directives/pipes
- ✅ **Proper naming** - Pipes get `-pipe` suffix automatically

## 📖 Full Documentation

For detailed documentation, see [scripts/README.md](scripts/GENERATOR.md).

## 🔧 Scripts Location

- Main generator: `scripts/generate.mjs`
- Quick aliases: `scripts/g.mjs`
- Documentation: `scripts/README.md`

## 💡 Tips

1. **Use aliases for speed**: `npm run g c card` is faster than `npm run generate component card`
2. **Kebab-case names**: Use `my-component` not `MyComponent` or `myComponent`
3. **No test files**: Tests are skipped by default. Add them manually if needed.
4. **Check barrel files**: All exports are automatically added to barrel files
5. **New categories**: When creating first service/pipe/guard, the category is auto-added to `lib/index.ts`

## 🐛 Troubleshooting

**Issue**: "Unknown artifact type"

- **Solution**: Check available types with `npm run generate` or `npm run g`

**Issue**: Export not found after generation

- **Solution**: Check the appropriate barrel file (`components/index.ts`, etc.)

**Issue**: Component/directive in wrong location

- **Solution**: Verify the artifact was created in a subfolder (not flat)

## 🎯 Common Workflows

### Creating a new feature

```bash
# Create component
npm run g c user-profile

# Create service
npm run g s user

# Create interface
npm run g if user

# Create pipe for display
npm run g p format-username
```

### Creating a new UI component library

```bash
# Components
npm run g c button
npm run g c card
npm run g c modal

# Directives
npm run g d ripple
npm run g d tooltip

# Pipes
npm run g p truncate
npm run g p safe-html
```

---

**Note**: All generated artifacts use the `upov` prefix as configured in `angular.json`

