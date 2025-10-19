Suppose we want to minimize a function. Given that the gradient of said function evaluated in a point is a vector that points to the maximum, we assume that the opposite of this vector points to the minima.
This simple observation leads to a series of algorithm of minimization.

The problem for all is the same. Find:

$$ \bar{w}^* = \min_{\bar{w}} f(\bar{w}) $$

Where $\bar{w} \in \mathbb{R}^d$ and $f:\mathbb{R}^d \to \mathbb{R}$ .
## Vanilla gradient descent

![[Images/Gradient descent.png|400]]

This is the simplest iteration of the algorithm. We start from the origin (or an educated guess of the minima) and proceed through steps to the optimal solution via adding the gradient.
The addition of the learning rate permits a finer control of the steps, that controls in the end the convergence of the algorithm.

One can prove the following result : if the target function is convex and $\rho$-Lipschitz, and we run GD for $T$ steps, we have:
$$
\eta = \sqrt{\frac{B^2}{\rho^2 T}}
\;\Rightarrow\;
f(\bar w) - f(w^*) \le \frac{B\rho}{\sqrt{T}}.
$$

Where $B$ is the maximum norm on the training set. As a corollary, if we want a precision $\varepsilon$, we can run the GD algorithm over enough steps.

$$
T \ge \frac{B^2 \rho^2}{\varepsilon^2}
\;\Rightarrow\;
f(\bar w) - f(w^*) \le \varepsilon .
$$

As an additional consideration we can see from the picture that convergence is smooth.

![[Images/Gradient descent-1.png|500]]

## Stochastic gradient descent

While VGD seems perfect has one big flaw: the computational cost of evaluating a gradient for a function where $d$ is large is expensive.
The idea to reduce the cost is the following : instead of evaluating the gradient in a point using all the other points in the function, we should use an unbiased estimate of it:

![[Images/Gradient descent-2.png|400]]

Once this unbiased estimate is found, is clear that more point we choose from the unbiased distribution, the more accurately we approximate the gradient.
There are different versions, depending on one desires.

### One-point approximation

Instead of evaluating the gradient at a point by using all the other points, we just use one other point:

![[Images/Gradient descent-3.png|400]]

Of course this is extremely fast, but very poor in quality.

### Mini-batch

Same idea of one-point, but instead we use many points. We should in theory select point with replacement (i.i.d.), but in practice this is never done. One does a permutation on the data and chooses the first $k$ element (so without replacement).

### SGD issues

- The learning rate is a critical problem: trade-off between convergence speed (high rate) and stability (low rate)
- Adaptive learning rates (such as the RLM rule) need to be defined in advance and might not always work
- Some of the inputs may require different rates (the rate is too high in one dimension and too low in another)