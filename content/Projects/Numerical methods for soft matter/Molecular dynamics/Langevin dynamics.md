We can define a simple equation of motion for describing the motion of a particle in a [[Projects/Numerical methods for soft matter/Molecular dynamics/Colloidal system|Colloidal system]], (i.e. a Brownian motion). For one component:

$$ m\dot{v}_x(t) = F_x(t) - m\gamma v_x(t) + R_x(t) $$

Where $m\gamma = 6 \pi \eta r$, where $\eta$ is the colloid viscosity and $r$ the radius of the dispersed particle.
This is a simple Newton equation with a drag force, where we added a random force $R_x(t)$, which represents the rapidly varying forces exerted on the colloid by the molecules of the solvent. It is called the random force to
distinguish it from the hydrodynamic drag force on the dispersed particle $- m\gamma v(t)$. The drag force is also due to the solvent but, unlike the random force, it is (linearly) correlated with the velocity of the dispersed particle. In the absence of the random force, the velocity of the dispersed particle would quickly decay to zero. However, the random force ensures that the dispersed particle keeps moving, even though it will lose the memory of its original velocity.
The random force has the following properties:

$$\begin{aligned}
&\langle R_x(t) \rangle = 0 \\
&\langle R_x(t)R_x(t') \rangle = 2A\delta(t-t')
\end{aligned}
$$


I.e. has zero mean and is uncorrelated at any time.
Note that $A$ is a coefficient related to the random force amplitude and yet to be determined.
Assuming ergodicity, if we write the first using a time average definition:

$$ \langle R_x(t) \rangle = \lim_{\tau\to_{+\infty}}\int_0^\tau R_x(t)\rho(t)dt =0$$

Where $\rho(t)$ is the pdf from which the random force is sampled. Then from this we can imply that there exists a time called $\tau_{coll}$, such that:

$$\int_0^{\tau_{coll}} R_x(t)\rho(t)dt \simeq 0$$

This implies that uncorrelation at any time is an approximation, and more correctly we should consider uncorrelation for $t-t' \gg \tau_{coll}$.
In many books, one writes directly:

$$ \langle R_x(t)R_x(t') \rangle = 2\gamma k_BT\delta(t-t') $$

To implicitly state that the random force is related to the drag force and is of thermal nature.