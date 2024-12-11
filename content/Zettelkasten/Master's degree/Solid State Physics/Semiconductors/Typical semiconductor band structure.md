The band structure of a semiconductor is determined by the few electron near the minima of the conduction band and by the few hole near the maxima of the valence band.

As seen in [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Consideration on the effective mass|Consideration on the effective mass]], near a band stationary point the band in 1D assume a free electron form where the mass is the effective mass.
This implies that:

$$
\begin{aligned}
E_e(k)&=E_c +\frac{\hbar^2{k^2}}{2m_e^*} \quad\text{for electrons}\\
E_h(k)&=E_v -\frac{\hbar^2{k^2}}{2m_h^*} \quad\text{for holes}
\end{aligned}$$

Where of course $m^*_e=m^*_h$
One can extend easily the result in 3 dimensions:

$$
\begin{aligned}
E_e(\bar{k})&=E_c +\frac{\hbar^2}{2} \sum_i\sum_jk_i(m^*)_{ij}^{-1}k_j \quad\text{for electrons}\\ E_h(\bar{k})&=E_v -\frac{\hbar^2}{2} \sum_i\sum_jk_i(m^*)_{ij}^{-1}k_j  \quad\text{for holes}
\end{aligned}
$$

We are simply doing an expansion in Taylor series in 3D, given that $(m^*)_{ij}$ is the Hessian of $E(\bar{k})$ respect to the wavevector components.
We can now simplify this expression if we choose a reference frame in which $(m^*)_{ij}$ is diagonal.
In that case one can write:

$$
\begin{aligned}
E_e(\bar{k})&=E_c +\left(\frac{\hbar^2 k_1^2}{2m^*_1}+\frac{\hbar^2 k_2^2}{2m^*_2}+\frac{\hbar^2 k_3^2}{2m^*_3}\right) \quad\text{for electrons}\\
E_h(\bar{k})&=E_v -\left(\frac{\hbar^2 k_1^2}{2m^*_1}+\frac{\hbar^2 k_2^2}{2m^*_2}+\frac{\hbar^2 k_3^2}{2m^*_3}\right)  \quad\text{for holes}
\end{aligned}
$$

This form is valid only if one find the 3 principal axis for the solid in question in which the mass effective tensor is diagonal. We report them in the following for the principal homogeneous semiconductor, i.e. silicon and germanium:

![[Images/Typical semiconductor band structure_silicon.png|400]]

![[Images/Typical semiconductor band structure_germanium.png|400]]

