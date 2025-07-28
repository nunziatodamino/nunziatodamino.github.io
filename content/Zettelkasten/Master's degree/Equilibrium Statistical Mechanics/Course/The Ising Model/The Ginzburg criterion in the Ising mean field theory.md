We derived for the general Ising model that, from [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/Fluctuation-dissipation relation in the Ising model|Fluctuation-dissipation relation in the Ising model]]:

$$
\begin{aligned}
\chi &= \sum_{i,j}\frac{\partial\braket{s_i}}{\partial h_j} = \beta \sum_{i,j}G_C(i,j) 
\end{aligned}
$$

But in the context of a mean field theory $\braket{s_i} = \braket{s} = m$, i.e. the spin random field is homogeneous and stationary.
So $\forall i, j$ we have $G_C(i,j) = \braket{s^2}-\braket{s}^2 = \sigma^2_s$, so that one can write:

$$
\begin{aligned}
\chi^{MF} = \beta N^2 \sigma_s^2 
\end{aligned}
$$

Or by dividing by $m^2 = \braket{s}^2$ and refactoring:

$$ \frac{\sigma_s^2}{\braket{s}^2} = \frac{1}{\beta N^2} \frac{\chi^{MF}}{\braket{s}^2} $$

Now we recall that fluctuations for the spin are defined as $\Delta s \equiv \frac{\sigma_s^2}{\braket{s}^2}$.
Then, the condition of neglecting fluctuations, i.e. $\Delta s \ll 1$ is equivalent to:

$$ \frac{1}{\beta N^2} \frac{\chi^{MF}}{\braket{s}^2} \ll 1 \iff \chi^{MF} \ll \beta N^2\braket{s}^2$$

Or if one defines the total average magnetization as $N\braket{s} = Nm =\braket{M}$ one obtain the more interesting:

$$\chi^{MF} \ll \beta \braket{M}^2$$

This is called the **Ginzburg criterion** for the the Ising model.
In a system we measure the total net magnetization and the total susceptibility.
If they satisfy this relationship then the system can be described by a mean field approximation as this condition is equivalent to the one in which the fluctuations are negligible.