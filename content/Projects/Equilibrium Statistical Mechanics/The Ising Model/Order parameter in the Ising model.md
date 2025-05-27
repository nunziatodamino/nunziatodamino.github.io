In [[Projects/Equilibrium Statistical Mechanics/The Ising Model/The spin-1 Ising model|The spin-1 Ising model]], the [[Projects/Equilibrium Statistical Mechanics/Phase transitions/Order parameter|Order parameter]] is identified by the average magnetization:

$$ \braket{M} = \left< \sum s_i \right> = \sum \braket{s_i} = \sum m $$

Specifically when the average magnetization is 0 the system is disordered and is in the parmagnetic phase, while when is different from 0 is ordered (it presents patches of aligned spins) and the system is in the ferromagnetic phase
It can be useful to have an expression to relate this quantity to the free energy.
We distinguish now different cases according to the magnetic field presence in the Hamiltonian 

### Uniform magnetic field 

In the case of a uniform magnetic field $H$, we can write the Hamiltonian as $\mathscr{H} = \mathscr{H}_0 -HM$, so that following the procedure in [[Projects/Equilibrium Statistical Mechanics/The Ising Model/The partition function as a generating function for particular decomposition of the Hamiltonian|The partition function as a generating function for particular decomposition of the Hamiltonian]] we obtain:

$$ \frac{1}{\beta} \frac{\partial \ln \mathcal{Z}}{\partial H} = \braket{M}$$

We can then recast this in term of the bulk free energy by dividing the expression by the total number of spins in the system, say $N$ :

$$ \frac{1}{\beta N} \frac{\partial \ln \mathcal{Z}}{\partial H} = -\frac{\partial f_b}{\partial H}  =  \frac{\braket{M}}{N} \equiv m $$

Where we will call $m$ average magnetization per spin.

### No magnetic field $(H = 0)$

As we showed in [[Projects/Equilibrium Statistical Mechanics/The Ising Model/The global spin flip symmetry (Z_2 symmetry) of the spin-1 Ising model|The global spin flip symmetry (Z_2 symmetry) of the spin-1 Ising model]], in the finite size case is not possible to have a phase transition, specifically the average magnetization per spin is always 0.
This can be changed in the thermodynamic limit by the [[Projects/Equilibrium Statistical Mechanics/The Ising Model/Spontaneous symmetry breaking in the spin-1 Ising model|Spontaneous symmetry breaking in the spin-1 Ising model]].

### Non uniform magnetic field 

In this case the Hamiltonian takes the form: $\mathscr{H} = \mathscr{H}_0 - \sum_i H_is_i$.
Using the same ansatz as in the uniform field case, one can define:

$$ \frac{1}{\beta} \frac{\partial \ln \mathcal{Z}}{\partial H_i} = \braket{s_i} \equiv m_i$$

Calling this quantity average magnetization per spin at site $i$. Note that this is equal to the [[Projects/Equilibrium Statistical Mechanics/The Ising Model/k-point correlation function in the Ising-like model|1-point spin correlation function]].
In this way, is clear than:

$$ \sum_i m_i = \braket{M} $$

Note that we regain the uniform case if $m_i = m, \ \forall i$. Then one obtains $Nm = \braket{M}$, which is the uniform case result.