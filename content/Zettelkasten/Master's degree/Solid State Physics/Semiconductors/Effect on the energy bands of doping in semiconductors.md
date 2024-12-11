In a doped semiconductor with both acceptors and donors we will have the effect to introduce over the homogeneous semiconductor band structure 2 additional bands:

![[Images/Effect on the energy bands in doped semiconductors.png|500]]

We know show how to evaluate the additional bands with an example following the a semi-classical description, i.e. the Bohr model.

#### Donor case

Suppose to have a sample of Silicon (Group IV) and to introduce impurities of Arsenic (Group V) uniformly distributed. 
This is an example of donor doping, i.e. an extra electron is inserted in the sample.
Lattice constant studies have verified that the pentavalent impurities enter the lattice by substitution for normal atoms, and not in interstitial positions. The crystal as a whole remains neutral because the electron remains in the crystal.

Moreover we can see the Arsenic insertion as a Silicon atom plus an extra proton (we discard the extra neutron in our picture because is irrelevant in the transport phenomena).
In the end we can represent the Arsenic insertion as simple point charge in an homogeneous distribution of Silicon atoms, as shown in the picture:

![[Images/Effect on the energy bands of doping in semiconductors-2.png|500]]

So in the end this kind of doping has the equivalent net effect of inserting a positive charge in the impurity site with an electron bounded to said charge with a certain radius (like adding an hydrogen-like atom to the site). When ionized the impurity will donate the electron to the conduction band.

**Note that now we must pay close attention. Because we may be tempted to say that the binding energy of added electron is the same as the first ionization (ground state in this case) energy of hydrogen (13.6 eV) or the first ionization energy for the Arsenic (9.6 eV), but this would be a mistake.**

First we must consider that we are not in vacuum, but in a medium, so energy will be reduced by the static dielectric constant of the semiconductor in question ($\varepsilon_{\text{Si}}\simeq 15.8$).
Note that this treatment is valid for orbits large in comparison with the distance between atoms, and for slow motions of the electron such that the orbital frequency is low in comparison with the frequency $\omega_g$ corresponding to the energy gap.
These conditions are satisfied quite well in Ge and Si by the donor electron of P, As, or Sb.

Secondly given that we are considering its movement in a solid then this should be thought as a superposition of conduction bands levels of the host material. Even at the bottom of the conduction band its energy is of the form, as saw in [[Zettelkasten/Master's degree/Solid State Physics/Semiconductors/Typical semiconductor band structure|Typical semiconductor band structure]]:

$$ E_e(\bar{k})=E_c +\frac{\hbar}{2} \sum_i\sum_jk_i(m^*)_{ij}^{-1}k_j $$

This then will have to hold in consideration anisotropy effects in the host material (even if we consider the principal axis reference frame in which the energy is an ellipsoid). 
Then we consider in first approximation to consider no anisotropy and to give to the bounded electron a ''mean'' value for the effective mass $m^*_{\text{Si}} \sim 0.2\ m_e$ instead of the usual tensor.
So in this sense we have a free electron with energy $E_d-E_c$.

Putting all together we have:

$$E_d-E_c = -  \frac{m^*}{m} \frac{1}{\varepsilon^2} E_0 \qquad E_0=13.6\ \text{eV}$$

And, by refactoring:

$$ \Delta E = E_c-E_d = \frac{m^*}{m} \frac{1}{\varepsilon^2} E_0$$

We can also evaluate the Bohr radius:

$$ a_d = \frac{m}{m^*}\varepsilon\ a_0 \qquad a_0 =0.53\ \mathring{\text{A}} $$

We obtain $\Delta E_{\text{Si}} \simeq20\ \text{meV}$ which is comparable with $k_bT$ at room temperature $(\sim 25\ \text{meV})$
Note that one can also make a more sophisticated evaluation and consider the anisotropy effects, but the result doesn't change much $\Delta E_{\text{Si}} \simeq 29.8\ \text{meV}$
