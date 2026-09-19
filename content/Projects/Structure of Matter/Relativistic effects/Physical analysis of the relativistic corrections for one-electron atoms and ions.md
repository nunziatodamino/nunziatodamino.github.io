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

The upper component alone does not carry the full Dirac norm. Since $\eta\simeq(\bar\sigma\cdot\hat{\bar p})\varphi/(2mc)$, use the normalized Pauli spinor $\varphi_P=(1+\hat p^2/(8m^2c^2))\varphi$ to this order. After this transformation and elimination of the energy dependence, the effective Hamiltonian has the three Hermitian corrections below. With $\lambda = \frac1{c^2}$:

$$ \hat{\mathscr{H}} = \hat {\mathscr{H}}_0  + \lambda\hat{\mathscr{K}} + \mathcal{O}(\lambda^2)$$

So that we can see this equation as the relativistic Hamiltonian up to first order corrections in $\lambda$.
The zeroth order gives:

$$\hat {\mathscr{H}}_0 \varphi_0= E_0 \varphi_0 \qquad \iff \qquad (E_0 - V(r))\varphi_0(\bar r) = -\frac{\hbar^2}{2m} \nabla^2 \varphi_0(\bar r)$$

Which is the usual Schrodinger equation. 
We retain first-order terms with remainder $\mathcal{O}(\lambda^2)$ (see [[A note on perturbation theory]]).

#### First term (momentum higher order correction)

$$
\Delta E_1
=\frac{\hbar^2}{4m^2c^2}\langle\varphi_0|(E_0-V)\nabla^2|\varphi_0\rangle
=-\frac{\langle(E_0-V)^2\rangle_0}{2mc^2}
=-\frac{\langle\hat p^4\rangle_0}{8m^3c^2}.
$$

Here $\langle\hat p^4\rangle_0=\|\hat p^2\varphi_0\|^2=4m^2\langle(E_0-V)^2\rangle_0$. The eigenstate equation is not an operator identity replacing $E_0-V$ by a Laplacian. The corresponding effective kinetic correction is:

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

Set $D=\nabla V\cdot\nabla=V'(r)\partial_r$. Integration by parts, with vanishing boundary terms, gives $D^\dagger=-D-\nabla^2V$. The Darwin correction in the normalized effective Hamiltonian is the Hermitian part:

$$
\hat{\mathscr{H}_2} =
-
\frac{\hbar^2}{8m^2c^2}(D+D^\dagger) =
\frac{\hbar^2}{8m^2c^2}\nabla^2V(r) 
$$

For the Coulomb potential $V(r)=-k_eZe^2/r$, use the distributional identity:

$$ \nabla^2V(r) = 4\pi k_e Ze^2 \delta(\bar r) $$

So that in the end the term (called Darwin term) is:

$$
\hat{\mathscr{H}_2} = 
\frac{\pi\hbar^2}{2m^2c^2} k_e Ze^2 \delta(\bar r)  
$$

#### Third term (Spin-orbit term)

The term

$$\hat{\mathscr{H}}_3 =
\frac{1}{2m^2c^2} \frac1{r}
\frac{dV}{dr}
\left(\hat{\bar S}\cdot\hat{\bar L}\right)
$$

Is the spin-orbit term
