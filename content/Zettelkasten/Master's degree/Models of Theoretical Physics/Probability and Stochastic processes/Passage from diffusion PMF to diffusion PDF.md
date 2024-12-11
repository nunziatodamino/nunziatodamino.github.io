

![[Images/Continuum_limit.png|300]]

Suppose we fix a position $x_0$ and we want to evaluate the probability that a particle lies in a region of width $\Delta x$ centered around $x_0$, namely:

$$ \mathbb{P}\left( x_0-\frac{\Delta x}{2}, x_0+\frac{\Delta x}{2} \right) $$

Moreover we choose $l<<\Delta x <<1$.
Using the indexes instead of the positions, we can write:

$$ \mathbb{P}\left( x_0-\frac{\Delta x}{2}, x_0+\frac{\Delta x}{2} \right) = \mathbb{P}\left( i_0-k,i_0+k \right) \qquad\ \text{where}\ k= \left\lfloor \frac{\Delta x}{2l} \right\rfloor $$

Then one can easily write this probability as the sum how the single probabilities:

$$\mathbb{P}\left( i_0-k,i_0+k \right) = \sum_{i=i_0-k}^{i_0+k}w_i(t_n)$$

Now if we go to the continuum limit, we need a new function $W(x)$ such that:

$$ \sum_{i=i_0-k}^{i_0+k}w_i(t_n) \underbrace{\longrightarrow}_{\text{continuum limit}} \int_{x_0-\frac{\Delta x}{2}}^{x_0+\frac{\Delta x}{2}}W(x,t)dx $$

Where $t$ is fixed. So that we can consider $W(x)$ a probability density function. Now we can use the property of the pdf that, if $dx$ is small:

$$ \int_{x_0-\frac{\Delta x}{2}}^{x_0+\frac{\Delta x}{2}}W(x,t)dx = W(x,t)\Delta x + O(\Delta x^2)  $$

Now we go back, and try to find a better evaluation for $\sum_{i=i_0-k}^{i_0+k}w_i(t_n)$. This is easy, because we have a total of $2k+1$ steps, but only half of them have probability not equal to 0, so that we write:

$$ \sum_{i=i_0-k}^{i_0+k}w_i(t_n) = \frac{2k+1}{2} w_i(t_n) $$

Moreover, in the continuum limit, the floor function tends to its argument, namely $k \to \frac{\Delta x}{2l}$, so that one can write in the end:

$$ \frac{2k+1}{2} w_i(t_n)=\left(\frac{\Delta x}{2l} + \frac{1}{2}\right)w_i(t_n) \simeq \frac{\Delta x}{2l}w_i(t_n) $$

Given the fact that $\frac{\Delta x}{2l} >> \frac{1}{2} \iff \Delta x >> l$, as we choose in the beginning.

Finally we can write that, up to order of $\Delta x^2$:

$$ \frac{\Delta x}{2l}w_i(t_n) = W(x,t)\Delta x \qquad \iff \qquad w_i(t_n) = {2l}W(x,t) $$
