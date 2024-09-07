We want to study the effect of [[Zettelkasten/Master's degree/Solid State Physics/Thermal transport/Thermal expansion]] on vibrational properties in a solid.

In the context of the harmonic approximation we will show that we have an nonphysical result leading to $\alpha_V=0$. 
In order to be treated correctly one should consider [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/Anharmonic effects in solids|anharmonic terms]] in the potential expansion, but the calculations are difficult for the general case of a 3D crystal. 
One can use a in-between approach in which we start by the harmonic approximation and then make a reasonable assumption to the dispersion relation, where this must depend on the volume.

We start by recalling the definition of thermal expansion coefficient:

$$ \frac{1}{V_0}\left(\frac{dV}{dT}\right)_P \equiv \alpha_V $$

And the [[Zettelkasten/Master's degree/Basic Physics/triple product rule]] in thermodynamics:

$$ \left( \frac{\partial P}{\partial V} \right)_T\left( \frac{\partial V}{\partial T} \right)_P\left( \frac{\partial T}{\partial P} \right)_V = -1 $$

We now introduce the bulk modulus (describes experimentally the resistance of a material to compression) :

$$ B \equiv -V \left( \frac{\partial P}{\partial V} \right)_T $$

And use it in the triple product rule, and then we isolate the main term competing the thermal expansion coefficient:

$$ \begin{aligned} 
 B\left( \frac{\partial V}{\partial T} \right)_P\left( \frac{\partial T}{\partial P} \right)_V &= -V \\
 \left( \frac{\partial V}{\partial T} \right)_P &= -\frac{V}{B}\left( \frac{\partial P}{\partial T} \right)_V\\
 \alpha_V &= -\frac{1}{B}\left( \frac{\partial P}{\partial T} \right)_V 
\end{aligned} $$

This expression of the thermal expansion coefficient is useful only if we are able to evaluate the value of the pressure.
We recall:

$$ P = - \left( \frac{\partial F}{\partial V} \right)_T$$

Where $F = U-TS$ is the system free energy. The free energy function, governing the canonical ensemble can be found by its relation with the partition function:

$$ F = -\frac{1}{\beta} \ln \mathcal{Z} $$

With the usual notation $\beta =1/k_B T$.
So we proceed to the evaluation of this expression in the context of [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/The harmonic approximation]], so that we can write our Hamiltonian as:

$$E = \sum_s \sum_{\bar{k}} \hbar\omega_s(\bar{k}) \left( n_{\bar{k},s} + \frac{1}{2} \right) \qquad n_{\bar{k},s} \in \mathbb{N}_0$$

We obtain:
 $$ \begin{aligned} F &= -\frac{1}{\beta} \ln \mathcal{Z} = -\frac{1}{\beta} \ln \sum e^{-\beta H} = -\frac{1}{\beta} \ln \sum_n e^{-\beta \left[ \sum_s \sum_{\bar{k}} \hbar\omega_s(\bar{k}) \left( n_{\bar{k},s} + \frac{1}{2} \right)  \right]} = 
 
 \\ & =  -\frac{1}{\beta} \ln\prod_s \prod_{\bar{k}} \sum_n e^{-\beta\hbar\omega_s(\bar{k}) \left( n_{\bar{k},s} + \frac{1}{2}\right)} = -  \frac{1}{\beta} \sum_s \sum_{\bar{k}} \ln \sum_n e^{-\beta\hbar\omega_s(\bar{k}) \left( n_{\bar{k},s} + \frac{1}{2}\right)} = 
 
 \\ & = -  \frac{1}{\beta} \sum_s \sum_{\bar{k}} \left[ \ln e^{-\frac{\beta}{2}\hbar\omega_s(\bar{k}) } + \ln \sum_n e^{-\beta\hbar\omega_s(\bar{k})n_{\bar{k},s} } \right] = -  \frac{1}{\beta} \sum_s \sum_{\bar{k}} \left[ -\frac{\beta}{2}\hbar\omega_s(\bar{k})  + \ln \left( \frac{1}{1-e^{-\beta\hbar\omega_s(\bar{k}) }}\right) \right] = \\ 

& = -  \frac{1}{\beta} \sum_s \sum_{\bar{k}} \left[ -\frac{\beta}{2}\hbar\omega_s(\bar{k})  - \ln \left( 1-e^{-\beta\hbar\omega_s(\bar{k}) }\right) \right] =  \sum_s \sum_{\bar{k}} \left[ \frac{1}{2}\hbar\omega_s(\bar{k})  + k_B T \ln \left( 1-e^{-\beta\hbar\omega_s(\bar{k}) }\right) \right]  
 
 \end{aligned} $$

Within the harmonic approximation, $\omega_s(\bar{k})$  does not depend on the volume of the system, so we would obtain $\alpha_V =0$.

However, a change in volume is accompanied by a change in the interatomic distances, and thus a change in the coupling constants between atoms.
Moreover to the limit $V\to +\infty$ this coupling constants tends to 0, i.e. the system is not bonded.

So we can safely assume that $\omega_s(\bar{k})$ must be some function of the volume.
The simplest assumption is:

$$\omega_s(\bar{k}) \simeq V^{- \gamma}$$

Where we call $\gamma > 0$ is called **Gruneisen parameter**.
We now value with this approximation the pressure:

$$ 
\begin{aligned}
P & = - \left( \frac{\partial F}{\partial V} \right)_T =-\frac{\partial }{\partial V}\left(\sum_s \sum_{\bar{k}} \left[ \frac{1}{2}\hbar V^{- \gamma}  + k_B T \ln \left( 1-e^{-\beta\hbar V^{- \gamma} }\right) \right]  \right) = \\ 

& = -\sum_s \sum_{\bar{k}} \left[ - \gamma\frac{1}{2}\hbar V^{- \gamma-1}  - k_B T \frac{\gamma\beta\hbar V^{- \gamma-1} e^{-\beta\hbar V^{- \gamma}} }{1-e^{-\beta\hbar V^{- \gamma} }} \right]  = \\

& =\frac{\gamma}{V} \sum_s \sum_{\bar{k}} \left[ \frac{1}{2}\hbar V^{- \gamma}  - k_B T \frac{\beta\hbar V^{- \gamma} e^{-\beta\hbar V^{- \gamma}} }{1-e^{-\beta\hbar V^{- \gamma} }} \right]  = \\

&  =\frac{\gamma}{V} \sum_s \sum_{\bar{k}}\hbar V^{- \gamma} \left[ \frac{1}{2} +  \frac{ e^{-\beta\hbar V^{- \gamma}} }{1-e^{-\beta\hbar V^{- \gamma} }} \right]  = \\

&  =\frac{\gamma}{V} \sum_s \sum_{\bar{k}}\hbar V^{- \gamma} \left[ \frac{1}{2} +  \frac{ 1 }{e^{\beta\hbar V^{- \gamma} }-1} \right]  = \\

&  =\frac{\gamma}{V} \sum_s \sum_{\bar{k}}\hbar \omega_s(\bar{k}) \left[ \frac{1}{2} +  \frac{ 1 }{e^{\beta\hbar \omega_s(\bar{k}) }-1} \right] \equiv \frac{\gamma}{V} E_{vib} 

\end{aligned}
$$

Notice that $E_{vib}$ is the internal energy $U$ of the system derived in the harmonic approximation, has seen in [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/Heat capacity in solids due to lattice vibrations - Quantum treatment - The introduction of phonons]].
So we can find the thermal expansion coefficient:

$$ \alpha_V = -\frac{1}{B}\left( \frac{\partial P}{\partial T} \right)_V = \frac{1}{B} \frac{\partial}{\partial T} \left( \frac{\gamma}{V} E_{vib} \right) =  \frac{\gamma}{VB} \left( \frac{\partial U} {\partial T} \right)_V =  \frac{\gamma}{VB} C_V $$

Where we used the definition of heat capacity in the case of constant volume.
From this last equation one can obtain an useful expression for the Gruneisen parameter:

$$ \gamma = \frac{VB}{C_V}\alpha_V $$

One can found for the Gruneisen parameter experimental values between 1 and 3.