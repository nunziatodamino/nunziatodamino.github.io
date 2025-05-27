We begin by recall that the transfer matrix in the 1D spin-1 Ising model [[Projects/Equilibrium Statistical Mechanics/The Ising Model/Explicit form and property of the transfer matrix for the 1D Ising model|is]]:

$$ T = 
\begin{Vmatrix}
e^{K+h} & e^{-K} \\
e^{-K} & e^{K-h}
\end{Vmatrix} $$

Given that most of the properties of the Ising model depends on this matrix eigenvalues, we evaluate them explicitly:

$$ 
\begin{aligned}
|T-\lambda\mathbb{1}| 
&= (e^{K+h}-\lambda)(e^{K-h}-\lambda)-e^{-2K}= \\ 
&= e^{2K}-e^{-2K} - \lambda(e^{K-h} + e^{K+h}) + \lambda^2= \\
&= \frac{e^{2K}-e^{-2K}}{2} - \lambda e^{K}\cosh(h) + \frac{\lambda^2}{2}= 0 
\end{aligned}
$$

Leading to the eigenvalues:

$$
\begin{aligned}
\lambda 
&= e^{K}\cosh(h) \pm \sqrt{ e^{2K}\cosh^2(h)-(e^{2K}-e^{-2K})}= \\
&= e^{K}\cosh(h) \pm \sqrt{ e^{2K}(1+\sinh^2(h))-(e^{2K}-e^{-2K})}= \\
&= e^{K}\cosh(h) \pm \sqrt{ e^{2K}\sinh^2(h)+e^{-2K}}= \\
\end{aligned}
$$

So that we have :

$$ \lambda_+ = e^{K}\cosh(h) + \sqrt{ e^{2K}\sinh^2(h)+e^{-2K}} \qquad \lambda_- = e^{K}\cosh(h) - \sqrt{ e^{2K}\sinh^2(h)+e^{-2K}}$$

From this result we can obtain derive all the important quantities.
### Bulk free energy

From the result found in [[Projects/Equilibrium Statistical Mechanics/The Ising Model/The transfer matrix method - some general properties|here]]:

$$ f_B(\beta, K, h) = -k_BT  \ln \lambda_+ $$

So we find:

$$ 
\begin{aligned}
f_B(\beta, K, h) &= -k_BT  \ln \left[ e^{K}\cosh(h) + \sqrt{ e^{2K}\sinh^2(h)+e^{-2K}}  \right] =\\
&= -J - k_BT  \ln \left[ \cosh(h) + \sqrt{ \sinh^2(h)+e^{-4K}}  \right] =\\
\end{aligned}
$$

Note that, using the first expression for easiness:

$$ \lim_{h \to 0} f_B(\beta, K, h) = -k_BT  \ln \left[ e^{K} + e^{-K}  \right] = -k_BT  \ln \left[ 2 \cosh(K)  \right] $$

We obtain the result found in [[Projects/Equilibrium Statistical Mechanics/The Ising Model/Analytic solution for the 1D spin-1 Ising model without magnetic field|Analytic solution for the 1D spin-1 Ising model without magnetic field]] for the bulk free energy.
We now study the temperature limiting cases:
#### $T \to 0^{+}$ limit

Given that $K = J/k_BT$ and $h = H/k_BT$, for $T\to 0^{+}$ we have $K \to +\infty$ and $h \to +\infty$.
So we have:

$$ \lim_{T \to 0^+}f_B(\beta, K, h) =-k_BT  (K+h) = -J-H\\ $$

#### $T \to +\infty$ limit

Given that $K = J/k_BT$ and $h = H/k_BT$, for $T\to +\infty$ we have $K \to 0^{+}$ and $h \to 0^{+}$.
We have

$$ \lim_{T \to +\infty}f_B(\beta, K, h) =-J-k_BT  \ln 2  $$

The important thing here is that the bulk free energy is linear in temperature in the $T \to +\infty$ limit. 

### Energy

We can find an analytical expression for the mean energy from the free energy. We have in [[Projects/Equilibrium Statistical Mechanics/Ensemble theory/The canonical ensemble (NVT)|The canonical ensemble (NVT)]] for the energy per spin:

$$\braket{e} = f_B-T\left(\frac{\partial f_b}{\partial T}\right)_H $$
