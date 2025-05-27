The ansatz is the same of [[Zettelkasten/Not finished/Physics of semiconductors/Energy of a donor electron using the envelope function equation|Energy of a donor electron using the envelope function equation]], but we explain nonetheless in detail the process.

Suppose to introduce 1 impurity in a semiconductor to achieve p-doping.
To fix the idea we think simply to a slab of Ge and introduce a Ga atom.
This has the net effect to introduce in the slab at the impurity location a negative charge $-e$ (because the atom will have a proton less). Notice that in this stage we are dealing with an electron equation, so we will not here think of holes yet, but to the effect of this negative charge to the electrons in the system.
In order to investigate how much is bounded we consider the envelope function equation with perturbing potential as the Coulomb potential energy between the negative charge and the electrons: 

$$ \left[\frac{1}{2}\sum_{\alpha,\beta}p_{\alpha}\left(\frac{1}{m^*}\right)_{\alpha\beta}p_{\beta}+\frac{k_e}{\varepsilon_m} \frac{e^2}{r}\right]f(\bar{r})=(E_n'-E_n(\bar{k_0}))f(\bar{r}) $$

This equation seems complicated, but if our stationary point is the $\Gamma$ point, i.e. the center of the first Brillouin zone ($\bar{k}_0=\bar{0}$), then one obtains a simpler equation:

$$ \left[\frac{p^2}{2m^*}+\frac{k_e}{\varepsilon_m} \frac{e^2}{r}\right]f(\bar{r})=(E_n'-E_{n0})f(\bar{r}) $$

This is an electron equation. In order to use it we must change it in the hole language.
The standard procedure is to change signs:

$$ \left[-\frac{p^2}{2m^*}-\frac{k_e}{\varepsilon_m} \frac{e^2}{r}\right]f(\bar{r})=(-E_n'+E_{n0})f(\bar{r}) $$

And then apply the [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Holes description|Holes description]] properties:

$$ \left[\frac{p^2}{2m_h^*}-\frac{k_e}{\varepsilon_m} \frac{e^2}{r}\right]f(\bar{r})=(E_n^{h'}-E^h_{n0})f(\bar{r}) $$

In the end we obtain the same equation saw in [[Zettelkasten/Not finished/Physics of semiconductors/Energy of a donor electron using the envelope function equation|Energy of a donor electron using the envelope function equation]], this time from the hole point of view.
### How to plot these kind of states in a band diagram

Suppose to have As and to perform p-doping with Ge. Then if one does the same calculations as before it obtains  $E_n^{h'}=E^h_{n0}-\frac{m_h^*}{m_e} \frac{1}{\varepsilon_m^2} \frac{1}{\nu^2}E_0 \simeq E^h_{n0}-0.006\ \text{eV}$. (Note that in the calculation we will have the same gap, because $m_h^*=-m_e^*>0$). So in order to plot properly the extra level we have to remember that we are in the hole language, so we flip the axises and mark the extra level.
Note that one in the end shows the electron language scheme, so we have to flip back the axises:

![[Images/Energy of an acceptor hole using the envelope function.png|500]]





