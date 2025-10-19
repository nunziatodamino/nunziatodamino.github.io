We start with a fundamental theorem:

>[!info] **Representer theorem**
>Let $(\bar{x}_i,y_i) \sim D^m$ and $\psi :X \to F$ an embedding on $X$.
>Let also be $f:\mathbb{R}^m \to \mathbb{R}$ an arbitrary function and $R : [0, +\infty) \to \mathbb{R}$ a monotonically non-decreasing function.
>Consider the generic Soft-SVM problem:
>
>$$ \min_{\bar{w}} [f(\braket{\bar{w}, \psi(\bar{x_1})}, \dots \braket{\bar{w}, \psi(\bar{x_m})} ) + R(||\bar{w}||)] $$
>
>Then there exists a vector $\bar{\alpha} \in \mathbb{R}^m$ such that:
>
>$$ \bar{w} = \sum_{i=1}^m \alpha_i\psi(\bar{x}_i) $$
>
>Is an optimal solution of the problem. 

### Proof

First a preliminary. Consider the set $V = \mathcal{L}(\psi(\bar{x}_1), \dots, \psi(\bar{x}_m)) \subseteq F$, that is a closed subset of the Hilbert space $F$ given of the fact that has a finite dimension.
But then due to the orthogonal decomposition theorem $F = V \oplus V^{\perp}$.
Now consider the optimal solution of the problem $\bar{w}^*$:
Then, from what we said, given $\bar{u} \in V^{\perp}$:

$$ \bar{w}^* = \sum_{i=1}^m \alpha_i\psi(\bar{x}_i) + \bar{u}  $$

Now consider another vector $\bar{w} = \bar{w}^* -\bar{u}$. Let's show that also this vector is an optimal solution to the problem.
First, $\forall i$:

$$\braket{\bar{w}, \psi(\bar{x_i})} = \braket{\bar{w}^* -\bar{u}, \psi(\bar{x_i})} =\braket{\bar{w^*}, \psi(\bar{x_i})}\quad \forall i$$

Due to the fact that $\braket{\bar{u}, \psi(\bar{x_i})} = 0$ given the orthogonality of the 2 subspaces.
So the output of $f$ in the problem is the same either we plug $\bar{w}$ or $\bar{w}^*$
So let's analyze the behavior of $R(||\bar{w}||)$.
Given that $\bar{w} = \bar{w}^* -\bar{u} \iff \bar{w}^* = \bar{w} +\bar{u}$, then:

$$ ||\bar{w}^*||^2 = ||\bar{w}||^2 +||\bar{u}||^2 +2\braket{\bar{w},\bar{u}} = ||\bar{w}||^2 +||\bar{u}||^2 \geq ||\bar{w}||^2 $$

Where we used $\braket{\bar{w},\bar{u}} = 0$ as by how is defined this vector live in $V$, so is orthonogal to any $V^{\perp}$ vector.
Then given now that $R$ is non decreasing:

$$ R(||\bar{w}||^2) \leq R(||\bar{w}^*||^2)$$

Concluding that if $\bar{w}^*$ is an optimizer than also $\bar{w}$ is.

## Why we are able to use the kernel trick (optional)

On the basis of the representer theorem we can optimize the initial problem with respect to the coefficients $\alpha$ instead of the coefficients $\bar{w}$ as follows. Writing $\bar{w}=\sum_{j=1}^m \alpha_j \,\bar{\psi}(\bar{x}_j)$ we have that for all $i$

$$
\langle \bar{w}, \bar{\psi}(\bar{x}_i)\rangle
= \left\langle \sum_j \alpha_j \bar{\psi}(\bar{x}_j), \bar{\psi}(\bar{x}_i)\right\rangle
= \sum_{j=1}^m \alpha_j \,\langle \bar{\psi}(\bar{x}_j), \bar{\psi}(\bar{x}_i)\rangle .
$$

Similarly,

$$
\|\bar{w}\|^2
= \left\langle \sum_j \alpha_j \bar{\psi}(\bar{x}_j), \sum_j \alpha_j \bar{\psi}(\bar{x}_j)\right\rangle
= \sum_{i,j=1}^m \alpha_i \alpha_j \,\langle \bar{\psi}(\bar{x}_i), \bar{\psi}(\bar{x}_j)\rangle .
$$

Let $K(\bar{x},\bar{x}')=\langle \bar{\psi}(\bar{x}), \bar{\psi}(\bar{x}')\rangle$ be a function that implements the kernel function with respect to the embedding $\bar{\psi}$. Instead of solving the initial soft-SVM we can solve the equivalent problem:

$$
\min_{\bar{\alpha} \in \mathbb{R}^m}
\; f\!\Big(\sum_{j=1}^m \alpha_j K(\bar{x}_j,\bar{x}_1),\ldots,\sum_{j=1}^m \alpha_j K(\bar{x}_j,\bar{x}_m)\Big)
\;+\;
R\!\Big(\sqrt{\sum_{i,j=1}^m \alpha_i \alpha_j K(\bar{x}_i,\bar{x}_j)}\Big).
\tag{16.3}
$$

**To solve the optimization problem given in Equation (16.3), we do not need any direct access to elements in the feature space**. The only thing we should know is how to calculate inner products in the feature space, or equivalently, to calculate the kernel function. In fact, to solve Equation (16.3) we solely need to know the value of the $m \times m$ matrix $G$ s.t. $G_{i,j}=K(\bar{x}_i,\bar{x}_j)$, which is often called the Gram matrix.

In particular we can rewrite the generic Soft-SVM problem as

$$
\min_{\bar{\alpha} \in \mathbb{R}^m}
\left(
\lambda \,\bar{\alpha}^\top G \bar{\alpha}
+ \frac{1}{m} \sum_{i=1}^m \max\left\{0,\; 1 - y_i \,(G\bar{\alpha})_i\right\}
\right),
\tag{16.4}
$$

where $(G\bar{\alpha})_i$ is the $i$'th element of the vector obtained by multiplying the Gram matrix $G$ by the vector $\bar{\alpha}$. Note that Equation (16.4) can be written as quadratic programming and hence can be solved efficiently. 

Once we learn the coefficients $\alpha$ we can calculate the prediction on a new instance by

$$
\langle \bar{w}, \bar{\psi}(\bar{x})\rangle
= \sum_{j=1}^m \alpha_j \,\langle \bar{\psi}(\bar{x}_j), \bar{\psi}(\bar{x})\rangle
= \sum_{j=1}^m \alpha_j K(\bar{x}_j,\bar{x}).
$$

