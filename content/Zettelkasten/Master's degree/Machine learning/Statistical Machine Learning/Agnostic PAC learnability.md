> [!info] Definition (Agnostic PAC learnability)
> Let $H \subseteq \{0,1\}^X$ (space of all possible function from $X$ to $(0,1)$) . We say $H$ is agnostically PAC learnable if there exist a function $m_H(\varepsilon, \delta):(0,1)^2\to\mathbb N$ and a learning algorithm $A$ such that for every distribution $D$ over $X\times\{0,1\}$, for every $\varepsilon,\delta\in(0,1)$, and for every i.i.d. sample $S\sim D^m$ with $m\ge m_H(\varepsilon,\delta)$, the output $h_S=A(S)$ satisfies
>
> $$\Pr_{S\sim D^m}\!\left[L_D(h_S)\le \min_{h\in H} L_D(h) + \varepsilon\right]\ge 1-\delta.$$
>
> Here $L_D(h)=\Pr_{(x,y)\sim D}[h(x)\neq y]$ is the true $0$–$1$ risk.

**Note that the adjective agnostic is referred to the fact that we are dropping the realizability hypothesis.**

Note that the [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Realizable PAC learnability|Realizable PAC learnability]] is a special case of this one in the special case in which $h^* = f$ where $f$ is the true labeling function.