Let's revisit the [[Projects/Equilibrium Statistical Mechanics/Thermodynamics/Intensive parameters|Intensive parameters]] definition.
Instead of defining $U=U(S,V,N_1, \dots, N_r)$, we define: 

$$ (V,N_1, \dots, N_r) \equiv \{X_t\} \qquad t=1, \dots, r+1 $$

As a sort of generalized displacements.
Then we have:

$$ dU = \left(\frac{\partial U}{ \partial S}\right)_{V,X_1,\dots, X_t} dS + \sum_{i=1}^t \left(\frac{\partial U}{ \partial X_i}\right)_{V,X_1,\dots,X_{i-1},X_{i+1},\dots X_t} dX_i $$

Then we define:

$$
\begin{aligned}
\left(\frac{\partial U}{ \partial S}\right)_{V,X_1,\dots, X_t} &\equiv T \\
\left(\frac{\partial U}{ \partial X_i}\right)_{V,X_1,\dots,X_{i-1},X_{i+1},\dots X_t} &\equiv P_i
\end{aligned}
$$

We call $T$ temperature (notice it has the same definition as the one seen [[Projects/Equilibrium Statistical Mechanics/Thermodynamics/Intensive parameters|here]]), and $P_i$ generalized pressures.
Notice we obtain the previous scheme if $P_1=-p$.

The internal energy differential then becomes even more compact:

$$ dU = TdS + \sum_{i=1}^tP_i\ dX_i $$