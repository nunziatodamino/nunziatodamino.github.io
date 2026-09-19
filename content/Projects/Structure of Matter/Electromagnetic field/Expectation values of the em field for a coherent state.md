Recalling what we saw in [[Coherent state]]:

$$  
\begin{aligned}  
\hat a|\Phi\rangle &= \Phi|\Phi\rangle \qquad
\langle\Phi|\hat a^\dagger = \Phi^*\langle\Phi|  
\end{aligned}  
$$

It's easy to see that for the number operator:

$$  
\begin{aligned}  
\langle\Phi|\hat N|\Phi\rangle &= |\Phi|^2 =\bar{n} \\

\langle\Phi|\hat N^2|\Phi\rangle  
&=\langle\Phi|\hat a^\dagger\hat a\hat a^\dagger\hat a|\Phi\rangle=\langle\Phi|\hat a^\dagger(\mathbb{1}+\hat a^\dagger\hat a)\hat a|\Phi\rangle =\\  
&=\langle\hat N\rangle +\langle\Phi|\hat a^{\dagger2}\hat a^2|\Phi\rangle\\  
&=\bar n+|\Phi|^4 =\bar n+\bar n^2.  
\end{aligned}  
$$

So that if one wants to evaluate the variance of the number operator in a coherent state gets:

$$  
\begin{aligned}  
\sigma_N^2  
&=\langle\hat N^2\rangle-\langle\hat N\rangle^2  
=\bar n,\\  
\sigma_N&=\sqrt{\bar n}=\sqrt{\langle\hat N\rangle}.  
\end{aligned}  
$$

The expansion in [[Coherent state]] gives $P(n)=|\langle n|\Phi\rangle|^2=e^{-|\Phi|^2}|\Phi|^{2n}/n!$, establishing the [[Poisson distribution]]. Equality of the mean and variance alone would not establish this.
The field expectation values follow explicitly from the coherent-state eigenvalue equation.

$$
\begin{aligned}
\hat{\bar{E}}&=i\sqrt{\frac{\hbar\omega}{2\varepsilon_0V}}\bar{\varepsilon} \left(\hat a e^{i(\bar{k}\cdot\bar{r}-\omega t)} -\hat a^\dagger e^{-i(\bar{k}\cdot\bar{r}-\omega t)}\right) \\ 

\hat{\bar{B}}&=i\sqrt{\frac{\hbar}{2\varepsilon_0\omega V}} (\bar{k}\wedge\bar{\varepsilon}) \left(\hat a e^{i(\bar{k}\cdot\bar{r}-\omega t)} -\hat a^\dagger e^{-i(\bar{k}\cdot\bar{r}-\omega t)}\right)  
\end{aligned}
$$

Recalling that $\phi$ is a complex number, and respect what we saw for the expectation value of the number operator we can write it in exponential form : $\Phi=\sqrt{\bar{n}}e^{i\theta}$.
Finally we can proceed to the evaluation of the mean values.
Setting $\xi=\bar{k}\cdot\bar{r}-\omega t$ for convenience, for the electric field:

$$\begin{aligned}
\langle\Phi|\hat{\bar E}(\bar r,t)|\Phi\rangle
&=
i\sqrt{\frac{\hbar\omega}{2\varepsilon_0V}}\,
\bar\varepsilon
\left(
\langle\Phi|\hat a|\Phi\rangle e^{i\xi}
-
\langle\Phi|\hat a^\dagger|\Phi\rangle e^{-i\xi}
\right)
\\
&=
i\sqrt{\frac{\hbar\omega}{2\varepsilon_0V}}\,
\bar\varepsilon
\left(
\Phi e^{i\xi}
-
\Phi^*e^{-i\xi}
\right)
\\
&=
i\sqrt{\frac{\hbar\omega}{2\varepsilon_0V}}\,
\bar\varepsilon\sqrt{\bar n}
\left(
e^{i(\xi+\theta)}
-
e^{-i(\xi+\theta)}
\right).
\end{aligned}$$

Hence in the end

