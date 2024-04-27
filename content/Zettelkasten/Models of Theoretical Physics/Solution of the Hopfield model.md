We begin by writing the system Hamiltonian $(h=0)$:

$$H(\bar{S}) = - \frac{1}{2} \sum_{i\neq j}J_{ij}S_iS_j $$

Where for the $J_{ij}$ synaptic expression we use the approximation:

$$ J_{ij} = (1-\delta_{ij})\frac{1}{N}\sum_{\mu=1}^{P}\xi_i^{\mu}\xi_j^{\mu} \simeq \frac{1}{N}\sum_{\mu=1}^{P}\xi_i^{\mu}\xi_j^{\mu}$$

We now subtract to the Hamiltonian the term $-\frac{1}{2N}\sum J_{ii}(S_{i})^2$ so that we can rewrite it as

$$H(\bar{S}) = - \frac{1}{2} \sum_{i,j}J_{ij}S_iS_j $$

Now put explicitly the expression of $J_{ij}$ inside:

$$\begin{aligned} H(\bar{S}) & = - \frac{1}{2N} \sum_{i,j}\sum_{\mu=1}^{P}\xi_i^{\mu}\xi_j^{\mu}S_iS_j =- \frac{1}{2N} \sum_{\mu=1}^{P}\left(\sum_iS_i\xi_i^{\mu}\right)\left(\sum_jS_j\xi_j^{\mu}\right) = \\ & = - \frac{1}{2N} \sum_{\mu=1}^{P}\left(\sum_iS_i\xi_i^{\mu}\right)^2\end{aligned}$$

In this way the partition function reads as:

$$\mathcal{Z} =  \sum_{\bar{S}} e^{\frac{\beta }{2N} \sum_{\mu=1}^{P}\left(\sum_{i}S_i\xi_i^{\mu}\right)^2} =\sum_{\bar{S}} \prod_{\mu=1}^{P} e^{\frac{\beta }{2N} \left(\sum_{i}S_i\xi_i^{\mu}\right)^2} $$

Now we want to transform this partition function with an [[Gaussian integrals|Hubbard-Stratonovich transform]], we multiply and divide by $\beta$ and set $b=\beta\sum_{i}S_i\xi_i^{\mu}$ and $a = N\beta$.
We obtain:

$$ \mathcal{Z} \propto\sum_{\bar{S}} \prod_{\mu=1}^{P} \int_{\mathbb{R}}dq_{\mu}e^{-\frac{N\beta}{2} q_{\mu}^2 +\beta q_{\mu}\sum_{i}S_i\xi_i^{\mu}} = \sum_{\bar{S}}  \int_{\mathbb{R}}\left(\prod_{\mu=1}^{P}dq_{\mu}\right)e^{-\frac{N\beta}{2} \sum_{\mu=1}^{P}q_{\mu}^2 +\beta \sum_{\mu=1}^{P}q_{\mu}\sum_{i}S_i\xi_i^{\mu}}  $$

>[!info] Physical significance of $q_{\mu}$
>If we consider the first integral in the LHS and refator the function in the exponential, we obtain:
>
>$$\int_{\mathbb{R}}dq_{\mu}e^{-\frac{N\beta}{2} q_{\mu}^2 +\beta q_{\mu}\sum_{i}S_i\xi_i^{\mu}} = \int_{\mathbb{R}}dq_{\mu}e^{- N\beta\left( \frac{1}{2} q_{\mu}^2 - \frac{q_{\mu}}{N}\sum_{i}S_i\xi_i^{\mu}\right)} = \int_{\mathbb{R}}dq_{\mu}e^{- N\beta g(q_{\mu})} $$
>Then, in the thermodynamic limit one can solve in the leading order the integral by [[The Laplace method]], with the condition:
>$$ g'(q_{\mu}) = 0 \qquad \iff \qquad q_{\mu} = \frac{1}{N}\sum_{i}S_i\xi_i^{\mu}$$
  
One can then rewrite

