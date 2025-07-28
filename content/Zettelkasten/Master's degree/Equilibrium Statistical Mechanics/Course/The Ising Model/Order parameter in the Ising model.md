In [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/The spin-1 Ising model|The spin-1 Ising model]], the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Phase transitions/Order parameter|Order parameter]] can be identified by one of the possible definition of magnetization.

If call the total system magnetization the quantity $M= \sum s_i$ , then it's average is a good candidate for the order parameter

$$ \braket{M} = \left< \sum s_i \right> = \sum \braket{s_i} = \sum m_i $$

Where we implicitly defined $m_i = \braket{s_i}$ to be magnetization at site i, coincident with the average spin value at site $i$.
We can do then a simple arithmetic average (not an ensemble one as the $m_i$ are already averaged) of all these site-dependent magnetizations, and call it:

$$ m = \frac{1}{N} \sum m_i = \frac{1}{N} \sum \braket{s_i}  $$

This defines another order parameter candidate $m$ that we call average magnetization per spin.
This is the one usually used in literature.

Note that by definition the 2 parameters are connected by the relation:

$$m = \frac{\braket{M}}{N}$$

Note that whatever the choice, when the order parameter is non-zero we are in the ordered phase (ferromagnetic), while when is 0 we are in the disordered phase (paramagnetic).

It can be useful to have an expression to relate these quantities to the free energy.
We distinguish now different cases according to the magnetic field presence in the Hamiltonian 

### Uniform magnetic field 

In the case of a uniform magnetic field $H$, we can write the Hamiltonian as $\mathscr{H} = \mathscr{H}_0 -HM$, so that following the procedure in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/The partition function as a generating function for particular decomposition of the Hamiltonian|The partition function as a generating function for particular decomposition of the Hamiltonian]] we obtain:

$$ \frac{1}{\beta} \frac{\partial \ln \mathcal{Z}}{\partial H} = \braket{M}$$

We can then recast this in term of the bulk free energy by dividing the expression by the total number of spins in the system, say $N$ :

$$ \frac{1}{\beta N} \frac{\partial \ln \mathcal{Z}}{\partial H} = -\frac{\partial f_b}{\partial H}  =  \frac{\braket{M}}{N} \equiv m $$

Where we will call $m$ average magnetization per spin.

### No magnetic field $(H = 0)$

As we showed in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/The global spin flip symmetry (Z_2 symmetry) of the spin-1 Ising model|The global spin flip symmetry (Z_2 symmetry) of the spin-1 Ising model]], in the finite size case is not possible to have a phase transition, specifically the average magnetization per spin is always 0.
This can be changed in the thermodynamic limit by the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/Spontaneous symmetry breaking in the spin-1 Ising model|Spontaneous symmetry breaking in the spin-1 Ising model]].

### Non uniform magnetic field 

In this case the Hamiltonian takes the form: $\mathscr{H} = \mathscr{H}_0 - \sum_i H_is_i$.
Using the same ansatz as in the uniform field case, one can define:

$$ \frac{1}{\beta} \frac{\partial \ln \mathcal{Z}}{\partial H_i} = \braket{s_i} \equiv m_i$$

Calling this quantity average magnetization per spin at site $i$. Note that this is equal to the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/k-point correlation function in the Ising-like model|1-point spin correlation function]].
In this way, is clear than:

$$ \sum_i m_i = \braket{M} $$

Note that we regain the uniform case if $m_i = m, \ \forall i$. Then one obtains $Nm = \braket{M}$, which is the uniform case result.