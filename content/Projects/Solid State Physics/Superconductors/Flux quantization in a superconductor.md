Let's consider a superconductor ring at room temperature (or simply at $T>T_c$) and let's place it in a constant magnetic field.
The temperature is decreased below $T_c$ and the field lines are expelled from the interior of the ring for the Meissner effect.

==Then the field is switched off, leaving a magnetized ring trapping a finite flux inside it. Let us prove that this flux is indeed quantized.

We can show by that the magnetic flux enclosed by the ring is quantized.

![[Immagini/Flux quantization in a superconductor.png|500]]

We consider a path $\gamma$ encircling the aperture of the ring as in the picture. We consider now the Maxwell's equation $\nabla \times \bar {H}=\bar{J}$ in its integral form. Considering that we have no magnetic field inside the material due to [[Projects/Solid State Physics/Superconductors/Meissner-Ochsenfeld effect|Meissner-Ochsenfeld effect]] we obtain:

$$ 0= \oint \bar{J} \cdot d \bar{l} $$

By using now the expression of the current density found in [[Projects/Solid State Physics/Superconductors/The Ginzburg-Landau theory|The Ginzburg-Landau theory]] we have:

$$ 0= \oint_{+\gamma} -\left[\frac{\hbar e}{m_e}\nabla\vartheta +\frac{2e^2}{m_e}\bar{A}\right]|\psi(\bar{r})|^2 \cdot d \bar{l} \iff 0= \oint_{+\gamma} \left[\frac{\hbar e}{m_e}\nabla\vartheta +\frac{2e^2}{m_e}\bar{A}\right] \cdot d \bar{l} $$

We observe that this expression is independent on the order parameter modulus.
Now we observe the following: if $\gamma=\partial\Sigma$ :

$$ \oint_{\partial\Sigma}\bar{A}\cdot d\bar{l} = \oint_{\Sigma}\nabla \times\bar{A}\cdot d\bar{\Sigma} = \oint_{\Sigma}\bar{B}\cdot d\bar{\Sigma}=\Phi_{\Sigma}(\bar{B})   $$

And also:

$$ \oint_{-\partial\Sigma}\nabla\vartheta\cdot d\bar{l}=\oint_{+\partial\Sigma}\nabla\vartheta\cdot d\bar{l} = 2\pi n \qquad n \in \mathbb{Z} $$

Because the result is rotation-sense invariant.
By combining the results we obtain:

$$ \oint_{-\partial\Sigma} \frac{\hbar e}{m_e}\nabla\vartheta\cdot d \bar{l} =\oint_{\partial\Sigma}\frac{2e^2}{m_e}\bar{A} \cdot d \bar{l} \iff \hbar \pi n=e \Phi_{\Sigma}(\bar{B}) $$

Obtaining in the end:

$$ \Phi_{\Sigma}(\bar{B})=n \frac{ \pi \hbar}{e} \qquad n \in \mathbb{Z} $$

Finally we can define **fluxoid** or **flux quantum** as:

$$\frac{ \pi \hbar}{e}=\frac{  h}{2e} \simeq 2.067 \cdot 10^{-15}\ \text{Wb}$$

