Suppose to consider the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Ensemble theory/Canonical partition function decomposition|Canonical partition function decomposition]]:

$$ F_N = F_N^{\text{ideal gas}} - k_BT \ln\chi_N$$

Then if one want to evaluate the pressure of the system:

$$P = -\left( \frac{\partial F_N}{\partial V} \right)_T = \frac{Nk_BT}{V} - k_BT \frac{\partial \ln\chi_N }{\partial V} $$

Note now, that if we divide both sides by $k_BT$, then we can recast the RHS as a function of the density $\rho = \frac{N}{V}$ which we recall to be constant in a mean field approach:

$$\frac{P}{k_BT} = \rho -  \frac{1}{\chi_N}\frac{\partial \chi_N }{\partial V}\frac{\partial\rho}{\partial\rho} = \rho + \frac{N}{V^2}  \frac{1}{\chi_N}\frac{\partial \chi_N }{\partial \rho} =  \rho + \rho^2 \left( \frac{1}{N\chi_N}\frac{\partial \chi_N }{\partial \rho} \right)  $$

If we now consider $\frac{1}{N\chi_N}\frac{\partial \chi_N }{\partial \rho}  \equiv h(\rho) = A + B\rho + C\rho^2 +\dots$ i.e. we are expanding for diluted systems ($\rho \ll 1$):

$$
\begin{aligned}
\frac{P}{k_BT} &=  \rho + \rho^2 \left(A + B\rho + C\rho^2 +\dots\right) = \\
               &=  \rho + A\rho^2 + B\rho^3 + \dots
\end{aligned}
$$

Note that the coefficients are usually called:

$$
\begin{aligned}
\frac{P}{k_BT} &=  \rho + B_2\rho^2 + B_3\rho^3 + \dots
\end{aligned}
$$

Note also that is an **approximation** of the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Liquids/Weakly interacting particles - Cluster expansion|cluster expansion]] procedure.