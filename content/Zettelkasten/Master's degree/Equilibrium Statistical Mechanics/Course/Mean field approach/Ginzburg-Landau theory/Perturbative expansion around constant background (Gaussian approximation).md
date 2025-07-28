Suppose that we have a situation in which we want to include the fluctuation in our order parameter in our mean field theory.
The simplest case one can study is :

$$ \phi(\bar{r}) = \braket{\phi(\bar{r})} +\delta\phi(\bar{r}) = \phi_0 +\delta\phi(\bar{r}) $$

I.e. to assume a constant order parameter along the system plus a small perturbation.
Then if we consider the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Ginzburg-Landau theory/The Ginzburg-Landau theory|the Ginzburg-Landau functional]]:

$$ 
\begin{aligned}
\mathscr{F}_{\text{eff}} &=\beta\mathscr{H}_{\text{eff}} = \int d^dr\ \left[\mathscr{L}(\phi(\bar{r})) +\frac{K}{2} (\nabla\phi(\bar{r}))^2 \right] \\
&= \int d^dr\ \left[ at\phi^2 + \frac{b}{2}\phi^4 +\frac{K}{2} (\nabla\phi(\bar{r}))^2 \right] 
\end{aligned}
$$

And plug the expansion using the perturbation, we obtain:

$$ 
\begin{aligned}
\beta\mathscr{H}_{\text{eff}} &= \int d^dr\  at[\phi_0^2+2\phi_0\delta\phi + (\delta\phi)^2] + \frac{b}{2}[\phi_0^4+4\phi^2_0(\delta\phi)^2 + (\delta\phi)^4 + 4\phi_0^3\delta\phi +\\

&+ 2\phi_0^2(\delta\phi)^2+4\phi_0(\delta\phi)^3] +\frac{K}{2} (\nabla[\phi_0 +\delta\phi(\bar{r})])^2  = \\
&=\int d^dr \left[at\phi_0^2+\frac{b}{2}\phi_0^4\right] + \int d^dr \left( 2at\phi_0+2b\phi_0^3\right)\delta\phi +\left(at+6\phi_0^2\right)(\delta\phi)^2 + \\
& +2b\phi_0(\delta\phi)^3+ \frac{b}{2}(\delta\phi)^4 +\frac{K}{2}(\nabla\delta\phi(\bar{r}))^2

\end{aligned}
$$

We observe the following. The coefficient of $\delta\phi$ is 0. This because if want solve the equilibrium condition as in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Ginzburg-Landau theory/Equilibrium condition for the order parameter in Ginzburg–Landau theory|Equilibrium condition for the order parameter in Ginzburg–Landau theory]] or [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Ginzburg-Landau theory/Equilibrium condition for the order parameter in the Ising model using the Ginzburg-Landau theory|Equilibrium condition for the order parameter in the Ising model using the Ginzburg-Landau theory]] arrives to the Euler-Lagrange equation : $2at\phi_0+2b\phi_0^3 = 0$. Continuing one has:

$$ \beta\mathscr{H}_{\text{eff}} =V \left[at\phi_0^2+\frac{b}{2}\phi_0^4\right] + \int d^dr\left(at+6\phi_0^2\right)(\delta\phi)^2 + 2b\phi_0(\delta\phi)^3+ \frac{b}{2}(\delta\phi)^4 +\frac{K}{2}(\nabla\delta\phi(\bar{r}))^2 $$

Now we perform the so called **Gaussian approximation**, i.e. we neglect term higher than $(\delta\phi)^3$.
Than the functional becomes:

$$ \beta\mathscr{H}_{\text{eff}} =V \left[at\phi_0^2+\frac{b}{2}\phi_0^4\right] + \int d^dr\left(at+6\phi_0^2\right)(\delta\phi)^2 +\frac{K}{2}(\nabla\delta\phi)^2 $$

In order to work better we set $A \equiv \left[at\phi_0^2+\frac{b}{2}\phi_0^4\right]$, $m^2 \equiv 2\left(at+6\phi_0^2\right)$ and $\delta\phi \equiv \varphi$.
Than the expression becomes:

$$ \beta\mathscr{H}_{\text{eff}} =AV + \frac{1}{2}\int d^dr\ m^2\varphi^2 + \frac{1}{2}\int d^dr\ K(\nabla\varphi)^2 \equiv AV + I_1+I_2$$

Now we can simplify this by considering the Fourier series expansion $\varphi = \frac{1}{V} \sum_{\bar{q}} \varphi_{\bar{q}} e^{i \bar{q} \cdot \bar{r}}$.
Then we consider separately the 2 integrals on the RHS:

- For $I_1$

