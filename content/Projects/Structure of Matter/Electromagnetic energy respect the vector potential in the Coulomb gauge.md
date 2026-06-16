We start our reasoning by writing the electromagnetic field energy. We recall that one can define an electromagnetic density as:

$$u_{em} = u_{el} + u_{mag} = \frac{1}{2}\varepsilon_0E^2 + \frac{1}{2\mu_0}B^2$$

So that, in order to evaluate the total energy, one simply integrate this density over the interested volume:

$$ H = \int_V d\bar{r}\ u_{em} = \int_V d\bar{r} \left[ \frac{1}{2}\varepsilon_0E^2 + \frac{1}{2\mu_0}B^2 \right] $$

Before the evaluation is useful to rewrite our field in term of their potentials. We know from classical electrodynamics that $\exists (\phi, \bar{A})$ such as:

$$\begin{cases} \bar{E} = -\nabla \phi - \frac{\partial \bar{A}}{\partial t} \\
\bar{B} = \nabla \times \bar{A} \end{cases}$$

If we now restrict ourselves to the Coulomb gauge. i.e. $\nabla \cdot \bar{A} = 0$, is easy to prove that in a volume $V$ that does not contain e.m. sources, $\phi =0$. 

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

We now have to find the expression for the vector potential $\bar{A}$. We begin by recalling the Maxwell equation for the e.m. potentials in absence of sources (we are able to write them because we are in the Coulomb gauge, which is a particular case of the Lorenz gauge):

$$\begin{cases} \Box\bar{A} = 0 \\
\Box\phi = 0
\end{cases}
$$

With the proper Dirichlet boundary condition we get for the first equation the plane wave solution:

$$ \bar{A}(\bar{r},t) = \bar{A}_{\bar{k}s}e^{i(\bar{k}\cdot\bar{r}-\omega_k t)} $$

Or a linear combination of the solutions is again a solution. We then build a solution which is real by construction (i.e. a Fourier series)

$$\bar{A}(\bar{r},t) = \sum_{\bar{k}}\sum_s\left[\alpha A_{\bar{k}s}e^{i(\bar{k}\cdot\bar{r}-\omega_k t)} + \beta \left(A_{\bar{k}s}e^{i(\bar{k}\cdot\bar{r}-\omega_k t)}\right)^* \right]\hat{\varepsilon}_{\bar{k}s} $$

Where $\alpha$ and $\beta$ will be chosen in the end as normalization constants. We now can find $\alpha$ and $\beta$ separately, we just show how to find $\alpha$. I want to impose:

$$ \int_V d^3\bar{r}\ \vert \alpha e^{i(\bar{k}\cdot\bar{r})}\vert^2 \equiv 1 \qquad \Rightarrow \qquad\alpha^2\int_V d^3\bar{r}\ \vert e^{i(\bar{k}\cdot\bar{r})}\vert^2 = \alpha^2\int_V d^3\bar{r} = \alpha^2V = 1 \qquad \Rightarrow \qquad\alpha = \frac{1}{\sqrt{V}} $$

One can show with the same ansatz that $\beta = \alpha$.
In the end we will have then:

$$\bar{A}(\bar{r},t) = \sum_{\bar{k}}\sum_s\left[\frac{1}{\sqrt{V}} A_{\bar{k}s}e^{i(\bar{k}\cdot\bar{r}-\omega_k t)} + \frac{1}{\sqrt{V}} A^*_{\bar{k}s}e^{-i(\bar{k}\cdot\bar{r}-\omega_k t)} \right]\hat{\varepsilon}_{\bar{k}s} $$

We now have to plug in this expression in the $H$ integral.

The explicit calculations are made [[Evaluation of the total energy of an e.m. field w.r.t the vector potential in the Coulomb gauge|here]].

Finally one has the expression:

$$H = \sum_{\bar{k}}\sum_s \varepsilon_0\omega^2_k\left(A_{\bar{k}s}A^*_{\bar{k}s}+A^*_{\bar{k}s}A_{\bar{k}s}\right)$$

Of course we can in principle sum inside the parenthesis, but we choose to retain this form in order to not have problem in the [[Canonical quantization of the electromagnetic field|quantization process]].
