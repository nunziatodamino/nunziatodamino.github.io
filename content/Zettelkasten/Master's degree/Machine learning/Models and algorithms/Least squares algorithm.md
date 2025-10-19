Least squares is the algorithm that solves the ERM problem for the hypothesis class of [[Zettelkasten/Master's degree/Machine learning/Models and algorithms/Linear regression model|linear regression predictors]] with respect to the squared loss.
The ERM problem with respect to this class, given a training set S, and using the **homogenous** version of $L_d$, is to find:

$$
\arg\min_{\bar{w}} L_S(h_{\bar{w}}) \;=\; \arg\min_{\bar{w}} \frac{1}{m} \sum_{i=1}^{m} \big(\langle \bar{w}, \bar{x}_i \rangle - y_i\big)^2 .
$$

Given that the loss is convex, any minima is a global minima, so good for the ERM procedure. If multiple ERM solutions exist, adding a small regularizer ([[Zettelkasten/Master's degree/Machine learning/Models and algorithms/Ridge regression|Ridge regression]]) makes the solution unique. Note that there can be other ERM solutions.
### Proof

Consider the gradient respect the weight vector put to 0:

$$ \nabla_{\bar{w}}L_S(h_{\bar{w}}) = \bar{0} \iff \frac{2}{m} \sum_{i=1}^{m} \big(\langle \bar{w}, \bar{x}_i \rangle - y_i\big)\bar{x}_i= \bar{0}  $$

Or equivalently:

$$ \sum_{i=1}^{m} \langle \bar{w}, \bar{x}_i \rangle \bar{x}_i = \sum_{i=1}^{m} y_i \bar{x}_i  $$

We write this in matrix notation. Consider:

$$ X = (\bar{x_1}^t, \dots, \bar{x_m}^t)^t = 
\begin{pmatrix}
(x_1^1, \dots, x_1^d) \\
\vdots \\
(x_m^1, \dots, x_m^d)
\end{pmatrix}
\in \mathbb{R}^{m \times d} \qquad \bar{w} = (w_1, \dots, w_d)^t \in \mathbb{R}^{d \times 1} \qquad \bar{y} = (y_1, \dots, y_m) \in \mathbb{R}^{m \times 1}
$$

Then given that on each side we have sums of vectors of size $d \times 1$, the correct representation is :

$$ X^tX\bar{w} = X^t\bar{y} $$

Where the matrix multiplication is implied. Then for simplicity we set $A = X^tX$ and $\bar{b} = X^t\bar{y}$, so that the system assume the usual linear form.
The system is solvable if $A$ is invertible:

$$ A\bar{w} = \bar{b} \iff \bar{w} = A^{-1}\bar{b}  $$

In the case of non invertibility is still possible to find an optimal weight vector, but this part is left unproven. 