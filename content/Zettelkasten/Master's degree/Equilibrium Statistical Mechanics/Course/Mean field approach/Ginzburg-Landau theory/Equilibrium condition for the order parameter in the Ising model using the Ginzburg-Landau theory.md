Given that, for the Ising model:

$$ \mathscr{L}_G(\phi) = atm^2(\bar{r}) + \frac{b}{2}m^4(\bar{r}) -h(\bar{r})m(\bar{r})$$

We have that the general [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Ginzburg-Landau theory/Equilibrium condition for the order parameter in Ginzburg–Landau theory|Equilibrium condition for the order parameter in Ginzburg–Landau theory]] in the context of the Ising model becomes:

$$ K\nabla^2m(\bar{r}) = \frac{\partial \mathscr{L}_G}{\partial m(\bar{r})} \iff K\nabla^2m(\bar{r}) = 2atm(\bar{r}) + 2bm^3(\bar{r}) -h(\bar{r}) $$

As is, this PDE does not admit closed form for the order parameter except for trivial cases, so we try a different approach.
A common way is to not try to solve directly for the order parameter, but instead to recast the problem in terms of its correlation function via a functional derivative.
In this way we transform a non-linear PDE in $m(\bar{r})$ in a linear PDE in the susceptibility, and then from then on we can use to solve the Green's method.

We start by recasting this equilibrium condition (called sometimes in Statistical Mechanics literature equation of state) as

$$ h(\bar{r}) = 2atm(\bar{r}) + 2bm^3(\bar{r}) -K\nabla^2m(\bar{r}) $$

And consider the functional derivative respect to $h(\bar{r}')$ on both sides (in order for this to be a functional on both sides we consider $\bar{r}$ fixed):

$$ 
\begin{aligned}
\frac{\delta h(\bar{r})}{\delta h(\bar{r}')} &= \frac{\delta}{\delta h(\bar{r}')}\left[ 2atm(\bar{r}) + 2bm^3(\bar{r}) -K\nabla^2m(\bar{r}) \right] \\
\frac{\delta h(\bar{r})}{\delta h(\bar{r}')} &= \frac{\delta}{\delta h(\bar{r}')}\left[ 2atm(\bar{r}) + 2bm^3(\bar{r})\right] -K\nabla^2\frac{\delta m(\bar{r})}{\delta h(\bar{r}')}  \\
\end{aligned}
$$

Where we first used the linearity property of the functional derivative and the Laplacian operator. Now, using the results found in [[Projects/Computational methods for Material science/Ab initio Quantum Mechanics/Functional derivative|Functional derivative]], one has:

$$ 
\begin{aligned}
\frac{\delta h(\bar{r})}{\delta h(\bar{r}')} &= \int d^dr''\frac{\delta\left[ 2atm(\bar{r}) + 2bm^3(\bar{r})\right]}{\delta m(\bar{r}'')}\frac{\delta m(\bar{r}'')}{\delta h(\bar{r}')} -K\nabla^2\frac{\delta m(\bar{r})}{\delta h(\bar{r}')}  \\

\delta^d(\bar{r}-\bar{r}') &= \int d^dr''\left[ 2at + 6bm^2(\bar{r})\right]\delta^d(\bar{r}-\bar{r}'')\frac{\delta m(\bar{r}'')}{\delta h(\bar{r}')} -K\nabla^2\frac{\delta m(\bar{r})}{\delta h(\bar{r}')}  \\

\delta^d(\bar{r}-\bar{r}') &= \left[ 2at + 6bm^2(\bar{r})\right]\frac{\delta m(\bar{r})}{\delta h(\bar{r}')} -K\nabla^2\frac{\delta m(\bar{r})}{\delta h(\bar{r}')}  \\

\end{aligned}
$$

If we now define $\frac{\delta m(\bar{r})}{\delta h(\bar{r}')} \equiv \chi(\bar{r},\bar{r}')$ and consequently, as we saw in the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/Fluctuation-dissipation relation in the Ising model|Fluctuation-dissipation relation in the Ising model]] using the definition of local susceptibility $\chi(\bar{r},\bar{r}') = \beta G_C(\bar{r},\bar{r}')$.
Then one obtains the equation:

$$ \hat{\mathcal{L}} [G_C(\bar{r},\bar{r}')] = \delta^d(\bar{r}-\bar{r}') \quad \text{where}\ \hat{\mathcal{L}} = \beta(2at + 6bm^2(\bar{r}) -K\nabla^2)$$

In this form the connected correlation function is the Green's function of the operator $\hat{\mathcal{L}}$.