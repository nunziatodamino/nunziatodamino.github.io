When encountering in textbooks or papers the adjective "self-consistent" one has to be particularly mindful.
It can be interpreted in the following way:

- **Self consistent problem**
A problem of the type:

$$ \phi = F(\phi) $$

Where $\phi$ has to be found. In this case the procedure in order to solve the problem are called (misleadingly) self-consistent methods or self-consistent procedures, but have nothing to do with the following definition we will give.
A more intelligent name for this procedures is mean-field procedures.

- **Self consistent algorithm**
Suppose to have a problem that we try to solve with an algorithm.

The algorithm is said to be a self-consistent algorithm if the solution produced at each timestep is, other than consistent, subjected to some additional boundaries that are typical of the initial problem, e.g. energy conservation, phase-space volume invariance, etc.

The notion of consistency is defined respect to the type of algorithm, say for a one step integrator:

![[Images/On the ambiguity of the adjective ''self-consistent''.png|500]]

For the notion of local truncation error see [[Zettelkasten/Not finished/Computational methods for Material science/Numerical methods/Floating point representation|Floating point representation]]

