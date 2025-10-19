Let $\mathcal H$ be the hypothesis class we wish to describe. Fix some finite set $\Sigma$ of symbols (or “characters”), which we call the alphabet. For concreteness, let $\Sigma=\{0,1\}$. A string is a finite sequence of symbols from $\Sigma$; for example, $\sigma=(0,1,1,1,0)$ is a string of length $5$. We denote by $|\sigma|$ the length of a string. The set of all finite-length strings is denoted $\Sigma^{*}$. A description language for $\mathcal H$ is a function $d:\mathcal H\to\Sigma^{*}$, mapping each member $h$ of $\mathcal H$ to a string $d(h)$. $d(h)$ is called “the description of $h$,” and its length is denoted by $|h|$.

We shall require that description languages be **prefix-free**; namely, for every distinct $h,h'$, $d(h)$ is not a prefix of $d(h')$. That is, we do not allow that any string $d(h)$ is exactly the first $|h|$ symbols of any longer string $d(h')$. Prefix-free collections of strings enjoy the following combinatorial property:

**Lemma (Kraft Inequality).** If $S\subseteq\{0,1\}^{*}$ is a prefix-free set of strings, then
$$
\sum_{\sigma\in S}\frac{1}{2^{|\sigma|}}\le 1.
$$

In light of Kraft’s inequality, any prefix-free description language of a hypothesis class $\mathcal H$ gives rise to a weighting function $w$ over that hypothesis class—we simply set $w(h)=\frac{1}{2^{|h|}}$. This observation immediately yields the following:

**Theorem.** Let $\mathcal H$ be a hypothesis class and let $d:\mathcal H\to\{0,1\}^{*}$ be a prefix-free description language for $\mathcal H$. Then, for every sample size $m$, every confidence parameter $\delta>0$, and every probability distribution $D$, with probability greater than $1-\delta$ over the choice of $S\sim D^{m}$ we have that
$$
\forall h\in\mathcal H,\quad
L_D(h)\ \le\ L_S(h)\ +\ \sqrt{\frac{|h|+\ln(2/\delta)}{2m}},
$$
where $|h|$ is the length of $d(h)$.
