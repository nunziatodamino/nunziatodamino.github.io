A physical system is considered stable if, intuitively, a small perturbation in is input correspond to a small perturbation in its output.
We want to extend this concept to ML.
The easiest way to do it is imagining a learning algorithm that with a small change in the training set do change its loss drastically.
Consider than the following definition:

> [!info] **On average replace on stable (OAROS) algorithm**
> Consider an hypothesis class $H$, a training set $(z_i)_{i=1}^m \sim D^m$, a loss $l(h,z)$ and a training algorithm that maps a training set in an hypothesis $A(S)$.
> Let also be $\varepsilon(m): \mathbb{N} \to \mathbb{R}$ a monotonically decreasing function.
> We say that the algorithm $A$ is OAROS if:
> 
> $$ \mathbb{E}_{S \sim D^m,\ z' \sim D,\ i \sim \mathcal{U}_{[0,m]}} \left[ l(A(S^{(z' \to i)}), z_i) - l(A(S), z_i) \right] \leq \varepsilon(m)$$

We drawn the sample $S$, than take an additional point $z'$. We then choose an index considering an uniform distribution between $0$ and $m$. At that index we take out $z_i$ and insert $z'$ to create the new training set $S^{(z' \to i)}$.
Then **on average** the difference between the loss on the switched example respect the old one should be bounded by a decreasing quantity depending on the sample size (meaning that the larger the sample the less should be susceptible to change in one point).

This definition can be restated to give the following theorem:

>[!info] **Stability theorem**
>If a learning algorithm $A$ is OAROS then :
>
$$ \mathbb{E}_{S \sim D^m} \left[ L_D(A(S)) - L_S(A(S))  \right] \leq \varepsilon(m)$$

### Proof

By expectation value linearity:

$$ \mathbb{E}_{S \sim D^m,\ z' \sim D,\ i \sim \mathcal{U}_{[0,m]}} \left[ l(A(S^{(z' \to i)}, z_i) - l(A(S), z_i) \right]  = \mathbb{E}_{S \sim D^m,\ z' \sim D,\ i \sim \mathcal{U}_{[0,m]}} \left[ l(A(S^{(z' \to i)}, z_i) \right]- \mathbb{E}_{S \sim D^m,\ z' \sim D,\ i \sim \mathcal{U}_{[0,m]}} \left[ l(A(S), z_i) \right]  $$

Then, by definition of empirical loss:

$$ L_S(A(S)) = \frac{1}{m} \sum_i l(A(S), z_i) = \mathbb{E}_{i \sim \mathcal{U}_{[0,m]}} [l(A(S), z_i)]$$

Moreover the definition of true loss is :

$$L_D(A(S)) = \mathbb{E}_{z'\sim D} [l(A(S), z')]$$

Consider now:

$$ \mathbb{E}_{S\sim D^m}[L_D(A(S))] = \mathbb{E}_{S \sim D^m,\ z'\sim D} [l(A(S), z')] = \mathbb{E}_{S \sim D^m,\ z' \sim D } \left[ l(A(S^{(z' \to i)}, z_i) \right] $$

The last result is valid since any permutation of $m+1$ i.i.d variables preserve the measure.

Putting all together

$$ 
\begin{aligned}
\mathbb{E}_{S\sim D^m}[L_D(A(S)) -L_S(A(S))] &= \mathbb{E}_{S\sim D^m}[L_D(A(S))] -\mathbb{E}_{S\sim D^m}[L_S(A(S))] = \\

&=\mathbb{E}_{S \sim D^m,\ z' \sim D } \left[ l(A(S^{(z' \to i)}, z_i) \right] - \mathbb{E}_{S\sim D^m, \ i \sim \mathcal{U}_{[0,m]}} [l(A(S), z_i)] = \\

&=\mathbb{E}_{S \sim D^m,\ z' \sim D, i \sim \mathcal{U}_{[0,m]} } \left[ l(A(S^{(z' \to i)}, z_i) \right] - \mathbb{E}_{S\sim D^m,\ z' \sim D, \ i \sim \mathcal{U}_{[0,m]}} [l(A(S), z_i)] = \\

&=\mathbb{E}_{S \sim D^m,\ z' \sim D,\ i \sim \mathcal{U}_{[0,m]}} \left[ l(A(S^{(z' \to i)}), z_i) - l(A(S), z_i) \right] \leq \varepsilon(m)

\end{aligned} 
$$

In the third we introduced dummy variables to recreate the OAROS statement.