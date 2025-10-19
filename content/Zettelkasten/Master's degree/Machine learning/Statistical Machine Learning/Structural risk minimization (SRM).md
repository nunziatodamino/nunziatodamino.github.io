Given a family of hypothesis classes (e.g., polynomials of degree $k$), a very simple model may **underfit**, while a very rich one may **overfit**. SRM makes **Occam’s razor** quantitative: we compare models by

$$\text{empirical loss}\;+\;\text{complexity penalty}$$

then pick the minimizer. The penalty **increases with model capacity** (use a capacity measure—VC dimension, Rademacher complexity, or code length—not just $|H|$), **and decreases with sample size**, and depends also on a confidence level $\delta$. 
Since training loss typically falls as capacity grows, the penalty provides the adequate counterweight. 
This is the **structural risk minimization** principle.

## Formalization

Let $w:\mathbb{N}\to[0,1]$ with $\sum_{n=1}^\infty w(n)\le 1$ be a weighting function.
Let $\mathcal H=\bigcup_{n\in\mathbb{N}}\mathcal H_n$ where each $\mathcal H_n$ has uniform convergence with sample–complexity $m^{\mathrm{UC}}_{\mathcal H_n}(\varepsilon,\delta)$. 
Consider the (class-)uniform deviation radius $\varepsilon_n(m,\delta_n)$ defined by:

$$ \varepsilon_{n}(m,\delta) = \min \{ \varepsilon \in (0,1) : m \ge m_{H_n}^{UC}(\varepsilon, \delta) \} $$

Under these hypotheses, given a training set $S \sim D^m$ and for every confidence $\delta\in(0,1)$ I have a learning [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Bounding structural risk|bound]].
Specifically: 

$$ \Pr_{S\sim D^m}[\forall h\in H : L_D(h) \leq L_S(h) + \min_{n \in I(h)} \varepsilon_n\!\big(m,\ w(n)\,\delta\big)]\geq 1-\delta$$

Where $I(h) = \{ n : h \in H_n \}$ is the set of indices for which, chosen a given $h \in H$, this also is in the subclasses with indices in the set.


The idea is that the learner outputs the following learning hypothesis (given $n(h) =\min I(h)= \min\{ n : h \in H_n \}$):

$$ h_{\text{SRM}} = \arg\!\min_{h\in H} \left[ L_S(h) +\varepsilon_{n(h)}(m, w(n(h))\delta) \right] $$

