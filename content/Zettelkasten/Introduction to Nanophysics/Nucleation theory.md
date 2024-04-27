One of the major synthesis mechanisms for nanoparticles is nucleation, so is extremely important to know how it works.

(The same argument in detail : [[Nucleation theory - Nuclei formation]])
When a phase change occurs, it doesn't happen abruptly, but it starts in the studied material in selected zone called nuclei.
This is a stochastic process, and its probability its different if we consider that it happens homogeneously or heterogeneously. In our treatment we will consider only homogeneous nucleation, so that nucleation can happen uniformly in our material. 
We have that the nucleus is stable and continues to grow, only if its free energy variation is negative. This can be achieved when the nucleus formation reaches a critical radius:

$$ R^* = \frac{2 \gamma}{\Delta g_V}  = \frac{2 \gamma}{\rho k_B T \ln P^*}$$

Strictly related to the supersaturation factor $P^*$, evaluated for each nucleus thanks to the [[Gibbs-Thomson equation]]:

$$ P(R) = P_e \exp \left( \frac{2 \gamma_{VL}}{ k_B T\rho R} \right) $$

(The same argument in detail : [[Nucleation theory - Growth regimes]])

Once the nucleus is formed and stable, it grows, in order to minimize its free energy variation. 
We can distinguish 2 growth regimes, relative to external pressure in our sample.

- DLA (Diffusion Limited Aggregation ) regime
This happen when the external pressure is greater than the $P(R)$ for each cluster. This implies a supersaturation factor greater than 1 for each cluster, leading to $\Delta G<0$ and hence a growth for each cluster.
The radius of the cluster follows the growth law:

$$ R^2(t) = R^2_0 + D K_1 t \qquad \text{where}\quad K_1= \frac{(C_S-C_e)^2}{(C_P-C_S)(C_P-C_e)} $$

Where D is the diffusion coefficient, $C_P,C_S,C_e$ are respectively the nucleated particle concentration, the solute concentration in the matrix and the equilibrium solute concentration in the matrix.

- Ostwald Ripening regime
This happen when the external pressure is greater than some $P(R)$, but not all.  This implies a supersaturation factor greater than 1 for the clusters in this condition, leading to $\Delta G<0$, and so a growth, while the others while shrink, leading to an overall competitive growth in favor of the bigger particles.

The radius of the (growing) cluster follows the growth law:

$$ R^3 = R^3_0 +DK_2t \qquad \text{where}\quad K_2= 3\left(\frac{2 \gamma_{VL}}{ k_B T\rho }\frac{ C_e(R_{\infty})}{C_P}\right)$$
