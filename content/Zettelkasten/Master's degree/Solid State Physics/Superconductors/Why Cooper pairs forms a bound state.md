We show in the following that Cooper pairs forms a bound states, i.e have an energy $\mathcal{E}<0$.

**Important note**: As seen in [[Zettelkasten/Master's degree/Solid State Physics/Superconductors/Cooper pair formation|Cooper pair formation]], we showed that Cooper pair are formed by a phonon mediated interaction.
So they must conserve their momentum:

$$ \bar{k}_{1}+\bar{k}_{2} = \bar{k}'_{1}+\bar{k}'_{2}= \bar{K}  $$

![[Immagini/Why Cooper pairs forms a bound state.png|500]]

The strength of the attractive interaction is maximum for $\bar{K}=0 \iff \bar{k}_1=-\bar{k}_2$ , so **in the following we will restrict only to this case**, even if in principle all case of the type $\bar{k}_2= \bar{K}-\bar{k_1}$ are possible.



In order to visualize them we consider Cooper pairs as follows: we add 2 electrons to the ground state of a non-interacting Fermi gas, i.e. a system at $T=0\ \text{K}$ where all electron states with energy below $E_F= \frac{\hbar^2 k^2_F}{2m}$ are occupied and with energy above are unoccupied.
The additional electrons then will lie just above the Fermi energy with some additional energy $\mathcal{E}$.
We can now write the Schrodinger equation associated to this motion:

$$ \left[ -\frac{\hbar^2}{2m}\nabla_{\bar{r}_1}^2 -\frac{\hbar^2}{2m}\nabla_{\bar{r}_2}^2 + V(\bar{r}_1,\bar{r}_2) \right]\psi(\bar{r}_1,\bar{r}_2) = E\psi(\bar{r}_1,\bar{r}_2) $$

We can measure for convenience the energy from the Fermi energy level and write $E=2E_F+\mathcal{E}$.
Note that if $V=0$ we have the free electron case, so that $\mathcal{E}=0$, the pair is free and has total energy $2E_F$ with eigenfunction:

$$ \psi(\bar{r}_1,\bar{r}_2) =\phi_{\bar{k}_1}(\bar{r})\phi_{\bar{k}_2}(\bar{r})= \frac{1}{\sqrt{L^3}} e^{i \bar{k}_1\cdot\bar{r}_1}\frac{1}{\sqrt{L^3}} e^{i \bar{k}_2\cdot\bar{r}_2} = \frac{1}{L^3} e^{i \bar{k}\cdot(\bar{r}_1-\bar{r}_2)} $$

Where we used the condition on the momentum conservation stated at the beginning.
The free electron basis is an orthonormal basis ($\bar{r}=\bar{r}_1-\bar{r}_2$):

$$ \int d\bar{r}^3\ \phi_{\bar{k}}(\bar{r})\phi_{\bar{k'}}(\bar{r})=\delta_{\bar{k}\bar{k'}} $$

So from this we can build a generic eigenfunction for the general case $V\neq0$, in which we have:

$$ \psi(\bar{r}_1,\bar{r}_2)= \psi(\bar{r}_1-\bar{r}_2) = \frac{1}{L^3}\sum_{\bar{k}}C_{\bar{k}} e^{i \bar{k}\cdot(\bar{r}_1-\bar{r}_2)} $$

The sum over $\bar{k}$ extends only to the wavevectors that satisfies the maximum condition in the conservation of the momentum, i.e. the must obey the constraint:

$$E_F< \frac{\hbar^2 k^2}{2m}<E_F + \hbar\omega_D$$

We now plug this expansion in the Schrodinger equation,  and 

$$
\begin{aligned}
\left[ -\frac{\hbar^2}{2m}\nabla_{\bar{r}_1}^2 -\frac{\hbar^2}{2m}\nabla_{\bar{r}_2}^2 + V(\bar{r}_1,\bar{r}_2) \right]\frac{1}{L^3}\sum_{\bar{k}}C_{\bar{k}} e^{i \bar{k}\cdot(\bar{r}_1-\bar{r}_2)}  &= E\frac{1}{L^3}\sum_{\bar{k}}C_{\bar{k}} e^{i \bar{k}\cdot(\bar{r}_1-\bar{r}_2)} \\

-\frac{\hbar^2}{2m}\sum_{\bar{k}}(-2k^2)C_{\bar{k}} e^{i \bar{k}\cdot(\bar{r}_1-\bar{r}_2)}+\left[V(\bar{r}_1,\bar{r}_2)-E\right]\sum_{\bar{k}}C_{\bar{k}} e^{i \bar{k}\cdot(\bar{r}_1-\bar{r}_2)}&=0 \\

\frac{\hbar^2}{m}\sum_{\bar{k}}k^2C_{\bar{k}} e^{i \bar{k}\cdot(\bar{r}_1-\bar{r}_2)}+\left[V(\bar{r}_1,\bar{r}_2)-E\right]\sum_{\bar{k}}C_{\bar{k}} e^{i \bar{k}\cdot(\bar{r}_1-\bar{r}_2)}&=0 \\

\end{aligned}
$$

multiply both sides by $e^{-i \bar{k}'\cdot(\bar{r}_1-\bar{r}_2)}$:

$$
\begin{aligned}

\frac{\hbar^2}{m}\sum_{\bar{k}}k^2C_{\bar{k}} e^{i (\bar{k}-\bar{k}')\cdot(\bar{r}_1-\bar{r}_2)}+\left[V(\bar{r}_1,\bar{r}_2)-E\right]\sum_{\bar{k}}C_{\bar{k}} e^{i (\bar{k}-\bar{k}')\cdot(\bar{r}_1-\bar{r}_2)}&=0 \\

\end{aligned}
$$

Now we integrate over the whole space by recalling the orthogonality relation (we set from now on $\bar{r}_1-\bar{r}_2\equiv \bar{r}_1$ and note that we are implicitly hypothesizing that $V(\bar{r}_1,\bar{r}_2)=V(\bar{r}_1-\bar{r}_2)\equiv V(\bar{r})$:

$$ 
\begin{aligned}
\frac{\hbar^2}{m}\sum_{\bar{k}}k^2C_{\bar{k}} \int d^3\bar{r\ } e^{i (\bar{k}-\bar{k}')\cdot\bar{r}}+\sum_{\bar{k}}C_{\bar{k}}\int d^3\bar{r\ } V(\bar{r})e^{i (\bar{k}-\bar{k}')\cdot\bar{r}}-E\sum_{\bar{k}}C_{\bar{k}}\int d^3\bar{r\ } e^{i (\bar{k}-\bar{k}')\cdot\bar{r}}&=0 \\
\frac{\hbar^2}{m}\sum_{\bar{k}}k^2C_{\bar{k}} \delta_{\bar{k}\bar{k'}}          +\frac{1}{L^3}\sum_{\bar{k}}C_{\bar{k}}V_{\bar{k}\bar{k'}} -E\sum_{\bar{k}}C_{\bar{k}}\delta_{\bar{k}\bar{k'}} &=0 \\
\frac{\hbar^2k'^2}{m}C_{\bar{k}'}           +\frac{1}{L^3}\sum_{\bar{k}}C_{\bar{k}}V_{\bar{k}\bar{k'}} -EC_{\bar{k}'} &=0 \\
\end{aligned}
$$

Where we implicitly defined :

$$ V_{\bar{k}\bar{k'}}\equiv\int d^3\bar{r\ } V(\bar{r})e^{i (\bar{k}-\bar{k}')\cdot\bar{r}} $$

This matrix element describes the scattering of an electron pair  $(\bar{k},-\bar{k}) \iff (\bar{k}',-\bar{k}')$ in both senses.
The most simplified model assume that the interaction is $\bar{k}$ independent and is described by the function:

$$ V_{\bar{k}\bar{k'}} \simeq 
\begin{cases}
-V_0 \qquad \text{if}\ E_F< \frac{\hbar^2 k^2}{2m}<E_F + \hbar\omega_D\ \land\ E_F< \frac{\hbar^2 k'^2}{2m}<E_F + \hbar\omega_D \\
0 \qquad\text{otherwise}

\end{cases} $$

In this approximation the former equation becomes:

$$ \frac{\hbar^2k'^2}{m}C_{\bar{k}'}-\frac{V_0}{L^3}\sum_{\bar{k}}C_{\bar{k}} -EC_{\bar{k}'} =0  $$

If we now set $A\equiv\frac{V_0}{L^3}\sum_{\bar{k}}C_{\bar{k}}$ we find a simple expression for the coefficients of the eigenfunction expansion:

$$ C_{\bar{k}'} = \frac{A}{\frac{\hbar^2k'^2}{m} -E} = \frac{A}{\frac{\hbar^2k'^2}{m} -2E_F-\mathcal{E}}$$

If we now multiply both sides by $V_0/L^3$ and sum over $\bar{k}'$ we obtain:

$$  A = \frac{V_0}{L^3}\sum_{\bar{k}'}C_{\bar{k}'} = \frac{V_0}{L^3}\frac{A}{\sum_{\bar{k}'}[\frac{\hbar^2k'^2}{m} -2E_F-\mathcal{E}]} \iff \frac{V_0}{L^3}\sum_{\bar{k}'}\frac{1}{\frac{\hbar^2k'^2}{m} -2E_F-\mathcal{E}} = 1 $$

Finally we use the sum exchange rule $\sum_{\bar{k}} \iff \frac{L^3}{(2\pi)^3}\int_{\Omega}d\bar{k}$ :

$$ 1 = \frac{V_0}{(2\pi)^3}\int_{\Omega}\frac{d\bar{k'}}{\frac{\hbar^2k'^2}{m} -2E_F-\mathcal{E}} = \frac{V_0}{(2\pi)^3}\int_{\Omega}\frac{d\bar{k'}}{2E(\bar{k}') -2E_F-\mathcal{E}}   $$

Now we use the same ansatz used in writing a [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/Vibrational density of states|general expression for the density of states]], we divide the volume integral in one over the Fermi sphere and the energy , i.e. by using $d^3k = dS_{\bar{k}}dk_{\perp}$ and $dE =|\nabla_{\bar{k}}E(\bar{k})| d\bar{k}_{\perp}$ :

$$ 1  = \frac{V_0}{(2\pi)^3}\iint \frac{dS_{\bar{k'}}dk'_{\perp}}{2E(\bar{k}') -2E_F-\mathcal{E}}= \frac{V_0}{(2\pi)^3}\int_{S_{\bar{k'}}}\int_{E_F}^{E_F+\hbar\omega_D}\frac{dS_{\bar{k}'}}{|\nabla_{\bar{k}'}E(\bar{k'})|}\frac{dE}{2E(\bar{k}') -2E_F-\mathcal{E}}   $$

Finally we can use the definition of DOS:

$$ 1  = \frac{V_0}{2}\int_{E_F}^{E_F+\hbar\omega_D}D(E)\frac{dE}{2E-2E_F-\mathcal{E}}   $$

Now we have that , given that $\hbar\omega_D \ll E_F$ the energy shell extends only over a very small interval, so that $D(E)\sim D(E_F)$ for $E_F<E<E_F+\hbar\omega_D$ . We obtain then:

$$ 1  \simeq \frac{V_0}{2}D(E_F)\int_{E_F}^{E_F+\hbar\omega_D}\frac{dE}{2E-2E_F-\mathcal{E}} = \frac{V_0}{4}D(E_F) \left[\ln \left(2E-2E_F-\mathcal{E}\right) \right]_{E_F}^{E_F+\hbar\omega_D} = \frac{V_0}{4}D(E_F) \ln \left( \frac{2\hbar\omega_D-\mathcal{E}}{-\mathcal{E}} \right) $$

In the end one obtains:

$$ 1 \simeq \frac{V_0}{4}D(E_F) \ln \left( 1-\frac{2\hbar\omega_D}{\mathcal{E}} \right) \iff e^{\frac{4}{V_0D(E_F)}}\simeq  1-\frac{2\hbar\omega_D}{\mathcal{E}} \iff \mathcal{E} = \frac{2\hbar\omega_D}{1-e^{\frac{4}{V_0D(E_F)}}} $$

Since the interaction is very weak, the following constraint holds $V_0D(E_F)\ll1$ so one has $e^{\frac{4}{V_0D(E_F)}}\gg1$, and, in the end:

$$ \mathcal{E} \simeq \frac{2\hbar\omega_D}{-e^{\frac{4}{V_0D(E_F)}}} =-2\hbar\omega_De^{-\frac{4}{V_0D(E_F)}}<0 $$

Which is what we wanted to show.