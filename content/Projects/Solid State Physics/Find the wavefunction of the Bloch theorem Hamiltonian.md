To solve the problem, a strategy is to create an equation for $u_{\bar{k}}(\bar{r})$ and then construct the wave equation.
Let's start by showing that we can solve this equation easily within the first Brillouin zone, without necessarily solving it for a general wave vector.
If we take a wave vector outside the first Brillouin zone, then certainly:

$$ \text{if}\ \bar{k} \notin B.Z. \qquad \Rightarrow \qquad  \bar{k} = \bar{G}+\bar{k}_{BZ} $$

where $\bar{G}$ is a vector in reciprocal space and $\bar{k}_{BZ}$ is a vector in the first Brillouin zone.
Using the Bloch theorem for the wave function, we have:

$$  \Psi_{\bar{k}}(\bar{r})=u_{\bar{k}}(\bar{r})e^{i\bar{k}\cdot\bar{r}}= u_{\bar{k}}(\bar{r})e^{i(\bar{G}+\bar{k}_{BZ})\cdot\bar{r}} = u_{\bar{k}}(\bar{r})e^{i\bar{G}\cdot\bar{r}}e^{i\bar{k}_{BZ}\cdot\bar{r}} = \tilde{u}_{\bar{k}}(\bar{r})e^{i\bar{k}_{BZ}\cdot\bar{r}}  $$

Here, we have defined $\tilde{u}_{\bar{k}}(\bar{r})\equiv u_{\bar{k}}(\bar{r})e^{i\bar{G}\cdot\bar{r}}$. Now, let's show that $\tilde{u}_{\bar{k}}(\bar{r})$ is periodic in $\bar{r}$:

$$ \tilde{u}_{\bar{k}}(\bar{r}+ \bar{R}) = u_{\bar{k}}(\bar{r}+ \bar{R})e^{i\bar{G}\cdot(\bar{r}+ \bar{R})} = u_{\bar{k}}(\bar{r})e^{i\bar{G}\cdot\bar{r}}e^{i\bar{G}\cdot\bar{R}}= u_{\bar{k}}(\bar{r})e^{i\bar{G}\cdot\bar{r}} = \tilde{u}_{\bar{k}}(\bar{r})$$

Therefore, if we are solving for a wave vector outside the first Brillouin zone, we just need to find the appropriate $\bar{G}$ vector in reciprocal space to return to the Brillouin zone, solve it easily within the first Brillouin zone and then adjust the space periodic part of the wave function by the factor of $e^{i\bar{G}\cdot\bar{r}}$ (which is irrelevant from a probabilistic point of view since its squared magnitude is 1).

Now we solve the Schrodinger equation in the first Brillouin zone: 

$$\begin{aligned} \hat{H}\Psi_{\bar{k}}(\bar{r}) = E_{\bar{k}}\Psi_{\bar{k}}(\bar{r})\qquad 
&\Rightarrow\qquad \hat{H}u_{\bar{k}}(\bar{r})e^{i\bar{k}_{BZ}\cdot\bar{r}}  = E_{\bar{k}}{u}_{\bar{k}}(\bar{r})e^{i\bar{k}_{BZ}\cdot\bar{r}}  \qquad \Rightarrow\\ 
\qquad &\Rightarrow \left( \frac{-\hbar^2}{2m}\nabla^2 + \hat{V}(\bar{r}) \right)u_{\bar{k}}(\bar{r})e^{i\bar{k}_{BZ}\cdot\bar{r}}  = E_{\bar{k}}u_{\bar{k}}(\bar{r})e^{i\bar{k}_{BZ}\cdot\bar{r}}\end{aligned}$$

By expanding, we obtain:

$$\begin{aligned}\frac{-\hbar^2}{2m}\left(\nabla^2u_{\bar{k}}(\bar{r}) +2i\bar{k} \cdot \nabla u_{\bar{k}}(\bar{r}) - k^2u_{\bar{k}}(\bar{r}) \right)e^{i\bar{k}_{BZ}\cdot\bar{r}}  + V(\bar{r})u_{\bar{k}}(\bar{r})e^{i\bar{k}_{BZ}\cdot\bar{r}}  &= E_{\bar{k}}u_{\bar{k}}(\bar{r})e^{i\bar{k}_{BZ}\cdot\bar{r}} \\

\frac{-\hbar^2}{2m}\left(\nabla^2 +2i\bar{k} \cdot \nabla  - k^2 \right)u_{\bar{k}}(\bar{r})  + V(\bar{r})u_{\bar{k}}(\bar{r})  &= E_{\bar{k}}u_{\bar{k}}(\bar{r})\end{aligned}$$

A small note: what we have derived is only a constraint that the periodic part of the energy eigenfunction must obey, and it is NOT the Hamiltonian of the system, which remains the one assumed in the hypothesis of the Bloch theorem.
However, of course, being this the Solid State, a land teeming with confusion and misunderstandings, we will call it, as customary in the literature, Hamiltonian.
We can then recast the constraint as:

$$\hat{\tilde{H}}_{\bar{k}}u_{\bar{k}}(\bar{r})=E_{\bar{k}}u_{\bar{k}}(\bar{r})$$
