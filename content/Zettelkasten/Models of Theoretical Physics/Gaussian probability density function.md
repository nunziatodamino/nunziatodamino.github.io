
We say that a continuous random variable $X$ is distributed according to a Gaussian centered in $x=0$ if it has the following pdf:

$$ p_{X}(x)  = C \exp\left( -\frac{a}{2}x^2 \right) $$

One can find the coefficient $C$ with the normalization condition $\int_{\mbox{sample space}}p_{X}(x)dx = 1$. We found, by using the [[Gaussian integrals]] that:

$$ p_{X}(x)  = \sqrt{\frac{a}{2\pi}} \exp\left( -\frac{a}{2}x^2 \right) $$

Now we evaluate the characteristic function

$$\varphi(k)= \braket{e^{ikx}}  =  \sqrt{\frac{a}{2\pi}} \int_{\mathbb{R}} \exp\left( -\frac{a}{2}x^2 \right) \exp(ikx) dx= \exp\left( \frac{-k^2}{2a} \right)$$

This is done easily by using the translate Gaussian integral with $b=ik$.

In order to be useful, we use now the typical literature convention in which $a \equiv \frac{1}{\sigma^2}$ , so that we can rewrite

>[!info] Gaussian probability density function
>- centered in $x=0$
> $$ p_{X}(x)  = \frac{1}{\sqrt{{2\pi\sigma^2}}} \exp\left( -\frac{1}{2\sigma^2}x^2 \right) $$
> - centered in $x=\mu$
> $$ p_{X}(x)  = \frac{1}{\sqrt{{2\pi\sigma^2}}} \exp\left( -\frac{1}{2\sigma^2}(x-\mu)^2 \right) \equiv N(\mu, \sigma^2) $$


>[!info] Characteristic function of a Gaussian pdf
> - centered in $x=0$
>$$\varphi_N(k,0,\sigma^2)\equiv \braket{e^{ikx}}  =   \frac{1}{\sqrt{{2\pi\sigma^2}}} \int_{\mathbb{R}} \exp\left( -\frac{1}{2\sigma^2}x^2 \right)\exp(ikx) dx= \exp\left( \frac{-\sigma^2k^2}{2} \right)$$
>- centered in $x=\mu$
>$$\varphi_N(k,\mu,\sigma^2)\equiv\varphi(k)= \braket{e^{ikx}}  =   \frac{1}{\sqrt{{2\pi\sigma^2}}} \int_{\mathbb{R}} \exp\left( -\frac{1}{2\sigma^2}(x-\mu)^2 \right)\exp(ikx) dx= \exp\left( \frac{-\sigma^2k^2}{2}+ik\mu \right)$$

One can prove also the following important result:

>[!info] n-order moment of a Gaussian pdf 
 >-For a Gaussian centered in $x=\mu$
 >$$\braket{x^n}= 
 \begin{cases} 0 \qquad \qquad \qquad \mbox{n is odd}\\
 (n-1)!! \sigma^n \qquad \mbox{n is even}
 \end{cases}$$
 > Where we recall the semifactorial definition $(n-1)!!=(n-1)(n-3)(n-5)\dots3\cdot1$. For a proof see [[n_order_gaussian_1d.pdf|here]]
 
 
 
