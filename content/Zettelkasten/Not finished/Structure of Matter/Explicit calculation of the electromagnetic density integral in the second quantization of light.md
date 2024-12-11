We want to plug :

$$\bar{A}(\bar{r},t) = \sum_{\bar{k}}\sum_s\left[\frac{1}{\sqrt{V}} A_{\bar{k}s}(t)e^{i(\bar{k}\cdot\bar{r})} + \frac{1}{\sqrt{V}} A^*_{\bar{k}s}(t)e^{-i(\bar{k}\cdot\bar{r})}\right]\hat{u}_{\bar{k}s} $$

In the following integral:

$$ H = \int_V d^3\bar{r}\ u_{em} = \int_V d^3\bar{r} \left[ \frac{1}{2}\varepsilon_0\left(\frac{\partial \bar{A}}{\partial t}\right)^2 + \frac{1}{2\mu_0}\vert \nabla \times \bar{A} \vert^2 \right] $$


We start by evaluating the first term in the RHS by making the preliminary calculation: 

$$\begin{aligned}\frac{\partial \bar{A}}{\partial t} & = \frac{\partial}{\partial t} \left[\sum_{\bar{k}}\sum_s\left[\frac{1}{\sqrt{V}} A_{\bar{k}s}(t)e^{i(\bar{k}\cdot\bar{r})} + \frac{1}{\sqrt{V}} A^*_{\bar{k}s}(t)e^{-i(\bar{k}\cdot\bar{r})}\right]\hat{u}_{\bar{k}s} \right] = \\&=\sum_{\bar{k}}\sum_s\left[\frac{1}{\sqrt{V}} \frac{\partial A_{\bar{k}s}(t)}{\partial t}e^{i(\bar{k}\cdot\bar{r})} + \frac{1}{\sqrt{V}}\frac{\partial A^*_{\bar{k}s}(t)}{\partial t}e^{-i(\bar{k}\cdot\bar{r})}\right]\hat{u}_{\bar{k}s} = \\&= \sum_{\bar{k}}\sum_s\left[\frac{-i\omega_k}{\sqrt{V}} A_{\bar{k}s}(t)e^{i(\bar{k}\cdot\bar{r})} + \frac{i\omega_k}{\sqrt{V}} A^*_{\bar{k}s}(t)e^{-i(\bar{k}\cdot\bar{r})}\right]\hat{u}_{\bar{k}s}  \end{aligned}$$

$$\begin{aligned}\left(\frac{\partial \bar{A}}{\partial t}\right)^2 &= \left( \sum_{\bar{k}}\sum_s\left[\frac{-i\omega_k}{\sqrt{V}} A_{\bar{k}s}(t)e^{i(\bar{k}\cdot\bar{r})} + \frac{i\omega_k}{\sqrt{V}} A^*_{\bar{k}s}(t)e^{-i(\bar{k}\cdot\bar{r})}\right]\hat{u}_{\bar{k}s} \right)^2  =\\ & =  \sum_{\bar{k}}\sum_s\left[\frac{\omega^2_k}{V} A^2_{\bar{k}s}(t)\vert e^{i(\bar{k}\cdot\bar{r})}\vert^2 + \frac{-\omega^2_k}{V} (A^*_{\bar{k}s}(t))^2\vert e^{-i(\bar{k}\cdot\bar{r})}\vert^2 +\frac{\omega^2_k}{V}(A_{\bar{k}s}(t)A^*_{\bar{k}s}(t)+A^*_{\bar{k}s}(t))A_{\bar{k}s}(t) \right] = \\ & =\sum_{\bar{k}}\sum_s\left[\frac{\omega^2_k}{V}(A_{\bar{k}s}(t)A^*_{\bar{k}s}(t)+A^*_{\bar{k}s}(t))A_{\bar{k}s}(t)) \right] \end{aligned}$$

Where we used the general fact that, for a complex number $z^2 = (z^*)^2$.
Now we go to the second term in the RHS.

$$\begin{aligned}\nabla \times \bar{A} &= \nabla \times \left[  \sum_{\bar{k}}\sum_s\left[\frac{1}{\sqrt{V}} A_{\bar{k}s}(t)e^{i(\bar{k}\cdot\bar{r})} + \frac{1}{\sqrt{V}} A^*_{\bar{k}s}(t)e^{-i(\bar{k}\cdot\bar{r})}\right]\hat{u}_{\bar{k}s}  \right] = \qquad [\text{we use}\  \nabla \times (\phi \bar{A}) = \phi (\nabla \times \bar{A}) +\nabla \phi \times \bar{A}\ ]\\&= \sum_{\bar{k}}\sum_s\left[\frac{1}{\sqrt{V}} A_{\bar{k}s}(t)e^{i(\bar{k}\cdot\bar{r})} + \frac{1}{\sqrt{V}} A^*_{\bar{k}s}(t)e^{-i(\bar{k}\cdot\bar{r})}\right] (\nabla \times \hat{u}_{\bar{k}s})  + \nabla \left(  \sum_{\bar{k}}\sum_s\left[\frac{1}{\sqrt{V}} A_{\bar{k}s}(t)e^{i(\bar{k}\cdot\bar{r})} + \frac{1}{\sqrt{V}} A^*_{\bar{k}s}(t)e^{-i(\bar{k}\cdot\bar{r})}\right] \right) \times \hat{u}_{\bar{k}s}=\\&=\nabla \left(  \sum_{\bar{k}}\sum_s\left[\frac{1}{\sqrt{V}} A_{\bar{k}s}(t)e^{i(\bar{k}\cdot\bar{r})} + \frac{1}{\sqrt{V}} A^*_{\bar{k}s}(t)e^{-i(\bar{k}\cdot\bar{r})}\right] \right) \times \hat{u}_{\bar{k}s}\end{aligned}$$
Where we used the fact that the curl of a constant vector is 0. We now focus on the gradient :

