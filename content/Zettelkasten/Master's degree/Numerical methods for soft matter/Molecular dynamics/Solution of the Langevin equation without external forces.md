Consider the [[Zettelkasten/Master's degree/Numerical methods for soft matter/Molecular dynamics/Langevin dynamics|Langevin equation]] with $F_{x}=0$:

$$ m\dot{v}_x(t) = - m\gamma v_x(t) + R_x(t) $$

This is a first order ODE:

$$ \dot{v}_x(t) + \gamma v_x(t) = \frac{R_x(t)}{m} $$

So that we can solve it easily with the method of the integrating factor:

$$ v_x(t) = e^{-\gamma t}\left[ \int_0^t d\tau\ e^{\gamma\tau} \frac{R_x(\tau)}{m}  + v_{0x}\right] = v_{0x}e^{-\gamma t} + \frac{1}{m} e^{-\gamma t}\int_0^t d\tau\ e^{\gamma\tau} {R_x(\tau)}  $$

Assuming $v_x(0) = v_{0x}$. Note that if we take the average:

$$\langle v_x(t) \rangle = e^{-\gamma t}\left[ \int_0^t d\tau\ e^{\gamma\tau} \frac{\langle R_x(\tau) \rangle}{m} + v_{0x} \right] = v_{0x} e^{-\gamma t}$$

Where we use the fact that the only random variable in the expression is $R_x$, it has mean zero, and $v_x$ is also a r.v. because is a function of a random variable.
Note that this let us define a characteristic time $\tau^* = \frac{1}{\gamma}$.
Now we evaluate the fluctuations around the average:

$$
\begin{aligned}
\langle (v_x(t)- \langle v_x(t) \rangle )^2 \rangle &= \langle (v_x(t)- v_{0x} e^{-\gamma t} )^2 \rangle =\\ &=\langle \left( e^{-\gamma t}\int_0^t d\tau\ e^{\gamma\tau} \frac{R_x(\tau)}{m} \right)^2 \rangle= e^{-2\gamma t} \int_0^t \int_0^t d\tau d\tau'\ e^{2\gamma(\tau+\tau')} \frac{\langle R_x(\tau)R_x(\tau') \rangle}{m^2}  = \\
&= e^{-2\gamma t} \int_0^t \int_0^t d\tau d\tau'\ e^{2\gamma(\tau+\tau')} \frac{2A\delta(\tau-\tau')}{m^2} = \frac{e^{-2\gamma t}}{m^2} \int_0^t d\tau e^{2\gamma\tau} = \\
&=\frac{A}{m^2\gamma}(1-e^{-2\gamma t})

\end{aligned}
$$

Note that from this result we can evaluate the coefficient $A$. Supposing the velocities uncorrelated:

$$\langle v^2_x(t) \rangle = v^2_{0x} e^{-2\gamma t} + \frac{A}{m^2\gamma}(1-e^{-2\gamma t})$$

But in the long time limit:

$$\langle v^2_x(t) \rangle \sim \frac{A}{m^2\gamma}$$

Yet we know also that for the equipartition theorem, for one particle:

$$\langle v^2_x(t) \rangle = \frac{k_BT}{m} \sim \frac{A}{m^2\gamma} \qquad \iff\qquad A = m\gamma k_B T  $$

This result is known as **fluctuation-dissipation theorem**.

If we instead want to evaluate the mean square displacement we can get it from the velocity by integrating. First we have:

$$ x(t) - x_0 =  \int_0^t v_x(\tau)d\tau = \int_0^td\tau' \left[ v_{0x}e^{-\gamma \tau'} + \frac{1}{m} e^{-\gamma \tau'}\int_0^{\tau'} d\tau\ e^{\gamma\tau} {R_x(\tau)}\right] $$

And (**to prove**) :

$$ \langle (x(t) - x_0)^2 \rangle = \left( v_{0x}^2 - \frac{A}{m^2\gamma} \right) \left(\frac{1-e^{-\gamma t}}{\gamma} \right)^2 + \frac{2A}{m^2\gamma^2} \left( t - \frac{1-e^{-\gamma t}}{\gamma} \right) $$

We show now 2 special limiting cases.

- **Ballistic regime** $t \ll \tau^*$ :

We have $e^{-\gamma t} = 1 -\gamma t + \mathcal{O}(t^2)$:


$$ \langle (x(t) - x_0)^2 \rangle \sim \left( v_{0x}^2 - \frac{A}{m^2\gamma} \right) t^2 \sim v_{0x}^2t^2 $$

Where we are assuming implicitly that $v_{0x}^2 \gg \frac{A}{m^2\gamma}$ . This implies that in this timeframe, is as the particle follows a uniform linear motion, so that has constant speed $v_{0x}$.

- **Diffusive regime** $t \gg \tau^*$ :

In this limit $e^{-\gamma t} \to 0$:

$$ \langle (x(t) - x_0)^2 \rangle \sim \left( v_{0x}^2 - \frac{A}{m^2\gamma^2} \right) \left(\frac{1}{\gamma} \right)^2 + \frac{2A}{m^2\gamma}  t  \sim \frac{2A}{m^2\gamma^2} t $$

Because, for $\lim_{t \to +\infty}$, clearly $\frac{2A}{m^2\gamma}t \gg \left( v_{0x}^2 - \frac{A}{m^2\gamma} \right) \left(\frac{1}{\gamma} \right)^2$, because the first term increases with time while the second is a 
constant.
We can conclude then that for one particle in one dimension:

$$ \langle (x(t) - x_0)^2 \rangle \sim \frac{2m\gamma k_B T}{m^2\gamma^2} t = 2\frac{k_B T}{m\gamma} t \equiv 2Dt $$

Where $D$ is called diffusion coefficient.
