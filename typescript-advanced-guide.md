# Advanced TypeScript Guide

## Introduction
TypeScript extends JavaScript by adding static types, enabling developers to catch errors early and enhance code maintainability. This guide focuses on advanced TypeScript concepts and patterns commonly used in enterprise applications.

## Prerequisites
- Solid understanding of JavaScript ES6+
- Experience with object-oriented programming
- Familiarity with node.js and npm ecosystem
- Understanding of static typing concepts

## Development Environment Setup
### Required Tools
- Node.js (v18+)
- TypeScript Compiler (tsc)
- VS Code with recommended extensions:
  - ESLint
  - TypeScript Language Features
  - Debug Tools for TypeScript

### Compiler Configuration Best Practices
```typescript
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noUncheckedIndexedAccess": true,
    "strictNullChecks": true
  }
}
```

## Core TypeScript Concepts

### Built-in Types
TypeScript enhances JavaScript's type system with additional precision and safety.

#### Examples:
```typescript
// Example 1: Advanced type inference
const inferredArray = [1, 2, 3] as const;
type ArrayType = typeof inferredArray[number]; // type is 1 | 2 | 3

// Example 2: Using never type for exhaustive checks
function assertNever(value: never): never {
    throw new Error(`Unhandled value: ${value}`);
}
```

### Arrays and Tuples
Advanced array patterns and tuple types for strict type checking.

#### Examples:
```typescript
// Example 1: Generic array with constraints
function processItems<T extends { id: number }>(items: T[]): T[] {
    return items.sort((a, b) => a.id - b.id);
}

// Example 2: Readonly tuples with labels
const httpResponse: readonly [status: number, data: object] = [200, { message: "Success" }] as const;
```

### Enums and Const Assertions
Modern approaches to enumerated values in TypeScript.

#### Examples:
```typescript
// Example 1: Const enum for better performance
const enum HttpStatus {
    OK = 200,
    Created = 201,
    BadRequest = 400,
    ServerError = 500
}

// Example 2: String literal union types (modern alternative to enums)
const ValidStates = {
    Draft: 'DRAFT',
    Published: 'PUBLISHED',
    Archived: 'ARCHIVED'
} as const;
type State = typeof ValidStates[keyof typeof ValidStates];
```

### Advanced Function Types
Complex function patterns and type manipulations.

#### Examples:
```typescript
// Example 1: Function overloads with generics
function process<T extends string>(value: T): string;
function process<T extends number>(value: T): number;
function process<T extends string | number>(value: T): string | number {
    return typeof value === 'string' ? value.toUpperCase() : value * 2;
}

// Example 2: Higher-order function with type safety
type Handler<T> = (value: T) => void;
function createHandler<T>(validator: (value: T) => boolean): Handler<T> {
    return (value: T) => {
        if (!validator(value)) {
            throw new Error('Invalid value');
        }
    };
}
```

### Object Types and Interfaces
Advanced object type patterns and interface techniques.

#### Examples:
```typescript
// Example 1: Mapped types with constraints
type ReadonlyProps<T> = {
    readonly [P in keyof T]: T[P] extends object ? ReadonlyProps<T[P]> : T[P];
};

// Example 2: Discriminated unions with type guards
interface Square {
    kind: 'square';
    size: number;
}

interface Circle {
    kind: 'circle';
    radius: number;
}

type Shape = Square | Circle;

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case 'square':
            return shape.size * shape.size;
        case 'circle':
            return Math.PI * shape.radius ** 2;
    }
}
```

### Type Aliases and Utility Types
Advanced type manipulation and utility types.

#### Examples:
```typescript
// Example 1: Advanced mapped type with filtering
type OptionalProps<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Example 2: Conditional types with infer
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
```

### Union and Intersection Types
Complex type combinations and their applications.

#### Examples:
```typescript
// Example 1: Discriminated unions with type narrowing
type Success<T> = { status: 'success'; data: T };
type Error = { status: 'error'; error: string };
type Result<T> = Success<T> | Error;

// Example 2: Advanced intersection types with generics
type WithId<T> = T & { id: string };
type WithTimestamps<T> = T & { createdAt: Date; updatedAt: Date };
type Entity<T> = WithId<WithTimestamps<T>>;
```

### Literal Types and Template Literals
Advanced use of literal types and template literal types.

#### Examples:
```typescript
// Example 1: Template literal types
type CSSUnit = 'px' | 'em' | 'rem';
type CSSValue<T extends number | string> = `${T}${CSSUnit}`;

// Example 2: Literal type unions with validation
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type Endpoint = `/api/v1/${string}`;
type ValidRoute = `${HttpMethod} ${Endpoint}`;
```

### Optional Chaining and Nullability
Advanced patterns for handling nullable types and optional values.

#### Examples:
```typescript
// Example 1: Advanced null handling with type guards
function isNonNullable<T>(value: T): value is NonNullable<T> {
    return value !== null && value !== undefined;
}

// Example 2: Optional chaining with index signatures
type NestedConfig = {
    features?: {
        [key: string]: {
            enabled: boolean;
            config?: Record<string, unknown>;
        };
    };
};
```

## Best Practices and Tips
- Always enable strict mode in TypeScript configuration
- Use const assertions for immutable values
- Leverage discriminated unions for type safety
- Implement exhaustive type checking
- Use utility types for common type transformations
- Consider performance implications when using complex types
- Document complex type definitions with JSDoc comments
- Use branded types for type-safe identifiers
- Implement proper error handling with custom error types
- Use assertion functions for runtime type checking

## Debugging and Tooling
- Configure source maps for better debugging experience
- Use VS Code's TypeScript-specific debugging features
- Implement proper error boundaries
- Use TypeScript's --strict flag for maximum type safety
- Leverage TypeScript's --noEmitOnError flag during development

This guide covers advanced TypeScript concepts while maintaining type safety and following best practices. Each section includes practical examples that demonstrate real-world usage patterns.
