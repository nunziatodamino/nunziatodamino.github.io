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