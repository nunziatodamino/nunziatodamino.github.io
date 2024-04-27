
Generally Ising-like models are used to describe information networks rather than physical system.
In this context the self-energy term can be considered 0, because we are interested only in the network interactions.
So that, in the Curie-Weiss model, if we set $h=0$, we obtain the following Hamiltonian:

$$H(\bar{S}) = - \frac{J}{2N} \sum_{i\neq j}S_iS_j $$

Now the main goal is to evaluate the probability to achieve a certain spin configuration $\bar{S}$.
Because we are in a [[The canonical ensemble|canonical ensemble]], this probability can be expressed as:

$$\mathbb{P}(\bar{S}) = \frac{e^{-\beta H(\bar{S})}}{\mathcal{Z}} \qquad \beta\equiv \frac{1}{T}$$

Note that this definition of $\beta$ implies a redefinition of temperature such that $k_{B}=1$.
Moreover we write also the partition function explicitly:

$$\mathcal{Z} = \sum_{S_1=\pm 1}\sum_{S_2=\pm 1}\dots \sum_{S_N=\pm 1} e^{-\beta{H}(\bar{S})} \equiv \sum_{\bar{S}} e^{-\beta H(\bar{S})} \equiv tr\left(e^{-\beta{H}(\bar{S})} \right)  $$

The first thing then is to express in a more easily manageable form the Hamiltonian. 
By adding the term $-\frac{J}{2} \cdot 1$, where $1 = \frac{1}{N} \sum_{i=1}^N S^2_i$ (which doesn't change anything because energy is invariant by constant adding):

$$ \begin{aligned} H(\bar{S}) & =  - \frac{J}{2N} \sum_{i\neq j}S_iS_j -\frac{J}{2} = - \frac{J}{2N} \left( \sum_{i\neq j}S_iS_j + \sum_{i=1}^N S^2_i \right) = - \frac{J}{2N} \sum_{i, j}S_iS_j \\ & =- \frac{J}{2N} \left(\sum_{i}S_i\right)\left(\sum_{j}S_j\right) = - \frac{J}{2N} \left(\sum_{i}S_i\right)^2 \end{aligned} $$

From this expression we would like to partition function that is in our case:

$$\mathcal{Z} =  \sum_{\bar{S}} e^{\frac{\beta J}{2N} \left(\sum_{i}S_i\right)^2}$$

Now we use the following trick: we can transform the quadratic expression inside the sum in a linear one using the [[Gaussian integrals|Hubbard-Stratonovich transformation]] where first we multiply and divide by $\beta J$ and then set $b = \beta J \sum_i S_i$ and $a=N\beta J$ to obtain the following expression:

$$\mathcal{Z} \propto \sum_{\bar{S}}\int_{\mathbb{R}} dm\  e^{-\frac{N\beta J}{2} m^2 + m \beta J\sum_{i}S_i}$$

Is now possible to evaluate the configuration sum part of the partition function easily. We consider:

$$\mathcal{Z}\propto \sum_{\bar{S}}\int_{\mathbb{R}} dm\  e^{-\frac{N\beta J}{2} m^2 + m \beta J\sum_{i}S_i}= \int_{\mathbb{R}} dm\  e^{-\frac{N\beta J}{2} m^2} \sum_{\bar{S}} e^{m\beta J  \sum_{i}S_i} $$

>[!note]
Before continuing let's show that $m$ is not just a dummy variable, but represent the magnetization:
$$ m = \frac{1}{N} \sum_{i\in V} \braket{S_i} $$
If we rewrite
$$\mathcal{Z}\propto \sum_{\bar{S}}\int_{\mathbb{R}} dm\  e^{-\frac{N\beta J}{2} m^2 + m \beta J\sum_{i}S_i} =\sum_{\bar{S}}\int_{\mathbb{R}} dm\  e^{-N\beta\left(\frac{J}{2} m^2 - m J\frac{1}{N}\sum_{i}S_i\right)} \equiv \sum_{\bar{S}}\int_{\mathbb{R}} dm\  e^{-N\beta g(m)}  $$
If here I apply the [[The Laplace method]], I.e. I want to know the value of the integral for $N \to +\infty$ (Thermodynamic limit), then the condition for which the integral makes sense are that the function $g$ has a minima:
$$ \frac{\partial g}{\partial m} = 0 \qquad \iff \qquad m = \frac{1}{N} \sum_{i\in V}S_i = \frac{1}{N} \sum_{i\in V} \braket{S_i} $$
Where the last equation holds true only for large $N$ and traslationally invariant systems.

Now we can evaluate the sum inside the integral in the following way:

$$ \begin{aligned} \sum_{\bar{S}} e^{m\beta J  \sum_{i}S_i}  & =\prod_{i=1}^N\sum_{\bar{S}} e^{m\beta J  S_i} = \prod_{i=1}^N\sum_{S_1=\pm 1}\sum_{S_2=\pm 1}\dots \sum_{S_N=\pm 1} e^{m\beta J  S_i} = \\ & = \left(\sum_{S_1=\pm 1}e^{m\beta J  S_1}\right)\dots \left(\sum_{S_N=\pm 1}e^{m\beta J  S_N}\right) = \left[2 \cosh(m\beta J)\right]^N \end{aligned}  $$

So that, in the end, by putting this function inside the exponential with a logarithm, we obtain:

$$\mathcal{Z}  \propto  \int_{\mathbb{R}} dm\  e^{-\frac{N \beta J}{2} m^2+N \ln [2\cosh(m \beta J )]}  $$

This trick has had the effect to eliminate the sum all over the configuration, at the price of making all the expression an integral. So we have to see if we are capable of solving said integral. A classic way is to resort to the [[The Laplace method|Laplace method]] (in the context of Statistical Physics often called saddle-point approximation).
We first begin by refactoring in the following way:

$$\mathcal{Z}  \propto  \int_{\mathbb{R}} dm\  e^{-\frac{N \beta J}{2} m^2+N \ln [2\cosh(m \beta J )]} = \int_{\mathbb{R}} dm\  e^{-N\beta\left(-\frac{J}{2} m^2+\frac{1}{\beta} \ln [2\cosh(m \beta J )]\right)} \equiv \int_{\mathbb{R}} dm\  e^{-N\beta F(m)}  $$

In this way, seeing what was done in [[Working cheatsheet for Gradenigo's part]], the function $F(m)$ plays the role of the free energy.

Noting that constants are ininfluent, we can then study said function:

$$F(m)=-\frac{J}{2} m^2+\frac{1}{\beta} \ln [2\cosh(m \beta J )]$$

And evaluate the stationary point:

$$ F'(m) = 0 \qquad \Rightarrow  \qquad m^* =  \tanh(m\beta J)$$

This kind of equation can be solved graphically:

![[Curie-Weiss model solution with h=0 1.png]]

We have different solution according to the value of $\beta$. 
For $\beta << 1$, i.e. the high temperature limit, we have the orange case, in which the only solution is $m^*=0$.
For $\beta >> 1$, i.e. the low temperature limit, we have the blue case, in which we have 3 solution, the same as the previous case and also 2 symmetric solutions $m^* = \pm m_0$.
Also from the pictures we can establish that in the high temperature limit that $m^*=0$ is a minimum, while for the low temperature limit we have that $m^*=0$ is a maximum, while $m^*=\pm m_0$ are minima.
This imply, in the last case, that only $m^*=\pm m_0$ are stable configurations, while $m^*=0$ is unstable.
We can say even more: that there exists a $\beta_{crit}$ , or equivalently a $T_{crit}$ for which one passes from a situation to the other:

![[magn_temperature.png|300]]


