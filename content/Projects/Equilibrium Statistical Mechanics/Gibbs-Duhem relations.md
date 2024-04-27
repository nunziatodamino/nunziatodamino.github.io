#### GD relation for the internal energy

Suppose we assume axiomatically that the internal energy is a first-order homogeneous function of $(S,V,N)$:

$$ U(\lambda S, \lambda V, \lambda N) = \lambda U(S,V,N)  $$

If we proceed to derivate respect to $\lambda$ the equation in both members we have:

$$ \frac{\partial U}{\partial(\lambda S)}S + \frac{\partial U}{\partial(\lambda V)}V +\frac{\partial U}{\partial(\lambda N)}N = U(S,V,N)$$
If we now set the free parameter $\lambda = 1$ we will have:

$$ \frac{\partial U}{\partial S}S + \frac{\partial U}{\partial V }V +\frac{\partial U}{\partial N}N = U(S,V,N)$$

So that, by using the definitions : $\frac{\partial U}{\partial S} = T$, $\frac{\partial U}{\partial V } = -P$, $\frac{\partial U}{\partial N} = \mu$ we obtain the fundamental :

$$ TS -PV + \mu N = U(S,V,N) $$
And upon differentiation, given the fact that the variable are $(S,V,N)$, we obtain also the differential version:

$$ dU = TdS-PdV+\mu dN $$

On the other hand, if we differentiate $U$ in its general form, i.e. considering that everything is a variable, we have:

$$ dU = TdS + SdT -PdV - VdP +\mu dN + N d\mu $$

Comparing the 2 equations we obtain the Gibbs-Duhem relation for the internal energy:

$$ SdT - VdP + Nd\mu =0 $$
