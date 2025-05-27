We have seen in [[Zettelkasten/Master's degree/Structure of Matter/The quantization of the electromagnetic field|The quantization of the electromagnetic field]] that is possible to write the vector potential as:

$$\bar{A}(\bar{r},t) = \sum_{\bar{k}}\sum_s\left[\frac{1}{\sqrt{V}} A_{\bar{k}s}(t)e^{i(\bar{k}\cdot\bar{r})} + \frac{1}{\sqrt{V}} A^*_{\bar{k}s}(t)e^{-i(\bar{k}\cdot\bar{r})}\right]\hat{u}_{\bar{k}s} $$

Or, using the adimensional quantities that will be promoted to operators in the energy:

$$\bar{A}(\bar{r},t) = \sum_{\bar{k}}\sum_s\left[\sqrt{\frac{\hbar}{2\varepsilon_0\omega_kV}} a_{\bar{k}s}e^{i(\bar{k}\cdot\bar{r}-\omega_k t)} + \sqrt{\frac{\hbar}{2\varepsilon_0\omega_kV}} a^*_{\bar{k}s}e^{-i(\bar{k}\cdot\bar{r}-\omega_k t)}\right]\hat{u}_{\bar{k}s} $$

Note that at this point, if one wants, the vector potential can be promoted to an operator.
Moreover, in the Coulomb gauge $\bar{\nabla} \cdot \bar{A} = 0$, the electric and magnetic field are related to this potential through the familiar:

$$\begin{cases} \bar{E} = - \frac{\partial \bar{A}}{\partial t} \\
\bar{B} = \bar{\nabla} \times \bar{A} \end{cases}$$

By performing these calculations, one obtains:

$$
\begin{aligned}
\bar{E}(\bar{r},t) &= i \sum_{\bar{k}}\sum_s\omega_k\left[\sqrt{\frac{\hbar}{2\varepsilon_0\omega_kV}} a_{\bar{k}s}e^{i(\bar{k}\cdot\bar{r}-\omega_k t)} - \sqrt{\frac{\hbar}{2\varepsilon_0\omega_kV}} a^*_{\bar{k}s}e^{-i(\bar{k}\cdot\bar{r}-\omega_k t)}\right]\hat{u}_{\bar{k}s} =  \\
&=i \sum_{\bar{k}}\sum_s \sqrt{\frac{\hbar\omega_k}{2\varepsilon_0V}} \left[ a_{\bar{k}s}e^{i(\bar{k}\cdot\bar{r}-\omega_k t)} -  a^*_{\bar{k}s}e^{-i(\bar{k}\cdot\bar{r}-\omega_k t)}\right]\hat{u}_{\bar{k}s}

\end{aligned}
$$

For the magnetic field, instead of indulging in the perdition of derivation, one does simply, given that we are in vacuum:

$$ 
\begin{aligned}
\bar{B}(\bar{r},t) = \frac{1}{c} \hat{k} \times \bar{E}(\bar{r},t) &= i \sum_{\bar{k}}\sum_s \sqrt{\frac{\hbar\omega_k}{2\varepsilon_0V}} \left[ a_{\bar{k}s}e^{i(\bar{k}\cdot\bar{r}-\omega_k t)} -  a^*_{\bar{k}s}e^{-i(\bar{k}\cdot\bar{r}-\omega_k t)}\right]\frac{\bar{k}}{kc}\times\hat{u}_{\bar{k}s} = \\
&=\sum_{\bar{k}}\sum_s \sqrt{\frac{\hbar}{2\varepsilon_0\omega_kV}} \left[ a_{\bar{k}s}e^{i(\bar{k}\cdot\bar{r}-\omega_k t)} -  a^*_{\bar{k}s}e^{-i(\bar{k}\cdot\bar{r}-\omega_k t)}\right]i\bar{k}\times\hat{u}_{\bar{k}s}
\end{aligned}
$$

So in the end:

$$
\begin{aligned}
\bar{E}(\bar{r},t) &= i \sum_{\bar{k}}\sum_s \sqrt{\frac{\hbar\omega_k}{2\varepsilon_0V}} \left[ a_{\bar{k}s}e^{i(\bar{k}\cdot\bar{r}-\omega_k t)} -  a^*_{\bar{k}s}e^{-i(\bar{k}\cdot\bar{r}-\omega_k t)}\right]\hat{u}_{\bar{k}s} \\
\bar{B}(\bar{r},t) &= \sum_{\bar{k}}\sum_s \sqrt{\frac{\hbar}{2\varepsilon_0\omega_kV}} \left[ a_{\bar{k}s}e^{i(\bar{k}\cdot\bar{r}-\omega_k t)} -  a^*_{\bar{k}s}e^{-i(\bar{k}\cdot\bar{r}-\omega_k t)}\right]i\bar{k}\times\hat{u}_{\bar{k}s}
\end{aligned}
$$

Are, other than the plane wave expansion of the electric and magnetic field, the perfect candidate to operator promotion.
