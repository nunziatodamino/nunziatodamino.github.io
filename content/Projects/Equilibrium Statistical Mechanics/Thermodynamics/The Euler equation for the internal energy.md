>[!info] Euler equation for the internal energy
>Given the fact that $U$ and $S$ are homogeneous function of the first order, the following relation holds:
$$ U = TS + \sum_{i=1}^tP_iX_i $$
Or, without the synthetic notation:
$$ U = TS -pV + \sum_{i=1}^r\mu_iN_i $$

This can be proved easily.
We assume axiomatically that the internal energy is a first-order homogeneous function:

$$ U(\lambda S, \lambda V, \lambda N_1,\dots, \lambda N_r) = \lambda U(S,V,N_1,\dots N_r)  $$

If we proceed to differentiate respect to $\lambda$ the equation in both members we have:

$$ \frac{\partial U}{\partial(\lambda S)}S + \frac{\partial U}{\partial(\lambda V)}V +\sum_{i=1}^r\frac{\partial U}{\partial(\lambda N_i)}N_i = U(S,V,N_1, \dots,N_r)$$

Notice that we are omitting the constant parameters in order to simplify notation.
If we now set the free parameter $\lambda = 1$ we will have:

$$ \frac{\partial U}{\partial S}S + \frac{\partial U}{\partial V }V +\sum_i\frac{\partial U}{\partial N_i}N_i = U(S,V,N_1, \dots, N_r)$$

So that, by using the definitions : $\frac{\partial U}{\partial S} = T$, $\frac{\partial U}{\partial V } = -p$, $\frac{\partial U}{\partial N_i} = \mu_i$ we obtain the fundamental :

$$ TS -pV + \sum_{i=1}^r\mu_iN_i = U(S,V,N_1, \dots, N_r)$$
