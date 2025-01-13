// Fundamentals

// Built-In Types
// Example 1: Number and String
const userAge: number = 25;
const userName: string = "Alice";
console.log(`${userName} is ${userAge} years old.`);

// Example 2: Boolean
const isLoggedIn: boolean = true;
console.log(`User logged in: ${isLoggedIn}`);

// Example 3: Null and Undefined
let notAssigned: null = null;
let uninitialized: undefined = undefined;
console.log(notAssigned, uninitialized);

// The any Type
// Example 1: Flexible data assignment
let dynamicValue: any = "Hello";
dynamicValue = 123;
dynamicValue = true;
console.log(dynamicValue);

// Example 2: Using any in functions
function logValue(value: any): void {
  console.log(value);
}
logValue("Test");
logValue(42);

// Example 3: Arrays of any
type AnyArray = any[];
const mixedArray: AnyArray = [1, "text", true, { key: "value" }];
console.log(mixedArray);

// Arrays
// Example 1: Number array
const scores: number[] = [10, 20, 30, 40];
console.log(scores);

// Example 2: String array
const names: string[] = ["Alice", "Bob", "Charlie"];
names.push("Diana");
console.log(names);

// Example 3: Array of objects
interface Product {
  name: string;
  price: number;
}
const products: Product[] = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
];
console.log(products);

// Tuples
// Example 1: Basic tuple
const userInfo: [string, number] = ["Alice", 25];
console.log(userInfo);

// Example 2: Tuple with optional elements
const point: [number, number?] = [10];
console.log(point);

// Example 3: Tuple with rest elements
const colors: [string, ...string[]] = ["red", "blue", "green"];
console.log(colors);

// Enums
// Example 1: Numeric enums
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction.Up);

// Example 2: String enums
// enum Status {
//   Success = "SUCCESS",
//   Failure = "FAILURE",
// }
// console.log(Status.Success);

// Example 3: Reverse mapping with numeric enums
console.log(Direction[0]);

// Functions
// Example 1: Basic function with typed parameters
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 10));

// Example 2: Function with optional parameter
function greet(name: string, salutation?: string): string {
  return `${salutation || "Hello"}, ${name}!`;
}
console.log(greet("Alice"));

// Example 3: Function overloading
function format(value: string): string;
function format(value: number): string;
function format(value: any): string {
  return `Formatted value: ${value}`;
}
console.log(format(100));
console.log(format("test"));

// Objects
// Example 1: Basic object
const car = {
  brand: "Toyota",
  model: "Corolla",
};
console.log(car);

// Example 2: Object with interface
interface Employee {
  id: number;
  name: string;
}
const employee: Employee = { id: 1, name: "John" };
console.log(employee);

// Example 3: Nested objects
interface Company {
  name: string;
  employees: Employee[];
}
const company: Company = {
  name: "TechCorp",
  employees: [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ],
};
console.log(company);

// Advanced Types

// Type Aliases
// Example 1: Simple alias
type ID = string | number;
const userId: ID = 12345;
console.log(userId);

// Example 2: Function alias
type MathOperation = (a: number, b: number) => number;
const subtract: MathOperation = (a, b) => a - b;
console.log(subtract(10, 5));

// Example 3: Object alias
type User = {
  id: ID;
  name: string;
};
const user: User = { id: "abc123", name: "Alice" };
console.log(user);

// Union Types
// Example 1: Combining types
let value: string | number;
value = "Hello";
value = 42;
console.log(value);

// Example 2: Union in function
function printId(id: string | number): void {
  console.log(`ID: ${id}`);
}
printId("abc");
printId(123);

// Example 3: Union with arrays
const data: (string | number)[] = ["Alice", 30, "Bob", 25];
console.log(data);

// Intersection Types
// Example 1: Combining object types
// interface Person {
//   name: string;
// }
// interface Employee {
//   id: number;
// }
// type Worker = Person & Employee;
// const worker: Worker = { name: "Alice", id: 1 };
// console.log(worker);

// // Example 2: Intersection with additional properties
// interface Timestamped {
//   timestamp: Date;
// }
// type LogEntry = Worker & Timestamped;
// const log: LogEntry = { name: "Alice", id: 1, timestamp: new Date() };
// console.log(log);

// Example 3: Combining function types
type Sum = (a: number, b: number) => number;
type Multiply = (a: number, b: number) => number;
type Calculator = Sum & Multiply;

const calculator: Calculator = (a, b) => a + b;
console.log(calculator(3, 4));

// Literal Types
// Example 1: String literal
type Status = "active" | "inactive";
const userStatus: Status = "active";
console.log(userStatus);

// Example 2: Numeric literal
type Speed = 10 | 20 | 30;
const carSpeed: Speed = 20;
console.log(carSpeed);

// Example 3: Function literal
function process(status: "success" | "failure"): void {
  console.log(`Process status: ${status}`);
}
process("success");

// Nullable Types
// Example 1: Variable
let nullableValue: string | null = null;
nullableValue = "Now assigned";
console.log(nullableValue);

// Example 2: Nullable function return
function getValue(flag: boolean): string | null {
  return flag ? "Value" : null;
}
console.log(getValue(true));
console.log(getValue(false));

// Example 3: Nullable properties
interface OptionalUser {
  name: string;
  age?: number | null;
}
const optionalUser: OptionalUser = { name: "Alice", age: null };
console.log(optionalUser);

// Optional Chaining
// Example 1: Accessing nested properties
const nestedObject = { user: { profile: { name: "Alice" } } };
console.log(nestedObject.user?.profile?.name);

// Example 2: Accessing arrays
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
console.log(users[0]?.name);
console.log(users[2]?.name);

// Example 3: Function calls
const getUser = (id: number) => (id === 1 ? { name: "Alice" } : null);
console.log(getUser(1)?.name);
console.log(getUser(2)?.name);
