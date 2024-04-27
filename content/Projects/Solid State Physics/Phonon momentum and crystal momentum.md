We showed in [[Phonon heat capacity in solids - Quantum treatment]] that a phonon has energy $\hbar \omega_{s}(\bar{k})$.
In analogy with what seen in particles, we can expect that a phonon has momentum $\hbar \bar{k}$.
This is **not** the case. (Can be this the general difference between particles and quasiparticles ?)
We show this in the case of a linear monoatomic chain.
Corresponding to a general displacement $u_n = Ae^{i(kna-\omega t)}=Q(t)e^{ikna}$ the associated phonon momentum $P_k$ (we omit the polarization index because in this case there is only one polarization) can be evaluated by the following expression:

$$ \begin{aligned} P_k  & = \sum_{n=0}^{N-1} m|\dot{u}_n(k)| = m|\dot{Q}(t)|\sum_{n=0}^{N-1} e^{ikna} =m|\dot{Q}(t)| \frac{1-e^{ikNa}}{1-e^{ika}}= \\ & = m|\dot{Q}(t)| \frac{1-e^{i2 \pi m}}{1-e^{i2\pi m/N}}=0 \end{aligned}   $$

Where we implicitly used the [[Born-Von Karman boundary condition|PBC]] to discretize the $k$ values, i.e. $k=\frac{2\pi}{Na} m$
So in fact, a phonon with wavevector $k \neq 0$ has momentum 0.
Moreover is interesting to show that a phonon with wavevector $k=0$ has momentum different from 0:

$$P_0  = \sum_{n=0}^{N-1} m|\dot{u}_n(0)| = m|\dot{Q}(t)|\sum_{n=0}^{N-1} 1 =mN|\dot{Q}(t)| \neq 0 $$

We try to explain why.
The last momentum evaluated can be seen as a rigid shift of the entire chain with velocity different than 0, while the phonons with $k \neq 0$ make the atoms oscillates around their equilibrium positions making the system vibrate, but not shifting (in some way the oscillations compensate themselves from a momentum point of view).

Due to this consideration the quantity $\hbar \bar{k}$ is then defined **not** defined as the phonon momentum, **but** as the **quasimomentum** or the **crystal momentum**.

This is introduced because this quantity is conserved within a reciprocal lattice vector.
We make an example. Suppose a neutron with initial momentum $\hbar \bar{K}_i$ is impinging on a crystal. The 2 main processes described in the diagram can happen:

![[Phonon momentum and crystal momentum.png|500]]

In the first diagram the neutron scatters in the crystal emitting a phonon (i.e. it impinges on the crystal leading to a vibration in the crystal. To this vibration there is a phonon associates and the neutron scatters losing is energy).
In the second the neutron absorbs a phonon and scatters (i.e. it impinges on the crystal while this is already vibrating. This leads to the fact that the scattered neutron while gain the energy associated to the vibration, i.e. the phonon).
Whatever the process we can write the conservation laws:

$$ \frac{\hbar^2K_i^2}{2m} = \frac{\hbar^2K_f^2}{2m} \pm \hbar\omega(\bar{k})$$

$$\hbar\bar{K}_i = \hbar\bar{K}_f \pm \hbar\bar{k}+\bar{G}$$

The crystal momentum conservation law is strictly related to the [[Considerations on the Bragg scattering within a Bravais lattice|Bragg's law]]
