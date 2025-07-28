We have seen in the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Ginzburg-Landau theory/Partition function coarse-graining|Partition function coarse-graining]] that one can write upon coarse-graining the partition function as:

$$\mathcal{Z}_N  =\int \mathscr{D} \phi\  e^{-\beta\mathscr{H}_{eff}} \qquad \text{where}\ \  e^{-\beta\mathscr{H}_{eff}} =\sum_{s\ \in\ \{\text{states realizing }\phi\}} e^{-\beta\mathscr{H}(s)} $$

Because, as we recall in this instance $\phi$ is already the coarse order parameter, not the original one.
Now, many books states that phenomenologically, one has:

$$ \mathscr{F}_{\text{eff}} = \beta\mathscr{H}_{\text{eff}} = \int d^dr\ \left[\mathscr{L}(\braket{\phi(\bar{r})}) +\frac{K}{2} (\nabla\phi(\bar{r}))^2 \right] $$

Where $\phi$ is to be understood to be the coarse order parameter. 
This is simply false, as one can prove that by expanding the order parameter in the coarse-graining context and truncating at the first meaningful correction, one obtains this expression.

## Formal derivation

Let's recall briefly the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Ginzburg-Landau theory/Partition function coarse-graining|coarse-graining]] procedure: one has an order parameter field $\phi(\bar{r})$ defined all over the system. The one chooses to discretize the space in cells of width $l$ such that inside them the order parameter is constant.
So let's consider $\bar{r}_0$ the symmetry center of one of these cells and expand in his neighborhood the order parameter:

$$\phi(\bar{r}) = \phi(\bar{r}_0) + (\bar{r}-\bar{r}_0)^i\partial_i\phi(\bar{r}_0) + \frac{1}{2!}(\bar{r}-\bar{r}_0)^i(\bar{r}-\bar{r}_0)^j\partial_i\partial_j\phi(\bar{r}_0) + \dots $$

Now we consider the coarse-grain procedure, i.e. we want to enforce:

$$ \tilde{\phi}(\bar{r}_0) = \frac{1}{V_{\text{cell}}} \int_{V_{\text{cell}}}d^dr\ {\phi}(\bar{r}) $$

So we integrate over the cell the Taylor expansion. we obtain then:

