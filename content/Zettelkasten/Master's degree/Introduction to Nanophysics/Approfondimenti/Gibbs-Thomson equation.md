![[Pasted image 20230320163820.png]]
We want to prove that the equilibrium pressure on a spherical interface is larger than a flat one.
Proof:
- First transformation (isothermal compression)
We begin by saying that every state that is shown must be considered an equilibrium state. Starting from the first one we can imply the condition:

$$ \mu^{R_{\infty}}_L(P_e) = \mu_V(P_e) \tag{I} $$

In doing the first transformation, we consider a priori a isothermal compression of the system.
Now we are going to evaluate the Gibbs free energy change, we have:

$$ \Delta G_{tot} =G_{fin}-G_{ini}= \Delta G_V + \Delta G_L$$

But in the hypothesis of an incompressible liquid:

$$ \Delta G_L = 0 \qquad \iff \qquad N(\mu^{R_{\infty}}_L(P(R))-\mu^{R_{\infty}}_L(P_e))=0 \qquad \iff \qquad \mu^{R_{\infty}}_L(P(R))=\mu^{R_{\infty}}_L(P_e) \tag{II}$$

Where $N'$ is the number of particles in the liquid phase.
Now, in order to evaluate the  $\Delta G_V$ one first must compute the Gibbs free energy differential. In general one has $dG = VdP -SdT +\sum_{i=1}^r \mu_idN_i$ , but considering the transformation at equilibrium we have the same rate of particles leaving and entering each component, and also the trasformation is isothermal, so that $dG=VdP$ in our case.
Moreover is useful to consider the ideal gas hypothesis, so that one can utilise the ideal gas law $PV=N k_B T$ and obtain:

$$ \Delta G_V = \int dG = V\int_{P_e}^{P(R)} dP = N k_B T \int_{P_e}^{P(R)} \frac{dP}{P} = N k_B T\ \ln\left(\frac{P(R)}{P_e}\right) $$

Where $N$ is the number of particles in the vapor phase. Using now the alternate expression for the Gibbs free energy :  $\Delta G_V=N(\mu_V(P(R))-\mu_V(P_e))$ one can obtain by comparison:

$$ \mu_V(P(R))-\mu_V(P_e) = k_B T\ \ln\left(\frac{P(R)}{P_e}\right) \tag{III} $$
- Second transformation (cluster formation)
In order to form a spherical cluster one must have a difference in Gibbs free energy of:

$$ \Delta G_{cluster} = \Delta G_{volume} + \Delta G_{surface} = - \frac{4}{3}\pi R^3 \Delta g_{volume} + 4 \pi R^2 \gamma_{VL} $$

The system will naturally evolve to the maxima of this difference, so that:

$$ \frac{\partial \Delta G}{\partial R} = 0 \qquad \iff \qquad \Delta g_{vol} = \frac{2 \gamma_{VL}}{R} $$

Is now useful to recast the $\Delta g_{vol}$ in a different way.  By definition:

$$ \Delta g_{vol} = \frac{\Delta G_{vol}}{V} = \frac{\Delta G_{vol}}{V} \frac{N}{N} = \frac{\Delta G_{vol}}{N} \frac{N}{V} = \frac{N \Delta \mu}{N} \rho = \Delta \mu\  \rho
$$

So one can rewrite the minima condition as:

$$ \Delta \mu\  \rho =  \frac{2 \gamma_{VL}}{R} \qquad \iff \mu_L^R(P(R))- \mu_L^{R_{\infty}}(P(R)) =  \frac{2 \gamma_{VL}}{\rho R} \tag{IV}$$

Lastly we make the remark that, given the fact that the system is now in equilibrium:

$$ \mu_L^R(P(R)) = \mu_V(P(R)) \tag{V}$$

Now is only question to put together the results. 
We begin by rewriting $(IV)$ using $(V)$:

$$ \mu_V(P(R))= \mu_L^{R_{\infty}}(P(R)) +  \frac{2 \gamma_{VL}}{\rho R} $$

Now we substitute the LHS using $(III)$:

$$ \mu_V(P_e) + k_B T\ \ln\left(\frac{P(R)}{P_e}\right) = \mu_L^{R_{\infty}}(P(R)) +  \frac{2 \gamma_{VL}}{\rho R} $$

Now we use $(II)$ in the RHS:

$$ \mu_V(P_e) + k_B T\ \ln\left(\frac{P(R)}{P_e}\right)  = \mu_L^{R_{\infty}}(P_e) +  \frac{2 \gamma_{VL}}{\rho R} $$

Finally we can simplify the chemical potentials using $(I)$, obtain finally:

$$   k_B T\ \ln\left(\frac{P(R)}{P_e}\right)  =  \frac{2 \gamma_{VL}}{\rho R} \qquad \iff \qquad P(R) = P_e \exp \left( \frac{2 \gamma_{VL}}{ k_B T\rho R} \right) $$

Which is the Gibbs-Thomson equation.
It can be useful to recast this equation using the concentration expressed in units of a number density.
In the hypothesis that the vapour is an ideal gas, we can utilise $PV = Nk_BT$, so that $P = \frac{N}{V}k_BT = Ck_B T$.
So that, upon substitution and semplification one obtains the equivalent:

$$C_e(R) = C_e(R_{\infty})  \exp \left( \frac{2 \gamma_{VL}}{ k_B T\rho R} \right)$$