$$ \mathcal{Z} \propto \sum_{\bar{S}}  \int_{\mathbb{R}}\left(\prod_{\mu=1}^{P}dq_{\mu}\right)e^{-\frac{N\beta}{2} \sum_{\mu=1}^{P}q_{\mu}^2 +\beta \sum_{\mu=1}^{P}q_{\mu}\sum_{i}S_i\xi_i^{\mu}}= $$$$=\int_{\mathbb{R}}\left(\prod_{\mu=1}^{P}dq_{\mu}\right)e^{-\frac{N\beta}{2} \sum_{\mu=1}^{P}q_{\mu}^2}\sum_{\bar{S}}e^{\beta \sum_{\mu=1}^{P}q_{\mu}\sum_{i}S_i\xi_i^{\mu}}$$

Now we can deal better with the configuration sum:

$$ \begin{aligned}\sum_{\bar{S}}e^{\beta \sum_{\mu=1}^{P}q_{\mu}\sum_{i}S_i\xi_i^{\mu}}  & = \sum_{\bar{S}}e^{\beta\sum_{i}S_i \sum_{\mu=1}^{P}q_{\mu}\xi_i^{\mu}}=\sum_{\bar{S}}e^{\beta\sum_{i}S_i \bar{q}_{\mu}\cdot\bar{\xi}_i^{\mu}}=\prod_{i=1}^N \sum_{\bar{S}}e^{\beta S_i \bar{q}_{\mu}\cdot\bar{\xi}_i^{\mu}}= \\ &= \prod_{i=1}^N\left( \sum_{S_1=\pm 1}e^{\beta S_1 \bar{q}_{\mu}\cdot\bar{\xi}_i^{\mu}}\dots \sum_{S_N=\pm 1}e^{\beta S_N \bar{q}_{\mu}\cdot\bar{\xi}_i^{\mu}}\right)= \\ & = \prod_{i=1}^N 2\cosh(\beta \bar{q}_{\mu}\cdot\bar{\xi}_i^{\mu})=\\ & =  \prod_{i=1}^Ne^{\ln(2\cosh(\beta \bar{q}_{\mu}\cdot\bar{\xi}_i^{\mu}))} = e^{ \sum_{i=1}^N\ln(2\cosh(\beta \bar{q}_{\mu}\cdot\bar{\xi}_i^{\mu}))} \end{aligned}$$

So that, in the end, one has

$$ \mathcal{Z} \propto\int_{\mathbb{R}}\left(\prod_{\mu=1}^{P}dq_{\mu}\right)e^{-\frac{N\beta}{2} \sum_{\mu=1}^{P}q_{\mu}^2+\sum_{i=1}^N\ln(2\cosh(\beta \bar{q}_{\mu}\cdot\bar{\xi}_i^{\mu}))} = $$$$=\int_{\mathbb{R}}\left(\prod_{\mu=1}^{P}dq_{\mu}\right)e^{-N\beta\left(\frac{1}{2} \sum_{\mu=1}^{P}q_{\mu}^2-\frac{1}{N\beta}\sum_{i=1}^N\ln(2\cosh(\beta \bar{q}_{\mu}\cdot\bar{\xi}_i^{\mu})) \right)}$$

So that we can define the function:

$$ u(\bar{q_{\mu}}) = \frac{1}{2} \sum_{\mu=1}^{P}q_{\mu}^2-\frac{1}{N\beta}\sum_{i=1}^N\ln(2\cosh(\beta \bar{q}_{\mu}\cdot\bar{\xi}_i^{\mu}))  $$

Such as:

$$ \mathcal{Z} \propto \prod_{\mu=1}^{P} \int_{\mathbb{R}}dq_{\mu}e^{-N\beta u(\bar{q_{\mu}})}$$

Finally, in order to explore the thermodynamic limit, and then apply [[The Laplace method]], one has to study the stationary points:

$$\nabla u(\bar{q_{\mu}})=0 \qquad \iff \qquad \frac{\partial u}{\partial q_{\alpha}}  =  \frac{1}{2} \sum_{\mu=1}^{P}2q_{\mu}\delta_{\alpha\mu}-\frac{1}{N\beta}\sum_{i=1}^N\tanh(\beta \bar{q}_{\mu}\cdot\bar{\xi}_i^{\mu})(\beta\delta_{\alpha\mu}\xi_i^{\mu})=0 $$

So that one obtains:

$$ q_\alpha =\frac{1}{N}\sum_{i=1}^N\xi_i^{\alpha}\tanh(\beta \bar{q}_{\alpha}\cdot\bar{\xi}_i^{\alpha}) \qquad \text{for}\ \alpha=1,2,\dots, P$$


