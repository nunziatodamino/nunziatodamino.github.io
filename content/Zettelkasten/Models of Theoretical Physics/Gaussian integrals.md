### 1 - dimension

>[!info] Gaussian integral
>$$ \int_{\mathbb{R}} \exp\left(-\frac{a}{2}x^2\right) dx = \sqrt{\frac{2\pi}{a}} \qquad a>0$$
>Note that the condition $a>0$ is essential in order to the function to be summable.

>[!info] Translated Gaussian integral
>$$ \int_{\mathbb{R}} \exp\left(-\frac{a}{2}x^2+bx\right) dx = \sqrt{\frac{2\pi}{a}}\exp\left( \frac{b^2}{2a} \right) \qquad a>0, b \in \mathbb{C}$$
>For a proof when $b \in \mathbb{R}$ see [[translated_gaussian_integral_1d.pdf|here]]

Note that one can manipulate the translated Gaussian integral in order to obtain

>[!info] Hubbard-Stratonovich transformation
>$$  \exp\left( \frac{b^2}{2a} \right) = \sqrt{\frac{a}{2\pi}}\int_{\mathbb{R}} \exp\left(-\frac{a}{2}x^2+bx\right) dx  \qquad a>0, b \in \mathbb{C}$$
>This can be useful if we think b as our variable. This in fact transforms a quadratic term in a linear term.

