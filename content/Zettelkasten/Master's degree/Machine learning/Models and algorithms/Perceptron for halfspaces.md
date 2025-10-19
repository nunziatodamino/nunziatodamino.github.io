
The Perceptron for halfspaces (1958) is a binary classification algorithm that maps a linearly separable training set in an hypothesis of the halfspaces hypothesis class $HS_d$.

Intuitively we find the best hyperplane that separates point $\bar{x}_i$ in the space $\mathbb{R}^d$ acoording to the label $y_i$.

This is the algorithm pseudocode:

![[Images/Perceptron for halfspaces.png|500]]

Note that a learning rate $\eta$ can be added in the weight update ($\bar{w}_{t+1} = \bar{w}_{t} + \eta y_i\bar{x_i}$)

> [!info] **Perceptron convergence**
> Assume that $(\bar{x}_1,y_1),\ldots,(\bar{x}_m,y_m)$ is separable, let
> $B=\min\{\|\bar{w}\|:\ \forall i\in[m],\ y_i\langle \bar{w},\bar{x}_i\rangle \ge 1\}$,
> and let $R=\max_i \|\bar{x}_i\|$. Then, the Perceptron algorithm stops after at most $(RB)^2$ iterations, and when it stops it holds that $\forall i\in[m],\ y_i\langle \bar{w}^{(t)},\bar{x}_i\rangle>0$.

Note that proving this means to prove that, given that when it stops it there will be no misclassification, i.e. it produces an hypothesis with 0 training loss, i.e. an ERM rule (It’s one ERM minimizer among many).
### Proof (Optional)
TODO