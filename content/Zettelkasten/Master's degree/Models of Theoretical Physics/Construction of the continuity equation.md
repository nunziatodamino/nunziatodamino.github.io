We consider the following problem: we have a system composed of point-like particles, and given a volume $V$ we want to monitor the particles exiting and entering in this volume from the boundary $\partial V$.
First we observe that is impossible to give a specific monitoring for each particle for a typically sized ($\sim10^{23}$ particles) system, see [[Approach of the statistical mechanics]], so we must resort to a macroscopic description.
We begin by defining a particle density which is time independent, such as:

$$ \int_{V} d^3 r'\ \rho_n(\bar{r}', t_0) = N =N_{V}(t_0) $$

In order to simplify, one can choose $t_0=0$. For the exact specification for how to define a particle density in this way see [[Definition of a time independent particle density in a system|here]].
Note also that the number of particles in the volume is strictly dependent on the fixed time $t_0$ (i.e. the snapshot frame considered) and the volume chosen, that explains the pedantic notation

In order to build the diffusion equation let's consider the number of particles inside a volume $V$ at 2 specific time-frames, separated by an interval $\Delta t$, and we take the difference:

$$ \int_{V} d^3 r'\ \rho_n(\bar{r}', t_0) =N_{V}(t_0) \qquad \int_{V} d^3 r'\ \rho_n(\bar{r}', t_0 + \Delta t)  =N_{V}(t_0 + \Delta t) $$

$$N_{V}(t_0 + \Delta t) - N_{V}(t_0) = \int_{V} d^3 r'\ \left[\rho_n(\bar{r}', t_0 + \Delta t)-\rho_n(\bar{r}', t_0)\right] $$

Now, in order to continue, we define a new quantity. 
Given a surface $d\bar{\Sigma}$ centered around a point $\bar{r}_0$, we define $\Delta N$ the number of particles flowing through the surface in a time interval $\Delta t$ as:

$$ \Delta N = \Delta t\ \bar{j}(\bar{r}_0, t_0) \cdot d\bar{\Sigma}= \Delta t\ \bar{j}(\bar{r}_0, t_0) \cdot \hat{n}(\bar{r}_0)d\Sigma $$

Note also, from this definition, that:

$$\frac{\Delta N}{\Delta t} =\bar{j}(\bar{r}_0, t_0) \cdot d\bar{\Sigma}$$

We call $\bar{j}(\bar{r}_0, t_0)$ current density at the position $\bar{r}_0$ and at the time $t_0$.
By returning to our argument, one can write:

$$N_{V}(t_0 + \Delta t) - N_{V}(t_0) = - \int_{\partial V}d\bar{\Sigma}\cdot \bar{j}(\bar{r}', t_0) \Delta t$$

By convention the outward flux (particles leaving V) is positive. In a diffusion problem we expect that $N_{V}(t_0 + \Delta t)<N_{V}(t_0)$, so that $\Delta N<0$. So the minus sign is there for this reason.
By putting all together we have:

$$\int_{V} d^3 r'\ \left[\rho_n(\bar{r}', t_0 + \Delta t)-\rho_n(\bar{r}', t_0)\right] = - \int_{\partial V}d\bar{\Sigma}\cdot \bar{j}(\bar{r}', t_0) \Delta t$$

$$\int_{V} d^3 r'\ \frac{1}{\Delta t}\left[\rho_n(\bar{r}', t_0 + \Delta t)-\rho_n(\bar{r}', t_0)\right] = - \int_{\partial V}d\bar{\Sigma}\cdot \bar{j}(\bar{r}', t_0)$$

If we consider the limit $\Delta t \to 0$, we obtain in the LHS $\lim_{\Delta t \to 0} \frac{1}{\Delta t}\left[\rho_n(\bar{r}', t_0 + \Delta t)-\rho_n(\bar{r}', t_0)\right] =\frac{\partial \rho_n}{\partial t}_{t=t_0}$, but given the fact that we have not had made any particular hypothesis on $t_0$ we can choose any $t$, so that we consider the generic partial derivative:

$$\int_{V} d^3 r'\ \frac{\partial \rho_n(\bar{r}',t)}{\partial t} = - \int_{\partial V}d\bar{\Sigma}\cdot \bar{j}(\bar{r}', t)$$

By applying now the divergence theorem to the RHS, we obtain:

$$\int_{V} d^3 r'\ \frac{\partial \rho_n(\bar{r}',t)}{\partial t} = - \int_{ V}d^3 r'\ \bar{\nabla}\cdot \bar{j}(\bar{r}', t)$$

>[!info] **Continuity equation in integral form**
>$$\int_{V} d^3 r'\left[ \frac{\partial \rho_n(\bar{r}',t)}{\partial t}+\bar{\nabla}\cdot \bar{j}(\bar{r}', t)\right]  = 0$$

Under the hypothesis in which the integrated functions are $C^1(V)$, and the integral is of the Lebesgue type, we can also write

>[!info] **Continuity equation in differential form**
>$$ \frac{\partial \rho_n(\bar{r},t)}{\partial t}+\bar{\nabla}\cdot \bar{j}(\bar{r}, t)  = 0$$
