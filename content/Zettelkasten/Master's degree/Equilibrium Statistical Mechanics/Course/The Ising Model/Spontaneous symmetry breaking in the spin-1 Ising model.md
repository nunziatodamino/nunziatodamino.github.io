We discussed in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/The global spin flip symmetry (Z_2 symmetry) of the spin-1 Ising model|The global spin flip symmetry (Z_2 symmetry) of the spin-1 Ising model]], that, due to the $\mathbb{Z}^2$ symmetry, when $H=0$, for a finite system there will be no ferromagnetic phase. Specifically we proved that the average magnetization per spin:

$$ m_N(0,\beta)= 0 \qquad \forall \beta,N $$

The only way to achieve a ferromagnetic phase transition in this case, i.e. to have $m_N(0,\beta)\neq 0$, is to take the thermodynamic limit.
Here we have to make particular attention to how this limit is taken.
If we consider:

$$ \lim_{N\to+ \infty}\left[ \lim_{H\to 0^{\pm}} m_N(H,\beta) \right] =0$$

The average magnetization per spin still remains zero and we have still no phase transition. We have to do the converse then:

$$ \lim_{H\to0^{\pm}}\left[ \lim_{N\to + \infty} m_N(H,\beta) \right] \neq0$$

This, while mathematically sound is subtle from a physical point of view. It means that in order to have a ferromagnetic phase transition, a magnetic field $H$, no matter how small, must be turned on.
This term break the symmetry of the Hamiltonian. In fact in general we proved $\mathscr{H}(H,J,\{s_i\}) = \mathscr{H}(-H,J,\{-s_i\})$, while in the case of $H=0$ is even respect the global spin flip symmetry $\mathscr{H}(0,J,\{s_i\}) = \mathscr{H}(0,J,\{-s_i\})$.
Then the thermodynamic limit is taken, and only later the magnetic field is switched off, and the system retains its magnetization.
Note that the initial magnetic field onset can be realized either be an external non zero field or by an excess of aligned spins in the system, say taking all the surface spins either up or down.
