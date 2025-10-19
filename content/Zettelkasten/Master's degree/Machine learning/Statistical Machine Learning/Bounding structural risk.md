
>[!info] **Uniform deviation radius of the subclass $H_n$**
>Consider $H = \cup_{n\in\mathbb{N}}H_n$ an hypothesis class, let $(x_i, y_i)_{i=1}^m \sim D^m$ and fix an overall confidence $\delta$.
>If every $H_n$ has the [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Uniform convergence and PAC learnability|uniform convergence]] property each with function $m_{H_n}^{UC}(\varepsilon, \delta)$.
>We can then define the uniform deviation radius of the subclass $H_n$ for a training set of size $m$:
>
$$ \varepsilon_{n}(m,\delta) = \min \{ \varepsilon \in (0,1) : m \ge m_{H_n}^{UC}(\varepsilon, \delta) \} $$

The idea is the following. I have a given $m$ and i want to have a given confidence $\delta$. Than for a given subclass the inequality can be satisfied for different values of $\varepsilon$. I choose the smallest to make the the bound has tight as possible.

> [!theorem] Bounding structural risk
> Let $w:\mathbb{N}\to[0,1]$ with $\sum_{n=1}^\infty w(n)\le 1$. Let $\mathcal H=\bigcup_{n\in\mathbb{N}}\mathcal H_n$ where each $\mathcal H_n$ has uniform convergence with sample–complexity $m^{\mathrm{UC}}_{\mathcal H_n}(\varepsilon,\delta)$. 
> Consider the (class-)uniform deviation radius $\varepsilon_n(m,\delta_n)$.
> Then for every $\delta\in(0,1)$ and distribution $D$, with probability at least $1-\delta$ over $S\sim D^m$, simultaneously for all $n$ and $h\in\mathcal H_n$,
> $$
> |L_D(h)-L_S(h)|\ \le\ \varepsilon_n\!\big(m,\ w(n)\,\delta\big).
> $$
>


>[!info] **Equivalent formulation**
>With the same Hp $\to$. Then
 >
 $$ \Pr_{S\sim D^m}[\forall n\ \forall h\in H_n :|L_D(h)-L_S(h)|\ \le\ \varepsilon_n\!\big(m,\ w(n)\,\delta\big)]\geq 1-\delta $$


### Proof

Given that each of the $n$ subclasses has the UC property by definition for a given $m$ and $\delta_n$:

$$
 \Pr_{S\sim D^m}\! \left[ \forall h \in H_n : \big|L_S(h)-L_D(h)\big|\le \varepsilon\ \right]\ \ge\ 1-\delta_n
 \quad\text{whenever } m\ge m_{H_n}^{\mathrm{UC}}(\varepsilon,\delta_n),
 $$

Given that this hold for every $\varepsilon$, it will hold also for the minimum, hence by definition:

$$
 \Pr_{S\sim D^m}\! \left[\forall h \in H_n : \big|L_S(h)-L_D(h)\big|\le \varepsilon_n(m,\delta_n)\ \right]\ \ge\ 1-\delta_n
 \quad\text{whenever } m\ge m_{H_n}^{\mathrm{UC}}(\varepsilon,\delta_n),
 $$

If we call the event in the square brackets $E_n$, Because we need the bound to hold **simultaneously for every subclass**, we have to find a bound on the probability of $E = \bigcap_{n}E_n$ (in probability logical and $\iff \cap$).
So :

$$
 \Pr \left( \bigcap_{n}E_n \right) = 1 - \Pr \left( \bigcup_{n}E^C_n \right) \geq 1 - \sum_n\Pr \left( E^C_n \right) \geq 1-\sum_n\delta_n \geq 1-\delta
$$

This implies:

$$ \Pr (E) > 1-\delta $$

Or equivalently:

$$ \Pr_{S\sim D^m}[\forall n\ \forall h\in H_n :|L_D(h)-L_S(h)|\ \le\ \varepsilon_n\!\big(m,\ w(n)\,\delta\big)]\geq 1-\delta $$

Which proves the first statement.

>[!Info] **Consequence of the theorem**
Consequently, for every $h\in\mathcal H$,
> $$
> L_D(h)\ \le\ L_S(h)\ +\ \min_{n \in I(h)}\ \varepsilon_n\!\big(m,\ w(n)\,\delta\big).
> $$
>
>Or equivalently:
 >
$$ \Pr_{S\sim D^m}[\forall h\in H : L_D(h) \leq L_S(h) + \min_{n \in I(h)} \varepsilon_n\!\big(m,\ w(n)\,\delta\big)]\geq 1-\delta$$

### Proof (Optional)

For the second statement we proceed in the following way: consider an hypothesis $h \in H$. This can be in one or more subclasses. Let's define $I(h) = \{ n : h \in H_n \}$ i.e. the set of the indices for which the chosen hypothesis is in that subclass. (This is non empty as by construction $H=\bigcup_{n\in\mathbb{N}}\mathcal H_n$ so we must choose from a subclass).
Given the first statement:

$$ \Pr_{S\sim D^m}[\forall n \in I(h):|L_D(h)-L_S(h)|\ \le\ \varepsilon_n\!\big(m,\ w(n)\,\delta\big)]\geq 1-\delta $$

all these inequalities hold at once, so we can take the tightest RHS to have the best bound.
Finally, given that we already proved in the first statement that this holds for every subclass and every hypothesis in the subclass, we can say the holds simultaneously for any hypothesis in $H$:

$$ \Pr_{S\sim D^m}[\forall h\in H : L_D(h) \leq L_S(h) + \min_{n \in I(h)} \varepsilon_n\!\big(m,\ w(n)\,\delta\big)]\geq 1-\delta$$
