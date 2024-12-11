We want to build some models in order to describe the size equations for the melting temperature in a nanocluster.

## Pawlow model

### First order theory

![[Images/Pasted image 20230308145743.png|300]]

We begin by considering a spherical cluster of atoms embedded in a solid (we also say embedded in a matrix) such that the bulk melting point of what constitutes the nanocluster is much lower that the bulk melting point of the matrix.
We imagine then that all the cluster undergoes an equilibrium phase transition, i.e. the number of atoms in the cluster going to the liquid phase is the same of the number of atoms going to the solid phase.
This must implies that:

$$\mu_L(T,P) = \mu_S(T,P)$$

Where we recall that the chemical potential is defined as:

$$\mu(T,P) = \left(\frac{\partial G}{\partial N}\right)_{T,P}$$

We now expand the chemical potential up the the first order term in an interval of the material triple point (==penso basti scegliere una coppia T,P tale che questa si trovi sulla linea di liquefazione del materiale embedded==) we obtain, by simple mathematical consideration:

$$ \mu(T,P) = \mu(T_0,P_0) +\left. \frac{\partial \mu}{\partial T}\right \vert_{T_0,P_0} (T-T_0) +\left. \frac{\partial \mu}{\partial P}\right \vert_{T_0,P_0} (P-P_0) + o(T-T_0)^2 +o(P-P_0)^2  $$

If we  then proceed to differentiate this relation we have:

$$ d\mu =   +\left. \frac{\partial \mu}{\partial T}\right \vert_{T_0,P_0} dT +\left. \frac{\partial \mu}{\partial P}\right \vert_{T_0,P_0} dP $$

Where we have omitted the second order terms.
Now we have to make some consideration in order to esplicitate the derivates in the expansion.
In order to this one must use the Gibbs-Duhem relation for the internal energy:

$$ SdT - VdP + Nd\mu =0 $$
We give [[Projects/Equilibrium Statistical Mechanics/Thermodynamics/Gibbs-Duhem relations|here]] a brief derivation.  We proceed then to isolate the chemical potential differential:

$$ d\mu = \frac{V}{N} dP - \frac{S}{N}dT = \frac{1}{\rho} dP - s\ dT  $$

Where we have recasted the quantities as the reciprocal atomic density $1/\rho$ and the specific entropy $s$
By comparison of this result with the one we got before we got the equalities:

$$ \left. \frac{\partial \mu}{\partial T}\right \vert_{T_0,P_0} = -s \qquad \left. \frac{\partial \mu}{\partial P}\right \vert_{T_0,P_0} = \frac{1}{\rho} $$

We now go back to the beginning of our argument, starting by the equilibrium condition:

$$\mu_L(T,P) = \mu_S(T,P)$$

We expand up to the first order in the neighbourhood of a point on the liquefation line $(T_0,P_0)$ and put everything on one side:

$$\mu_L(T_0,P_0) +\left. \frac{\partial \mu_L}{\partial T}\right \vert_{T_0,P_0} (T-T_0) +\left. \frac{\partial \mu_L}{\partial P}\right \vert_{T_0,P_0} (P_L-P_0)- \mu_S(T_0,P_0) -\left. \frac{\partial \mu_S}{\partial T}\right \vert_{T_0,P_0} (T-T_0) -\left. \frac{\partial \mu_S}{\partial P}\right \vert_{T_0,P_0} (P_S-P_0)= 0$$

A particular word of consideration is surely needed. We do not distinguish between the temperature at the solid phase and at the liquid phase, i.e. $T_L = T_S=T$. Moreover the pressures at the different phases are different due to the Laplace law, that we will see in detail after.
We now use the expression for the derivatives derived before and the fact that, clearly $\mu_L(T_0,P_0) = \mu_S(T_0,P_0)$ for the choice we made.
Then one has:

$$-s_L(T-T_0) +\frac{1}{\rho_L} (P_L-P_0) +s_S(T-T_0) -\frac{1}{\rho_S} (P_S-P_0)= 0$$

$$(s_S-s_L)(T-T_0) +\frac{1}{\rho_L} (P_L-P_0)  -\frac{1}{\rho_S} (P_S-P_0)= 0$$

We now use explicitly the Laplace law, or more precisely the existence of a Laplace pressure at the interfaces.
If we consider a spherical interface between two solids (like in the matrix embedding) or the spherical interface 
between two liquids (e.g. a droplet of oil in water), one has over the interface:

