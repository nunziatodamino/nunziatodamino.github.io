Consider the [[Projects/Numerical methods for soft matter/Molecular dynamics/Langevin dynamics|Langevin equation]] in the following form:

$$ 
\begin{aligned}
dr(t) &= v(t)dt \\
dv(t) &= f(r(t))dt - \gamma v(t) dt + \sigma dw(t)
\end{aligned}
$$

Where $\sigma = \sqrt{2m\gamma k_B T}$ ,  $f(r(t)) = F(r(t))/m$ and $w(t)$ is the Wiener process. We start by integrating the equation from $t$ to $t + \Delta t$:

$$ 
\begin{aligned}
\int_t^{t + \Delta t}dr(t') &= 
\int_t^{t + \Delta t}v(t')dt' \\
\int_t^{t + \Delta t}dv(t') &= 
\int_t^{t + \Delta t}f(r(t'))dt' - 
\int_t^{t + \Delta t}\gamma v(t') dt' + 
\int_t^{t + \Delta t}\sigma dw(t') \\
\\
r(t+\Delta t) &= r(t) +
\int_t^{t + \Delta t}v(t')dt' \\
v(t+\Delta t) &= v(t) + 
\int_t^{t + \Delta t}f(r(t'))dt' - 
\gamma\int_t^{t + \Delta t}v(t') dt' + \sigma [ w(t+\Delta t) - w(t) ] \\

\end{aligned}
$$

If we find a way to approximate the integrals dependent on $t$, then we have a recursive relation to find the positions and the velocities, i.e. an integrator.

We can approximate the integrals by expanding in Taylor series the integrated functions, starting from the one in the velocity.

- **Velocity integral**
Given $v(t') = v(t) + v'(t)(t'-t) + \dots,\ t' \in B(t,\rho)$, and $f(r(t')) = f(r(t)) + f'(r(t))(t'-t) + \dots,\ t' \in B(t,\rho)$ if we truncate both expression at the first order and plug it the velocity evolution:

$$ v(t') \simeq v(t) + (t'-t)
\ f(r(t)) - 
\gamma (t'-t) \ v(t) + \sigma [ w(t') - w(t)] \qquad t<t'<t+\Delta t  $$

If we then proceed to integrate this:

$$
\begin{aligned}
\int_t^{t + \Delta t}v(t')dt' &\simeq \int_t^{t + \Delta t}[v(t) + (t'-t)\ f(r(t)) - 
\gamma (t'-t) \ v(t) + \sigma [ w(t') - w(t)]]dt' \\
&= \Delta t [v(t)-tf(r(t) +\gamma t v(t))] + \frac{\Delta t^2+2t\Delta t}{2}[f(r(t))-\gamma v(t)] +\sigma\int_t^{t + \Delta t}  [ w(t') - w(t)]dt' = \\
&= \Delta t\ v(t)+ \frac{\Delta t^2}{2}[f(r(t))-\gamma v(t)] + \sigma\int_t^{t + \Delta t}  [ w(t') - w(t)]dt' \equiv \Delta t\ v(t) + C(t)
\end{aligned}
$$

The value $C(t)$ is the second order approximant for the velocity integral, the first term we can see derives from the mean value theorem for integrals.

- **Force integral**
The force integral is:

$$
\begin{aligned}
\int_t^{t + \Delta t}f(r(t'))dt' &\simeq \int_t^{t + \Delta t}[f(r(t)) + f'(r(t))(t'-t)]dt' = \Delta t f(r(t)) + f'(r(t)) \left( \frac{2t\Delta t +\Delta t^2}{2} -t\Delta t \right) = \\
&= \Delta t f(r(t)) + \frac{\Delta t^2}{2}f'(r(t)) = \Delta t f(r(t)) + \frac{\Delta t^2}{2}\frac{\partial f(r(t))}{\partial r} v(t)  
\end{aligned}
$$

To eliminate the derivative of the force we approximate it by using the definition:

$$ \frac{\partial f(r(t))}{\partial r} \sim \frac{f(r(t+\Delta t)) - f(r(t))}{r(t+\Delta t) - r(t)} \frac{\Delta t}{\Delta t} \sim \frac{1}{\Delta t}\frac{f(r(t+\Delta t)) - f(r(t))}{v(t)}$$

Where we also approximated the velocity by its definition. With this we write:

$$ \int_t^{t + \Delta t}f(r(t'))dt' \simeq \Delta t f(r(t)) + \frac{\Delta t}{2}(f(r(t+\Delta t)) - f(r(t)) = \frac{\Delta t}{2}(f(r(t+\Delta t)) + f(r(t)) $$

- **Stochastic term**

The last thing we need is to approximate the stochastic term $w(t+\Delta t) - w(t)$.
