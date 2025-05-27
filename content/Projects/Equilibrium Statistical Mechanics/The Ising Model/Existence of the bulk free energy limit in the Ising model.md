![[Images/Existence of the bulk free energy limit in the Ising model.png|400]]

We can prove quite easily the existence of the bulk free energy limit in the case of the Ising model in absence of magnetic field $(H_i = 0)$.
In this case, as discussed in [[Projects/Equilibrium Statistical Mechanics/The Ising Model/The spin-1 Ising model|The spin-1 Ising model]]:

$$ \mathscr{H} = -J\sum_{<i,j>}s_is_j $$

To fix the idea, let's use as example for the proof $d=2$ on a square lattice, but as we see the proof is independent on dimensionality and lattice.
We partition the system in 4 parts, so that a side contains $2n$ spins. Each subsystem contains $n^2$ spins, the total system contains $4n^2$ and the total number of contacts on the boundary is $4n$.
Given this partition, if we write the canonical partition function, we have:

$$ \mathcal{Z}_{4n^2} = \text{Tr}\ e^{-\beta\mathscr{H}} = \text{Tr}\ e^{-\beta(\mathscr{H}_1+\mathscr{H}_2+\mathscr{H}_3+\mathscr{H}_4+\mathscr{H}_B)} = (\mathcal{Z}_{n^2})^4 \text{Tr}\ e^{-\beta\mathscr{H}_B} $$

Where we are simply considering the subsystems independent. Now for the boundary term we make an estimation, establishing a lower and an upper limit:

$$ e^{-4\beta J n} \leq \text{Tr}\ e^{-\beta\mathscr{H}_B} \leq e^{4\beta J n}$$

Where the lower limit correspond to the case to which all the boundary elements are anti-parallel, while the upper limit to the converse. Using this we can put an upper and lower bound to the system partition function:

$$(\mathcal{Z}_{n^2})^4 e^{-4\beta J n} \leq\mathcal{Z}_{4n^2}\leq (\mathcal{Z}_{n^2})^4 e^{4\beta J n}$$

Now we recall the definition of the bulk free energy [[Projects/Equilibrium Statistical Mechanics/The Ising Model/The spin-1 Ising model|through the partition function]]:

$$ f_b(T, \{H_i\}, \{J_{ij}\}) = \lim_{N \to +\infty} \frac{-\ln \mathcal{Z}_{\Omega}(T, \{H_i\}, \{J_{ij}\})}{\beta N} $$

So that the idea is clear, we recreate the expression in the limit and take the thermodynamic limit.
By taking the expression logarithm and dividing by the total number of spins ($4n^2$), with $\beta$, we obtain:

$$
\begin{aligned}
\frac{4\ln\mathcal{Z}_{n^2}-4\beta J n}{4\beta n^2} &\leq \frac{\ln \mathcal{Z}_{4n^2}}{4\beta n^2}\leq \frac{4\ln\mathcal{Z}_{n^2} + 4\beta J n}{4\beta n^2} \\
-f_{n^2} -\frac{J}{n} &\leq -f_{4n^2} \leq -f_{n^2} + \frac{J}{n} \\
f_{n^2} -\frac{J}{n} &\leq f_{4n^2} \leq f_{n^2} + \frac{J}{n}
{n} \\
-\frac{J}{n} &\leq f_{4n^2} -f_{n^2}\leq + \frac{J}{n}
\end{aligned}
$$

Which is in the end equivalent to :

$$ |f_{4n^2} -f_{n^2}| \leq \frac{J}{n} $$

Given that the interaction is finite, is guaranteed that $J < +\infty$. Moreover:

$$ |f_{4n^2} -f_{n^2}| \leq \frac{J}{n} \frac{n}{n} \sim J \frac{L}{S} $$

Where $L$ and $S$ are respectively the typical length and the typical surface of the system.
Given that in the thermodynamic limit $L/S$ $\to 0$ this condition is equivalent to a Cauchy condition on the sequence of the free energy.
