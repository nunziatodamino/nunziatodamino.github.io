We want to prove the following :

>[!info] Electron velocity in a band
Given an electron in a Bloch orbital $\psi_{n\bar{k}}$ , its velocity $\bar{v}_n(\bar{k})$, or group velocity,  is related to its band energy $E_n(\bar{k})$ by the relation:
$$ \bar{v}_n(\bar{k})=\frac{1}{\hbar} \nabla_{\bar{k}} E_n(\bar{k}) $$

Note that in literature the gradient is usually substituted by the partial derivative notation, i.e. $\bar{v}_n(\bar{k})=\frac{1}{\hbar} \frac{\partial E_n(\bar{k})}{\partial \bar{k}}$. 

Proof: The idea is to evaluate the velocity as:

$$\bar{v}_n(\bar{k})= \braket{\psi_{n\bar{k}}|\frac{\bar{p}}{m}|\psi_{n\bar{k}}} $$
Given that the wavefunction obeys the Bloch theorem:

$$\psi_{n\bar{k}}(\bar{r}) = e^{i(\bar{k} \cdot\bar{r})}u_{n\bar{k}}(\bar{r})$$

If we evaluate then the expectation value of the energy:

$$E_n(\bar{k})= \braket{\psi_{n\bar{k}}|H|\psi_{n\bar{k}}} = \braket{\psi_{n\bar{k}}|\frac{p^2}{2m}+V(\bar{r})|\psi_{n\bar{k}}}  $$

One can then [[Calculations/electron_velocity_lemma.pdf|prove]] that:

$$E_n(\bar{k}) = \braket{\psi_{n\bar{k}}|\frac{p^2}{2m}+V(\bar{r})|\psi_{n\bar{k}}} = \braket{u_{n\bar{k}}|\frac{(\bar{p}+\hbar \bar{k})^2}{2m}+V(\bar{r})|u_{n\bar{k}}}  $$

Then one simply derivate both sides respect the $\bar{k}$ vector using the gradient:

$$\nabla_{\bar{k}}E_n(\bar{k})  = \nabla_{\bar{k}}\left[\braket{u_{n\bar{k}}|\frac{(\bar{p}+\hbar \bar{k})^2}{2m}+V(\bar{r})|u_{n\bar{k}}}\right]  $$

Then, by [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/Hellman-Feynman Theorem|Hellman-Feynman Theorem]]:

$$\nabla_{\bar{k}}E_n(\bar{k})  = \braket{u_{n\bar{k}}|\nabla_{\bar{k}}\left[\frac{(\bar{p}+\hbar \bar{k})^2}{2m}+V(\bar{r})\right]|u_{n\bar{k}}}  $$

One then obtains in the end:

$$\nabla_{\bar{k}}E_n(\bar{k})  = \braket{u_{n\bar{k}}|\hbar\frac{(\bar{p}+\hbar \bar{k})}{m}|u_{n\bar{k}}}  $$

Then, by restating the mean value respect to $\psi_{n\bar{k}}$, with the same ansatz of before:

$$\nabla_{\bar{k}}E_n(\bar{k})  = \braket{\psi_{n\bar{k}}|\hbar\frac{\bar{p}}{m}|\psi_{n\bar{k}}} \quad\iff\quad  \bar{v}_n(\bar{k})=\frac{1}{\hbar} \nabla_{\bar{k}} E_n(\bar{k})  $$

This concludes the proof $\Box$

==Bisognerebbe aggiungere una nota sul fatto che in un cristallo senza impurità questa definizione di velocità porta ad una conduttività elettrica infinita==



