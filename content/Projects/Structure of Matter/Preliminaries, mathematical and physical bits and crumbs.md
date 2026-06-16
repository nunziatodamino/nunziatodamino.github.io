#### Conservation equations of the EM field

Relative to the EM theory, we have 2 essential conservation equations.
The charge conservation:

$$ \nabla \cdot \bar J + \frac{\partial \rho}{\partial t} = 0 $$

And the energy conservation:

$$ \nabla \cdot \bar S + \frac{\partial u_{em}}{\partial t} = 0 $$

Both of them can be integrated of a volume $V$ to have the equivalent global form.

#### Divergence theorem (Gauss' theorem)

Let $\Omega \subset \mathbb{R}^n$ be a bounded open set whose boundary $\partial\Omega$ is piecewise $C^1$.
Let $U \subset \mathbb{R}^n$ be an open set such that $\overline{\Omega} \subset U$, and let $\bar{F} \in C^1(U;\mathbb{R}^n)$.

Then

$$
\int_{\Omega} \nabla \cdot \bar{F}\, d\bar{r}=
\int_{\partial\Omega} \bar{F}\cdot \bar{n}\, dS
$$

where $\bar{n}$ denotes the outward unit normal field on $\partial\Omega$, defined almost everywhere on the boundary.
#### Stokes' theorem

Let $S \subset \mathbb{R}^n$ be an oriented piecewise $C^1$ surface with piecewise $C^1$ boundary $\partial S$.
Let $U \subset \mathbb{R}^n$ be an open set such that $\overline{S} \subset U$, and let
$\bar{F} \in C^1(U;\mathbb{R}^n)$.

Then

$$
\int_S (\nabla \wedge \bar{F})\cdot \bar{n}\, dS
=
\oint_{\partial S} \bar{F}\cdot d\bar{r},
$$

where $\bar{n}$ is the chosen unit normal field determining the orientation of $S$, and $\partial S$ is endowed with the induced orientation, i.e. the orientation compatible with $\bar{n}$ via the right-hand rule.
