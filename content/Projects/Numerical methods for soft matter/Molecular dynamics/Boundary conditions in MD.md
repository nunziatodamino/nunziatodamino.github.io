The idea is simple : a simulation happens inside a space, called simulation box, generally a cubic box or of the same symmetry of the crystal we want to study.
We want that during the simulation the particles stays inside the box.
There are different ways to achieve this, according to the final objective of the simulation.
## Periodic Boundary Conditions (PBC)

Given a simulation box we want that if a particle exits from a side it reappears from the other side.
Assuming an orthogonal unit cell with the origin in its center the implementation is simple: for each direction :

```python
if (periodic_x) :
  if (x <  -x_size * 0.5) : x = x + x_size
  if (x >=  x_size * 0.5) : x = x - x_size
```

This behavior can be implemented in an even simpler form if we assume that the origin is on one of the box corner : 

```python
if (periodic_x) :
  x = x - np.floor(x/x_size) * x_size
```

This type of boundary creates also another problem in the distance evaluation.

![[Boundary conditions in MD.png|500]]

Suppose we want to evaluate a particle interaction like in the picture. The chosen particle has a cutoff radius of half box-size. If we restrict to its simulation box particle it seems that particle "n" doesn't make the cut, but its periodic image " $n'$ " does.
So the solution is to evaluate the distance with the "n" particle and apply a transformation to find the distance with particle "$n'$" only if the particle doesn't lie inside its interaction radius.
This is simple assuming an orthogonal unit cell with the origin in its center. For each difference :

```python
if (periodic_x) :
  dx = x(j) - x(i)
  if (dx >   x_size * 0.5) :  dx = dx - x_size
  if (dx <= -x_size * 0.5) :  dx = dx + x_size

```

Again this behavior can be implemented in an even simpler form if we assume that the origin is on one of the box corner : 

```python
if (periodic_x) :
  dx = x(j) - x(i)
  dx = dx - np.round(x/x_size) * x_size
```

Important note : *DO NOT USE STANDARD PYTHON ROUND* : python standard round function implement's the banker's round, while the numpy round implements the Fortran/C round (nearbyint) , which is the correct one.
For speed one can use np.rint().
## Reflective Boundary Conditions (RBC)
