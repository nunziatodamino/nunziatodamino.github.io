We can build intensive parameters of a thermodynamic system by differentiating the internal energy function as defined by the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Thermodynamics/The entropy maximum postulates|entropy postulates]].
By differentiating $U=U(S,V,N_1, \dots, N_r)$, we obtain:

$$ dU = \left(\frac{\partial U}{ \partial S}\right)_{V,N_1,\dots, N_r} dS + \left(\frac{\partial U}{ \partial V}\right)_{S,N_1,\dots, N_r} dV + \sum_{i=1}^r \left(\frac{\partial U}{ \partial N_i}\right)_{V,N_1,\dots,N_{i-1},N_{i+1},\dots N_r} dN_i $$

We now define:

>[!info]  **Definition of temperature, pressure and chemical potential respect to the internal energy**
>
>$$
\begin{aligned}
\left(\frac{\partial U}{ \partial S}\right)_{V,N_1,\dots, N_r} &\equiv T \\
\left(\frac{\partial U}{ \partial V}\right)_{S,N_1,\dots, N_r} &\equiv -p \\
\left(\frac{\partial U}{ \partial N_i}\right)_{V,N_1,\dots,N_{i-1},N_{i+1},\dots N_r} &\equiv \mu_i
\end{aligned}
$$

As respectively temperature, pressure and chemical potential respect to species $i$.
These are intensive parameters of the system.
This permits to write the differential of the internal energy in a more readable form:

$$ dU = T dS + - p dV + \sum_{i=1}^r \mu_i\  dN_i $$

Finally, due to local invertibility, we can write:

$$ T=T(S,V,N_1,\dots,N_r) \qquad p=p(S,V,N_1,\dots,N_r)\qquad \mu_i=\mu_i(S,V,N_1,\dots,N_r) $$

These are called equations of state.
Note that these equation are first order homogeneous function, i.e. for the temperature:

$$ T(\lambda S,\lambda V,\lambda N_1,\dots,\lambda N_r)= T(S,V,N_1,\dots,N_r) \qquad \forall \lambda >0$$
