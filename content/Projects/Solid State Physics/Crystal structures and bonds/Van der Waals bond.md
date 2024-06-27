Let's consider an element that has a neutral charge distribution. 
Although it has orbitals without a dipole moment, external interactions can cause the electron cloud to deform and establish an electric dipole moment. This will instantly generate an electric field proportional to it, which in turn will deform (if present) other electron clouds nearby, and so on in a cascade, establishing oscillating dipoles within the atoms.

**Classically, this is not enough to establish an interaction, but quantum-mechanically it is, and such** 
**an interaction is called Van der Waals interaction.**

**This type of interaction is present in every solid, but is more meaningful in crystals made of rare gas elements.**

Let's try to evaluate the range of the interaction by a simple 1-dimensional model

#### VdW bond in 1-D

Given the previous considerations, let's consider a hydrogen atom as a positive and negative charge bound by a spring with characteristic frequency $\omega_0$ (that of the oscillating dipole).

![[Pasted image 20230214155718.png|400]]

Let's write the Hamiltonian for the system by writing it in 2 terms:

$$\hat{H} = \hat{H}_0 + \hat{H}_1$$

$$\hat{H}_0 = \hat{T}_I+\hat{T}_{II} + \frac{1}{2}m\omega_0^2x_1^2+\frac{1}{2}m\omega_0^2x_2^2$$

$$\hat{H}_1 = V_{13}+V_{14}+V_{23} + V_{24}$$

Where we have used the shorthand notation $\hat{T}_I = \hat{T}_1 + \hat{T}_2$, $\hat{T}_{II} = \hat{T}_3 + \hat{T}_4$, and by the notation $V_{ij}$ we mean the Coulomb potential. Note that the Coulomb potentials $V_{12} \sim \frac{1}{2}m\omega_0^2x_1^2$ and $V_{34} \sim \frac{1}{2}m\omega_0^2x_2^2$ are approximated by the harmonic term in the first Hamiltonian, so are not counted in the second one.
Let's analyze the Hamiltonian $\hat{H}_1$ in the position eigenbasis:

$$\begin{aligned} \hat{H}_1 = & V_{13}+V_{14}+V_{23} + V_{24} = k_e e^2 \left[ \frac{1}{R}-\frac{1}{R+x_2} -\frac{1}{R-x_1} +\frac{1}{R-x_1+x_2} \right] = \\ &= k_e \frac{e^2}{R} \left[ 1-\frac{1}{1+\frac{x_2}{R}} -\frac{1}{1-\frac{x_1}{R}} +\frac{1}{1+\frac{x_2-x_1}{R}} \right] \end{aligned}$$

We now consider this expression in the limit $R>>x_1 \wedge R>>x_2$.
Using the following expansion:

$$\frac{1}{1 \pm \alpha} = 1 \mp \alpha+ \alpha^2 + o(\alpha^3) \qquad \forall\alpha \in B(0, \rho)$$

We will have then:

$$ \begin{aligned} \hat{H}_1 \simeq  & k_e \frac{e^2}{R} \left[1-\left(1-\frac{x_2}{R}+\frac{x^2_2}{R^2}\right)-\left(1+\frac{x_1}{R}+\frac{x^2_1}{R^2}\right)+\left(1-\frac{x_2-x_1}{R}+\frac{(x_2-x_1)^2}{R^2}\right) \right] = \\ = & -2k_e\frac{x_1x_2}{R^3}e^2\end{aligned} $$

We can observe here that, in the limit $R>>x_1 \wedge R>>x_2$, the Coulombian part of the Hamiltonian can be seen as a correction term proportional to the eletric dipolar moments.
In fact, by definition an electric dipolar moment is defined as $\bar{\mathfrak{p}} = q\bar{d}$, so that we can write:

$$\hat{H}_1  = -2k_e\frac{\mathfrak{p}_1\mathfrak{p}_2}{R^3}e^2$$

We are now ready to solve the whole Hamiltonian:

$$\hat{H} = \frac{\hat{p}_1}{2m} + \frac{\hat{p}_2}{2m} + \frac{1}{2}m\omega_0^2x_1^2+\frac{1}{2}m\omega_0^2x_2^2 -2k_e\frac{x_1x_2}{R^3}e^2$$

But the problem is that this hamiltonian leads to an uncoupled equation. In order to decouple it one must introduce the canonical transformation:

$$\hat{X}_A = \frac{1}{\sqrt{2}} (\hat{x}_1 +\hat{x}_2) \qquad \hat{X}_B = \frac{1}{\sqrt{2}} (\hat{x}_1 -\hat{x}_2)$$

$$\hat{P}_A = \frac{1}{\sqrt{2}} (\hat{p}_1 +\hat{p}_2) \qquad \hat{P}_B = \frac{1}{\sqrt{2}} (\hat{p}_1 -\hat{p}_2)$$

So that one can simply write:

$$\hat{H} = \frac{\hat{P}_A}{2m}+\frac{1}{2}m\left(\omega_0^2-\frac{2k_ee^2}{mR^3}\right)X_A^2 + \frac{\hat{P}_B}{2m}+\frac{1}{2}m\left(\omega_0^2-\frac{2k_ee^2}{mR^3}\right)X_B^2$$

So that one has 2 decoupled harmonic oscillators. From this is simple to evaluate the energy eigenstates:

$$E_n =\left(n+\frac{1}{2}\right)\hbar(\omega_A+\omega_B)$$

And specifically the ground state energy:

$$E_0 =\frac{1}{2}\hbar(\omega_A+\omega_B) = \frac{1}{2}\hbar\left( \sqrt{\omega_0^2-\frac{2k_ee^2}{mR^3}}+\sqrt{\omega_0^2+\frac{2k_ee^2}{mR^3}}\right)$$

If we now use the following series expansion:

$$\sqrt{1\pm\alpha} =1 \pm \frac{\alpha}{2} -\frac{\alpha^2}{8} + o(\alpha^3) \qquad \alpha \in B(0, \rho)$$

Justified by the fact that 

$$\frac{2k_ee^2}{mR^3} \sim \frac{r_a}{R}<<1 \qquad \left(\omega_0 = \sqrt{\frac{k_ee^2}{mr_a^3}} \right)$$

One has finally:

$$E_0 \simeq \hbar\omega_0\left[1 -\frac{1}{8}\left(\frac{2k_ee^2}{m\omega_0^2R^3}\right)^2\right] = \hbar\omega_0 + \Delta U_{VdW}$$

Where:

$$\Delta U_{VdW} = -\frac{\hbar k^2_ee^4}{m^2\omega_0^3R^6} \propto -\frac{1}{R^6} $$

We show a plot of this type function

![[Van der Waals bond_plot.png]]

We see immediately that this cannot be the only energetic contribution, because this function present no energy minima. In fact this bond is always coupled with the [[Pauli exclusion principle]] consideration that states that there is a repulsive contribution if the atoms get too close.

This leads to definition of energy potentials that are a combination of the Pauli exclusion principle and the Van der Waals bond if we want to model the bond between neutral atoms.

One of this potential is called [[Projects/Solid State Physics/Crystal structures and bonds/Lennard-Jones potential|Lennard-Jones potential]]. From here one can make also many further corrections, such as the [[Projects/Solid State Physics/Crystal structures and bonds/Born-Mayer potential|Born-Mayer potential]].