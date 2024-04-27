The Drude theory is a classical model that describes the behavior of electrons in a metal under the influence of an electric field.
According to this theory, electrons in a metal can be treated as a free electron gas. The theory assumes that the electrons move independently through the metal lattice and collide with ions or impurities, causing them to scatter. These collisions are modeled as random events that interrupt the motion of the electrons.
The probability of having a collision in a time interval dt is given by $dt/\tau$ , where with $\tau$ we indicate the median time between collisions.

Let's build the equation of motion by simple considerations. Supposing there are no collisions, the electron changes its momentum due to the electric field $\frac{d\bar{p}'}{dt}=-e\bar{E} \to \bar{p}'(t+dt)=\bar{p}'(t)-e\bar{E}dt$. Given the fact that there are collisions in the system we observe a momentum at time $t+dt$ only if a collision doesn't happen. So we can correct the momentum derived before by multiplying by the probability that the collision doesn't happen:

$$\begin{aligned} \bar{p}(t+dt)&=\left(\bar{p}(t)-e\bar{E}dt\right)\left( 1-\frac{dt}{\gamma} \right)= \\&= \bar{p}(t)-e\bar{E}dt - \bar{p}(t)\frac{dt}{\gamma}+e\bar{E}\frac{dt^2}{\gamma} \sim \bar{p}(t)-e\bar{E}dt - \bar{p}(t)\frac{dt}{\gamma} \end{aligned}$$

We now rebuild the ODE to obtain for a single electron:

$$ m \ddot{\bar{r}} + m\gamma\dot{\bar{r}} = -e\bar{E}(t) $$

We extended our reasoning to a general time dependent electric field, and we considered $\gamma = 1/\tau$.

- General solution
Considering the forcing electric field oscillating $\bar{E}(t)=\bar{E}_0e^{-i \omega t}$, we obtain the solution:

$$ \bar{r}(t) = \frac{e}{m(\omega^2+i\gamma\omega)}\bar{E}(t) $$

