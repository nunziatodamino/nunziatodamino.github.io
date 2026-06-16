This method tries to solve a problem one has in applying the Euler method to the Schrodinger equation straightforwardly.
In fact if we consider the formal solution:

$$ \ket{\psi(t + dt)} = e^{-i\frac{\mathscr{H}}{\hbar}dt}\ket{\psi(t)} $$

and truncate at the first order (set $\hbar =1$):

$$ \ket{\psi(t + dt)} = (\mathbb{1} -i\mathscr{H}dt )\ket{\psi(t)} + \mathcal{O}(dt^2) $$

This approximation has a fundamental problem, as it doesn't conserve the norm. Consider in fact an initial normalized state $\braket{\psi(t)|\psi(t)} =1$, then after a timestep:

$$|\braket{\psi(t+dt)|\psi(t+dt)}|^2 = |1 -dt^2 \braket{\mathscr{H^2}}|^2 + \mathcal{O}(dt^3)$$

Which conserve the norm only in the trivial case in which the state is an energy eigenstate.
The idea is then to refactor the propagator:

$$ e^{-i{\mathscr{H}}dt} = e^{-i{\mathscr{H}}\frac{dt}{2}}e^{-i{\mathscr{H}}\frac{dt}{2}} = (e^{i{\mathscr{H}}\frac{dt}{2}})^{-1}e^{-i{\mathscr{H}}\frac{dt}{2}} = \left(\mathbb{1} +i\mathscr{H}\frac{dt}{2} \right)^{-1}\left(\mathbb{1} -i\mathscr{H}\frac{dt}{2} \right) + \mathcal{O}(dt^3)$$

The first equality is legitimate as the 2 exponent commutes. The second equality is a basic property of the exponential of an operator. The last equality is just the expansion.
The RHS is unitary, so it conserves the norm (This is proven in the calculation section).