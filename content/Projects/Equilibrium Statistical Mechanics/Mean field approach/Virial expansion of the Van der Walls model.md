We know [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Simple mean field attraction potential in liquids - Van der Walls equation|that]] :

$$ P = \frac{Nk_BT}{V-Nb} - a \frac{N^2}{V^2} $$

We want to relate this to the [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Virial expansion in mean field liquids|Virial expansion in mean field liquids]]. One has:

$$ 
\begin{aligned}
\frac{P}{k_BT} &= \frac{\frac{N}{V}}{1-\frac{N}{V}b} - \frac{a}{k_BT} \frac{N^2}{V^2} = \frac{\rho}{1-\rho b} - \frac{a}{k_BT} \rho^2 = \\ 
&=\rho(1+b\rho + b^2\rho^2 + \dots) - \frac{a}{k_BT} \rho^2 = \\
&= \rho + \left( b -\frac{a}{k_BT}\right) \rho^2 +b^2\rho^3 +\mathcal{O}(\rho^4) 
\end{aligned} =
$$

Where we considered that $\frac{1}{1-x} = 1 + x +x^2 + \dots$ is the geometric series.
We have then: 

$$ B_2 =  b-\frac{a}{k_BT} \qquad B_3 = b^2 \qquad B_n = b^{n-1}\ , n\geq 3 $$

This leads to the definition of the **Boyle temperature** : is the temperature $T_B$ such that $B_2(T_B) = 0$ or equivalently:

$$ T_B = \frac{a}{k_Bb} = \frac{27}{8}T_C$$

Where we rewrite this respect to the [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Van der Walls isotherms analysis|critical temperature in a VdW liquid]]. Note that $T_B >T_C$
