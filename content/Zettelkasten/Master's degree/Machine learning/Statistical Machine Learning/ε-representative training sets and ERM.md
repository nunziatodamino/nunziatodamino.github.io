
> [!info] **Definition — ε-representative training set**
> Consider a training set $S$. We call $S$ **ε-representative** (with respect to the domain $Z=X\times Y$, hypothesis class $H$, loss $\ell$, and distribution $D$) if
> $$
> \forall h\in H:\ \big|L_D(h)-L_S(h)\big|<\varepsilon.
> $$

> [!info] **Lemma — ε-representative lemma**
> If a training set $S$ is ε-representative and $h_S\in\arg\min_{h\in H} L_S(h)$ is the ERM on $S$, then
> $$
> L_D(h_S)\ \le\ \min_{h\in H} L_D(h)\ +\ 2\varepsilon.
> $$

## Proof
Consider $h^*$ the best hypothesis in the hypothesis class, i.e. $L_D(h^*) = \min_{h\in H} L_D(h)$.

By ε-representativeness we have, for any $h\in H$ and in particular for $h_S$ and $h^*$:

$$L_S(h_S)-\varepsilon \le L_D(h_S) \le L_S(h_S)+\varepsilon \tag{1}
$$

and:

$$L_S(h^*)-\varepsilon \le L_D(h^*) \le L_S(h^*)+\varepsilon \tag{2}
$$

By the definition of ERM, $L_S(h_S)\le L_S(h^*)$. $(3)$

Chaining (1)RHS–(3)-(2)LHS,
$$
L_D(h_S)\ \le\ L_S(h_S)+\varepsilon\ \le\ L_S(h^*)+\varepsilon\ \le\ L_D(h^*)+2\varepsilon.
$$
Since $L_D(h^*)=\min_{h\in H} L_D(h)$, the lemma follows. ⬜
