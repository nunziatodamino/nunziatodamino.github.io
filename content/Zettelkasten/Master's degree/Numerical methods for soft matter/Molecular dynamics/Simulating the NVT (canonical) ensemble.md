The natural ensemble for a MD simulation is the NVE ensemble.
But what if we want to simulate a NVT ensemble ? The idea is simple. We have to put in the system in contact with an heat bath, i.e. simulate with an algorithm a thermostat.
In order to check if the thermostat is good or not it must reproduce the relative variance of $T_K$ in a canonical ensemble:

$$ \frac{\sigma^2_{T_K}}{\langle T_k \rangle} = \frac{2}{3N} $$

If it does we call the thermostat canonical. 
Note sometimes we may want to implement a non-canonical thermostat to speed up equilibration, and then use the canonical in the production run.

We show in these notes different thermostats, either canonical or non-canonical, with different degree of complexity inb their implementation.

- [[Zettelkasten/Master's degree/Numerical methods for soft matter/Molecular dynamics/Velocity rescaling (non-canonical thermostat)|Velocity rescaling (non-canonical thermostat)]]
- [[Zettelkasten/Master's degree/Numerical methods for soft matter/Molecular dynamics/Berendsen thermostat (non-canonical thermostat)|Berendsen thermostat (non-canonical thermostat)]]
- [[Andersen thermostat (canonical thermostat)]]
- [[Zettelkasten/Master's degree/Numerical methods for soft matter/Molecular dynamics/Nosè-Hoover thermostat (canonical thermostat)|Nosè-Hoover thermostat (canonical thermostat)]]

