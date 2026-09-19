We start our reasoning by writing the electromagnetic field energy. We recall that one can define an electromagnetic density as:

$$u_{em} = u_{el} + u_{mag} = \frac{1}{2}\varepsilon_0E^2 + \frac{1}{2\mu_0}B^2$$

So that, in order to evaluate the total energy, one simply integrate this density over the interested volume:

$$ H = \int_V d\bar{r}\ u_{em} = \int_V d\bar{r} \left[ \frac{1}{2}\varepsilon_0E^2 + \frac{1}{2\mu_0}B^2 \right] $$

Before the evaluation is useful to rewrite our field in term of their potentials. We know from classical electrodynamics that $\exists (\phi, \bar{A})$ such as:

$$\begin{cases} \bar{E} = -\nabla \phi - \frac{\partial \bar{A}}{\partial t} \\
\bar{B} = \nabla \times \bar{A} \end{cases}$$

In the Coulomb gauge, $\nabla\cdot\bar A=0$, a source-free volume with boundary data $\phi|_{\partial V}=0$ has $\phi=0$. Absence of sources alone is not sufficient.

- Proof : If we take the divergence of the first equation:
  $$ \nabla \cdot \bar{E} = -\nabla^2\phi -\frac{\partial}{\partial t} \nabla \cdot \bar{A} $$
  In the Coulomb gauge we have $\nabla \cdot \bar{A} = 0$ by definition and the LHS is 0 by the first Maxwell equation in absence of sources. So one has:
  $$-\nabla^2\phi = 0$$
  
  This, coupled with a Dirichlet boundary condition of the type $\phi(\bar{r}) = 0 \quad, \forall \bar{r} \in \partial V$ implies that $\phi(\bar{r}) = 0 \quad, \forall \bar{r}$. 

So, we will have in the end :

$$ \bar{E} = - \frac{\partial \bar{A}}{\partial t} \qquad
\bar{B} = \nabla \times \bar{A}$$

Upon substitution in the energy one obtains then:

$$ H = \int_V d^3\bar{r}\ u_{em} = \int_V d^3\bar{r} \left[ \frac{1}{2}\varepsilon_0\left(\frac{\partial \bar{A}}{\partial t}\right)^2 + \frac{1}{2\mu_0}\vert \nabla \times \bar{A} \vert^2 \right] $$

With $\phi=0$, the Coulomb condition also satisfies the Lorenz condition $\nabla\cdot\bar A+c^{-2}\partial_t\phi=0$. Thus, for this source-free radiation field, the potentials obey:

$$\begin{cases} \Box\bar{A} = 0 \\
\Box\phi = 0
\end{cases}
$$

With periodic boundary conditions on $\bar A$ and a real linear-polarization basis, the solutions are (calculations are made [[General solution of the homogeneous D'Alembertian in a cubic box with PBC|here]]):

$$\bar{A}(\bar{r},t) =\frac{1}{\sqrt{V}} \sum_{\bar{k}}\sum_s\hat{\varepsilon}_{\bar{k}s}\left[ A_{\bar{k}s}e^{i(\bar{k}\cdot\bar{r}-\omega_k t)} +  A^*_{\bar{k}s}e^{-i(\bar{k}\cdot\bar{r}-\omega_k t)} \right]\  ,\qquad \phi(\bar{r},t) = 0 $$

We now have to plug in this expression in the $H$ integral.
The explicit calculations are made [[Evaluation of the total energy of an e.m. field w.r.t the vector potential in the Coulomb gauge|here]].

Finally one has the expression:

$$H = \sum_{\bar{k}}\sum_s \varepsilon_0\omega^2_k\left(A_{\bar{k}s}A^*_{\bar{k}s}+A^*_{\bar{k}s}A_{\bar{k}s}\right)$$

Of course we can in principle sum inside the parenthesis, but we choose to retain this form in order to not have problem in the [[Canonical quantization of the electromagnetic field|quantization process]].