$$\begin{aligned}& \nabla \left(  \sum_{\bar{k}}\sum_s\left[\frac{1}{\sqrt{V}} A_{\bar{k}s}(t)e^{i(\bar{k}\cdot\bar{r})} + \frac{1}{\sqrt{V}} A^*_{\bar{k}s}(t)e^{-i(\bar{k}\cdot\bar{r})}\right] \right) =\\&= \sum_{\bar{k}}\sum_s\left[\frac{1}{\sqrt{V}} A_{\bar{k}s}(t)\nabla e^{i(\bar{k}\cdot\bar{r})} + \frac{1}{\sqrt{V}} A^*_{\bar{k}s}(t)\nabla e^{-i(\bar{k}\cdot\bar{r})}\right] = \\ &= \sum_{\bar{k}}\sum_s\left[\frac{i \bar{k}}{\sqrt{V}} A_{\bar{k}s}(t)e^{i(\bar{k}\cdot\bar{r})} + \frac{-i\bar{k}}{\sqrt{V}} A^*_{\bar{k}s}(t)e^{-i(\bar{k}\cdot\bar{r})}\right] \end{aligned} $$

We have that $\bar{k}$ and $\hat{u}_{\bar{k}s}$ are orthogonal by definition, so that the sine between the two is 1. We will have then:

$$\begin{aligned} \vert \nabla \times \bar{A} \vert^2 &= \sum_{\bar{k}}\sum_s\left[\frac{i \bar{k}}{\sqrt{V}} A_{\bar{k}s}(t)e^{i(\bar{k}\cdot\bar{r})} + \frac{-i\bar{k}}{\sqrt{V}} A^*_{\bar{k}s}(t)e^{-i(\bar{k}\cdot\bar{r})}\right]^2 =\\& = \sum_{\bar{k}}\sum_s\left[\frac{-k^2}{V} A_{\bar{k}s}(t)\vert e^{i(\bar{k}\cdot\bar{r})}\vert^2 + \frac{k^2}{V} (A^*_{\bar{k}s}(t))^2\vert e^{-i(\bar{k}\cdot\bar{r})}\vert^2 + \frac{k^2}{V}(A_{\bar{k}s}(t)A^*_{\bar{k}s}(t)+A^*_{\bar{k}s}(t))A_{\bar{k}s}(t)) \right] = \\& = \sum_{\bar{k}}\sum_s\left[ \frac{k^2}{V}(A_{\bar{k}s}(t)A^*_{\bar{k}s}(t)+A^*_{\bar{k}s}(t))A_{\bar{k}s}(t)) \right] \end{aligned}$$

Finally, when we return to $H$, if we use the dispersion relation $\omega_k = ck$, and also the equality $c = \frac{1}{\sqrt{\epsilon_0 \mu_0}}$, one obtains in the end for $H$:

$$ H = \int_V d^3\bar{r} \left[ \sum_{\bar{k}}\sum_s \frac{1}{2}\varepsilon_0\frac{\omega^2_k}{V}\left(A_{\bar{k}s}A^*_{\bar{k}s}+A^*_{\bar{k}s}A_{\bar{k}s}\right) + \frac{1}{2\mu_0}\frac{\omega^2_k}{c^2V}\left(A_{\bar{k}s}A^*_{\bar{k}s}+A^*_{\bar{k}s}A_{\bar{k}s}\right) \right]= $$

$$ =  \left[ \sum_{\bar{k}}\sum_s \frac{\varepsilon_0\omega^2_k}{V}\left(A_{\bar{k}s}A^*_{\bar{k}s}+A^*_{\bar{k}s}A_{\bar{k}s}\right)\right]\int_V d^3\bar{r}=\left[ \sum_{\bar{k}}\sum_s \frac{\varepsilon_0\omega^2_k}{V}\left(A_{\bar{k}s}A^*_{\bar{k}s}+A^*_{\bar{k}s}A_{\bar{k}s}\right)\right]V $$

Where we omitted the time dependence on the $A$ coefficients because $A_{\bar{k}s}(t)A^*_{\bar{k}s}(t) = A_{\bar{k}s}(0)A^*_{\bar{k}s}(0)$.
Finally one has the expression:

$$H = \sum_{\bar{k}}\sum_s \varepsilon_0\omega^2_k\left(A_{\bar{k}s}A^*_{\bar{k}s}+A^*_{\bar{k}s}A_{\bar{k}s}\right)$$

Of course we can in principle sum inside the parenthesis, but we choose to retain this form in order to not have problem in the quantization process.
