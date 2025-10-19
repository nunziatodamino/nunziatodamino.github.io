>[!info] **Gaussian (or Radial Basis Function (RBF)) kernel**
>
>$$K(\bar{x}, \bar{x}') = \exp \left( -\frac{||\bar{x} - \bar{x}'||}{2\sigma^2} \right)$$

### Derivation (1D and $\sigma = 1$)
Let $x \in \mathbb{R}$. Consider an infinite (countable) dimensional vector $\bar{\psi}(x) =(\psi_1(x), \dots)$, where a generic element is represented by the law:

$$\psi_n(x) = \frac{1}{\sqrt{n!}}e^{-\frac{x^2}{2}}x^n \quad n\in \mathbb{N}_0$$

Then :

$$ \braket{\bar{\psi}(x),\bar{\psi}(x')} = \sum_{n=0}^{+\infty} \left( \frac{1}{\sqrt{n!}}e^{-\frac{x^2}{2}}x^n \right)\left( \frac{1}{\sqrt{n!}}e^{-\frac{x'^2}{2}}x'^n \right) = e^{-\frac{x^2 +x'^2}{2}} \sum_{n=0}^{+\infty} \frac{(xx')^n}{n!} =  e^{-\frac{x^2 +x'^2}{2}}e^{xx'} = e^{-\frac{x^2 +x'^2-2xx'}{2}} = e^{-\frac{(x-x')^2}{2}} $$

Given that in 1D the squared norm coincides with the squared product we have finished.
