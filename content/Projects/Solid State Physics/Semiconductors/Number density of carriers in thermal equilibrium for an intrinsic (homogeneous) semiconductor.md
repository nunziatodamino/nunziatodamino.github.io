We want to evaluate the number density of electrons $n=N_e/V$ and the number density of holes $p=N_h/V$ in an homogeneous semiconductor, i.e. a semiconductor with no impurities.

**The big problem is that this expression is mostly dependent by the presence of defects.
One can still find an expression which is mostly independent by the purity of the sample in an approximation that we will see in the following.**

We will see in the study of the extrinsic (inhomogeneous) semiconductor that the presence of impurities will introduce additional levels either at the bottom of the conduction band or at the the top of the valence band (according to the specific type of impurities considered), without altering significantly the DOS of either the electrons or the holes. Then, given that the conduction is due only to electron in the conduction band and holes in the valence band, we can state that, **regardless of impurities**, we have:

$$\begin{aligned}
n(T) = \int_{E_c}^{+\infty}dE\ D_c(E)f(E,T)=  \int_{E_c}^{+\infty}dE\ D_c(E)\frac{1}{e^{\beta(E-\mu)}+1}\\
p(T) = \int_{-\infty}^{E_v}dE\ D_v(E)[1-f(E,T)]=  \int_{-\infty}^{E_v}dE\ D_v(E)\frac{1}{e^{\beta(\mu-E)}+1}
\end{aligned}
$$

Where the temperature dependence is contained in $\beta=\frac{1}{k_bT}$.

>[!info] Note on convention
Note that is widespread in literature to call the chemical potential $\mu$ as Fermi energy. This is misleading if we consider as Fermi energy the definition given for a metal (i.e. the energy for which we find below occupied electron states and above unoccupied electron states). In the case of a semiconductor we will show that the chemical potential lies in the middle of the energy band gap, leading to an undefined maximum energy for the electron.
In the context of semiconductors then the Fermi energy must be regarded not as the maximum energy an electron can have, but just as a synonym of chemical potential.

**Now, the information on the impurities of the system is contained in the chemical potential $\mu$**
In order to find an expression that is independent from this parameter we have to make the following approximation:

$$ E_c-\mu \gg k_bT \qquad\mu-E_v\gg k_bT$$

These are equivalent to:

$$ \exp[\beta(E_c-\mu)] \gg 1 \qquad\exp[\beta(\mu-E_v)]\gg 1$$

And, given that the exponential is a monotonous function:

$$ \exp[\beta(E-\mu)] \gg 1\quad \text{if}\ E>E_c \qquad\exp[\beta(\mu-E)]\gg 1\quad \text{if}\ E<E_c$$

Then we can approximate our number densities:

$$\begin{aligned}
n(T) \simeq  \int_{E_c}^{+\infty}dE\ D_c(E)\frac{1}{e^{\beta(E\pm E_c-\mu)}} =e^{\beta(\mu-E_c)}\int_{E_c}^{+\infty}dE\ D_c(E){e^{\beta(E_c-E)}}\equiv N(T)e^{\beta(\mu-E_c)}\\
p(T) \simeq   \int_{-\infty}^{E_v}dE\ D_v(E)\frac{1}{e^{\beta(\mu\pm E_v-E)}}=e^{\beta(E_v-\mu)}\int_{-\infty}^{E_v}dE\ D_v(E){e^{\beta(E-E_v)}}\equiv P(T)e^{\beta(E_v-\mu)}
\end{aligned}
$$

With this trick we kicked out the $\mu$ from the integral.
Finally, if we multiply the expressions between them:

>[!info] Law of mass action
>For a non-degenerate semiconductor, irrespectively from its purity
>
>$$ n(T)p(T) = e^{-E_g/k_bT}N(T)P(T) $$
>
>Where
>
>$$N(T)=\int_{E_c}^{+\infty}dE\ D_c(E){e^{\beta(E_c-E)}} \qquad P(T)= \int_{-\infty}^{E_v}dE\ D_v(E){e^{\beta(E-E_v)}}$$

This law connects the number density of electrons with one of the holes and is of particular utility in the homogeneous case, because in this case $n=p$.
In this case it reduces to :

$$ n(T)= e^{-E_g/2k_bT}\sqrt{N(T)P(T)} $$

A more specific evaluation, concerning also the parameters $N$ and $P$, can be found [[Projects/Solid State Physics/Semiconductors/Specific evaluations of the law of mass action for an homogeneous semiconductor|here]].


