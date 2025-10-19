Applying the [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Regularization loss minimization (RLM)|RLM rule]] with Tikhonov regularization to linear regression with the squared loss, we obtain the following learning rule:

$$
\arg\min_{\bar{w}\in\mathbb{R}^d}\!\left(\lambda\lVert \bar{w}\rVert_2^2\;+\;\frac{1}{m}\sum_{i=1}^m \frac{1}{2}\,\big(\langle \bar{w},\bar{x}_i\rangle - y_i\big)^2\right).
$$

The notation $||.||_2$ means the $l^2$ norm.
Note that is applied to the homogeneous linear regression class. Note also that the factor $1/2$ is just to make disappear the 2 in the gradient (better gradient handling), and does not change the minimum (same ansatz as [[Zettelkasten/Master's degree/Machine learning/Models and algorithms/Least squares algorithm|Least squares algorithm]]). In this spirit some authors redefines $\lambda \to \lambda/2$ for the same reason
### Proof

In the same ansatz of the least square algo, by setting the gradient to 0:

$$ \nabla_{\bar{w}}L_{RLM}(h_{\bar{w}}) = \bar{0} \iff 2\lambda \bar{w} + \frac{1}{m} \sum_{i=1}^{m} \big(\langle \bar{w}, \bar{x}_i \rangle - y_i\big)\bar{x}_i= \bar{0} $$

Or equivalently:

$$ 2\lambda m \bar{w}+\sum_{i=1}^{m} \langle \bar{w}, \bar{x}_i \rangle \bar{x}_i = \sum_{i=1}^{m} y_i \bar{x}_i  $$

Using the same matrices in the least square algorithm:

$$ 2m \lambda \bar{w} + X^tX\bar{w} = X^t\bar{y} \iff (2m \lambda \mathbb{1}_d + X^tX)\bar{w} = X^t\bar{y} $$

Then again, by setting $2m \lambda \mathbb{1}_d + X^tX = A$ $\bar{b} = X^t\bar{y}$, the system is solvable if is invertible:

$$ A\bar{w} = \bar{b} \iff \bar{w} = A^{-1}\bar{b}  $$

In the case of non invertibility is still possible to find an optimal weight vector, but this part is left unproven. 