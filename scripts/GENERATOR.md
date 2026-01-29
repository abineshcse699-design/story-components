# Angular CLI Generator Script

A Node.js script to automate the generation of Angular artifacts in the upov-ui library project with proper folder structure and automatic barrel file exports.

## Features

- ✅ Generates Angular artifacts (components, directives, pipes, services, guards, interceptors, interfaces, enums, classes)
- ✅ Automatically targets the `upov-ui` project
- ✅ Maintains proper library folder structure following Angular best practices
- ✅ Auto-generates barrel files (`index.ts`) in each category folder
- ✅ Auto-exports new artifacts to the appropriate barrel files
- ✅ Auto-updates `lib/index.ts` when creating new categories

## Usage

```bash
npm run generate <type> <name>
```

or using the alias script:

```bash
npm run g <alias> <name>
```

### Available Types

- `component` - Standalone Angular components
- `directive` - Standalone Angular directives
- `pipe` - Standalone Angular pipes
- `service` - Angular services
- `guard` - Angular route guards
- `interceptor` - HTTP interceptors
- `interface` - TypeScript interfaces
- `enum` - TypeScript enums
- `class` - TypeScript classes

## Examples

### Generate a Component

```bash
npm run generate component card
```

This will:

1. Create `projects/upov-ui/src/lib/components/card/card.ts`
2. Create `projects/upov-ui/src/lib/components/card/card.html`
3. Create `projects/upov-ui/src/lib/components/card/card.scss`
4. Add export to `projects/upov-ui/src/lib/components/index.ts`

### Generate a Directive

```bash
npm run generate directive tooltip
```

This will:

1. Create `projects/upov-ui/src/lib/directives/tooltip/tooltip.ts`
2. Add export to `projects/upov-ui/src/lib/directives/index.ts`

### Generate a Service

```bash
npm run generate service user
```

This will:

1. Create `projects/upov-ui/src/lib/services/user.ts`
2. Create barrel file `projects/upov-ui/src/lib/services/index.ts` (if not exists)
3. Add export to the services barrel file
4. Add services export to `lib/index.ts` (if first service)

### Generate a Pipe

```bash
npm run generate pipe capitalize
```

This will:

1. Create `projects/upov-ui/src/lib/pipes/capitalize/capitalize.ts`
2. Create barrel file if needed
3. Add export to the pipes barrel file

### Generate a Guard

```bash
npm run generate guard auth
```

This will:

1. Create `projects/upov-ui/src/lib/guards/auth.ts`
2. Create barrel file if needed
3. Add export to the guards barrel file

### Generate an Interceptor

```bash
npm run generate interceptor http-error
```

This will:

1. Create `projects/upov-ui/src/lib/interceptors/http-error.ts`
2. Create barrel file if needed
3. Add export to the interceptors barrel file

### Generate an Interface

```bash
npm run generate interface user
```

This will:

1. Create `projects/upov-ui/src/lib/models/user.ts`
2. Add export to `projects/upov-ui/src/lib/models/index.ts`

### Generate an Enum

```bash
npm run generate enum status
```

This will:

1. Create `projects/upov-ui/src/lib/models/status.ts`
2. Add export to `projects/upov-ui/src/lib/models/index.ts`

## Folder Structure

The script maintains this folder structure in the library:

```
projects/upov-ui/src/lib/
├── components/          # Standalone components
│   ├── index.ts        # Components barrel file
│   └── button/
│       ├── button.ts
│       ├── button.html
│       └── button.scss
├── directives/         # Standalone directives
│   ├── index.ts       # Directives barrel file
│   └── highlight/
│       └── highlight.ts
├── pipes/             # Standalone pipes
│   ├── index.ts      # Pipes barrel file
│   └── uppercase/
│       └── uppercase.ts
├── services/         # Services
│   ├── index.ts     # Services barrel file
│   └── user.ts
├── guards/          # Guards
│   ├── index.ts    # Guards barrel file
│   └── auth.ts
├── interceptors/   # Interceptors
│   ├── index.ts   # Interceptors barrel file
│   └── http.ts
├── models/        # Interfaces, enums, classes
│   ├── index.ts  # Models barrel file
│   ├── user.interface.ts
│   └── status.enum.ts
└── index.ts      # Main library barrel file
```

## Barrel Files

Barrel files (`index.ts`) are automatically created and maintained by the script. They provide clean public API exports:

```typescript
// lib/index.ts
export * from './components';
export * from './directives';
export * from './pipes';
export * from './services';
// ... etc

// lib/components/index.ts
export * from './button/button';
export * from './card/card';
// ... etc
```

## Notes

- Components, directives, and pipes get their own subfolder
- Services, guards, and interceptors are placed flat in their category folder
- The script follows Angular 20+ best practices (standalone components, signals, etc.)
- All generated artifacts use the `upov` prefix as configured in `angular.json`

## Troubleshooting

If the script fails:

1. Ensure you're in the project root directory
2. Ensure Angular CLI is installed (`npm install`)
3. Check that `projects/upov-ui` exists
4. Verify the artifact name follows Angular naming conventions (kebab-case)

## Manual Cleanup

If you need to remove a generated artifact:

1. Delete the artifact file(s)
2. Remove the export line from the appropriate barrel file
3. If it was the last artifact in a category, optionally remove the barrel file and the export from `lib/index.ts`

