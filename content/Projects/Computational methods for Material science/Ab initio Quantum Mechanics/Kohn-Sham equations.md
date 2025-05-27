The key point of the Kohn-Sham method to the density functional theory is the assumption that, 

**for each non-uniform ground-state density $n(\bar{r})$ of an interacting electron system there exist a non-interacting electron system with the same non-uniform ground-state density.**

This auxiliary non-interacting system (called the Kohn-Sham system) is assumed to exist, at least for non-pathologic situations (we do not enter here in the ground-state v-representability question)
This is done in order to have the following decomposition possible:

$$ n(\bar {r}) = \sum_i \psi_i^*(\bar {r})\psi_i(\bar {r}) $$

Where $\psi_i$ are one electron functions.
It is worthwhile to stress explicitly the basic conceptual difference between this representation of the ground-state density, which is conceptually exact, and the trial representation with a single determinant of the [[Projects/Computational methods for Material science/Ab initio Quantum Mechanics/Hartree-Fock theory|Hartree-Fock ground-state wavefunction]], which is only approximate. In the former case, the minimization process provides the exact ground-state density and the exact ground-state energy of the electronic system; on the contrary, in the latter case, the minimization process provides an optimized, and yet approximate, ground-state wavefunction and an approximate upper bound of the ground-state energy.

First we begin by rewriting the [[Projects/Computational methods for Material science/Ab initio Quantum Mechanics/Hohenberg-Kohn theorem|Hohenberg-Kohn energy functional]] in the following way:

$$
\begin{aligned}
E^{HK}[n(\bar{r})] &=\mathcal{F}[n(\bar{r})] \pm T_0[n(\bar{r})] \pm V_H[n(\bar{r})] +\int d\bar{r}\ v_{ext}(\bar{r}) n(\bar{r}) \\
&=  T_0[n(\bar{r})] + V_H[n(\bar{r})] + (\mathcal{F}[n(\bar{r})]-T_0[n(\bar{r})] - V_H[n(\bar{r})]) +\int d\bar{r}\ v_{ext}(\bar{r}) n(\bar{r}) = \\

&=  T_0[n(\bar{r})] + V_H[n(\bar{r})] +E_{exc}[n(\bar{r})] +\int d\bar{r}\ v_{ext}(\bar{r}) n(\bar{r}) = \\

\end{aligned}
$$

Where $T_0[n(\bar{r})]$ represent the average value of the kinetic energy of a non interacting electron system:

$$ T_0[n(\bar{r})]=\sum_i\braket{\psi_i|\hat{T}_i|\psi_i}=\sum_i\braket{\psi_i|-\frac{\hbar^2}{2m}\nabla^2|\psi_i} $$

The functional $V_H[n(\bar{r})]$ represent the average value of the Coulomb interaction between electrons in a non interacting electron system (==Qua non sto capendo un cazzo, se non interagiscono non dovrebbe eseerci questo termine==), represented by :

$$ V_H = \frac{1}{2}\sum_i\sum_j \braket{\psi_i\psi_j|\frac{e^2}{r_{12}}|\psi_i\psi_j}=\frac{1}{2} \int d\bar{r}d\bar{r}'\ n(\bar{r})\frac{e^2}{|\bar{r}-\bar{r}'|}n(\bar{r}') $$

==dA commentare, sono in pratica integrali di Coulomb, non so perchè li chiami potenziali di Hartree==
And finally the exchange term contains what we cant evaluate:

$$E_{exc}[n(\bar{r})] = \mathcal{F}[n(\bar{r})]-T_0[n(\bar{r})] - V_H[n(\bar{r})] $$

Given that $n(\bar {r}) = \sum_i \psi_i^*(\bar {r})\psi_i(\bar {r})$, we can write : $\int d\bar{r}\ v_{ext}(\bar{r}) n(\bar{r})=\sum_i \int d\bar{r}\ v_{ext}(\bar{r}) \psi_i^*(\bar {r})\psi_i(\bar {r})=\sum_i\braket{\psi_i|v_{ext}|\psi_i}$, so that the energy functional can be recasted in the following way:

$$ E^{HK}[n(\bar{r})]= \sum_i\braket{\psi_i|-\frac{\hbar^2}{2m}\nabla^2 + v_{ext}|\psi_i} + \frac{1}{2}\sum_i\sum_j \braket{\psi_i\psi_j|\frac{e^2}{r_{12}}|\psi_i\psi_j} +E_{exc}[n(\bar{r})]  $$

Now we can find the equations associated to this functional using the [[Variational principle in QM]]:

$$\delta E^{HK}[n(\bar{r})]  =0 \qquad \iff \qquad \frac{\delta E^{HK}[n(\bar{r})]}{\delta n(\bar{r})}  =0 $$

So using the notion of [[Projects/Computational methods for Material science/Ab initio Quantum Mechanics/Functional derivative|Functional derivative]], we observe that all functional composing the Hohenberg-Kohn functional are of the type $G[n(\bar{r})]=\int d\bar{r}\ W(\bar{r})n^{\alpha}(\bar{r})$, so that  $\frac{\delta G[n]}{\delta n(\bar{r})} = \alpha W(\bar{r})n^{\alpha-1}(\bar{r})$ (==proof here==).
We obtain then in the end:

$$ \left[-\frac{\hbar^2}{2m}\nabla^2 + V_{ext}+ V_{coul}+ V_{exc} \right]\psi_i = \mathcal{E}_i\psi_i  $$

Whic are the so called **Kohn-Sham equations**.