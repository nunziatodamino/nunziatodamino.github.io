We want to study the effect of an external constant force over electrons in a solid.
We start by building the appropriate Hamiltonian.
Given an external force $\bar{F}_{ext}$, it's easy to assign it a potential by using the relation: $-\nabla V_{ext}=\bar{F}_{ext}\iff V_{ext}=-\bar{F}_{ext} \cdot \bar{r}$.
Then the Hamiltonian will differ by the crystal Hamiltonian $H_0$ by the additional term:

$$ H = H_0 -\bar{F}_{ext} \cdot \bar{r}$$

Given that the crystal Hamiltonian is invariant under any Bravais lattice vector $\bar{R}$ translation, this implies that the crystal Hamiltonian commutes with the translation operator of vector $\bar{R}$:

$$ [H_0, T_{\bar{R}}]=0 $$

Let's now evaluate the commutator $[H, T_{\bar{R}}]$:

$$[H, T_{\bar{R}}]=[H_0-\bar{F}_{ext} \cdot \bar{r}, T_{\bar{R}}] = [-\bar{F}_{ext} \cdot \bar{r}, T_{\bar{R}}] = [T_{\bar{R}},\bar{F}_{ext} \cdot \bar{r}] $$

In order to simplify further, let's evaluate this commutator on a test function $f(\bar{r})$:

$$\begin{aligned}  
\left[T_{\bar{R}},\bar{F}_{ext} \cdot \bar{r}\right]f(\bar{r}) &=[T_{\bar{R}}(\bar{F}_{ext} \cdot \bar{r})-(\bar{F}_{ext} \cdot \bar{r})T_{\bar{R}}]f(\bar{r}) =\\
&=[\bar{F}_{ext} \cdot (\bar{r}+\bar{R})]f(\bar{r}+\bar{R})-(\bar{F}_{ext} \cdot \bar{r})f(\bar{r}+\bar{R}) = [\bar{F}_{ext} \cdot \bar{R}]f(\bar{r}+\bar{R})=\\ &= [(\bar{F}_{ext} \cdot \bar{R})T_{\bar{R}}]f(\bar{r})  \end{aligned}$$

This permits us to write : $[H, T_{\bar{R}}]=(\bar{F}_{ext} \cdot \bar{R})T_{\bar{R}}$
Now we can use the [[Ehrenfest's Theorem]]. In this case, for our observable there is no explicit time dependence , i.e. $\frac{\partial T_{\bar{R}}}{\partial t}=0$, so we have:

$$ \frac{d}{dt}\braket{T_{\bar{R}}} = \frac{i}{\hbar}\braket{[H,T_{\bar{R}}]} $$

And consequently:

$$ 
\begin{aligned}
\frac{d}{dt}\braket{T_{\bar{R}}} = \frac{i}{\hbar}\braket{[H,T_{\bar{R}}]} \\
\frac{d}{dt}\braket{T_{\bar{R}}} = \frac{i}{\hbar}\braket{(\bar{F}_{ext} \cdot \bar{R})T_{\bar{R}}}\\
\frac{d}{dt}\braket{T_{\bar{R}}} =(\bar{F}_{ext} \cdot \bar{R}) \frac{i}{\hbar}\braket{T_{\bar{R}}}\\
\end{aligned}
$$

We can evaluate $\braket{T_{\bar{R}}}$ directly by evaluating on a function that satifies the Bloch theorem:

$$
\begin{aligned} \braket{T_{\bar{R}}} &= \braket{\psi_{n\bar{k}}|T_{\bar{R}}|\psi_{n\bar{k}}} = \int d^3 \bar{r}\ e^{-i\bar{k}\cdot\bar{r}}u^*_{n\bar{k}}(\bar{r})T_{\bar{R}}[e^{-i\bar{k}\cdot\bar{r}}u_{n\bar{k}}(\bar{r})] = \int d^3 \bar{r}\ e^{-i\bar{k}\cdot\bar{r}}u^*_{n\bar{k}}(\bar{r})[e^{-i\bar{k}\cdot(\bar{r}+\bar{R})}u_{n\bar{k}}(\bar{r}+\bar{R})] \\&= e^{i\bar{k}\cdot\bar{R}}\int d^3 \bar{r}\ u^*_{n\bar{k}}(\bar{r})u_{n\bar{k}}(\bar{r}) = e^{i\bar{k}\cdot\bar{R}}
\end{aligned}
$$

Where we use implicitly that the functions $u_{n\bar{k}}(\bar{r})$ are invariant by Bravais lattice translation and normalised.
Then by performing the calculations we obtain:

$$ 
\begin{aligned}
\frac{d}{dt}\braket{T_{\bar{R}}} &=(\bar{F}_{ext} \cdot \bar{R}) \frac{i}{\hbar}\braket{T_{\bar{R}}}\\
i \frac{d \bar{k}}{dt} \cdot \bar{R} e^{i\bar{k}\cdot\bar{R}}&=(\bar{F}_{ext} \cdot \bar{R}) \frac{i}{\hbar} e^{i\bar{k}\cdot\bar{R}} \\
\hbar\frac{d \bar{k}}{dt} &= \bar{F}_{ext}
\end{aligned}
$$

The expression, that can be rewritten as $\frac{d(\hbar \bar{k})}{dt} = \bar{F}_{ext}$ leads to the conclusions that the change in crystal momentum for an electron is due to the application of an external constant force, i.e. a constant electric field.
