Suppose to consider the [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Ising model in the mean field approximation|Ising model in the mean field approximation]], specifically in the nearest neighbor approximation, so that the Hamiltonian of the system is:

$$ 
\begin{aligned}
-\mathscr{H} 
&= -\frac{1}{2}Nzm^2 \hat{J} +(mz\hat{J} +h) \sum_i  s_i 
\end{aligned}
$$

Then one easily find the canonical partition function expression:

$$ 
\begin{aligned}
\mathcal{Z} &= \text{Tr}\ e^{-\beta\mathscr{H}} = \sum_{\{s\}}\ e^{-\frac{1}{2}\beta Nzm^2 \hat{J} +\beta(mz\hat{J} +h) \sum_i  s_i} =\\
&= e^{-\frac{1}{2}\beta Nzm^2 \hat{J} }\sum_{\{s\}}e^{\beta(mz\hat{J} +h) \sum_i  s_i} = e^{-\frac{1}{2}\beta Nzm^2 \hat{J} }\prod_{i}\sum_{\{s\}}e^{\beta(mz\hat{J} +h) s_i} = \\
&=e^{-\frac{1}{2}\beta Nzm^2 \hat{J} } [2\cosh{\beta(mz\hat{J} +h)}]
^N = \\
&=e^{-\frac{1}{2}\beta Nzm^2 \hat{J} +N\ln(2\cosh{\beta(mz\hat{J} +h)})}
\end{aligned}
$$

Using for the trace the same ansatz as [[Projects/Equilibrium Statistical Mechanics/The Ising Model/Infinite range interaction Ising model|Infinite range interaction Ising model]].
From this is simple to find the expression for the bulk free energy:

$$ f_{b} = -\frac{1}{N\beta}\ln\mathcal{Z} = \frac{1}{2}zm^2 \hat{J} -k_BT\ln(2\cosh{\beta(mz\hat{J} +h)}) $$

Is custom to restate the bulk free energy using the dimensionless quantities. One usually divides by $z\hat{J}$ and considers:

$$ f_{b}^* = \frac{f_b}{z\hat{J}}\ ,\quad \vartheta = \frac{k_BT}{z\hat{J}}\ , \quad h^*=\frac{h}{z\hat{J}} $$

So that one writes in the end:

$$ f^*_{b} = \frac{1}{2}m^2  -\vartheta\ln\left(2\cosh{\frac{(m+h^*)}{\vartheta}}\right) $$

Note now that if we define the magnetization via its thermodynamic definition:

$$ m = \left(-\frac{\partial f_b}{\partial h}\right)_T = \tanh(\beta(mz\hat{J} +h)) $$

We obtain the same self consistent equation seen in [[Projects/Equilibrium Statistical Mechanics/The Ising Model/Infinite range interaction Ising model|Infinite range interaction Ising model]] and similar to [[Zettelkasten/Master's degree/Models of Theoretical Physics/Statistical mechanics/Curie-Weiss model solution with h=0|Curie-Weiss model solution with h=0]].