$$ \Delta P = 2 \frac{\gamma}{R} \qquad P_{int} = P_{ext} + 2 \frac{\gamma}{R} $$

Where $\gamma$ is the surface tension. This implies in our model:

$$ P_{L} = P_{ext} + 2 \frac{\gamma_L}{R_L} \qquad P_{S} = P_{ext} + 2 \frac{\gamma_S}{R_S} $$

Now, given the fac that our system is a nanocluster, the second term in the RHS is dominant respect to the first one, this because $R \to 0$. So that we can neglect the $P_{ext}$ term.
Moreover we can connect the radius (which will be different due to the fact that in general the density of a material is different if considered in different phases) by the consideration that the number of particle $N$ of a spherical nanocluster is in general:

$$ N = \rho V = \frac{4}{3} \pi R^3 \rho $$

Now, if the nanocluster is in the liquid or solid phase the number of particle is conserved. So we have:

$$ \frac{4}{3} \pi R_L^3 \rho_L = N = \frac{4}{3} \pi R_S^3 \rho_S \qquad \Rightarrow \qquad R^3_L = \frac{\rho_S}{\rho_L} R_S^3 \qquad \Rightarrow \qquad \frac{R_S}{R_L} = \left(\frac{\rho_L}{\rho_S}\right)^{1/3} $$

We can now rewrite the main equation in function of the parameters found, and by considering also the following : we will instead of the specific entropy utilize the latent heat of fusion per atom $L$, given by $L=(s_L-s_S)T_0$, so that recalling:

$$(s_S-s_L)(T-T_0) +\frac{1}{\rho_L} (P_L-P_0)  -\frac{1}{\rho_S} (P_S-P_0)= 0$$

$$(s_S-s_L)T_0 \left( \frac{T}{T_0}-1 \right) +\frac{1}{\rho_L} \left(2 \frac{\gamma_L}{R_L}-P_0\right)  -\frac{1}{\rho_S} \left(2 \frac{\gamma_S}{R_S}-P_0\right)= 0$$

We now set $\Theta = T/T_0$ and rearrange:

$$-L\left( \Theta-1 \right) + 2 \frac{\gamma_L}{\rho_LR_L}-2 \frac{\gamma_S}{\rho_SR_S} -P_0\left( \frac{1}{\rho_L} -\frac{1}{\rho_S} \right) = 0$$

$$L\left( \Theta-1 \right) - 2 \frac{\gamma_L}{\rho_LR_L}+2 \frac{\gamma_S}{\rho_SR_S} +P_0\left( \frac{1}{\rho_L} -\frac{1}{\rho_S} \right) = 0$$

$$L\left( \Theta-1 \right) + 2 \left( \frac{\gamma_S}{\rho_SR_S}-\frac{\gamma_L}{\rho_LR_L}\right) +P_0\left( \frac{1}{\rho_L} -\frac{1}{\rho_S} \right) = 0$$

$$L\left( \Theta-1 \right) = -2 \left( \frac{\gamma_S}{\rho_SR_S}-\frac{\gamma_L}{\rho_LR_L}\right) -P_0\left( \frac{1}{\rho_L} -\frac{1}{\rho_S} \right)$$

$$L\left( \Theta-1 \right) = -\frac{2}{\rho_SR_S} \left( \gamma_S-\frac{\gamma_L\rho_SR_S}{\rho_LR_L}\right) -\frac{P_0}{\rho_S}\left( \frac{\rho_S}{\rho_L} -1 \right)$$

$$L\left( \Theta-1 \right) = -\frac{2}{\rho_SR_S} \left( \gamma_S-\gamma_L\frac{\rho_L}{\rho_S}\left(\frac{\rho_S}{\rho_L}\right)^{1/3}\right) -\frac{P_0}{\rho_S}\left( \frac{\rho_S}{\rho_L} -1 \right)$$

$$L\left( \Theta-1 \right) = -\frac{2}{\rho_SR_S} \left( \gamma_S-\gamma_L\left(\frac{\rho_S}{\rho_L}\right)^{2/3}\right) -\frac{P_0}{\rho_S}\left( \frac{\rho_S}{\rho_L} -1 \right) $$

Finally we consider the approximation $\rho_S/\rho_L \to 1$. This surely leads us to neglect the second term in the RHS, so that one can finally write:

