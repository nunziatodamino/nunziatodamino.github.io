This is the simplest thermostat to implement.
Given the equipartition theorem, for a particle:

$$ \langle\sum_i \frac{1}{2}m_iv_i^2 \rangle = \frac{3}{2}k_BT $$

The velocities and the temperature are related, so if we rescale the velocity we rescale the temperature.
We have to rescale the velocities in the following way:

$$ \bar{v}_i' = \sqrt{\frac{T_0}{T_K}} v_i \equiv \lambda \bar{v}_i $$

- **Proof**
	By the equipartition theorem, supposing that particles at velocities $\bar{v}_i$ are at temperature $T_K$:
	
	$$ \langle\sum_i \frac{1}{2}m_iv_i^{'2} \rangle = \lambda^2\langle\sum_i \frac{1}{2}m_iv_i^{2} \rangle = \frac{T_0}{T_K} \frac{3}{2}k_BT_K = \frac{3}{2}k_BT_0 $$

This rescaling can happen at a fixed $\Delta \tau$ or at any integration timestep if one is snazzy.
This thermostat is non-canonical because fixes artificially the temperature, so that it cannot show fluctuations consistent with the canonical ensemble. 