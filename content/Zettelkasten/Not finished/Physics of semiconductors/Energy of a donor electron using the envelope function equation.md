Now we extend our knowledge on what we discussed in [[Zettelkasten/Master's degree/Solid State Physics/Semiconductors/Effect on the energy bands of doping in semiconductors|Effect on the energy bands of doping in semiconductors]] using the [[Zettelkasten/Not finished/Physics of semiconductors/Envelope function method|Envelope function method]].
**An important detail arising from this method is that doping doesn't add new states, but reduces the total number of states due to the perturbation.**
**In the case of n-doping for example it will modify the system in such a way to reduce the number of available state in the conduction band and make it available to the donor state, leaving the total number of states unaltered.**
This will be seen in detail in [[Zettelkasten/Not finished/Physics of semiconductors/General doping/How to fill the n-doping states]].

Suppose to introduce 1 impurity in a semiconductor to achieve n-doping.
To fix the idea we think simply to a slab of Si and introduce an As atom.
This has the net effect to introduce in the slab at the impurity location a positive charge $+e$ and an additional electron $-e$ lightly bounded to this impurity.
In order to investigate how much is bounded we consider the envelope function equation with perturbing potential as the Coulomb potential energy between the positive charge and the electron: 

$$ \left[\frac{1}{2}\sum_{\alpha,\beta}p_{\alpha}\left(\frac{1}{m^*}\right)_{\alpha\beta}p_{\beta}-\frac{k_e}{\varepsilon_m} \frac{e^2}{r}\right]f(\bar{r})=(E_n'-E_n(\bar{k_0}))f(\bar{r}) $$

This equation seems complicated, but if our stationary point is the $\Gamma$ point, i.e. the center of the first Brillouin zone ($\bar{k}_0=\bar{0}$), then one obtains a simpler equation:

$$ \left[\frac{p^2}{2m^*}-\frac{k_e}{\varepsilon_m} \frac{e^2}{r}\right]f(\bar{r})=(E_n'-E_{n0})f(\bar{r}) $$

Which is in the end an hydrogen like equation, which we can solve immediately.
We have:

$$ E_n'-E_{n0}-  \frac{m^*}{m_e} \frac{1}{\varepsilon_m^2} \frac{1}{\nu^2}E_0  \qquad E_0=13.6\ \text{eV} $$

Where we use $\nu$ to indicate the principal quantum number.

Now we consider $\nu=1$. Every other excited level is superfluous in our analysis, given that the next excited state ($\nu=2$) has $1/4$ of the energy of the $\nu=1$ state. 
So or it decays or is easily excited in the conduction band. This is why we just consider $\nu=1$.

Putting all the number specific for Si ($m^*_{\text{Si},0} \sim 0.2\ m_e$ and $\varepsilon_{\text{Si}}\simeq 15.8$) we obtain:

$$ E_n'=E_{n0}-0.003\ \text{eV} $$

Moreover we can check if $f(\bar{r})$ satisfies the condition of the envelope function equation, i.e. is almost constant over a cell. By solving we have:

$$ f(\bar{r}) \propto e^{-\frac{r}{2a}} \qquad a = \frac{m_e}{m^*}\varepsilon_ma_{Bohr} \sim 42 \mathring{A} $$

So we have a variation of $1/e$ over $\sim 15$ cells giving that $a_{Si}\simeq5.43 \mathring{A}$. So we have per cell a variation of $\sim 2.45 \%$

### How to plot these kind of states in a band diagram

Suppose to have As and to perform n-doping with Se. Then if one does the same calculations as before it obtains  $E_n'=E_{n0}-0.006\ \text{eV}$. So we plot part of the As band structure with the additional energy level:

![[Images/Energy of a donor electron using the envelope function equation.png|500]]

Given the fact that is independent from $\bar{k}$ is s traced as a flat line in the band diagram. The electron in this band, because is bounded, is considered to have infinite effective mass. This is further justified by the flat line representation (zero second derivative).
Note that of course the method is not restricted to the $\Gamma$ point, but to any stationary point in the band structure:

![[Images/Energy of a donor electron using the envelope function equation-1.png|500]]

Note also that in case of the n-doping I can have these bound states only in minima, because otherwise the states will be unbounded.