$$\frac{\Delta T}{T_0}=\frac{T-T_0}{T_0}=\left( \Theta-1 \right) = -\frac{2}{L\rho_SR_S} \left( \gamma_S-\gamma_L\left(\frac{\rho_S}{\rho_L}\right)^{2/3}\right)  $$

If we now call:

$$C_R= \frac{2}{L\rho_S} \left( \gamma_S-\gamma_L\left(\frac{\rho_S}{\rho_L}\right)^{2/3}\right)$$

Then one can conclude easily that:

$$\frac{\Delta T}{T_0} = -\frac{C_R}{R_S} <0$$

Specifically in this form is easy to see that this first order correction is an ingredient of a size equation with parameter $C_R$ chosen as before and exponent $\alpha =1$

Due to the fact that we used a first order expansion, we expect that only points in the neighbourhood of the melting temperature would be in agreement with our model, so that only for ''big'' radiuses we will have an experimental agreement

![[Images/Pasted image 20230309083354.png|500]]

We report here the experimental measures of a gold nanocluster melting point fitted with different models. The model that we have just derived is the green one.

### Second order theory

In order to improve our predictions we can expand the chemical potential up to the second order, and proceed in the same ansatz.
We will not report the detailed derivation but only a blueprint.
The idea is that upon the expansion one find a second order algebraic equation in the parameter $1-\Theta$, so that one can solve for this:

![[Images/Pasted image 20230309084648.png|400]]
![[Images/Pasted image 20230309084724.png|400]]

## Liquid layer model (LLM)

The liquid layer model is based on an important consideration: the melting procedure cannot be istantaneously happen in the nanocluster but only on the surface (this because the atoms on the surface of a nanocluster are uncoordinated respect to one inside, this because they have less nearest neighbours)
We will imagine then that exist a liquid layer of thickness $\delta \leq R$ around the cluster.

![[Images/Pasted image 20230309085336.png|200]]
When this layer $\delta=R$ we will consider the cluster totally melted.

#### Consistency with previous theory
First we must prove that this model is consistent with Pawlow model, i.e. we imagine a cluster with radius $R$ that undergoes a phase transition in which $\delta =R$:

![[Images/Pasted image 20230309085732.png|500]]

We begin by writing the Gibbs free energy in each phase. In general one has:

$$ G = N\mu_{phase} + 4\pi R^2 \gamma_{interface} $$

I.e. the number of atoms in the cluster times the chemical potential for the specific phase considered plus the energy necessary to construct the interface.
We will have in our case:

$$ G_S = N\mu_S + 4 \pi R^2_S\gamma_{SV} \qquad G_L = N\mu_L + 4 \pi R^2_L\gamma_{LV} $$

Where again we have differentiated between the radii in the 2 phases because they are in general different.
The idea now is to consider the difference and to minimize respect to the radius:

$$ \frac{\partial}{\partial R} (G_L - G_S) = \frac{\partial\Delta G}{\partial R} = 0 $$

Where $\Delta G = G_{final}-G_{initial}$. We begin by constructing the difference in Gibbs energy:

$$\Delta G  = N (\mu_L-\mu_S) +4\pi (R_L^2\gamma_{LV}-R_S^2\gamma_{SV}) $$

Note that is implied that in the phase change the number of particle $N$ doesn't change.
We will use now a fact derived in the Pawlow model : $\frac{R_S}{R_L} = \left(\frac{\rho_L}{\rho_S}\right)^{1/3}$ .
So one has:

$$\Delta G  = N (\mu_L-\mu_S) +4\pi R_S^2 \left(\frac{R_L^2}{R_S^2}\gamma_{LV}-\gamma_{SV}\right) $$

$$\Delta G  = N (\mu_L-\mu_S) +4\pi R_L^2 \left(\left(\frac{\rho_S}{\rho_L}\right)^{2/3}\gamma_{LV}-\gamma_{SV} \right) $$

We now consider from now on $R_S \sim R_L = R$, and evaluate on the side the difference in chemical potentials:

$$\mu_L-\mu_S = \frac{\Delta G_{vol}}{N} = \Delta g_{vol} = \Delta h -T\Delta s = L - T \frac{L}{T_0} $$
We use the definition of specific Gibbs energy in function of the specific enthaply and the specific entropy. The only energy given to the energy is the latent heat of fusion, so by definition the specific enthalpy is the latent heat of fusion per unit atom $L$ and the specific entropy is the quantity of the melting temperature $T_0$.
We can also express the number of atom $N$ respect to a density. If we choose the solid density we have:

