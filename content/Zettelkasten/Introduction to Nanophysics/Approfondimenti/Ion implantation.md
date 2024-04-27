## Features

- Possibility to introduce virtually any element into the matrix (out of thermodynamic equilibrium)
- No solubility limit (supersaturation) 
- Depth concentration profile control 
- Patterning on prescribed geometries 
- Compatibility with micro-electronic processes (low temperature) 
- Multiple ion implantation (alloys or compounds) 

### Ion-beam processing

![[Pasted image 20230603103709.png|500]]

## Dynamics

### Binary Coulomb collisions

We start by simply describing the collision between two molecules.

![[Pasted image 20230603104442.png|400]]

Impinging energy is in the order of $E_0 \sim \pu{100 keV}$, while the mass is in the order of the atomic mass of the implantable species (rest mass $mc^2 \sim \pu{10 GeV}$).  Because we are in the condition $E_0<<mc^2$ the process can be considered not relativistic.

Suppose the particles are interacting via the following potential:

$$ V(r) = k_e \frac{Z_1Z_2e^2}{r} \chi(r) $$

Which is a Coulomb potential coupled with a screening function $\chi(r)$, which can be in either of the two following form, in order of increasing precision:

$$ \chi(r) = 
\begin{cases}
1 \quad\mbox{if}\ r \to 0 \\
0 \quad\mbox{if}\ r \to +\infty \\
\end{cases} \qquad \chi(r) = 1 -\frac{r}{\sqrt{3+r^2}}$$

One obtains, upon calculation, the following results

$$ T_E = 4 \frac{M_1M_2}{(M_1+M_2)^2} E_0 \sin^2 \frac{\vartheta_{CM}}{2}$$

$$ \vartheta_{CM} = \vartheta + \arcsin \left( \frac{M_1}{M_2} \sin \vartheta \right) \qquad \mbox{evaluated in the CM reference frame}$$

Where $T_E$ stands for transferred energy. If $T_E > E_B$ where the typical binding energy is in the order of $\pu{ 3-10 eV}$ , the particle 2 is removed from its position with a certain energy.
Moreover the particle 1 can furthermore produce more collisions, and even the particle 2 can, if the condition $T_E > E_B$ is satisfied.

### Collisional cascade

If the particle enters with the appropriate energy can generate a cascade of collision in sequence.
First we evaluate how much energy the particle loses for perpendicular length traveled.
We will use the formula:

$$ \frac{dE}{dx}_{tot}= \frac{dE}{dx}_{nuclear}+\frac{dE}{dx}_{electronic} $$

There will be a elastic energy loss due to the collision with atoms (i.e. the ion hits an atom), and an inelastic collision due to electron scattering, (i.e. the ion passes near the atom and suffer brehmstralung scattering).
It is also possible to define the stopping parameter as the energy loss per diffusion center:

$$ S \equiv \frac{1}{N}\frac{dE}{dx}_{tot}= S_{nuclear}+S_{electronic}  $$

Where $N$ is the atomic number density of the target sample.

These quantities are essential in order to evaluate of deep our ion will be sent inside the material.
We call this parameter range, and can be evaluated as:

$$ R \equiv \int_{E_0}^0 \left(\frac{dE}{dx}_{tot}\right)^{-1}dE  = \frac{1}{N} \int_{E_0}^0 \frac{dE}{S(E)}   $$

In a real situation we sent many ion, i.e $N_{ion}$ in number, and each of them will give a different value of $R$, due to the fact that every ion will make a different path inside the target.
We call the distribution of $R$ in function of the traveled length, concentration $C(z)$
So we simply take a statistical approach, considering a mean of all ranges over the number of ions, calling this project range $R_P$, and assigning to this value a dispersion (half width at half maximum) $\Delta R_p$ , called straggling.
This can be simply done by assigning a Gaussian statistic to our problem, i.e. we consider the concentration to be a gaussian centered around $R_P$, with a standard deviation such as $\Delta R_p \simeq 1.18 \sigma$.
With this scheme, one can also simply evaluate how many atoms per unit surface it the target by evaluating the so called dose or fluence:

$$ D = \int_0^{+\infty}C(z)dz $$

![[Pasted image 20230603161129.png|500]]

In the figure is shown an example of the concentration profile and relative quantities superimposed to a TEM image.

### Examples

#### Implantation of light elements

![[Pasted image 20230603155355.png|600]]

We observe that for light elements, no matter the energy of implantation, the scattering due to nuclear part is negligible respect to the electronic one. 
Moreover we see that with the energy increase the projected range increase in a linear fashion, while the straggling is somewhat constant for energy less than the MeV, while for bigger energy tends to increase in the same linear fashion as the projected range.

#### Implantation of heavy elements

![[Pasted image 20230603155440.png|600]]

We observe that for heavier elements we can distinguish in the stopping power analysis 2 regimes.
One in which the nuclear stopping power is greater than the electronic one, for energy less then the MeV, while the viceversa holds for greater energy.

In regard to the projected range and the straggling they tend to increase linearly no matter the regime we consider.

#### Consideration on range and straggling

So we can make the observation that, fixed the mass of the implanted element, as the implantation energy increase, so does the projected range and the straggling.

![[Pasted image 20230603161829.png|400]]

While for fixed energy varying the mass change these parameters, specifically for lighter masses we have bigger projected ranges and bigger straggling. 
($m_{Cu} = \pu{63.546 amu},\ m_{Au} = \pu{196.9665 amu}$)

![[Pasted image 20230603161925.png|400]]
