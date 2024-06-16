Suppose we want to write the [[Projects/Computational methods for Material science/Molecular dynamics/Time correlation and auto-correlation functions|auto-correlation function]] for the velocity vector. Then:

$$ c_{vv}(t) = \frac{\text{Cov}(\bar{v}(t),\bar{v}(0))}{\sigma^2_\bar{v}}= \frac{\braket{(\bar{v}(t)-\braket{\bar{v}})\cdot(\bar{v}(0)-\braket{\bar{v}})}}{\braket{v^2}-\braket{\bar{v}}^2} $$

In isotropy condition we have $\braket{v}=0$, so that we obtain in the end:

$$ c_{vv}(t) = \frac{\braket{\bar{v}(t)\cdot\bar{v}(0)}}{\braket{v^2}}=\frac{m}{3k_bT}\braket{\bar{v}(t)\cdot\bar{v}(0)} $$

Where the last implication is inferred by the [[equipartion theorem]].
We now analyze in detail its behaviour.
First is easy to observe that for $t\to 0$ we have $c_{vv}(0)=\frac{m}{3k_bT}\braket{v^2}=1$, because the mean squared velocity is time independent. Moreover for $t \to \infty$ we have $\lim_{t \to \infty}c_{vv}(t)=\braket{\bar{v}}^2=0$ (In general for auto-correlation functions of the type $\braket{A(t)A(0)}$ is assumed that for large time they become uncorrelated, i.e. $\lim_{t\to\infty}\braket{A(t)A(0)}=\braket{A}^2$).

We assume that even if this is an asymptotic study, in reality the transition from 1 to 0 happens rather quickly, due to random collisions in the system, instead the following happens:

![[Immagini/Velocity correlation function.png|500]]

The “well” region has negative correlation which can happen only if $\braket{\bar{v}(t)\cdot\bar{v}(0)}=\braket{v(t)v(0)\cos\vartheta(t)}<0 \iff \cos\vartheta(t)<0$, i.e. an angle between velocities over $\pm \pi/2$. 
This behavior is typically seen in dense systems at lower temperatures and corresponds to a “backscattering” event caused by collisions with neighboring atoms, so that the general rule of thumb is to associate the graph to the left to a solid and the graph to the right to a gas.
We can say more by saying that an oscillating decay is typical of a solid for the same reason, in addition to the fact that we have oscillation in the system:

![[Immagini/Velocity correlation function_2.png|500]]