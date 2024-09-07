Ginzburg and Landau asserted that the superconducting state could be characterized by a complex “order parameter” $\psi(\bar{r})$ , which vanishes above $T_c$, and whose magnitude measures the degree of superconducting order at position $\bar{r}$ below $T_c$.

**From the perspective of the BCS theory the order parameter can be viewed as a one-particle wave function describing the position of the center of mass of a Cooper pair. Since all Cooper pairs are in the same two-electron state, a single function suffices for the description of the system.** 

Because the order parameter does not refer to the relative coordinate of the two electrons in the pair, the description of a superconductor in terms of $\psi(\bar{r})$ is valid only for phenomena that vary slowly on the scale of the dimensions of the pair, as seen in [[Zettelkasten/Master's degree/Solid State Physics/Superconductors/Cooper pair formation|Cooper pair formation]], this is $\sim 10^3\mathring{\text{A}}$, i.e. if we write

$$ \psi(\bar{r}) = |\psi(\bar{r})|e^{i\vartheta{(\bar{r})}}  $$

We are implying that $\nabla( |\psi(\bar{r})|) \sim 0$. (or equivalently $\nabla \rho(\bar{r}) \sim 0$ given that $\rho(\bar{r})=|\psi(\bar{r})|^2$ )

Let's consider the simplest case of this order parameter: the constant case.
Suppose that at the ground state Cooper pairs are uniformly distributed throughout the material, then each pair is in a translationally invariant state that does not depend on the center of mass coordinate, so that we can assume the function constant in module.
Note that in this approximation $\nabla( |\psi(\bar{r})|) = 0$ (as we wished) but $\nabla \psi(\bar{r}) \neq 0$ due to the exponential phase.

We can now associate a current particle density to $\psi(\bar{r})$ using the quantum mechanical definition:

$$ \bar{j} = -\frac{i\hbar}{2m}\left[\psi^*\nabla\psi-\psi\nabla\psi^*\right] $$

In the presence of an external magnetic field this can be modified by the formal substitution $\bar{p}\to\bar{p}-q\bar{A} \iff -i\hbar\nabla\to-i\hbar\nabla -q\bar{A}$ considering as $\bar{A}$ the vector potential associated to the magnetic field, and as $q$ the charge of the carriers considered.

We have then

$$ \bar{j} = -\frac{i\hbar}{2m}\left[\psi^*\nabla\psi-\psi\nabla\psi^*\right] -\frac{q}{m}\bar{A}\psi^*\psi $$

A fundamental assumption of the Ginzburg-Landau theory is that the current flowing in a superconductor characterized by order parameter $\psi(\bar{r})$ in the presence of a magnetic field given by the vector potential $A(\bar{r})$ is given by the ordinary quantum-mechanical formula for the current due to a particle of charge $—2e$ and mass $2m_e$ (i.e.,the Cooper pair itself) described by a wave function $\psi(\bar{r})$, namely:

$$\bar{j_s}=q\bar{j} \qquad q=-2e;\  m=2m_e$$

So, by substitution, we obtain

$$ \bar{j}_s = -\frac{i\hbar q}{2m}\left[\psi^*\nabla\psi-\psi\nabla\psi^*\right] -\frac{q^2}{m}\bar{A}\psi^*\psi = \frac{i\hbar e}{2m_e}\left[\psi^*\nabla\psi-\psi\nabla\psi^*\right] -\frac{2e^2}{m_e}\bar{A}\psi^*\psi $$

Finally we simplify using $\psi(\bar{r}) = |\psi(\bar{r})|e^{i\vartheta{(\bar{r})}}$ with the condition $\nabla( |\psi(\bar{r})|) \sim 0$. We obtain:

$$\begin{aligned}
\bar{j}_s &= \frac{i\hbar e}{2m_e}\left[i|\psi(\bar{r})|e^{-i\vartheta{(\bar{r})}}\nabla\vartheta|\psi(\bar{r})|e^{i\vartheta{(\bar{r})}}+i|\psi(\bar{r})|e^{i\vartheta{(\bar{r})}}\nabla\vartheta|\psi(\bar{r})|e^{-i\vartheta{(\bar{r})}}\right] -\frac{2e^2}{m_e}\bar{A}|\psi(\bar{r})|^2\\
&= -\left[\frac{\hbar e}{m_e}\nabla\vartheta +\frac{2e^2}{m_e}\bar{A}\right]|\psi(\bar{r})|^2
\end{aligned}
$$

Finally we make the following observation: If we take the curl of this expression, considering that $\nabla \times \nabla \vartheta =0$ and we can define $|\psi(\bar{r})|^2\equiv n_s$, we obtain [[Zettelkasten/Master's degree/Solid State Physics/Superconductors/Old phenomenological theory - The London's equations|the second London's equation]].


$$ \vec j_s = -\frac{en_{cp}\hbar }{m_e}\left(\nabla \theta -\frac{q}{\hbar }\vec A\right) $$