 In [[The Gruneisen parameter]] we saw an in-between approach for solving the problem, without using the explicit expansion of the potential in its [[Anharmonic effects in solids|anharmonic terms]].
 
 In this note we will follow the last procedure in order to evaluate the Gruneisen parameter.
 
 Let's consider a monoatomic linear chain of lattice constant $a$ and consider a small displacement from this $r = a + u$ where $u<<a$
 
 We can then write the potential in powers of $(r-a)$ and expand it up to the cubic term (as seen in the [[Thermal expansion]] note, this is the meaningful term to obtain a non-zero thermal expansion coefficient).
We have:

$$ V(r)\simeq V(a) + \frac{1}{2}\frac{d^2V}{dr^2}_{|r=a} (r-a)^2 +\frac{1}{6}\frac{d^3V}{dr^3}_{|r=a} (r-a)^3 $$

For simplicity we call $\tilde{k}\equiv \frac{d^2V}{dr^2}_{|r=a}$ and $\tilde{g}\equiv \frac{d^3V}{dr^3}_{|r=a}$
If there is thermal expansion there is a variation of the lattice constant $a \to a'$, and another potential energy form:

$$ V(r')\simeq V(a') + \frac{1}{2}\frac{d^2V}{dr'^2}_{|r'=a'} (r'-a')^2 +\frac{1}{6}\frac{d^3V}{dr'^3}_{|r'=a} (r'-a')^3 $$

Where $r'=a'+u$. We also set here $\tilde{k}'\equiv \frac{d^2V}{dr'^2}_{|r'=a'}$ and $\tilde{g}'\equiv \frac{d^3V}{dr'^3}_{|r'=a'}$
We now try to relate the derivatives. If we set $V''(r)\equiv g(r)$ we can expand the function up to the first order around $a$ and then evaluate it in $a'$.

$$\begin{aligned} 
g(r) & \simeq g(a)+(r-a)g'(a) \\
g(a') & \simeq g(a)+(a'-a)g'(a) \\
V''(a') & \simeq V''(a)+(a'-a)V'''(a) \\
\frac{d^2V}{dr^2}_{|r=a'} & \simeq \frac{d^2V}{dr^2}_{|r=a}+(a'-a)\frac{d^3V}{dr^3}_{|r=a} \\
\end{aligned} $$

Moreover we observe that:

$$ \frac{dV}{dr'}= \frac{dV}{dr}\frac{dr}{dr'}= \frac{dV}{dr}\frac{d}{dr'}(a+u \pm a')=\frac{dV}{dr} $$

Upon these observation one can write:

$$ \tilde{k}' = \tilde{k}+(a'-a)\tilde{g} \equiv \tilde{k}+\delta x\tilde{g} $$

By considering $\omega^2 = \frac{\tilde{k}}{m}$ **(?????????????????????)**, we obtain by differentiation of both sides:

$$  2 \omega d\omega = \frac{d\tilde{k}}{m} $$

If we define $d\tilde{k} = \tilde{k}-\tilde{k}'$ and use the Gruneisen approximation $\omega \sim V^{-\gamma}$ , we can obtain:

$$\begin{aligned}  
2 (-\gamma) V^{-2\gamma}\frac{dV}{V} & = \frac{\tilde{g}}{m} \delta x \\
\gamma \frac{3 \delta x}{a} & = -\frac{\tilde{g}}{2m} \frac{\delta x}{V^{-2\gamma}} \\
\gamma  & = -\frac{\tilde{g}}{6m} \frac{1}{\omega^2} a\\
\gamma  & = -\frac{\tilde{g}}{6\tilde{k}}a \\
\end{aligned}$$

So, if one has the functional form of the potential energy and knows the lattice constant,  can then evaluate the specific value of the Gruneisen parameter.

Assuming a Lennard-Jones potential, we obtain $\gamma= \frac{7}{2}$ , comparable with experimental values.


