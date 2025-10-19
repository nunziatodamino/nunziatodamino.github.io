Let $X$ be an instance space and $Y$ a label space. There is an unknown distribution $D$ on $X\times Y$. We observe an i.i.d. sample
$$
S=\big((x_i,y_i)\big)_{i=1}^m \sim D^m .
$$

Let $H\subseteq Y^{X}$ be a hypothesis class and $\ell:Y\times Y\to\mathbb{R}_+$ a loss. A learning algorithm is a map:

$$
A:\ \bigcup_{m\ge 1}(X\times Y)^m \to H,\qquad A(S)=h_S .
$$

The empirical risk (training loss) of $h\in H$ on $S$ is

$$
L_S(h)=\frac{1}{m}\sum_{i=1}^m \ell\!\big(h(x_i),\,y_i\big).
$$

The true risk (generalization error) is

$$
L_D(h)=\mathbb{E}_{(x,y)\sim D}\!\left[\ell\!\big(h(x),y\big)\right].
$$

The goal of supervised learning is to output $h_S$ with small $L_D(h_S)$ (often via minimizing $L_S$ or a regularized surrogate), with guarantees relating $L_S$ to $L_D$.
