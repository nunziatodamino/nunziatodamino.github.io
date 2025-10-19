First a recall on what is a Lipschitz function:

> [!info] ρ-Lipschitz functions
> A function $f:\mathbb{R}^d \to \mathbb{R}^k$ is $\rho$-Lipschitz over $C \subset \mathbb{R}^d$ if:
> $$\|f(\bar{w}_1)-f(\bar{w}_2)\| \le \rho\,\|\bar{w}_1-\bar{w}_2\| \quad \forall\, \bar{w}_1,\bar{w}_2 \in C.$$

It follows :

> [!info] Stability and Tikhonov regularization
> If loss is convex, continuous, and $\rho$-Lipschitz, the [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Regularization loss minimization (RLM)|Regularization loss minimization (RLM)]] with Tikhonov regularization is OAROS with rate $\frac{2\rho^2}{\lambda m}$. Trivially,
> $$\mathbb{E}_{S\sim D^m}\!\left[ L_D(A(S)) - L_S(A(S)) \right] \le \frac{2\rho^2}{\lambda m}.$$
