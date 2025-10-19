We will treat here the case only of the n-type semiconductor ($N_a =0$) so that the [[Projects/Physics of semiconductors/Backlog/Charge neutrality in a doped semiconductor|Charge neutrality condition]] becomes:

$$ n =p + N_d - n_d^0  $$

The idea is to obtain from this equation the Fermi level and substitute it in the free carrier expressions found [[Zettelkasten/Master's degree/Solid State Physics/Semiconductors/Number density of carriers in thermal equilibrium for an intrinsic (homogeneous) semiconductor|here]]:

$$ n \simeq N_c(T)e^{\beta(\mu-E_c)} \qquad p\simeq N_v(T)e^{\beta(E_v-\mu)}$$

We can recast this equation using the explicit expressions for $n$, $p$ and $n_d^0$, which [[Zettelkasten/Master's degree/Solid State Physics/Semiconductors/Population of impurity levels in thermal equilibrium in a semiconductor|expression]] we recall:

$$ n^0_d  = \frac{ N_d}{\frac{1}{2}e^{\beta(E_d-\mu )}+1}  $$

We obtain for the charge neutrality:

$$
\begin{aligned}
N_c(T)e^{\beta(\mu-E_c)} &=  N_v(T)e^{\beta(E_v-\mu)} + N_d \left( 1- \frac{ 1}{\frac{1}{2}e^{\beta(E_d-\mu )}+1} \right) \\
&=  N_v(T)e^{\beta(E_v-\mu)} + N_d \left( \frac{ \frac{1}{2}e^{\beta(E_d-\mu )}}{\frac{1}{2}e^{\beta(E_d-\mu )}+1} \right)
\end{aligned}
$$

This is just an algebraic equation in $x=e^{\beta\mu}$ that can be solved.
Its more instructive nonetheless to solve it in different temperature regimes.
First we define as references a donor ionization temperature and a gap temperature as respectively:

$$ k_bT_d \equiv E_c-E_d \qquad k_bT_g \equiv E_c-E_v $$
#### Very low temperatures (or “freezing out region”) $T \ll T_d$

Consider the semiconductor at very low temperatures $T \ll T_d$ . In this temperature region we certainly have:

$$ E_d < \mu(T)<E_c $$

because we expect that practically all donor levels are occupied (are non-ionized).
Then the carrier density of holes can be neglected ($\mu$ is higher then the valence band energy $E_v$, so that $\mu \gg E_v$ ).
Note also that in this regime:

$$ \frac{1}{2}e^{\beta(E_d-\mu )} +1 \sim 1 $$

This because for the temperature regime $\mu > E_d$ an moreover their distance is very small $|E_d-\mu|\ll 1$ considering that $|E_d-E_c| \sim \ \text{meV}$.
In the end our charge neutrality equation becomes:

$$ N_c(T)e^{\beta(\mu-E_c)} =  N_d   \frac{1}{2}e^{\beta(E_d-\mu )} $$

Finally we can obtain, by taking the logarithm and solving for the chemical potential:

$$ \mu (T) = \frac{1}{2} \left( E_d+E_c \right) + \frac{1}{2}k_BT \ln \left( \frac{N_d}{2N_c(T)} \right) $$

Then one can directly evaluate the free carrier number density using the expression:

$$  n \simeq N_c(T)e^{\beta\left(\frac{1}{2} \left( E_d+E_c \right) + \frac{1}{2}k_BT \ln \left( \frac{N_d}{2N_c(T)} \right)-E_c\right)} =  \sqrt{\frac{N_c(T)N_d}{2}}e^{-\frac{\beta}{2}(E_c-E_d)}  $$

#### Intermediate temperature (or saturation region) $T_d<T\ll T_g$

In this region we expect that almost all donor levels are ionized, but not all of them, we can imply (and evaluate after) the $\mu(T)$ lies somewhat below the donor level but still near the conduction band.
Again we can neglect the carrier density of holes for the same reason as the previous regime.
Given that $\mu(T)$ lies somewhat below the donor level, we can imply that $|E_d-\mu|\ll 1$, so that, in the end our charge neutrality equation becomes:

$$N_c(T)e^{\beta(\mu-E_c)} \simeq N_d$$

Again we take the logarithm and solve for the chemical potential:

$$ \mu(T) = E_c + k_BT \ln\left( \frac{N_d}{N_c(T)} \right)  $$

There is no need to plug the expression of the chemical potential in the free carrier density expression because we already found that $n \simeq N_d$ in the charge neutrality equation

#### Higher temperature (intrinsic region) $T \gg T_d$

If we increase further the temperature, the thermal excitation of valence electrons into the conduction band increases, and eventually the intrinsic situation is recovered.
In this regime in fact all donors level are fully ionized, the intrinsic carriers are much larger than the concentration of donor impurities, doping becomes irrelevant and we expect that the chemical potential approaches the middle of the band gap.
In fact in this regime $n_d^0 \simeq 0$ if we see it as a probability (the probability that the donor level is occupied).
We have then:

$$N_c(T)e^{\beta(\mu-E_c)} =  N_v(T)e^{\beta(E_v-\mu)} + N_d $$

Given that doping impurities are of the order of 1 atom per $10^{15}$, in this equation we can say that $N_v(T) \gg N_d$, so that one obtains:

$$N_c(T)e^{\beta(\mu-E_c)} \simeq  N_v(T)e^{\beta(E_v-\mu)} $$

Which is the charge neutrality condition in an intrinsic semiconductor ($n=p$)

We report in the following a graph reporting the free carrier density and the chemical potential in the various regimes:

![[Images/Thermal equilibrium carrier densities of impure semiconductors (Grosso-Parravicini).png|500]]
![[Images/Thermal equilibrium carrier densities of impure semiconductors (Grosso-Parravicini)-1.png|500]]