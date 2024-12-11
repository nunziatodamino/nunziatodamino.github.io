https://en.wikipedia.org/wiki/Boltzmann_equation

![[Images/Boltzmann transport equation.png|500]]

## K-space formulation

$$\frac{\partial f}{\partial t} + \bar{v}\cdot \nabla_{\bar{r}}f + \frac{\bar{F}}{\hbar}\cdot \nabla_{\bar{k}}f = \left(\frac{\partial f}{\partial t}\right)_{\text{collisional}} \iff \frac{\partial f}{\partial t} + \bar{v}\cdot \frac{\partial f}{\partial \bar{r}} + \bar{F}\cdot \frac{1}{\hbar} \frac{\partial f}{\partial \bar{k}} = \left(\frac{\partial f}{\partial t}\right)_{\text{collisional}}  $$

Where $\frac{\partial f}{\partial \bar{r}}\equiv\nabla_{\bar{r}}f$ and $\frac{\partial f}{\partial \bar{k}}\equiv\nabla_{\bar{k}}f$

### Relaxation time ansatz

One can approximate

$$\left[\frac{\partial f}{\partial t}\right]_{\text{collisional}} \simeq - \frac{f-f_0}{\tau} $$

And obtain as final equation:

$$ \frac{\partial f}{\partial t} + \bar{v}\cdot \nabla_{\bar{r}}f + \frac{\bar{F}}{\hbar}\cdot \nabla_{\bar{k}}f  = - \frac{f-f_0}{\tau} $$
