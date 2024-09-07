The fundamental idea of photonic crystal starts by consideration on the parallelism between photons dynamics and electron dynamics, represented in the following table:

![[Pasted image 20230702105250.png|500]]

The major idea is that the eigenvalue equation governing the dynamics has the same form, the only difference is the interaction description, where in the electron case is the mutual potential, while in the photon case is the dielectric function 

One can think then to extend the concept of crystal periodicity to photons if one considers the following problem:

$$ \nabla^2 \bar{E} + \frac{\omega^2}{c^2} \varepsilon(\omega, \bar{r}) \bar{E} =0 \qquad \varepsilon(\omega, \bar{r}) = \varepsilon(\omega, \bar{r} + \bar{R}) \qquad \forall \bar{R} \in B. L. $$

Where we restrict ourselves for non magnetic systems $\mu=1$ and in the visible optical regime, i.e. for which $n^2 = \varepsilon(\omega, \bar{r})$.
Given the fact that the Helmoltz equation has the same mathematical structure as the Schrodinger equation, one can state that this problem is equivalent to the [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Bloch's Theorem]] for photons, so that one can state that:

$$ \bar{E}(\bar{r}) = u_{\bar{k}} (\bar{r}) e^{i \bar{k} \cdot \bar{r}} \qquad u_{\bar{k}} (\bar{r}) = u_{\bar{k}} (\bar{r}+ \bar{R})\qquad \forall \bar{R} \in B. L. $$

So that all was derived for electronic crystal can be transferred to photonic crystal with little to no fuss.

By continuing on this analogy, is possible to derive a central equation for photonic crystal by considering the Fourier series expansions:

$$\bar{E}(\bar{r}) = \sum_{\bar{q}}\bar{C}_{\bar{q}} e^{i\bar{q}\cdot\bar{r}} \qquad  \varepsilon(\omega, \bar{r}) =  \sum_{\bar{G}}\varepsilon_{\bar{G}} e^{i\bar{G}\cdot\bar{r}} $$

Where the expansion basis is chosen as in the electronic case.
We then obtain:

$$ \nabla^2 \bar{E} + \frac{\omega^2}{c^2} \varepsilon(\omega, \bar{r}) \bar{E} =0 $$

$$\nabla^2 \sum_{\bar{q}}\bar{C}_{\bar{q}} e^{i\bar{q}\cdot\bar{r}} + \frac{\omega^2}{c^2}\sum_{\bar{G}}\varepsilon_{\bar{G}} e^{i\bar{G}\cdot\bar{r}} \sum_{\bar{q}}\bar{C}_{\bar{q}} e^{i\bar{q}\cdot\bar{r}} =0$$

$$\sum_{\bar{q}}(-q^2)\bar{C}_{\bar{q}} e^{i\bar{q}\cdot\bar{r}} + \frac{\omega^2}{c^2}\sum_{\bar{q}}\sum_{\bar{G} } \bar{C}_{\bar{q}} \varepsilon_{\bar{G}} e^{i(\bar{G}+\bar{q})\cdot\bar{r}} =0$$

Now I recast $\bar{q}'= \bar{G}+\bar{q}$ :

$$\sum_{\bar{q}}(-q^2)\bar{C}_{\bar{q}} e^{i\bar{q}\cdot\bar{r}} + \frac{\omega^2}{c^2}\sum_{\bar{q}'}\sum_{\bar{G} } \bar{C}_{\bar{q}'-\bar{G}} \varepsilon_{\bar{G}} e^{i\bar{q}'\cdot\bar{r}} =0$$

$$\sum_{\bar{q}}e^{i\bar{q}\cdot\bar{r}}\left(-q^2\bar{C}_{\bar{q}}  + \frac{\omega^2}{c^2}\sum_{\bar{G} } \bar{C}_{\bar{q}-\bar{G}} \varepsilon_{\bar{G}}  \right) =0$$

This is true only if:

$$q^2\bar{C}_{\bar{q}}  - \frac{\omega^2}{c^2}\sum_{\bar{G} } \bar{C}_{\bar{q}-\bar{G}} \varepsilon_{\bar{G}} =0 $$

Now we use the fact that we can write $\bar{q} = \bar{k} - \bar{G}$, so that we find:

$$(\bar{k} - \bar{G})^2\bar{C}_{\bar{k} - \bar{G}}  - \frac{\omega^2}{c^2}\sum_{\bar{G} } \bar{C}_{\bar{k} - \bar{G}'-\bar{G}} \varepsilon_{\bar{G}} =0 $$

Finally, by considering $\bar{G}'' = \bar{G}'+\bar{G}$ we obtain:

$$(\bar{k} - \bar{G}')^2\bar{C}_{\bar{k} - \bar{G}'}  - \frac{\omega^2}{c^2}\sum_{\bar{G}'' } \bar{C}_{\bar{k} - \bar{G}''} \varepsilon_{\bar{G}''-\bar{G}} =0 $$

Which is the central equation for photonic crystals.
