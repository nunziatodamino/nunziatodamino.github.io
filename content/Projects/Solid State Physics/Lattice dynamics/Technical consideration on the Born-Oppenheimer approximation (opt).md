
We share here technical consideration on [[Projects/Solid State Physics/Lattice dynamics/The Born-Oppenheimer approximation|The Born-Oppenheimer approximation]] beyond the scope of the exam.

- Technically the core of the adiabatic hypothesis should be proved in the following way:
We consider the application of the nuclear kinetic energy operator to the eigenfunction $\Psi(\bar{R},\bar{r}) = \Phi_N(\bar{R})\Phi_e(\bar{R}, \bar{r})$ in the position basis:

$$ \begin{aligned}
-\frac{\hbar^2}{2M}\sum_I^N\nabla^2_I(\Phi_N(\bar{R})\Phi_e(\bar{R}, \bar{r}))= -\frac{\hbar^2}{2M}\sum_I^N\Phi_e(\bar{R}, \bar{r})\nabla^2_I\Phi_N(\bar{R})+\Phi_N(\bar{R})\nabla^2_I\Phi_e(\bar{R}, \bar{r})+ 2 \nabla_I\Phi_N(\bar{R})\cdot\nabla_I\Phi_e(\bar{r,}\bar{R}) 
\end{aligned}$$

Now we want to prove that:

$$ \Phi_e(\bar{R}, \bar{r})\nabla^2_I\Phi_N(\bar{R}) \gg\Phi_N(\bar{R})\nabla^2_I\Phi_e(\bar{R}, \bar{r})+ 2 \nabla_I\Phi_N(\bar{R})\cdot\nabla_I\Phi_e(\bar{r,}\bar{R})  $$

If we are capable to do so, this will be equivalent to the [[Projects/Solid State Physics/Lattice dynamics/Justification of the adiabatic approximation|Justification of the adiabatic approximation]] we provided.
One can prove that

$$ \frac{\Phi_N(\bar{R})\nabla^2_I\Phi_e(\bar{R}, \bar{r}) }{2 \nabla_I\Phi_N(\bar{R})\cdot\nabla_I\Phi_e(\bar{r,}\bar{R})} \sim \sqrt{\frac{m_e}{m_N}} \sim 10^{-3/2} $$

So that one can justify the hypothesis $\nabla_{\bar{R}_I} \Phi_e(\bar{R},\bar{r}) = 0$.

- We are separating the equation on the basis that $\bar{R}$ is constant in the first equation, and this is the most common approach in literature. But is wrong, and is not the most general. One should do instead (cfr. Bassani-Grassano):

$$ \begin{cases}
(\hat{T}_e \hat{V}_{eN}+\hat{V}_{ee})\Phi_e(\bar{R}, \bar{r}) = C_n(\bar{R})\Phi_e(\bar{R}, \bar{r}) \\
(\hat{T}_N +C_n(\bar{R})-\hat{V}_{NN})\Phi_N(\bar{R}, \bar{r}) = E \Phi_N(\bar{R}, \bar{r})
\end{cases} $$

This complicates things, because in the molecular part we have an additional term (considering the ground state as customary):

$$ V_{\text{Nuclear}} =\mathcal{E}(\bar{R})-\hat{V}_{NN} $$

Yet, this seems mathematically more solid. Nothing changes in the physics obviously, because this is just an additive term given that the the nuclear coordinates are considered fixed.