Suppose I have an alloy of the type $A_{1-x}B_{x}$, where $0<x<1$, and I know the band gap and lattice constant of the constituent $A$ and $B$. There is any way to predict the energy band gap and the lattice constant of the alloy ?
Yes.
One can the simply do a weighted mean of the constituent parameters (Vegard's law) and to obtain a better precision correct the estimation with a so called bowing parameter, which is experimental:

$$
\begin{aligned}
a_{A_{1-x}B_{x}} = (1-x)a_A
+xa_B + \vartheta\ x(1-x) \\
E_{A_{1-x}B_{x}} = (1-x)E_A
+xE_B + b\ x(1-x) \\
\end{aligned}
$$

Note that the new parameter of the alloy are a function of the stochiometric coefficient $x$ :

![[Images/Lattice constant and energy band gap of a 2 component alloy given their constituent.png|400]]