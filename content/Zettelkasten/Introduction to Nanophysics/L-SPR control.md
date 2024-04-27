We established that a given plasmonic material, due to Mie Theory or its [[Mie theory - Dipolar approximation|dipolar approximation]], when subjected to an EM wave gives us a particular resonance condition, called Frohlich condition, at a specific wavelength $\lambda_{SPR}$, unique in the dipolar case and dominant in the multipolar one.

We ask ourselves if it is possibile to tune this parameter to our specifics, and what are the possible ways to change it.

### A comment on single peak plasmonic spectra

In order to make our discussion easier we will concentrate on single peak plasmonic spectra, i.e. spectra obtained by the dipolar approximation, or multipolar one in which the condition $R<<\lambda$ is respected.
Our consideration remain valid even for multipolar spectra.


# Non interacting NP's

We study in this section the L-SPR control of nanoparticles which doesnt' interact between them.

## Spectrum variation due to nanoparticle size

In an approach to the Mie theory in which the dielectric function is size dependent, I expect to have the Frohlich condition also to be size dependent, so that one expect different extinction cross sections for different radiuses.
Let's plot here the results for a gold nanoparticle in a silica matrix for different radiuses while restricting ourselves to the dipolar approximation first:

![[Pasted image 20230704161319.png|300]]![[Pasted image 20230704161454.png|300]]

We see here the same results reported twice, one where we plot the cross section, and one where we plot the efficiencies. We see that there is no great variation in the Frohlich resonance condition while in dipole approximation, i.e. $R<<\lambda$.
Let's now see the result for bigger particles, where the multipolar expansion is essential in the treatment:

![[Pasted image 20230704162427.png|300]]![[Pasted image 20230704162450.png|300]]

We see now a clear peak redshift and broadening, where also the maximum diminishes.
Also we cannot distinguish a single Frohlich peak, but must resort to a more detailed analysis using the full Mie theory.

## Spectrum variation due to nanoparticle shape

Suppose we have a deviation from the spherical particle hypothesis done in the treatment of Mie theory, so that we can have ellipsoidal nanoparticles.
In order to describe the phenomenon one can resort to the Gans theory ([[Gans Theory|here]] the argument in the detail).
Note that this theory is based on the dipolar approximation, so in the visible range is applicable only to smaller size particles.
We obtain as result the following:

![[Pasted image 20230527123237.png|400]]

So that when the NP eccentricity rises we have a peak redshift and a maximum rise, while conserving in proportion the original Frohlich resonance peak.

## Spectrum variation due to nanoparticle composition

Let's consider the following problem: we have a plasmonic material $A$ with its spectrum and another plasmonic material $B$ with its spectrum.
How the spectrum of the alloy $A_xB_{1-x}$ is related to the pure spectra ?
Let's consider the case for gold and silver:

![[Pasted image 20230704164330.png|400]]

We can conclude that generally if the 2 starting material are good plasmonic materials, i.e. have defined peaks, one can expect a sort of a peak average depending on the stochiometric fraction.

## Sensitivity to the matrix refractive index

We propose the following experimental results for silver:

![[Pasted image 20230527175709.png|400]]

We are just changing the refractive index in which the NP's are embedded (done by changing the matrix) . If we plot the $\lambda_{SPR}$ versus the refractive index we obtain the following:

![[Pasted image 20230527180041.png|400]]

So that in general we can say that $\lambda_{SPR}$ is a quadratic function of the refractive index, where the coefficents are obtained by experimental methods:

$$ \lambda_{SPR} = b_2n^2+b_1n+b_0 $$

Can be useful to introduce the rate of variation of the wavelength respect to the considered control parameter, in this case the refractive index, by defining the so called sensitivity to the matrix refractive index:

$$ S = \frac{\partial \lambda_{SPR}}{\partial n} = 2b_2n+b_1  $$


## Sensitivity to shell thickness $t$

We propose the following experimental results for a core-shell system composed by silver core and an air shell:

![[Pasted image 20230527180840.png|400]]

If we plot the $\lambda_{SPR}$ versus the shell thickness we obtain the following:

![[Pasted image 20230527181117.png|400]]

Again one can obtain by fitting an analytical expression for the resonance wavelength:

$$ \lambda_{SPR}=\lambda_0 + A(1-e^{-t/\tau}) $$

And also the sensitivity to the shell thickness, adjusted by the variation of refractive indexes $\Delta n$ between the 2 mediums, in order to avoid jumps in the function:

$$ S = \frac{1}{\Delta n} \frac{\partial \lambda_{SPR}}{\partial t} = \frac{A}{\tau\Delta n}e^{-t/\tau} $$


## Not just spectrum control: the cloaking effect

There are cases in which both composition and shape changes and is not immediate the effect of a parameter change on the overall spectrum.
But we can create ad hoc situation in which our purpose is not strictly the control of the cross extincion spectrum, but the functionalization of the plasmonic property of our system.
An example is the cloaking effect obtainable in theory from the [[Core-shell model]].



# Interacting NP's

Suppose we have a sample in which spherical nanoclusters are dispersed.
In the dipolar approximation we implied that the distance between clusters is such that the dipolar interaction between them is negligible.
If we relax this condition then we are in a system in which we must consider the mutual interaction between nanoparticles, and this is done via different ways.
Considered the specific model used for the description of the interaction, is it possible to find a parameter inside the model that varying can be used to control the plasmonic resonance ?
We investigate the possibility in the following sections.

## Effective medium approximation (EMA) : Sensitivity to filling fraction

Let's consider a system described by [[Effective medium approximation (EMA)|Maxwell-Garnett Theory]], so that the dielectric function of the system can be replaced by an effective dielectric function that obeys:

$$\frac{\varepsilon_{eff}-\varepsilon_m}{\varepsilon_{eff}+2\varepsilon_m} = f\frac{\varepsilon-\varepsilon_m}{\varepsilon+2\varepsilon_m}$$

If we now consider the extinction cross section for different values of the filling fraction $f$, we obtain the following experimental results for gold:

![[Pasted image 20230529145240.png|400]]

So that we can say that raising the filling fraction make us observe a redshift in the spectrum and a raise in the maximum value.

## Multimers and polarization effects

[[Polarization dependent interaction]]

[[L-SPR hybridization]]