$$
\begin{aligned}
\langle\Phi|\hat{\bar{E}}|\Phi\rangle &=-2\sqrt{\frac{\hbar\omega}{2\varepsilon_0V}} \bar{\varepsilon}\sqrt{\bar{n}} \sin(\bar{k}\cdot\bar{r}-\omega t+\theta)
\end{aligned}
$$

Analogously for the magnetic field following the same ansatz:

$$\langle\Phi|\hat{\bar{B}}|\Phi\rangle =-2\sqrt{\frac{\hbar}{2\varepsilon_0\omega V}} (\bar{k}\wedge\bar{\varepsilon})\sqrt{\bar{n}} \sin(\bar{k}\cdot\bar{r}-\omega t+\theta)$$]
Now we evaluate the squares, for the electric field:

$$  
\hat{\bar{E}}^2=-\frac{\hbar\omega}{2\varepsilon_0V} \left[\hat a^2e^{2i\xi}+\hat a^{\dagger2}e^{-2i\xi}-\hat a\hat a^\dagger-\hat a^\dagger \hat a\right]  
$$

where $\xi=\bar{k}\cdot\bar{r}-\omega t$. Recalling that $\hat a\hat a^\dagger=\mathbb{1}+\hat N$ and using $\cos (2\alpha) = 1 - 2\sin^2\alpha$:

$$  
\begin{aligned}
\langle\Phi|\hat{\bar{E}}^2|\Phi\rangle &=-\frac{\hbar\omega}{2\varepsilon_0V} \left[\Phi^2e^{2i\xi}+\Phi^{*2}e^{-2i\xi}-1-2\bar{n}\right]  \\  
&=\frac{2\hbar\omega}{\varepsilon_0V} \left[\bar{n}\sin^2(\bar{k}\cdot\bar{r}-\omega t+\theta)+\frac14\right]  
\end{aligned}
$$

Analogously for $\hat{\bar{B}}^2$.

$$  
\langle\Phi|\hat{\bar{B}}^2|\Phi\rangle =\frac{2\hbar}{\varepsilon_0\omega V}k^2 \left[\bar{n}\sin^2(\bar{k}\cdot\bar{r}-\omega t+\theta)+\frac14\right]  
$$

Finally we can show that one can obtain the classical result by time averaging. Let’s consider:

$$  
\bar{u}=\lim_{T\to\infty}\frac1T\int_0^Tdt \langle\Phi|\hat u|\Phi\rangle  =\lim_{T\to\infty}\frac1T\int_0^Tdt \left[\frac12\varepsilon_0\langle(\hat{\bar{E}})^2\rangle+ \frac1{2\mu_0}\langle(\hat{\bar{B}})^2\rangle\right]  
$$

Substituting the expectation values of the squared fields gives

$$
\begin{aligned}
\overline{u}_{\mathrm{em}}
&=
\lim_{T\to\infty}
\frac1T
\int_0^T
\left[
\frac{\varepsilon_0}{2}
\frac{2\hbar\omega}{\varepsilon_0V}
\left(
\bar n\sin^2(\xi+\theta)+\frac14
\right)
\right.
\\
&\qquad\qquad\qquad\left.
+
\frac{1}{2\mu_0}
\frac{2\hbar\omega\mu_0}{V}
\left(
\bar n\sin^2(\xi+\theta)+\frac14
\right)
\right]dt
\\
&=
\frac{2\hbar\omega}{V}
\lim_{T\to\infty}
\frac1T
\int_0^T
\left[
\bar n\sin^2(\xi+\theta)+\frac14
\right]dt.
\end{aligned}
$$

Given that (proof [[integral]]) :

$$
\lim_{T\to\infty}
\frac1T
\int_0^T
\sin^2\left(
\bar k\cdot\bar r-\omega t+\theta
\right)dt
=
\frac12
$$

We obtain in the end

$$
\begin{aligned}
\overline{u}_{\mathrm{em}} =
\frac{2\hbar\omega}{V}
\left(
\frac{\bar n}{2}+\frac14
\right)=
\frac{\hbar\omega}{V}
\left(
\bar n+\frac12
\right).
\end{aligned}
$$

Hence,

$$
\boxed{
\overline{u}_{\mathrm{em}}
=
\frac{\langle H\rangle }{V}
}
$$