>[!info] What this expression means ?  
If we consider the thermodynamic limit it can be interpreted as an average:
$$ \frac{1}{N} \sum_i f(\xi^{\mu}_i) \equiv \braket{f} = \int d \xi^{\mu} p(\xi^{\mu})f(\xi^{\mu}) $$
>Given that the $\xi_i$ can be either $\pm 1$ with equal probability, then the PMF is:
>
>$$ p(\xi^{\mu}) = \frac{1}{2}\delta(\xi^{\mu}-1)+\frac{1}{2}\delta(\xi^{\mu}+1) $$
>

So we write in the thermodynamic limit:

$$ q_\alpha =\braket{\xi^{\alpha}\tanh(\beta \bar{q}\cdot\bar{\xi})} \qquad \text{for}\ \alpha=1,2,\dots, P$$

We dropped the $i$-index due to the mean consideration.

>[!info] solution guessing
>We saw that:
>$$q_{\mu} = \frac{1}{N}\sum_{i}S_i\xi_i^{\mu}$$
>This parameter describes the overlap between the pattern and the neuron actual configuration.
>It's easy to see that $\bar{q}$ is a vector of $\mu$ components, each of which describes the overlap of the relative pattern. Then the vector:
>$$\bar{q} =(q_1,0,0,\dots,0) $$
>Describes the overlap only with the first pattern.
>So generally, for a pattern $\alpha$ we can set all the q values as 0, except the one in the alpha position

Let's check if $\bar{q}=(q_1,0,0,0,\dots 0)$ is a possible solution.
We have the following equations:

- $\alpha=1$  $$q_1 =\braket{\xi^{1}\tanh(\beta q_1\xi^1)}$$
- $\alpha=2$ $$q_2 =\braket{\xi^{2}\tanh(\beta q_1\xi^1)}$$
- $\alpha=\nu$ $$q_\nu =\braket{\xi^{\nu}\tanh(\beta q_1\xi^1)}$$
 In total we have $P$ equations.
 By direct evaluation one finds, for $\nu>1$
 
$$q_\nu =\braket{\xi^{\nu}\tanh(\beta q_1\xi^1)} =\int d\xi^{\nu}\left[ \frac{1}{2} \delta(\xi^{\nu}-1)\xi^{\nu}\tanh(\beta q_1\xi^1)+\frac{1}{2} \delta(\xi^{\nu}+1)\xi^{\nu}\tanh(\beta q_1\xi^1) \right] = 0$$

While for $\nu =1$ :

$$\begin{aligned} q_1 &= \braket{\xi^{1}\tanh(\beta q_1\xi^1)} =\int d\xi^{1}\left[ \frac{1}{2} \delta(\xi^{1}-1)\xi^{\nu}\tanh(\beta q_1\xi^1)+\frac{1}{2} \delta(\xi^{1}+1)\xi^{\nu}\tanh(\beta q_1\xi^1) \right] = \\ & = \frac{1}{2} \tanh(\beta q_1) - \frac{1}{2} \tanh(-\beta q_1) = \frac{1}{2} \tanh(\beta q_1) + \frac{1}{2} \tanh(\beta q_1) = \tanh(\beta q_1) \end{aligned} $$

Leading to the resolution of the equation

$$ q_1 = \tanh(\beta q_1) $$

It's easy to see that if we our initial guess was $\bar{q}=(0,0,\dots,0, q_\nu, 0,\dots, 0)$, then one would have obtained:

$$ q_\nu = \tanh(\beta q_\nu) $$

So, in general, the only meaningful equation to solve is

$$ q = \tanh(\beta q) $$

Where q is the non-zero term in the $\mu$ position.
The idea is then exactly the same as the [[Curie-Weiss model solution with h=0]].
We have 2 regimes:

For $\beta << 1$, i.e. the high temperature limit, in which the only solution is $q^*=0$.
For $\beta >> 1$, i.e. the low temperature limit, in which we have 3 solution, the same as the previous case and also 2 symmetric solutions $q^* = \pm q_+$
The critical value of $\beta$ is $\beta_{crit}=1$
Note that of the two nonzero solutions $\pm q_+$ appearing at $\beta >>1$, the one at $-q_+$ does not tells us anything more than the one at $+q_+$ because fully anticorrelated and fully correlated have the same information content.

So for each pattern we have one stability point, for a total of $P$ stability point for the system.



