As we saw in the [[Zettelkasten/Master's degree/Models of Theoretical Physics/(Strong) law of large numbers]] , we have that, for $n$ [[Zettelkasten/Master's degree/Models of Theoretical Physics/Independent identical distributed random variables (i.i.d.)|i.i.d.]] random variables:

$$ \lim_n \frac{1}{n} \sum_i^n x_i = \mu $$

We want to know how much this equality holds for a fixed $n$. In order to this we can simply evaluate the difference:

$$ \sum_i^n x_i - \mu n $$

And simply see if its 0 or not. If it's 0 we have the statement of the law of large numbers, if not there is a deviation.
We found the following facts:

- the quantity $\sum_i^n x_i - \mu n$ is about as big as $\sqrt{n}$, i.e. $\sum_i^n x_i - \mu n< \sqrt{n}\Rightarrow\frac{\sum_i^n x_i - \mu n}{\sqrt{n}}<1$

- The distribution of the random variable $\frac{\sum_i^n x_i - \mu n}{\sqrt{n}}$ approaches a [[Zettelkasten/Master's degree/Models of Theoretical Physics/Gaussian probability density function|Gaussian pdf]] as n increases, ==irrespective== of the pdf of $x_i$.

This is the basis for the fundamental theorem:

>[!important] **Central limit theorem**
> - **Hp.** Let $\{x_i\}_{i \in \mathbb{N}}$ be a sequence of i.i.d random variables, each with non-zero mean and non-zero variance. Let also be defined the random variable sequence $\{y_n\}_{n \in \mathbb{N}}$ by the law $y_n=\frac{\sum_i^n x_i - \mu n}{\sqrt{n}\sigma}$, with $\mu$ and $\sigma^2$ mean and variance respectively of $x_i$.
> - **Th**. Then, as $n \to +\infty$, we have that $y_n \to N(0,1)$ in distribution.
#### Proof

We begin by evaluating the c.f of $y_n$ Given the fact that the $x_i$ are i.i.d we can use the same reasoning of [[Zettelkasten/Master's degree/Models of Theoretical Physics/Sum of n i.i.d. random variables]], specifically:

$$\varphi(k) = \braket{e^{iky_n}} = \int dy_n\ e^{iky_n} q(y_n) =\int dy_n\int\dots\int dx_1 \dots dx_n e^{iky_n} p(x_1)\dots p(x_n)\delta\left( y_n- \frac{\sum_i^n x_i - \mu n}{\sqrt{n}\sigma} \right) = $$

$$=\int\dots\int dx_1 \dots dx_n e^{ik\left(\frac{\sum_i^n x_i - \mu n}{\sqrt{n}\sigma} \right)} p(x_1)\dots p(x_n) =e^{-\frac{ikn\mu}{\sqrt{n}\sigma^2}} \int\dots\int dx_1 \dots dx_n e^{i\frac{k}{\sqrt{n}\sigma}\sum_i^n x_i} p(x_1)\dots p(x_n) = $$

$$= e^{-\frac{ik\sqrt{n}\mu}{\sigma}}\left[ \varphi_1\left(\frac{k}{\sqrt{n}\sigma}\right) \right]^n = \left[e^{-\frac{ik\sqrt{n}\mu}{n\sigma}} \varphi_1\left(\frac{k}{\sqrt{n}\sigma}\right) \right]^n$$

Now we consider the term inside the bracket:

$$ e^{-\frac{ik\sqrt{n}\mu}{n\sigma}} \varphi_1\left(\frac{k}{\sqrt{n}\sigma}\right) = e^{-\frac{ik\mu}{\sqrt{n}\sigma}} \int dx_i\ e^{i\frac{k}{\sqrt{n}\sigma}x_i}p(x_i) =  \int dx_i\ e^{i\frac{k}{\sqrt{n}\sigma}(x_i-\mu)}p(x_i)   $$

Expand then in Taylor series : $e^x \simeq 1+x+ \frac{x^2}{2!} + \dots$ and reinserting in the integral. We then obtain: 

$$e^{-\frac{ik\sqrt{n}\mu}{n\sigma}} \varphi_1\left(\frac{k}{\sqrt{n}\sigma}\right) \simeq 1 +\frac{ik}{\sqrt{n}\sigma}\braket{x_i-\mu}-\frac{k^2}{2n\sigma^2}\braket{(x_i-\mu)^2} + o (n^{-3/2}) = $$

$$= 1 -\frac{k^2}{2n\sigma^2}\sigma^2 + o (n^{-3/2}) $$

So, by substitution, and at the limit of $n \to +\infty$

$$\varphi(k) \simeq \left( 1 -\frac{k^2}{2n} + o (n^{-3/2}) \right)^n \underbrace{\Rightarrow}_{n \to +\infty} e^{-\frac{k^2}{2}} $$

Which is the characteristic function of Gaussian with variance $\sigma^2=1$ and mean $\mu=0$, as one wanted to prove.

