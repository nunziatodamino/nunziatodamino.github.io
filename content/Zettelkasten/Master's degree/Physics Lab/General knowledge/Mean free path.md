Sometimes we are interested in the following question. 
What is the probability of a particle to not suffer any interaction in a distance $x$ ?
In order to answer this question we can use the results derived in [[Zettelkasten/Master's degree/Physics Lab/General knowledge/Probability of collision in a slab of thickness dx]]. Suppose we call $\bar{\mathbb{P}}(x+dx)$ the probability to not have any interaction between $x$ and $x+dx$, and consequently we call  $\mathbb{P}(x+dx)$ the probability to have any interaction between $x$ and $x+dx$

We also suppose that the process starts from $x_0$. Assuming a Markov's process we use the the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Markov process|Markov chain property]] to write:

$$\bar{\mathbb{P}}(x+dx|x_0) = \bar{\mathbb{P}}(x+dx|x)\bar{\mathbb{P}}(x|x_0) $$

Now we use the fact that:

$$ \bar{\mathbb{P}}(x|x_0) + \mathbb{P}(x|x_0) =1 \qquad \forall[x_0,x]   $$

So that one has:

$$\bar{\mathbb{P}}(x+dx|x_0) = (1-\mathbb{P}(x+dx|x))\bar{\mathbb{P}}(x|x_0) $$

Now we do something similar to what we saw in the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Transition rate]] definition. We can define $\mathbb{P}(x+dx|x)\equiv w dx$ , so that one has:

$$\bar{\mathbb{P}}(x+dx|x_0) = (1-w dx)\bar{\mathbb{P}}(x|x_0) \qquad \iff \qquad \frac{d\bar{\mathbb{P}}(x|x_0)}{dx}=-w $$

One can solve this ODE by considering as initial condition $\mathbb{P}(x_0|x_0)=1$ (survival at starting position is guaranteed), so that one finds:

$$\bar{\mathbb{P}}(x|x_0) = e^{-wx} \qquad\mathbb{P}(x|x_0) = 1 -e^{-wx}$$

Is now possible to define a probability density function for the particle survival between $[x_0,x]$ by definition:

$$1-e^{-wx} =  \mathbb{P}(x|x_0) = \int_{x_0}^x \rho(x')dx   \qquad \iff \qquad \rho(x) = we^{-wx}$$

So that one can evaluate the mean free path, i.e. $\braket{x}$:

$$ \braket{x} = \frac{\int_{x_0}^x x'\rho(x')dx'}{\int_{x_0}^x\rho(x')dx'} = \frac{1}{w} $$

Finally, we can estimate $w$.
By using the result in [[Zettelkasten/Master's degree/Physics Lab/General knowledge/Probability of collision in a slab of thickness dx]]:

$$\mathbb{P}(x+dx|x)\equiv w dx = N\sigma dx \qquad \iff \qquad w=N\sigma$$

So that we can state the following:

> [!info] **Mean free path**
> 
> Given an interaction with total cross section $\sigma$ and given $N$ as the density of scattering centers (number of centers per unit volume), on average a particle impinging a target will travel for a distance:
> 
$$ \lambda = \frac{1}{N\sigma} $$
>
We will call $\lambda$ mean free path.





