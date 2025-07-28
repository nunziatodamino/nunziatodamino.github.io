Consider the most general [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Ginzburg-Landau theory/Landau theory/Landau theory of phase transitions for uniform systems|Landau free energy]]:

$$ \mathscr{L}(\eta) =  a_2\eta^2 + a_3\eta^3 + a_4\eta^4 \dots \qquad \forall \eta \in B(\eta=0,\rho)$$

We observe the following: both $+\eta$ and $-\eta$ satisfy the definition of order parameter.
So one can choice to write the free energy using $\eta' = +\eta$ as order parameter, or using $\eta' = -\eta$.
Let's write the 2 expressions side by sides:

$$
\begin{aligned}
\mathscr{L}(\eta) &=  a_2\eta^2 + a_3\eta^3 + a_4\eta^4 +a_5 \eta^5 +\dots \\
\mathscr{L}(-\eta) &=  a_2\eta^2 - a_3\eta^3 + a_4\eta^4 -a_5 \eta^5 +\dots
\end{aligned}
$$

Now we have 2 possibilities:
- The system is invariant under the transformation $\eta \to -\eta$. So as we saw already in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Ginzburg-Landau theory/Landau theory/Landau free energy expression for the Ising model|Landau free energy expression for the Ising model]], the odd terms vanishes.
- The system is not invariant under the transformation $\eta \to -\eta$. But we do not know a priori which is the experimentally accessible order parameter, if is $+\eta$ or $-\eta$. Both free energies must satisfy the following constraint : as **phenomenologically** for $T<T_C$ the minimum order parameter appears for positive $\eta$,  i.e. on the right, one has to take either $a_3<0$ for $\eta' = +\eta$ or $-a_3<0$ for $\eta' = -\eta$ . Then **conventionally** one choose the second expression with $a_3>0$.