$$\Delta G  = \frac{4}{3}\pi R^3\rho_s \left( L - T \frac{L}{T_0}  \right) +4\pi R^2 \left(\left(\frac{\rho_S}{\rho_L}\right)^{2/3}\gamma_{LV}-\gamma_{SV} \right) $$

We can now proceed with the derivation:

$$ \frac{\partial\Delta G}{\partial R} = 0 \qquad \iff \qquad  4\pi R^2\rho_s \left( L - T \frac{L}{T_0}  \right) +8\pi R \left(\left(\frac{\rho_S}{\rho_L}\right)^{2/3}\gamma_{LV}-\gamma_{SV} \right) = 0 $$

$$  R\rho_s \left( L - T \frac{L}{T_0}  \right) +2 \left(\left(\frac{\rho_S}{\rho_L}\right)^{2/3}\gamma_{LV}-\gamma_{SV} \right) = 0 $$

$$  -R\rho_s
L\left( \Theta-1  \right) +2 \left(\left(\frac{\rho_S}{\rho_L}\right)^{2/3}\gamma_{LV}-\gamma_{SV} \right) = 0 $$

$$  -R\rho_s
L\left( \Theta-1  \right) +2 \left(\left(\frac{\rho_S}{\rho_L}\right)^{2/3}\gamma_{LV}-\gamma_{SV} \right) = 0 $$

$$  \left( \Theta-1  \right) =  -\frac{2}{RL\rho_S} \left(\gamma_{SV}-\left(\frac{\rho_S}{\rho_L}\right)^{2/3}\gamma_{LV} \right)  $$

Which is the Pawlow model.

#### Normal derivation

Suppose now the following, we start by a completely solid cluster and the phase change is only on the outer shell of thickness $\delta$.
![[Images/Pasted image 20230311172742.png|400]]
In writing the Gibbs free energy function we don't change anything in the first case, but in the second we will write:

