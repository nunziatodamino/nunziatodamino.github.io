##
Suppose we want to describe a semiconductor near the band edge, where the most important phenomena occurs, in a situation in which we are not at $T=0$, or simply deviating by the description of the [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Bloch Theorem|Bloch Theorem]]
Then the equation describing the system will be:

$$ (H_0 + V(\bar{r}))\Phi=E\Phi $$

Where $H_0$ is the periodic Hamiltonian of the Bloch's theorem and $V(\bar{r})$ is a small perturbation.
We suppose that the solution $\Phi$ is a superposition of Bloch functions around the minima or maxima:

$$ \Phi = \sum_{\bar{k}\in B(\bar{k}_0,\rho)} C_\bar{k}\psi_{n\bar{k}}(\bar{r}) $$

One can prove that our initial equation can be written as:

$$ [E_n(\bar{k_0}-i\nabla_{\bar{r}}) + V(\bar{r})]\Phi=E\Phi $$

So that, if one expands the function $E_n$ up to the second order obtains:

$$ E_n(\bar{k})\simeq E_n(\bar{k}_0) + \frac{\hbar^2}{2}\sum_{\alpha,\beta}\left(\frac{1}{m^*}\right)_{\alpha\beta}k_{\alpha}k_{\beta} $$





##

> [!note] **Envelope function equation**
> We have in the vicinity of bands stationary points, the following equation of motion:
> 
> $$ \left[\frac{1}{2}\sum_{\alpha,\beta}p_{\alpha}\left(\frac{1}{m^*}\right)_{\alpha\beta}p_{\beta}+U(\bar{r})\right]f(\bar{r})=(E'-E_n(\bar{k_0}))f(\bar{r}) $$
> 
> The wave function describing the electrons will be:
> $$ \Phi \simeq f(\bar{r}) u_{n\bar{k}_0}(\bar{r}) $$
> 
> In the hypothesis in which $f(\bar{r})$ and $U(\bar{r})$ are nearly constant function (slow varying) over a cell.

Note that $\braket{\bar{r}|\bar{p}}=-i\hbar \nabla_{\bar{r}}$.

