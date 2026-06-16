Considering the [[Canonical quantization of the electromagnetic field]], is clear that the next step is to promote the e.m. field themselves to operators. 
This is straightforward, as we wrote them in the derivation of the [[Electromagnetic energy respect the vector potential in the Coulomb gauge]] (specifically [[Evaluation of the total energy of an e.m. field w.r.t the vector potential in the Coulomb gauge|here]]) respect the predecessor of the annihilation and creation operators:

$$ \hat{\bar{E}}(\bar{r},t)
=i\sum_{\bar{k}}\sum_s \sqrt{\frac{\hbar \omega_{\bar{k}}}{2\varepsilon_0V}}\hat{\bar{\epsilon}}_{\bar{k},s}
\left[
\hat{a}_{\bar{k},s}\,e^{i(\bar{k}\cdot\bar{r}-\omega_{\bar{k}}t)}
-
\hat{a}_{\bar{k},s}^{\dagger}\,e^{-i(\bar{k}\cdot\bar{r}-\omega_{\bar{k}}t)}
\right]. $$

$$ \hat{\bar{B}}(\bar{r},t) = i \sum_{\bar{k}}\sum_s  \sqrt{\frac{\hbar\omega_{\bar{k}}}{2\varepsilon_0V}}\ \left(\frac{\hat{k}}{c}\wedge \hat{\bar{\epsilon}}_{\bar{k},s}\right)
\left[
\hat{a}_{\bar{k},s}\,e^{i(\bar{k}\cdot\bar{r}-\omega_{\bar{k}}t)}
-
\hat{a}_{\bar{k},s}^{\dagger}\,e^{-i(\bar{k}\cdot\bar{r}-\omega_{\bar{k}}t)}
\right] = \frac{\hat{k}}{c}\wedge \hat{\bar{E}}(\bar{r},t) . $$

As one can see the classical relation between electric and magnetic field is still preserved.
### Expectation value on single mode state

Is now of interest to evaluate the expected value of these fields over a member of the [[Fock space]].  To simplify things lets restrict ourselves on the case of a pure monocromatic wave with a single polarization, i.e.:

$$ \ket{0, \dots, n_{ks}, \dots, 0, \dots} \equiv \ket{n} $$

By using the properties found in [[Action of the annihilation and creation operator over a state]], we have:

$$ \braket{n|\hat{E}|n} = 0 \qquad \braket{n|\hat{B}|n} = 0 $$

As the creation and annihilation creates and destroy a photon, giving a zero dot product in both case.

While for the squares:

$$\braket{n|\hat{E}^2|n} = \frac{\hbar \omega}{V} \frac{1}{\varepsilon_0} \left( n+ \frac{1}{2}  \right) \qquad \braket{n|\hat{B}^2|n} = \frac{\hbar \omega}{V} \mu_0 \left( n+ \frac{1}{2}  \right)$$

In this way is clear that:

$$\braket{n|u_{em}|n} = \braket{n|\frac{1}{2}\varepsilon_0E^2 + \frac{1}{2\mu_0}B^2|n} = \frac{\hbar \omega}{V} \left( n+ \frac{1}{2}\right) = \frac{\braket{H}}{V}$$

Coherent with the result we expect. 