We now apply the formula we derived in [[Projects/Physics of semiconductors/Electrons and holes densities evaluation in a 3D homogeneous semiconductor using the non-degenerate hypothesis for a non degenerate band|Electrons and holes densities evaluation in a 3D homogeneous semiconductor using the non-degenerate hypothesis for a non degenerate band]], analyzing first the typical situations in the conduction and valence band.

#### Conduction band

Typically the conduction band in a semiconductor is degenerate. 
So we can extent simply the formula by considering the formal substitution:

$$ m_c^{*3/2} = m_L^{1/2}m_T d$$

Where $d$ is the band degeneracy ($d=6$ for Si, d=8 for Ge, cfr [[Projects/Physics of semiconductors/Analysis of real band structures of typical semiconductors|Analysis of real band structures of typical semiconductors]]).
Note that in practical textbooks, one redefines $m_c^*$ as effective mass density of states for a specific band, evaluated as prescribed, to maintain the same formula as for the non degenerate isotropic band.

#### Valence band

Here we have a more interesting situation, and the following is the correction to make:

![[Images/Electrons and holes densities evaluation in a 3D homogeneous semiconductor using the non-degenerate hypothesis-1.png|300]]

$$m_{V}^{*3/2}=m_{LH}{}^{3/2}+m_{HH}{}^{3/2}+m_{SO}{}^{3/2}e^{-\frac{\Delta_{SO}}{k_{B}T}}$$

This happens because we have 3 non degenerate bands, so the total contribute is of the type:

$$n_{holes}\equiv p=p_{LH}+p_{HH}+p_{SO} $$

Where one can see explicitly that the contribution of the split off band is lower :

$$
\begin{aligned}
p_{SO}=\int_{-\infty}^{E_{V}-E_{SO}}\frac{\sqrt{2} m_{SO}^{3/2}}{\pi^{2}\hbar^{3}}\Big(E_{V}-\Delta_{SO}-E\Big)^{1/2}\exp\Bigg(-\frac{E_{F}-E}{k_{B}T}\Bigg)dE= \\
=\frac{\sqrt{2} m_{SO}^{3/2}}{\pi^{2}\hbar^{3}}\left(k_{B}T\right)^{3/2}\exp\left(-\frac{E_{F}-(E_{V}-\Delta_{SO})}{k_{B}T}\right)\int_{0}^{\infty}y^{1/2}\left(E\right)\exp\left(-y\right)dy= \\
=\frac{1}{\sqrt{2}}\Bigg(\frac{m_{SO}k_{B}T}{\pi\hbar^{2}}\Bigg)^{3/2}\exp\Bigg(-\frac{\Delta_{SO}}{k_{B}T}\Bigg)\exp\Bigg(-\frac{E_{F}-E_{V}}{k_{B}T}\Bigg) 
\end{aligned}
$$

Where we used the substitution $y=\frac{\left(E_{V}-\Delta_{SO}\right)-E}{k_{B}T} dy=-\frac{dE}{k_{B}T}$.

Technically there will be also a fourth term for the fourth band, but the Boltzmann weight will be $\sim 0$, so is not reported.

## What is usually reported for a semiconductor

These considerations lead to the creation of the following tables :

![[Images/Electrons and holes density in a semiconductor in the non-degenerate approximation.png]]

This one is implicitly considered at room temperature (where we discussed that the [[Projects/Physics of semiconductors/Non degenerate semiconductor approximation (Boltzmann approximation)|Non degenerate semiconductor approximation (Boltzmann approximation)]] is valid.) The effective mass values are reported in relative units. 
**Note that is important to know the order of magnitude of $N_c$ and $N_v$ at room temperature ($\sim 10^{19}$ states/cm^3)**
The only exception is GaAs, which is lower due to different reasons: low effective mass and is a $\Gamma$ point, so it presents no degeneracy.

What about the order of magnitude of $n$ and $p$ ? Due to the fact that we are in the non-degenerate approximation, for $n$ :

$$n = N_c e^{\frac{E_C-E_F}{k_bT}} \simeq N_c\left(1 + \frac{E_C-E_F}{k_bT}\right) \simeq N_c $$

With the same ansatz for $p$. So the description holds up until the carriers are of this order of magnitude.
Note: The professor state that the order of magnitude is 2 less from what derived, i.e. form $10^{19} \to 10^{17}$. No idea why.
