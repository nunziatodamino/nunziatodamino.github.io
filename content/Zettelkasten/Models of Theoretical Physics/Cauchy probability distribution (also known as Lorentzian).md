We begin our treatment by defining the standard Cauchy probability distribution 

>[!info] **Standard Cauchy probability distribution**
>$$p_{X}(x)=\frac{1}{\pi} \frac{1}{1+x^2}\qquad x \in \mathbb{R}$$

One important feature of this distribution is that ==if one tries to evaluate the mean or the variance of the distribution it realizes that they don't exists, i.e. the integral doesn't converge.==.

This can be shown by the fact that the moment generating function doesn't exists, hence no moment of the distribution is defined.
We can also see this by the evaluation of the characteristic function. Is shown [[Cauchy distribution characteristic function proof.pdf|here]] that :

$$ \varphi(k) = \braket{e^{ikx}} = \int_{\mathbb{R}}dx\ e^{ikx} \frac{1}{\pi} \frac{1}{1+x^2} = e^{-|k|} $$

This characteristic function is not derivable in $k=0$, hence for the properties of the characteristic function, no moment will be defined.

One can extend the standard Cauchy distribution to a more general one involving a scale parameter $\gamma$ and a shift one $x_0$: 

>[!info] **Cauchy probability distribution**
>$$p_{X}(x)=\frac{1}{\pi} \frac{\gamma^2}{\gamma^2+(x-x_0)^2}\qquad x \in \mathbb{R}$$

Where in this instance the characteristic function will be:

$$  \varphi(k) = \braket{e^{ikx}} =\gamma e^{ikx_0-\gamma|k|} $$
