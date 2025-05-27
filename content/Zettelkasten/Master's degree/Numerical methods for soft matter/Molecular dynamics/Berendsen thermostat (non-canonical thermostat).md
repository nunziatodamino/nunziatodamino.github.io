The idea behind is the same of the [[Zettelkasten/Master's degree/Numerical methods for soft matter/Molecular dynamics/Velocity rescaling (non-canonical thermostat)|Velocity rescaling (non-canonical thermostat)]], only that this time the rescaling factor changes:

$$ \bar{v}_i' = \lambda' \bar{v}_i = \left( 1+\frac{\Delta t}{\tau}\frac{T_0-T_K}{T_K} \right)\bar{v}_i $$

Here the rescaling is softer, and done every $\tau/\Delta t$ timesteps. Note that if $\tau \to \infty$ no rescaling is done. Contrary on what we saw in velocity rescaling, here the coefficient can assume either positive or negative values according to the target temperature.
Also this thermostat does not reproduce the canonical fluctuations in the temperature.