$$
\begin{aligned}
\frac{1}{V_{\text{cell}}} \int_{V_{\text{cell}}}d^dr\ {\phi}(\bar{r}) &=\frac{1}{V_{\text{cell}}} \int_{V_{\text{cell}}}d^dr\  [\phi(\bar{r}_0) + (\bar{r}-\bar{r}_0)^i\partial_i\phi(\bar{r}_0) + \frac{1}{2!}(\bar{r}-\bar{r}_0)^i(\bar{r}-\bar{r}_0)^j\partial_i\partial_j\phi(\bar{r}_0) + \dots \\

\tilde{\phi}(\bar{r}_0) &= \phi(\bar{r}_0) \frac{V_{\text{cell}}}{V_{\text{cell}}} + \partial_i\phi(\bar{r}_0) \frac{1}{V_{\text{cell}}} \int_{V_{\text{cell}}}d^dr\ (\bar{r}-\bar{r}_0)^i + \frac{1}{2}\partial_i\partial_j\phi(\bar{r}_0)\frac{1}{V_{\text{cell}}} \int_{V_{\text{cell}}}d^dr\ (\bar{r}-\bar{r}_0)^i(\bar{r}-\bar{r}_0)^j + \dots 
\end{aligned}
$$

Now we look at the terms in the RHS.
Assuming our cell is symmetric the integral:

$$\int_{V_{\text{cell}}}d^dr\ (\bar{r}-\bar{r}_0)^i = 0$$

As we are integrating an odd function over a symmetric domain for all $i$. The second integral:

$$\int_{V_{\text{cell}}}d^dr\ (\bar{r}-\bar{r}_0)^i(\bar{r}-\bar{r}_0)^j = A\delta^{ij}$$

As is 0 for the same reason of the first integral when $i\neq j$ (say, with a translation $\int_{V_{\text{cell}}}d^dr\ xy =0$) while is non zero for $i =j$ as we are integrating an even function over a symmetric integral (say, with a translation $\int_{V_{\text{cell}}}d^dr\ x^2 \neq0$). In the end one will have after the coarse graining, **by truncating at the first meaningful order**:

$$\tilde{\phi}(\bar{r}_0) = \phi(\bar{r}_0) + \frac {A}{2V_{\text{cell}}} \partial_i\partial_j\phi(\bar{r}_0) \delta^{ij} = \phi(\bar{r}_0) + \frac {A}{2V_{\text{cell}}} \partial_i\partial_i\phi(\bar{r}_0) $$

Or by setting $A/V_{\text{cell}}\equiv K$ and returning to the vectorial notation:

$$\tilde{\phi}(\bar{r}_0) =  \phi(\bar{r}_0) + \frac{K}{2} \nabla^2\phi(\bar{r}_0) $$

Before to extend this function to all the space, we have, by construction, that inside the cell the order parameter is equal to the average inside the cell, so that $\phi(\bar{r}_0) = \braket{\phi(\bar{r}_0)}$. So one has technically $\tilde{\phi}(\bar{r}_0) =  \braket{\phi(\bar{r}_0)} + \frac{K}{2} \nabla^2\phi(\bar{r}_0)$, but given that we will use the coarse order parameter only rather than the microscopic one, this change is not worth it, as it mixes microscopic and coarse order parameter.

Now, given that the cell width has been chosen such that the discretization can be neglected, one can extend this function to all the system:

$$\tilde{\phi}(\bar{r}_0) =  \phi(\bar{r}_0) + \frac{K}{2} \nabla^2\phi(\bar{r}_0) \quad \to \quad \tilde{\phi}(\bar{r}) =  \phi(\bar{r}) + \frac{K}{2} \nabla^2\phi(\bar{r})$$

Note now that we have now perfectly defined the coarse potential in all space. So we can drop the ~ if one wants.
Now we just make the assumption (**and just in this case one can argue that the theory is phenomenological**) that the free energy density of the system is a function of this coarse order parameter.

An important note here, until now we have a law that connect the coarse order parameter to the microscopic one. If from now one we want to use the coarse potential only we have to do a l


Hence, at the first order:

$$ f(\tilde{\phi}(\bar{r})) = f(\phi(\bar{r})) + \frac{K}{2} \nabla^2\phi(\bar{r}) = f(\phi(\bar{r})) + \frac{Kf'(\phi(\bar{r}))}{2} \nabla^2\phi(\bar{r})$$

Now we recall that $f(\phi_c(\bar{r}))=f(\braket{\phi_m(\bar{r})})$ is the Landau free energy density, while if we set $f(\phi(\bar{r}))'K \equiv K_{\text{eff}}$ and integrate over the volume to obtain the free energy, we obtain:

$$ F = \int d^d r f(\tilde{\phi}(\bar{r})) = \int d^d r\ \left[f({\phi}(\bar{r})) + \frac{Kf'(\phi(\bar{r}))}{2} \nabla^2\phi(\bar{r}) \right]$$

Now we rewrite the second integral in the RHS using one of the Green identities.
Specifically:

$$\int_\Omega f'(\phi)\, \nabla^2 \phi\, d^d r = \int_{\partial \Omega} f'(\phi)\, \nabla \phi \cdot \hat{n}\, dS - \int_\Omega f''(\phi)\, (\nabla \phi)^2\, d^d r$$

Now we set the boundary integral to zero by setting a Von-Neumann condition on the order parameter, equivalent to the statement $\nabla \phi \cdot \hat{n} = 0$.
In the end one has:

$$ F = \int d^d r f(\tilde{\phi}(\bar{r})) = \int d^d r\ \left[f({\phi}(\bar{r})) - \frac{Kf''(\phi(\bar{r}))}{2} (\nabla\phi(\bar{r}))^2 \right]$$

Which is what we wanted to prove if we set $K_{\text{eff}} = -Kf''(\phi(\bar{r}))$.
