Suppose to have a continuous random variable $X$ and its [[Probability density function (PDF)]]. Instead of finding the [[Cumulative density function (CDF)]], which can be a cumbersome process, its preferable to evaluate the so called characteristic function, defined as follows:

>[!info] **Characteristic function** 
>Given a continuous random variable $X$ and its pdf $p_{X}(x)$, one can define the characteristic function as:
>$$ \varphi(k) = \braket{e^{ikx}} = \int_{\mbox{sample space}} e^{ikx} p_{X}(x) dx $$
>==Important note: to not be confused with the moment generating function $M(k) = \braket{e^{kx}}$==


- Properties of the characteristic function:

 $$(-i)^n \frac{d^n\varphi}{dk^n}_{k=0} =\braket{x^n}$$