$$
\begin{aligned}
I_1 &= \frac{1}{2}\int d^dr\ m^2\varphi^2 = \frac{1}{2}\int d^dr\ m^2 \left(\frac{1}{V} \sum_{\bar{q}} \varphi_{\bar{q}} e^{i \bar{q} \cdot \bar{r}}\right)\left(\frac{1}{V} \sum_{\bar{q}} \varphi_{\bar{q}'} e^{i \bar{q}' \cdot \bar{r}}\right) = \\
&= \frac{m^2}{2V^2}\sum_{\bar{q}}\sum_{\bar{q}'}\varphi_{\bar{q}}\varphi_{\bar{q}'}\int d^dr\ e^{i (\bar{q}+\bar{q}') \cdot \bar{r}} = \frac{m^2}{2V^2}\sum_{\bar{q}}\sum_{\bar{q}'}\varphi_{\bar{q}}\varphi_{\bar{q}'}V\delta_{\bar{q}, -\bar{q}'} = \\
&= \frac{m^2}{2V}\sum_{\bar{q}}\varphi_{\bar{q}}\varphi_{-\bar{q}}
\end{aligned}
$$
- For $I_2$

$$ 
\begin{aligned}
I_2&= \frac{1}{2}\int d^dr\ K(\nabla\varphi)^2 =  \frac{1}{2}\int d^dr\ K\nabla \left(\frac{1}{V} \sum_{\bar{q}} \varphi_{\bar{q}} e^{i \bar{q} \cdot \bar{r}}\right)\cdot\nabla\left(\frac{1}{V} \sum_{\bar{q}} \varphi_{\bar{q}'} e^{i \bar{q}' \cdot \bar{r}}\right) = \\
&= \frac{K}{2V^2}\sum_{\bar{q}}\sum_{\bar{q}'}(i\bar{q})\cdot(i\bar{q}')\varphi_{\bar{q}}\varphi_{\bar{q}'}\int d^dr\ e^{i (\bar{q}+\bar{q}') \cdot \bar{r}} = \frac{K}{2V^2}\sum_{\bar{q}}\sum_{\bar{q}'}(i\bar{q})\cdot(i\bar{q}')\varphi_{\bar{q}}\varphi_{\bar{q}'}V \delta_{\bar{q}, -\bar{q}'} = \\
&= \frac{K}{2V}\sum_{\bar{q}} q^2\varphi_{\bar{q}}\varphi_{-\bar{q}}
\end{aligned}
$$

Where we used in both integral the [[Zettelkasten/Master's degree/Basic Mathematics/Fourier Series in 3-D|orthogonality property of the Fourier basis]].
Now, assuming that $\varphi$ is a real function, this implies that $\varphi_{\bar{q}}\varphi_{-\bar{q}} = |\varphi_{\bar{q}}|^2$, so that, in the end we can write the Ginzburg-Landau functional as

$$ \beta\mathscr{H}_{\text{eff}} =AV +\frac{m^2}{2V}\sum_{\bar{q}}|\varphi_{\bar{q}}|^2+\frac{K}{2V}\sum_{\bar{q}} q^2|\varphi_{\bar{q}}|^2 = AV +\frac{1}{2V}\sum_{\bar{q}} (m^2+Kq^2)|\varphi_{\bar{q}}|^2$$

This implies that the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Ginzburg-Landau theory/Partition function coarse-graining|canonical partition function]] can be written easily.
First we change variables to the Fourier basis. One can [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Ginzburg-Landau theory/Functional measure for a real scalar field|see]] that this change is unitary (the determinant of the Jacobian is 1). So we can write directly:

$$\mathcal{Z}_N  =\int \mathscr{D} \varphi_q\  e^{-\beta\mathscr{H}_{\text{eff}}[\varphi_q]} $$

Now we write the measure using the definition. Before we were integrating on the cells in direct space, with this change we integrate on the cells in reciprocal space. Note also that we don't need do integrate over all the reciprocal space, but just on the cells that satisfies the constraint $|\bar{q}| \leq \Lambda \equiv \frac{\pi}{a}$, as these vectors guarantees the convergence of the Fourier series (this is equivalent to the fact that the integration extends to the first Brillouin zone).
So we have in a first instance

$$ \int \mathscr{D} \varphi_q = \int_\mathbb{R}d\varphi_0 \times \lim_{N^*\to +\infty} \int_{\mathbb{R}^{N^*}}\int_{\mathbb{R}^{N^*}}\prod_{|\bar{q}| < \Lambda} d\Re e [\varphi_q]d\Im m [\varphi_q] \times \int_\mathbb{R^s}\prod_{\bar{q} \in \partial BZ}d\varphi_q $$

