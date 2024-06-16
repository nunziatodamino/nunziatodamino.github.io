https://en.wikipedia.org/wiki/Boltzmann_equation

![[Boltzmann transport equation.png|500]]

## K-space formulation

$$ \frac{\partial f}{\partial \bar{r}} \cdot\bar{v} + \frac{\partial f}{\partial \bar{k}} \cdot\frac{\bar{F}}{\hbar} + \frac{\partial f}{\partial t} = \left[\frac{\partial f}{\partial t}\right]_{\text{collisional}} $$

Where $\frac{\partial f}{\partial \bar{r}}\equiv\nabla_{\bar{r}}f$ and $\frac{\partial f}{\partial \bar{k}}\equiv\nabla_{\bar{k}}f$

### Relaxation time ansatz

One can approximate

$$\left[\frac{\partial f}{\partial t}\right]_{\text{collisional}} \simeq - \frac{f-f_0}{\tau} $$

And obtain as final equation:

$$ \frac{\partial f}{\partial \bar{r}} \cdot\bar{v} + \frac{\partial f}{\partial \bar{k}} \cdot\frac{\bar{F}}{\hbar} + \frac{\partial f}{\partial t} = - \frac{f-f_0}{\tau} $$
