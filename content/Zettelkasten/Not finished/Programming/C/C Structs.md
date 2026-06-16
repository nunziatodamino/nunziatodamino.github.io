### Definition and initialization

In C struct is an user-defined data type that aggregates previously defined data types:

```` C
struct Point {
  int x;
  int y;
  int z;
};
````

By convention struct are capitalized.

Are initialized as:

- **Positional (or “aggregate”) initialization** , C89 standard, initialization at **compile** time
```` C
struct Point point = {2,4,6}; // 
````

- **Member assignment (after declaration)**, bad because happens at **runtime**
```` C
struct Point point;
point.x = 2;
point.y = 4;
point.z = 6;
````

- **Designated initialization**, C99+ standard,initialization at **compile** time
```` C
struct Point point = {
  .x = 2;
  .y = 4;
  .z = 6;
};
````
#### typedef for simplicity

If the struct is declared within a typedef:

```` C
typedef struct {
  int x;
  int y;
  int z;
} Point ;
````

Then it can be initialized in the program without the keyword struct:

```` C
Point point = {
  .x = 2;
  .y = 4;
  .z = 6;
};
````

### Memory layout

### Accessing members

We use the dot operator to access a struct member, while if we have a struct pointer we use the arrow operator (syntactic sugar)

```c
struct Point p = {1, 2};
struct Point *ptr = &p;

printf("%d\n", p.x);      // dot operator
printf("%d\n", ptr->y);   // arrow operator (same as (*ptr).y)
```

##### Cards#C
What is a `struct` in C and how is it commonly named?::A `struct` is a user-defined type that aggregates previously defined types. By convention, struct type names are often capitalized (e.g., `struct Point { int x; int y; int z; };`).

Which struct initialization styles happen at compile time vs run time?::**Compile time:** positional/aggregate (C89) → `struct Point p = {2,4,6};`; designated (C99+) → `struct Point p = {.x=2, .y=4, .z=6};`
**Run time:** member assignment after declaration → `p.x=2; p.y=4; p.z=6;`

In a positional/aggregate initializer, the order of values must ??match the field declaration order.??::Example: `struct Point p = {2,4,6};` initializes `x=2, y=4, z=6`.
<!--SR:!2026-03-11,2,230-->

How does `typedef` simplify struct usage and initialization?::`typedef struct { int x,y,z; } Point;` lets you write `Point p = {.x=2, .y=4, .z=6};` without the `struct` keyword.

How do you access struct members by value vs pointer?::Use the **dot** with values: `p.x`; use the **arrow** with pointers: `ptr->y` (same as `(*ptr).y`).
<!--SR:!2026-03-17,8,250-->

