- [ ] Espandere sul concetto di convergenza di una variabile casuale

Before stating and proving a weaker version of the law of the large numbers, is important to build intuition behind this theorem, by considering a practical case.
Suppose we have a sample distributed according to a defined probability distribution, i.e. the IQ scale to make a specific example. If I take a random person in the sample, this person has associated to them a random variable, i.e. their IQ. If I sample many persons, in principle infinite, and I take the empirical average the effect of randomness disappears, and the evaluated value approaches the mean of the sample distribution, i.e. IQ=100.
It's implicit in this process the construction of a so called random variable sequence $\{x_i\}_{n \in \mathbb{N}}$ so that one can define a notion of convergence. (see : https://it.wikipedia.org/wiki/Convergenza_di_variabili_casuali).
Let's go to prove the theorem

>[!important] **Theorem - (Weak) law of large numbers**
>- **Hp.** Let be $n$ i.i.d random variables whose pdf is p(x) and with c.f. $\varphi_1(k)$, with mean $\mu = \int dx_i\  x_i p(x_i);\ \forall i$ .
> Let also $x$ be the random variable constructed as : $x = \frac{1}{n} \sum_i^n x_i$ (called empirical average).
> - **Th.** The random variable $x$ converges in distribution to $\mu$ as $n \to +\infty$

#### Proof:
We begin by stating what convergence in distribution means. There are to way to make this limit, the first is the direct way, i.e. show that the limit of the empirical average is $\mu$ (strong version), the second is to show that the pdf associated to the empirical average converges to the pdf associated to the mean (weak version, i.e. convergence in distribution). One can object that these 2 conditions are the same, but ==there exists cases in which the pdf's converges while the random variables don't==.
Moreover we recall that a distribution associated to a certain value, in our case $\mu$, is simply $\delta(x-\mu)$.
Having clear our objective, let's build the pdf associated to the empirical average. Due to consideration made in [[Zettelkasten/Master's degree/Models of Theoretical Physics/Sum of n i.i.d. random variables]], we know that that the direct evaluation is to avoid, so we resort to evaluate its c.f. :

$$  \varphi(k) = \braket{e^{ikx}} = \int \dots \int dx_1\dots dx_n\ e^{ikx} p(x_1)p(x_2)\dots p(x_n) \delta\left(x- \frac{1}{n} \sum_i^n x_i\right)=   $$

$$ = \int \dots \int dx_1\dots dx_n\ e^{ik\left(  \frac{1}{n} \sum_i^n x_i \right)} p(x_1)p(x_2)\dots p(x_n)= \left[ \varphi_1\left( \frac{k}{n} \right) \right]^n $$

Where we know that the original c.f. is defined as:

$$\varphi_1\left( \frac{k}{n} \right) = \int dx_i e^{i\frac{k}{n}x_i}p(x_i) $$

Due to the fact that $n \to +\infty$, we can expand the exponential in Taylor series:

$$\varphi_1\left( \frac{k}{n} \right) \simeq \int dx_i \left( 1+ i\frac{k}{n}x_i +o\left(\frac{1}{n^2}\right) \right) p(x_i) = 1+ i \frac{k}{n}\braket{x_i}+ o\left(\frac{1}{n^2}\right) = 1+ i \frac{k}{n}\mu+ o\left(\frac{1}{n^2}\right)  $$

So that, in the limit:

$$ \lim_n \left[ \varphi_1\left( \frac{k}{n} \right) \right]^n = \lim_n \left[1+ i \frac{k}{n}\mu+ o\left(\frac{1}{n^2}\right) \right]^n = e^{ik\mu} $$

Using the fundamental limit . So in the end we obtained that:

$$ \varphi(k) \equiv \int dx\  e^{ikx} q(x)\simeq e^{ik\mu}= \int dx\  e^{ikx} \delta(x-\mu) \qquad\Rightarrow\qquad q(x)= \delta(x-\mu)$$

Which is the thesis