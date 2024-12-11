We start our reasoning by writing the electromagnetic field energy. We recall that one can define an electromagnetic density as:

$$u_{em} = u_{el} + u_{mag} = \frac{1}{2}\varepsilon_0E^2 + \frac{1}{2\mu_0}B^2$$

So that, in order to evaluate the total energy, one simply integrate this density over the interested volume:

$$ H = \int_V d^3\bar{r}\ u_{em} = \int_V d^3\bar{r} \left[ \frac{1}{2}\varepsilon_0E^2 + \frac{1}{2\mu_0}B^2 \right] $$

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

$$ \bar{A}(\bar{r},t) = \bar{A}_{\bar{k}s}(0)e^{i(\bar{k}\cdot\bar{r}-\omega_k t)} $$

Or a linear combination of the solutions is again a solution. We then build a solution which is real by construction (i.e. a Fourier series)

$$\bar{A}(\bar{r},t) = \sum_{\bar{k}}\sum_s\left[\alpha A_{\bar{k}s}(0)e^{i(\bar{k}\cdot\bar{r}-\omega_k t)} + \beta \left(A_{\bar{k}s}(0)e^{i(\bar{k}\cdot\bar{r}-\omega_k t)}\right)^* \right]\hat{u}_{\bar{k}s} $$

Where $\alpha$ and $\beta$ will be chosen in the end as normalization constants. If we define:

$$  A_{\bar{k}s}(t) \equiv A_{\bar{k}s}(0)e^{-i\omega_k t} \qquad A^*_{\bar{k}s}(t) \equiv A^*_{\bar{k}s}(0)e^{i\omega_k t} $$

Is possible to write compactly:

$$\bar{A}(\bar{r},t) = \sum_{\bar{k}}\sum_s\left[\alpha A_{\bar{k}s}(t)e^{i(\bar{k}\cdot\bar{r})} + \beta A^*_{\bar{k}s}(t)e^{-i(\bar{k}\cdot\bar{r})}\right]\hat{u}_{\bar{k}s} $$
We now can find $\alpha$ and $\beta$ separately, we just show how to find $\alpha$. I want to impose:

$$ \int_V d^3\bar{r}\ \vert \alpha e^{i(\bar{k}\cdot\bar{r})}\vert^2 \equiv 1 \qquad \Rightarrow \qquad\alpha^2\int_V d^3\bar{r}\ \vert e^{i(\bar{k}\cdot\bar{r})}\vert^2 = \alpha^2\int_V d^3\bar{r} = \alpha^2V = 1 \qquad \Rightarrow \qquad\alpha = \frac{1}{\sqrt{V}} $$

One can show with the same ansatz that $\beta = \alpha$.
In the hand we will have then:

$$\bar{A}(\bar{r},t) = \sum_{\bar{k}}\sum_s\left[\frac{1}{\sqrt{V}} A_{\bar{k}s}(t)e^{i(\bar{k}\cdot\bar{r})} + \frac{1}{\sqrt{V}} A^*_{\bar{k}s}(t)e^{-i(\bar{k}\cdot\bar{r})}\right]\hat{u}_{\bar{k}s} $$

We now have to plug in this expression in the $H$ integral.

The explicit calculations are made [[Zettelkasten/Not finished/Structure of Matter/Explicit calculation of the electromagnetic density integral in the second quantization of light|here]].

Finally one has the expression:

$$H = \sum_{\bar{k}}\sum_s \varepsilon_0\omega^2_k\left(A_{\bar{k}s}A^*_{\bar{k}s}+A^*_{\bar{k}s}A_{\bar{k}s}\right)$$
Where we omitted the time dependence on the $A$ coefficients because $A_{\bar{k}s}(t)A^*_{\bar{k}s}(t) = A_{\bar{k}s}(0)A^*_{\bar{k}s}(0)$.

Of course we can in principle sum inside the parenthesis, but we choose to retain this form in order to not have problem in the quantization process.

Now, in order to obtain what we want essentially, we introduce a new set of adimensional quantities such as:

$$ A_{\bar{k}s} = \sqrt{\frac{\hbar}{2\varepsilon_0\omega_k}}\  a_{\bar{k}s} \qquad A^*_{\bar{k}s} = \sqrt{\frac{\hbar}{2\varepsilon_0\omega_k}}\  a^*_{\bar{k}s}$$

In this way we can rewrite the energy $H$ as:

$$H =\sum_{\bar{k}}\sum_s \frac{1}{2}\hbar\omega_k\left(a_{\bar{k}s}a^*_{\bar{k}s}+a^*_{\bar{k}s}a_{\bar{k}s}\right)$$


We can also introduce another 2 variables that are real by construction, instead of complex like the one we have now. (Note that even if complex this does not constitute a problem, because $H$ is real).
Again we define, just for convenience:

