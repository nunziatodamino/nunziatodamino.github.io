We start by considering a [[Zettelkasten/Master's degree/Probability and Statistics/Probability density function (PDF)]] $p(\bar{x})$ associated to a vector of random variables $\bar{X} = (x_1,x_2,\dots,x_n)$, and we evaluate its [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Characteristic function]] $\varphi(\bar{k})$.
We can then define:

>[!info] **s-point correlation function**
>$$\underbrace{\langle x_i, x_j \dots, x_l \rangle}_{\mbox{s variables}} = (-i)^s\left[ \underbrace{\partial_{k_i}\partial_{k_j}\dots\partial_{k_l}}_{\mbox{s derivatives}} \varphi(\bar{k}) \right]_{\bar{k}= \bar{0}}=\int d^sx \ x_ix_j\dots x_l\ p(\bar{x})$$

==Note that if $p(\bar{x})$ is an even function, is guaranteed that the s-point correlation function with s odd is 0.==
