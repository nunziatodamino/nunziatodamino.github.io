In [[Relativistic corrections for one-electron atoms and ions]] we obtain the final equation:

$$V(r)\varphi(\bar r) - \frac{\hbar^2}{4m^2c^2}\left[ \frac{dV}{dr}\frac{\partial \varphi}{\partial r} -\frac2{\hbar^2 r} \frac{dV(r)}{dr}(\hat{\bar S} \cdot \hat{\bar L}) \varphi \right] - \frac{\hbar^2}{2m} \left( 1 - \frac{E' -V(r)}{2mc^2} \right)\nabla^2\varphi(\bar r)  = E' \varphi(\bar r)$$

Let's divide it in pieces to analyze it physically.

$$
\begin{aligned}
\hat{\mathscr H}_0 \varphi(\bar r)

+
\frac{\hbar^2}{4m^2c^2}
\left(E'-V(r)\right)\nabla^2\varphi(\bar r)

-
\frac{\hbar^2}{4m^2c^2}
\frac{dV}{dr}
\frac{\partial\varphi(\bar r)}{\partial r}

+
\frac{1}{2m^2c^2r}
\frac{dV}{dr}
\left(\hat{\bar S}\cdot\hat{\bar L}\right)
\varphi(\bar r)
=
E'\varphi(\bar r),
\end{aligned}
$$

If we set $\lambda = \frac1{c^2}$, then we can rewrite the Hamiltonian as:

$$ \hat{\mathscr{H}} = \hat {\mathscr{H}}_0  + \lambda\hat{\mathscr{K}} + \mathcal{O}(\lambda^2)$$

So that we can see this equation as the relativistic Hamiltonian up to first order corrections in $\lambda$.
The zeroth order gives:

$$\hat {\mathscr{H}}_0 \varphi_0= E_0 \varphi_0 \qquad \iff \qquad (E_0 - V(r))\varphi_0(\bar r) = \frac{\hbar^2}{2m} \nabla^2 \varphi_0(\bar r)$$

Which is the usual Schrodinger equation. 
If we now want to consider terms up to $\mathcal{O}(\lambda^2)$ (see note):

#### First term (momentum higher order correction)

$$
\hat{\mathscr{H}_1} =\frac{\hbar^2}{4m^2c^2}
\left(E'-V(r)\right)\nabla^2\varphi(\bar r) \sim \frac{\hbar^2}{4m^2c^2}
\left(E_0-V(r)\right)\nabla^2\varphi_0(\bar r) \sim \frac{\hbar^2}{4m^2c^2}
\left(\frac{\hbar^2}{2m} \nabla^2\right)\nabla^2\varphi_0(\bar r)
$$

So that we can imply:

$$\hat{\mathscr{H}_1} \sim - \frac{\hat p^4}{8m^3 c^2}$$

This is precisely the expansion of the relativistic kinetic energy:

$$
\sqrt{m^2c^4+p^2c^2}-mc^2
=
\frac{p^2}{2m}
-
\frac{p^4}{8m^3c^2}
+
O\left(c^{-4}\right).
$$

#### Second term (Darwin term)

This term has a problem: is not hermitian. 
The solution, proposed by Darwin, is to impose an Hermitian simmetrization (given $A$ non hermitian, $\frac12(A + A^\dagger)$ is Hermitian):
Hence:

$$
\hat{\mathscr{H}_2} =
-
\frac{\hbar^2}{4m^2c^2}\left[\left(
\frac{dV}{dr}
\frac{\partial\varphi(\bar r)}{\partial r}
\right) + \left(
\frac{dV}{dr}
\frac{\partial\varphi(\bar r)}{\partial r}
\right)^\dagger \right] = -
\frac{\hbar^2}{4m^2c^2}\nabla^2V(r) 
$$

(This is proved [[Darwin term simplification]]), now we use the Green function for the Coulomb potential, i.e. the identity:

$$ \nabla^2V(r) = 4\pi k_e Ze^2 \delta(\bar r) $$

So that in the end the term (called Darwin term) is:

$$
\hat{\mathscr{H}_2} = -
\frac{\pi\hbar^2}{2m^2c^2} k_e Ze^2 \delta(\bar r)  
$$

#### Third term (Spin-orbit term)

The term

$$\hat{\mathscr{H}}_3 =
\frac{1}{2m^2c^2} \frac1{r}
\frac{dV}{dr}
\left(\hat{\bar S}\cdot\hat{\bar L}\right)
\varphi(\bar r)$$

Is the spin-orbit term