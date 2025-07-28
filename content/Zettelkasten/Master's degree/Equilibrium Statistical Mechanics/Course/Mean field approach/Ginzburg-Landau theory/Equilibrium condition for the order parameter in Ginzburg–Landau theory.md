Given the expression for the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Ginzburg-Landau theory/Partition function coarse-graining|partition function]]

$$\mathcal{Z}_N  =\int \mathscr{D} \phi\  e^{-\beta\mathscr{H}_{\text{eff}}} $$

Where:

$$ \mathscr{F}_{\text{eff}} = \beta\mathscr{H}_{\text{eff}} = \int d^dr\ \left[\mathscr{L}(\phi(\bar{r})) +\frac{K}{2} (\nabla\phi(\bar{r}))^2 \right] $$

We want to find the condition that the most probable configuration of the order parameter field — i.e., the **mean-field equilibrium configuration** — must satisfy.
First we consider a [[Zettelkasten/Master's degree/Models of Theoretical Physics/Mathematical methods/The Laplace method|saddle point]] approximation of the integral, so one simply:

$$\mathcal{Z}_N  =\int \mathscr{D} \phi\  e^{-\beta\mathscr{H}_{\text{eff}}} \sim e^{-\beta\mathscr{H}_{\text{eff}}[\phi_{min}]} $$

**This imply that we are considering a zeroth-order mean field theory, i.e. we are neglecting fluctuations of the order parameter.**
Note that $\phi$ is minimum and not maximum because we are maximizing $e^{-\beta\mathscr{H}_{\text{eff}}}$ and not $e^{\beta\mathscr{H}_{\text{eff}}}$.
Continuing, in order to find this order parameter, we perform a [[Projects/Computational methods for Material science/Ab initio Quantum Mechanics/Functional derivative|Functional derivative]]:

$$ \frac{\delta \mathcal{Z}_N}{\delta \phi} = \sim -e^{-\beta\mathscr{H}_{\text{eff}}}\frac{\delta \beta\mathscr{H}_{\text{eff}} }{\delta \phi} = 0 \iff \frac{\delta \beta\mathscr{H}_{\text{eff}} }{\delta \phi} = 0$$

So the minimum condition on the partition function is equivalent to the minimum condition on the free energy functional.
In order to minimize this, we observe that is of the form $\mathcal{F}[f] = \int d^dx\ \mathscr{L}(f(x), \nabla f(x))$ so that its functional derivative coincides with the Euler-Lagrange equation for the fields.
One has in the end:

$$ \frac{\delta \beta\mathscr{H}_{\text{eff}} }{\delta \phi} = 0 \iff  K\nabla^2\phi = \frac{\partial \mathscr{L}}{\partial \phi} $$

Note that, equivalently, we can consider the Legendre transform on the functional to have the Gibbs free energy rather than the Helmholtz free energy.
In that case all that changes is that the Landau function changes, so that the condition becomes:

$$ K\nabla^2\phi = \frac{\partial \mathscr{L}_G}{\partial \phi}$$
