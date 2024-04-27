We want to describe a collective oscillation of electrons (plasmon) with the most basic model encapsulating the electron-electron interaction ([[Jellium model]]).
The idea is simple, we want to describe the electron motion via the [[Drude Theory]], specifically by describing all the electron cloud instead of the single electron. This can be achieved easily by multiplying the equation of motion by the electron density $n$ by both sides:

$$ mn \ddot{\bar{r}} + mn\gamma\dot{\bar{r}} = -en\bar{E}(t) $$

Moreover we will consider $mn\gamma\dot{\bar{r}}=0$. This approximation will be justified only a posteriori.
In the end we have to deal with the following equation:

$$ mn \ddot{\bar{r}}  = -en\bar{E}(t) $$

In the framework of the jellium model, the number density is space dependent, so we have to consider more correctly:

$$ mn(\bar{r}) \dot{\bar{v}}  = -en(\bar{r})\bar{E}(t) $$

Now we make the following observations:
The electric field is due to the perturbation from equilibrium of the charge density. This perturbation can be evaluated by using Maxwell's equation:

$$ \nabla \cdot \bar{E} = \frac{\rho}{\varepsilon_0} = \frac{-e(n(\bar{r})-n_0)}{\varepsilon_0}  $$

Moreover we use the continuity equation. Given that $\rho(\bar{r})=-e(n(\bar{r})-n_0)$ and $\bar{J}(\bar{r}) = \rho(\bar{r})\dot{\bar{r}} = \rho(\bar{r}){\bar{v}}$ we can write a continuity equation for the number density:

$$ \nabla \cdot \bar{J} + \frac{\partial \rho}{\partial t} = 0 \qquad \iff \qquad \nabla \cdot \left(n(\bar{r}){\bar{v}}\right) = - \frac{\partial n(\bar{r})}{\partial t} $$

And now derivate both sides respect to time:

$$ \nabla \cdot \left(\frac{\partial n(\bar{r})}{\partial t}{\bar{v}}+n(\bar{r})\dot{\bar{v}}\right) = - \frac{\partial^2 n(\bar{r})}{\partial t^2} \qquad \iff \qquad \nabla \cdot \left(n(\bar{r})\dot{\bar{v}}\right) = - \frac{\partial^2 n(\bar{r})}{\partial t^2} $$

We are assuming that $\nabla \cdot \left(\frac{\partial n(\bar{r})}{\partial t}{\bar{v}}\right)\sim 0$ (**non ho idea del perchè, se non si fa non funziona**)

Now we can apply the divergence to both sides of the initial equation:

$$ m\nabla \cdot(n(\bar{r}) \dot{\bar{v}})  = -en(\bar{r})\bar{E}(t) $$

And substitute the consideration made in the observation, assuming moreover that $\nabla n(\bar{r}) \sim 0$ (this is reasonable, we are assuming that $n(\bar{r})$ is a slow varying function in space, i.e. the perturbation is small.)
One finally obtains:

$$ \begin{aligned} 
-m \frac{\partial^2 n(\bar{r})}{\partial t^2}  &= -en(\bar{r}) \frac{-e(n(\bar{r})-n_0)}{\varepsilon_0} \\
-m \frac{\partial^2 (n(\bar{r})-n_0)}{\partial t^2}  &= \frac{e^2n(\bar{r})}{{\varepsilon_0}} {(n(\bar{r})-n_0)} \\
 \frac{\partial^2 (n(\bar{r})-n_0)}{\partial t^2}  &+ \frac{e^2n(\bar{r})}{{m\varepsilon_0}} {(n(\bar{r})-n_0)}=0
\end{aligned} $$

Where we used $\frac{\partial^2 (n(\bar{r})-n_0)}{\partial t^2}=\frac{\partial^2 n(\bar{r})}{\partial t^2}$. One can make this equation an harmonic oscillator ODE if considers the approximation $n(\bar{r})\sim n_0$,  justified by the small perturbation hypothesis $|n(\bar{r})- n_0|<<n_0$ .
In this case we can write:

$$  \frac{\partial^2 (n(\bar{r})-n_0)}{\partial t^2}  + \omega^2_p {(n(\bar{r})-n_0)}=0
 \qquad \omega_P^2=\frac{e^2n_0}{{m\varepsilon_0}}$$

Where $\omega_P$ is called plasma frequency.