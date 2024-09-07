Let's consider a trajectory of $n$ steps, where each step has the following law:

$$ i_k = \begin{cases} +1 \qquad\text{with}\ \mathbb{P}=\frac{1}{2} \\
\\-1 \qquad\text{with}\ \mathbb{P}=\frac{1}{2}\end{cases}   \iff p_{i_K} = \begin{cases} \frac{1}2{} \qquad X=-1 \\
\\\frac{1}2{} \qquad X=-1\end{cases}$$

So that the trajectory is the random variable:

$$ x_n = l\sum_{k=1}^n i_k=nl(n_{+}-n_{-}) = nl(2n_{+}-n)$$

In order to investigate whether or not the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Central limit theorem]] holds, we need to verify its hypothesis.
The first one is to show that the $i_k$ are i.i.d. This is true by construction, given that in each position the law for making a step is the same (identical) and also is a memoryless process, so that  the new position depends only on the previous one (independent). Second we have to verify that the variance is non zero, and this can be verified by evaluating the characteristic function associated to the probability mass function $p_{i_k}$:

$$ \varphi(z) = \frac{1}{2}z+\frac{1}{2z} \iff \braket{i_k}=0 \qquad \text{Var}(i_k)=1 $$

So the Central limit theorem hypothesis are verified and then we can conclude that, the random variable defined as  $y_n=\frac{\sum_k^n i_k - \mu n}{\sqrt{n}\sigma}$, with $\mu$ and $\sigma^2$ mean and variance respectively of $i_k$, converges in distribution to $N(0,1)$.

So we have that the pdf associated to the $y_n$ limit is $N(0,1)$, and we call it $W^*(y)$. From this we try to find the pdf associated to the $i_k$ limit, namely $\sum_{k=1}^n i_k \to i$ ,  that we call $W(i)$.

By the arguments shown in [[Zettelkasten/Master's degree/Models of Theoretical Physics/Function of a random variable]], one can see that:

$$ W(i)=W^*(y)\left| \frac{dy}{dx} \right| =\left( \frac{1}{\sigma\sqrt{n}} \right) N(0,1) = \frac{1}{\sqrt{{2\pi n \sigma^2}}} \exp\left( -\frac{1}{2}y^2 \right)= \frac{1}{\sqrt{{2\pi n \sigma^2}}} \exp\left( -\frac{1}{2}\left(\frac{i- \mu n}{\sqrt{n}\sigma}\right)^2 \right)$$

In our case $\mu =0$ and $\sigma=1$ :

$$W(i)=\frac{1}{\sqrt{{2\pi n}}} \exp\left( -\frac{i^2}{2n}  \right)$$

In order to find $W(x)$ we apply again the formula for the change of variable, recalling that $x=il$:

$$ W(x) = W(i) \left| \frac{di}{dx} \right| = \frac{1}{l} W(i) = W(i)=\frac{1}{\sqrt{{2\pi nl^2}}} \exp\left( -\frac{x^2}{2nl^2}  \right) $$

Which, as we show in [[Zettelkasten/Master's degree/Models of Theoretical Physics/Diffusion process in 1D - link between microscopic and macroscopic solutions]], leads to the fundamental

$$ W(x,t)= \sqrt{\frac{1}{4\pi D t}} e^{-\frac{x^2}{4Dt}}   $$ 
==The fundamental point of this discussion is the following, wherever is the law in $i_k$, if its second moment is non-zero (this check is sufficient due to [[Zettelkasten/Master's degree/Models of Theoretical Physics/If a probability distribution has non-zero variance then has automatically non-zero mean|this consideration]]), then it will automatically satisfy the diffusion equation in the limit, independently of the law complexity (concept of universality)== 
