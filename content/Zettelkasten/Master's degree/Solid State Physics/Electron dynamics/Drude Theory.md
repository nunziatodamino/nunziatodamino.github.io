The Drude theory is a classical model that describes the behavior of electrons in a metal under the influence of an electric field.
According to this theory, electrons in a metal can be treated as a free electron gas. The theory assumes that the electrons move independently through the metal lattice and collide with ions or impurities, causing them to scatter. These collisions are modeled as random events that interrupt the motion of the electrons.
The probability of having a collision in a time interval $dt$ is given by $dt/\tau$ , where with $\tau$ we indicate the median time between collisions.

Let's build the equation of motion by simple considerations. Supposing there are no collisions, the electron changes its momentum due to the electric field $\frac{d\bar{p}}{dt}=-e\bar{E} \to \bar{p}(t+dt)=\bar{p}(t)-e\bar{E}dt$. Given the fact that there are collisions in the system we observe a momentum at time $t+dt$ only if a collision doesn't happen. So we can correct the momentum derived before by multiplying by the probability that the collision doesn't happen:

$$\begin{aligned} \bar{p}(t+dt)&=\left(\bar{p}(t)-e\bar{E}dt\right)\left( 1-\frac{dt}{\tau} \right)= \\&= \bar{p}(t)-e\bar{E}dt - \bar{p}(t)\frac{dt}{\tau}+e\bar{E}\frac{dt^2}{\tau} \sim \bar{p}(t)-e\bar{E}dt - \bar{p}(t)\frac{dt}{\tau} \end{aligned}$$

We now rebuild the ODE to obtain for a single electron:

$$ m \dot{v} + m\gamma\bar{v} = -e\bar{E}(t)  \iff m \ddot{\bar{r}} + m\gamma\dot{\bar{r}} = -e\bar{E}(t) $$

Note: Given that this model is used to model the electric conductivity is custom in literature to prefer the first form.

We extended our reasoning to a general time dependent electric field, and we considered $\gamma = 1/\tau$.

- Constant field solution
Considering the forcing electric field uniform $\bar{E}(t)=\bar{E}_0$, we can write a solution for the velocity, considering $\bar{v}(t_0)\equiv\bar{v}_0$ its initial condition:

$$ \bar{v}(t) = -\frac{e\tau}{m}\bar{E}_0 + \left[\bar{v}_0 +\frac{e\tau}{m}\bar{E}_0 \right]e^{-t/\tau} = -\frac{e}{m\gamma}\bar{E}_0 + \left[\bar{v}_0 +\frac{e}{m\gamma}\bar{E}_0 \right]e^{-t\gamma}   $$

- Oscillating field solution
Considering the forcing electric field oscillating $\bar{E}(t)=\bar{E}_0e^{-i\omega t}$, we can write a solution for the velocity, ==considering $\bar{r}(t_0)=0$ its initial condition non tornas:==

$$ \bar{r}(t) = \frac{e}{m(\omega^2+i\gamma\omega)}\bar{E}(t) $$

So we can simply evaluate electrical conductivity by evaluating the current density using its definition $\bar{J} = -ne\bar{v}(t)$, where $n$ is the electron density, $e$ the electron charge and $\bar{v}(t)$ the electron velocity.

We obtain then:

$$ \bar{J} = -ne\bar{v}(t) =  ne^2\frac{i\omega }{m(\omega^2+i\gamma\omega)} \bar{E}(t)= \frac{ne^2}{m}\frac{i}{(\omega+i\gamma)} \bar{E}(t)=\frac{ne^2\tau}{m}\frac{1}{(1-i\omega\tau)} \bar{E}(t)$$

So that we can define:

$$ \sigma(\omega)=\frac{ne^2\tau}{m}\frac{1}{(1-i\omega\tau)} \equiv \sigma_0\frac{1}{(1-i\omega\tau)} $$

The term $\sigma_0$ is the electrical conductivity at the limit of the constant forcing field $(\omega \to 0)$

