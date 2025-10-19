
> [!info] **Definition (Uniform convergence; ε-representative samples)**
> A hypothesis class $H$ has the **uniform convergence** property on a domain $Z$ with loss $\ell:H\times Z\to[0,1]$ if there exists a function $m_H^{\mathrm{UC}}:(0,1)^2\to\mathbb{N}$ such that for every $\varepsilon,\delta\in(0,1)$ and every distribution $D$ on $Z$,
> 
> $$
> \Pr_{S\sim D^m}\! \left[ \forall h \in H : \big|L_S(h)-L_D(h)\big|\le \varepsilon\ \right]\ \ge\ 1-\delta
> \quad\text{whenever } m\ge m_H^{\mathrm{UC}}(\varepsilon,\delta),
> $$
> 
> or
> 
> $$
> \Pr_{S\sim D^m}\!\left[\ \sup_{h\in H}\big|L_S(h)-L_D(h)\big|\le \varepsilon\ \right]\ \ge\ 1-\delta
> \quad\text{whenever } m\ge m_H^{\mathrm{UC}}(\varepsilon,\delta),
> $$
> where $L_D(h)=\mathbb{E}_{z\sim D}[\ell(h,z)]$ and $L_S(h)=\frac1m\sum_{i=1}^m \ell(h,z_i)$.  
> (Equivalently: with probability $\ge 1-\delta$, the sample $S$ is $\varepsilon$-representative for $H$.)

> [!info] **UC ⇒ agnostic PAC and ERM is a valid agnostic PAC learner**
> If $H$ has uniform convergence with function $m_H^{\mathrm{UC}}$, then:
> 1. $H$ is **agnostically PAC learnable** with sample complexity
> $$
> m_H(2\varepsilon,\delta)\ \le\ m_H^{\mathrm{UC}}(\varepsilon,\delta).
> $$
> 2. The **ERM** rule $h_S\in\arg\min_{h\in H}L_S(h)$ is a valid (agnostic) PAC learner; in particular, for all $\varepsilon,\delta\in(0,1)$ and all $D$,
> $$
> m\ \ge\ m_H^{\mathrm{UC}}\!\left(\tfrac{\varepsilon}{2},\delta\right)
> \ \Longrightarrow\
> \Pr_{S\sim D^m}\!\left[\,L_D(h_S)\ \le\ \min_{h\in H}L_D(h)+\varepsilon\,\right]\ \ge\ 1-\delta.
> $$
## Proof

1) If $m\ge m_H^{\mathrm{UC}}(\varepsilon,\delta)$ then with probability at least $1-\delta$  we have that $S$ is $\varepsilon$-representative. Considering then lemma [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/ε-representative training sets and ERM|ε-representative training sets and ERM]] :

If a training set $S$ is ε-representative and $h_S\in\arg\min_{h\in H} L_S(h)$ is the ERM on $S$, then 
 $$
 L_D(h_S)\ \le\ \min_{h\in H} L_D(h)\ +\ 2\varepsilon.
 $$

But this correspond to [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Agnostic PAC learnability|Agnostic PAC learnability]] with $m_H(2\varepsilon, \delta)$. In order to both hold the following in equality must hold:

$$
 m_H(2\varepsilon,\delta)\ \le\ m_H^{\mathrm{UC}}(\varepsilon,\delta). 
 $$

Proving implication 1.

2) If $m \ge m_H^{\mathrm{UC}}(\varepsilon/2,\delta)$, then with probability at least $1-\delta$, $S$ is $(\varepsilon/2)$-representative. The lemma with $\varepsilon \leftarrow \varepsilon/2$ gives

$$ L_D(h_S) \le \min_{h\in H} L_D(h) + \varepsilon $$
with probability at least $1-\delta$. Hence the ERM rule is a valid agnostic PAC learner with the stated sample complexity following the same ansatz as before.

