Suppose we solved the [[Curie-Weiss model solution with h=0]] and obtained that the free energy is:

$$F(m)=-\frac{J}{2} m^2+\frac{1}{\beta} \ln [2\cosh(m \beta J )]$$

Moreover we have also solved the saddle-point equation and found 2 regimes:

- High T : $\beta<<1$, only one stable macrostate $m^*=0$.
- Low T : $\beta>>1$, 2 stable macrostates $m^*=\pm m_+$

We want to know now what is the probability to achieve each microstate in the 2 configurations and what are the probability mass functions.

We recall briefly that for a discrete random variable $X$ that can assume $X_1, X_2, \dots, X_n$ values with a certain probability, the PMF is simply:

$$ p_{X}(x)= \sum_{i=1}^n \mathbb{P}(X=X_i)\delta(x-X_i)$$

So we start our analysis, also observing that our function $F(m)$ is an even function.

#### High T

Given that only one macrostate is achievable, this is achieved with probability 1, so that:

$$\mathbb{P}(m=m^*)=1 \qquad p_m(m) = \delta(m-m^*) = \delta(m) $$

#### Low T

We evaluate first the probability for the macrostate $m_+$, using the consideration in [[Working cheatsheet for Gradenigo's part]]:

$$ \mathbb{P}(m=m_+)=\frac{e^{-\beta N F(m_+)}}{Z} = \frac{e^{-\beta N F(m_+)}}{e^{-\beta N F(m_+)}+e^{-\beta N F(-m_+)}} = \frac{e^{-\beta N F(m_+)}}{2e^{-\beta N F(m_+)}} = \frac{1}{2}  $$

Where we used the fact that $F(m)$ is an even function in the evaluation of the partition function.
The same holds for $-m_+$ and is easy to show that the probability is the same.
So that we have for PMF:

$$\qquad p_m(m) =\frac{1}{2} \delta(m-m_+)+ \frac{1}{2} \delta(m+m_+)$$

## Simmetry breaking

Notice that the PMF is invariant by magnetization inversion, as is the Hamiltonian for the spin inversion.

There is one big problem.
The low T case doesn't verifies in nature. We observe only one stable macrostate.

Let's show this by solving the Curie-Weiss model with $h\neq0$.

One obtains from the calculations the following free energy:

$$ F(m)=\frac{1}{2} m^2-\frac{1}{\beta} \ln [2\cosh(m \beta J +\beta h)] $$

Where the saddle point equation is the same and shows the same macrostates.
The major difference now is that this is not an even function.
So this implies in the thermodynamic limit that:

$$\mathbb{P}(m=m_+) \neq \frac{1}{2}$$

If now take the limit for $h\to 0$ the situation doesn't change.
So we showed that:

$$ \lim_{h \to 0} \lim_{N \to +\infty} \mathbb{P}(m=m_+) \neq \frac{1}{2} $$

Contrary to what we have shown before.