$$ G_2 = (N-N')\mu_S + N'\mu_L + 4\pi (R_S-\delta)^2\gamma_{SL} + 4\pi R_L^2\gamma_{LV} $$

One can comment briefly the expression saying that $N'$ are the number of atoms that undergoes the phase change and 2 interfaces are created.
Proceeding in the same way, we begin by building $\Delta G$:

$$ \Delta G = G_2-G_1= (N-N')\mu_S + N'\mu_L + 4\pi (R_S-\delta)^2\gamma_{SL} + 4\pi R_L^2\gamma_{LV} - (N\mu_S + 4 \pi R_S^2\gamma_{SV}) =$$

$$ =  -N'\mu_S + N'\mu_L + 4\pi (R_S-\delta)^2\gamma_{SL} + 4\pi(R_L^2\gamma_{LV}-R_S^2\gamma_{SV}) =$$

$$ = N'(\mu_L-\mu_S) +4\pi \left[ R_L^2\gamma_{LV}-R_S^2\gamma_{SV} + R_S^2\left( 1-\frac{\delta}{R_S} \right)^2\gamma_{SL} \right] $$

We do the same reasoning as before in writing the difference of chemical potentials as:

$$\mu_L-\mu_S = \frac{\Delta G_{vol}}{N} = \Delta g_{vol} = \Delta h -T\Delta s = L - T \frac{L}{T_0} $$

So that one can write:

$$ \Delta G = V_L\rho_L L(1-\Theta)+4\pi \left[ R_L^2\gamma_{LV}-R_S^2\gamma_{SV} + R_S^2\left( 1-\frac{\delta}{R_S} \right)^2\gamma_{SL} \right] = $$

$$  = \left( \frac{4}{3}\pi(R_L^3-(R_S-\delta)^3) \right)\rho_L L(1-\Theta)+4\pi \left[ R_L^2\gamma_{LV}-R_S^2\gamma_{SV} + R_S^2\left( 1-\frac{\delta}{R_S} \right)^2\gamma_{SL} \right] = $$

$$ =  \frac{4}{3}\pi R_S^3\left(\frac{R^3_L}{R^3_S}-\left(1-\frac{\delta}{R_S}\right)^3 \right)\rho_L L(1-\Theta)+4\pi \left[ R_L^2\gamma_{LV}-R_S^2\gamma_{SV} + R_S^2\left( 1-\frac{\delta}{R_S} \right)^2\gamma_{SL} \right] =  $$

$$ =  \frac{4}{3}\pi R_S^3\left(\frac{\rho_S}{\rho_L}-\left(1-\frac{\delta}{R_S}\right)^3 \right)\rho_L L(1-\Theta)+4\pi R_S^2 \left[ \left(\frac{\rho_S}{\rho_L}\right)^{2/3}\gamma_{LV}-\gamma_{SV} + \left( 1-\frac{\delta}{R_S} \right)^2\gamma_{SL} \right]   $$

And now we can minimize respect to $R_S\equiv R$  (no explicit calculation is made):

$$ \frac{\partial\Delta G}{\partial R} = 0 \qquad \iff \qquad \frac{\Delta T}{T_0}_{LLM} = - \frac{2\gamma_{SL}}{\rho_S L (R-\delta)} - \frac{2\gamma_{LV}}{\rho_S LR}\left(1-\frac{\rho_S}{\rho_L}\right) = -\frac{A}{R-\delta}-\frac{B}{R}$$

Which is quite different from a classical size equation, but indeed respects the adequate conditions.

If we consider the approximation $\rho_S \simeq \rho_L \equiv \rho$ one can also write a simpler formula:

$$  \frac{\Delta T}{T_0}_{LLM} = - \frac{2\gamma_{SL}}{\rho_S L (R-\delta)} \equiv  -\frac{A}{R-\delta}$$

More reminiscent of classical size equation.

## Smooth interfaces interactions (SII)
We can introduce a further complication on the liquid layer model, specifically we can imagine that the border between the liquid layer and the solid cluster is not sharp, but is (as the model name suggest) smooth.
In order to introduce this fact one can create a smoothing function by modifying the Heaviside function:
![[Images/Pasted image 20230312103136.png|400]]
Specifically this smoothing function is defined by the expression:

$$ \sigma(\delta) = 1-\exp\left(-\frac{\delta}{\xi} \right) $$

We call $\xi$ coherence length. This parameter regulates the transient of our smoothing function, specifically when $\xi \to 0$ we return to an Heaviside function.
In order to incorporate this element in our theory one simply multiply the interfaces part of the Gibbs energy difference derived in the LLM model. Namely, if $\Delta G_{LLM} = \Delta G_{volume} +\Delta G_{interfaces}$ we have:

$$ \Delta G_{SII} = \Delta G_{volume} +\sigma(\delta)\Delta G_{interfaces} =  $$

$$ =  \frac{4}{3}\pi R_S^3\left(\frac{\rho_S}{\rho_L}-\left(1-\frac{\delta}{R_S}\right)^3 \right)\rho_L L(1-\Theta)+4\pi R_S^2 \left[ \left(\frac{\rho_S}{\rho_L}\right)^{2/3}\gamma_{LV}-\gamma_{SV} + \left( 1-\frac{\delta}{R_S} \right)^2\gamma_{SL} \right] \left[ 1-\exp\left(- \frac{\delta}{\xi} \right)\right]    $$

This gives, upon differentiation (we consider the approximation $\rho_S \simeq \rho_L$) :

$$  \frac{\Delta T}{T_0}_{SII} = - \frac{2\gamma_{SL}}{\rho_S L (R-\delta)}\left[ 1-\exp\left(- \frac{\delta}{\xi} \right)\right] - \left[\gamma_{LV}-\gamma_{SV} + \left( 1-\frac{\delta}{R} \right)^2\gamma_{SL} \right] \frac{R^2}{\rho_S L \xi(R-\delta)^2}\exp\left(- \frac{\delta}{\xi} \right) =  $$

$$ =  -\frac{A}{R-\delta} -\frac{B\ \Gamma R^2}{(R-\delta)^2}$$

Where we called $\Gamma$ the square bracket term in the second term in the RHS.
Is easy to see:

$$ \lim_{\xi \to 0}  \frac{\Delta T}{T_0}_{SII} = \frac{\Delta T}{T_0}_{LLM}  $$

## Thermal expansion variation (TEV)

Is an improvement over the first order theory of the Pawlow model. Because of the matrix embedding there effects of heat dissipation that must be considered, because our previous calculation where done in vacuum.
So we have:

$$ \frac{\Delta T}{T_0}_{TEV}= -\frac{2}{L\rho_SR_S} \left( \gamma_S-\gamma_L\left(\frac{\rho_S}{\rho_L}\right)^{2/3}\right) + \frac{\Delta E}{L}  $$

Where we call the $\Delta E$ term strain energy difference, due to the thermal expansion matrix-cluster or hydrostatic pressure of matrix onto the nanocluster