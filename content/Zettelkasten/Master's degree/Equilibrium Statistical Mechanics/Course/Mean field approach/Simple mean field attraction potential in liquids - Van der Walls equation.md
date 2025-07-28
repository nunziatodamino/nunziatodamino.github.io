Let's study the simplest case possible for a liquid: each particle feel a 1-body potential in which there is extrusion for $r\leq r_0$ (hard sphere hypothesis) and attraction for $r>r_0$
The potential prototype is:

$$ 
\phi_{MF}(r_i) = 
\begin{cases}
+\infty &r_i\leq r_0 \\
u &r_i>r_0
\end{cases}
$$

Where $u<0$ and depends on the liquid density in general. 
Assuming a constant density $\rho = N/V$ then a the simplest $u$ prototype is $u \propto -\rho \propto -N/V$.
From this one has as shown in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Mean field configurational partition function in liquids|Mean field configurational partition function in liquids]]:

$$ 
\begin {aligned}
\mathcal{Q}^{MF}_N &= \left[\int_V d\bar{r}_i\ e^{-\beta  \phi_{MF}(\bar{r}_i)}\right]^N = \left[\int_{V_- \cup V_+} d\bar{r}_i\ e^{-\beta  \phi_{MF}(\bar{r}_i)}\right]^N = \\
&= \left[\int_{V_+} d\bar{r}_i\ e^{-\beta u}\right]^N = \left[(V_+e^{-\beta u}\right]^N = \left[(V-V_-)e^{-\beta u}\right]^N \\
&=\left[\left(V-(N-1)\frac{4}{3}\pi r_0^3\right)e^{-\beta u}\right]^N \sim (V-Nb)^Ne^{-\beta N u}

\end{aligned}
$$

Where $V_-$ is the volume of space occupied by all the sphere. 
Note that we are implicitly assuming that each particle occupies a volume $b = \frac{4}{3}\pi r_0^3$ and that the number of particles is so large that $N-1 \sim N$.
(The idea in the mean field is that while the potential is tailored over one particle, this has to take account the presence of the others. We do not have a precision as in 2-body potential, but something as "take in account that in a region $V$ a region $V_-$ somewhere is reserved to particles").
Now we can evaluate the free energy of the system and then the major thermodynamic properties.
By what we have seen in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Ensemble theory/Canonical partition function decomposition|Canonical partition function decomposition]]:

$$ 
\begin{aligned}
F_N &= k_BT\ln N! + 3Nk_BT\ln\Lambda - k_BT \ln \mathcal{Q}_N  =\\
&= k_BT\ln N! + 3Nk_BT\ln\Lambda- Nk_BT \left[\ln(V-Nb) -\beta  u  \right] 
\end{aligned}
$$

From this we can evaluate the system pressure:

$$ P = -\left( \frac{\partial F_N}{\partial V} \right)_T = \frac{Nk_BT}{V-Nb} -N \left( \frac{\partial u}{\partial V} \right)_T $$

As we recall that $u$ is in general a constant proportional to liquid density. Given this $u \propto -\frac{N}{V} = -a\frac{N}{V}$ we can continue and obtain:

$$ P = \frac{Nk_BT}{V-Nb} - a \frac{N^2}{V^2} $$

Which is **the Van der Walls equation of state for non ideal gases/liquids**, or better for a so called ideal Van der Walls fluid, as this equation as is describes poorly the behavior of real fluid.