Where $N^*$ is the number of meaningful cells in reciprocal space. Not that we have a double integration to account the fact that $\varphi_q$ is a complex number. The first integral is the zero mode, the one associated with $\bar{q}=0$ at the center of the first Brillouin zone and is real.
While the last integral contains boundary terms (i.e. the edges (that we imagine to be $s$) of the first Brillouin zone). Also in this case they are real.
**Given that our goal is to evaluate the partition function, we absorb the zero mode and the boundary mode in a constant as they are independent on the non-zero modes.**
We observe now that we are over-counting, as the vectors $\bar{q}$ and $-\bar{q}$ satisfying the constrain represent the same state. So we have 2 ways to correct this. Or simply:

$$ \int \mathscr{D} \varphi_q \propto \frac{1}{2} \lim_{N^*\to +\infty} \int_{\mathbb{R}^{N^*}}\int_{\mathbb{R}^{N^*}}\prod_{|\bar{q}| < \Lambda} d\Re e [\varphi_q]d\Im m [\varphi_q] $$

Or more in line with literature we consider just the positive $\bar{q}$:

$$ \int \mathscr{D} \varphi_q \propto \lim_{N^{**}\to +\infty} \int_{\mathbb{R}^{N^{**}}}\int_{\mathbb{R}^{N^{**}}}\prod_{0<|\bar{q}| < \Lambda} d\Re e [\varphi_q]d\Im m [\varphi_q] $$

Where $N^{**} =N^*/2$.

Now we can finally continue and evaluate a closed expression for the partition function. By simplifying the notation and calling $\Re e [\varphi_q] \equiv x_q$, $\Im m [\varphi_q] \equiv y_q$, we have $|\varphi_q|^2 =(x_q^2+y_q^2)$ so we can write:

$$ 
\begin{aligned}
\mathcal{Z}_N &\propto \int_{\mathbb{R}^{N}} \int_{\mathbb{R}^{N}} \prod_{0<|\bar{q}| < \Lambda} dx_q dy_q\exp \left[-AV -\frac{1}{2V}\sum_{\bar{q}} (m^2+Kq^2)(x_q^2+y_q^2) \right] \propto \\
&\propto \int_{\mathbb{R}^{N}} \int_{\mathbb{R}^{N}} \prod_{0<|\bar{q}| < \Lambda} dx_q dy_q\exp \left[-\frac{1}{2V}\sum_{\bar{q}} (m^2+Kq^2)(x_q^2+y_q^2) \right] 
\end{aligned}
$$

Notice that $\int_{\mathbb{R}^{N}} \int_{\mathbb{R}^{N}} \prod_{0<|\bar{q}| < \Lambda} dx_q dy_q\exp (-AV)$ is divergent in reciprocal space, but if we go back in direct space is equal to the cells volume by a constant, i.e. $Ve^{-AV}$.
Notice now that the set over which we are summing is the same of the product symbol, i.e. to be explicit $\sum_{\bar{q}} = \sum_{0<|\bar{q}|<\Lambda}$. Considering this, and consider the property $\prod_A f\prod_A g = \prod_A fg$:

$$ 
\begin{aligned}
\mathcal{Z}_N &\propto \int_{\mathbb{R}^{N}} \int_{\mathbb{R}^{N}} \prod_{0<|\bar{q}| < \Lambda} dx_q dy_q\prod_{0<|\bar{q}| < \Lambda}\exp \left[-\frac{1}{2V} (m^2+Kq^2)(x_q^2+y_q^2) \right] \propto \\
&\propto \int_{\mathbb{R}^{N}} \int_{\mathbb{R}^{N}} \prod_{0<|\bar{q}| < \Lambda} dx_q dy_q\exp \left[-\frac{1}{2V} (m^2+Kq^2)(x_q^2+y_q^2) \right] \propto \\
&\propto \int_{\mathbb{R}^{N}} \prod_{0<|\bar{q}| < \Lambda} dx_q \left[-\frac{1}{2V} (m^2+Kq^2)x_q^2 \right]\int_{\mathbb{R}^{N}} \prod_{0<|\bar{q}| < \Lambda}dy_q\exp \left[-\frac{1}{2V} (m^2+Kq^2)y_q^2 \right]  \\
\end{aligned}
$$

Which are $2N$ [[Zettelkasten/Master's degree/Models of Theoretical Physics/Mathematical methods/Gaussian integrals|Gaussian integrals]]. One obtains directly:

$$ \mathcal{Z}_N \propto \prod_{0<|\bar{q}| < \Lambda} \frac{2\pi V}{m^2+Kq^2} $$

And from this one can evaluate the free energy (apart from a constant shift):

$$ \beta F_N = -\ln\mathcal{Z}_n \iff F_n = -k_BT \sum_{0<|\bar{q}| < \Lambda} \ln\left( \frac{2\pi V}{m^2+Kq^2} \right) $$