$$ \begin{cases} 
q_{\bar{k}s} = \frac{1}{2} (a_{\bar{k}s}+a^*_{\bar{k}s}) \sqrt{\frac{2\hbar}{\omega_k}} \\ p_{\bar{k}s} = \frac{1}{2i} (a_{\bar{k}s}-a^*_{\bar{k}s}) \sqrt{\frac{2\hbar}{\omega_k}} \end{cases} \qquad \iff \qquad 
\begin{cases} 
a_{\bar{k}s} = \sqrt{\frac{\omega_k}{2\hbar}} (q_{\bar{k}s}+ \frac{i}{\omega_k}p_{\bar{k}s}) \\
a^*_{\bar{k}s} = \sqrt{\frac{\omega_k}{2\hbar}} (q_{\bar{k}s}- \frac{i}{\omega_k}p_{\bar{k}s}) 
\end{cases}$$

So that our energy becomes:

$$H = \sum_{\bar{k}}\sum_s \frac{p^2_{\bar{k}s}}{2} + \frac{1}{2}\omega_k^2q^2_{\bar{k}s}  $$

Formally a collection of oscillators of mass 1, namely we have decomposed the electromagnetic field in its normal modes.
We now quantize this field by using arguments from the first quantization process, i.e. by promoting the dynamical variables to operators dependent on time (we are implying then the use of the Heisenberg picture)
We consider the promotion:

$$ q_{\bar{k}s} \to \hat{q}_{\bar{k}s}(t) \qquad p_{\bar{k}s} \to \hat{p}_{\bar{k}s}(t)  $$

Where these operators must satisfy the commutation relation:

$$ [ \hat{q}_{\bar{k}s}(t), \hat{p}_{\bar{k'}s'}(t)] = i\hbar\delta_{\bar{k}\bar{k'}}\delta_{ss'}\hat{\mathbb{1}} $$

Moreover we define the operators :

$$\begin{cases} 
\hat{a}_{\bar{k}s} = \sqrt{\frac{\omega_k}{2\hbar}} (\hat{q}_{\bar{k}s}+ \frac{i}{\omega_k}\hat{p}_{\bar{k}s}) \\
\hat{a}^\dagger_{\bar{k}s} = \sqrt{\frac{\omega_k}{2\hbar}} (\hat{q}_{\bar{k}s}- \frac{i}{\omega_k}\hat{p}_{\bar{k}s}) 
\end{cases}$$

And we will call them destruction operator ($\hat{a}_{\bar{k}s}$) and creation operator ($\hat{a}^*_{\bar{k}s}$). The unusual denomination will become clear later. Is clear, by the commutation relation defined before, that

$$ [ \hat{a}_{\bar{k}s}(t), \hat{a}^\dagger_{\bar{k'}s'}(t)] = \delta_{\bar{k}\bar{k'}}\delta_{ss'}\hat{\mathbb{1}} $$
We will have then the energy operator defined as:

$$\hat{H} = \sum_{\bar{k}}\sum_s \frac{1}{2}\hbar\omega_k\left(\hat{a}_{\bar{k}s}\hat{a}^\dagger_{\bar{k}s}+\hat{a}^\dagger_{\bar{k}s}\hat{a}_{\bar{k}s}\right) =  \sum_{\bar{k}}\sum_s \frac{1}{2}\hbar\omega_k\left(\hat{\mathbb{1}}+2\hat{a}^\dagger_{\bar{k}s}\hat{a}_{\bar{k}s}\right) = \sum_{\bar{k}}\sum_s \hbar\omega_k\left(\hat{a}^\dagger_{\bar{k}s}\hat{a}_{\bar{k}s} + \frac{1}{2} \hat{\mathbb{1}} \right) $$

In most text, if not in almost all, the identity operator is omitted. Is now convenient also to define the following operator:

$$ \hat{N}_{\bar{k}s}  \equiv \hat{a}^\dagger_{\bar{k}s}\hat{a}_{\bar{k}s}$$

So that one can accomplish the compact form:

$$\hat{H} = \sum_{\bar{k}}\sum_s \hbar\omega_k\left(\hat{N}_{\bar{k}s} + \frac{1}{2} \right)$$

We now must see this expression respect to is physical meaning. 
The creation and destruction operator act over the so called Fock space [^For the scope of our reasoning this will be a given fact] defined as an Hilbert space that contains the vectors:

$$ \ket{\dots , n_{\bar{k}s}, \dots,n_{\bar{k'}s'}, \dots,n_{\bar{k''}s''},\dots} $$

Where this vector rapresent a state that contains $n_{\bar{k}s}$ number of photons with wavevector $\bar{k}$ and polarization $s$, $n_{\bar{k'}s'}$ number of photons with wavevector $\bar{k'}$ and polarization $s'$, etc. 

