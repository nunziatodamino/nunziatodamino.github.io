> [!info] **No Free Lunch Theorem** (binary classification, 0–1 loss)
> Let $A$ be any learning algorithm over a finite size domain $X$ and $H = \{0,1\}^X$ (no structure on the hypothesis class).
>  Fix a sample size $m$ smaller than $\frac{|X|}{2}$. 
> 
> Then there exists a distribution $D$ over $X\times\{0,1\}$ such that:
>
> 1. There exists a function $f:X\to\{0,1\}$ with $L_D(f)=0$.
> 2. We have
>    $$\Pr_{S\sim D^{m}}\!\big[L_D(A(S))\ge\tfrac{1}{8}\big]\ \ge\ \tfrac{1}{7}.$$
>

The idea of this theorem (and its generalizations) is the following: can we solve a learning problem with few data ?
With few samples, **learning is not guaranteed** in the worst case: for any algorithm there exists a realizable distribution on which it incurs constant error with non-negligible probability.
Respect the converse (what about more data) the theorem do not say anything, and in general even with more data there is no learning guarantee if no further structure hypothesis on the learning problem are satisfied.

>[!iinfo] **Corollary - Infinite hypothesis class are not PAC learnable**  
>If $H=\{0,1\}^{X}$ (is the space of all possible functions from $X$ to $\{0,1\}$) and $X$ is infinite, then $H$ is **not** PAC learnable.
### Proof 

By absurdum. Suppose $H$ is PAC learnable.
Then by definition there exist a function  $m_H : (0,1)^2 \to \mathbb{N}$ and a learning algorithm $A$ such that for all $\varepsilon, \delta \in (0,1)$ and for every distribution $D$ and target $f$ realizable by $H$, for any sample size  
$m \ge m_H(\varepsilon, \delta)$, we have  

$$\Pr_{S \sim D^{m}}\!\big[ L_{\text{true}}(A(S)) \le \varepsilon \big] \ge 1 - \delta.$$ 
or its converse, i.e. there exists $\varepsilon, \delta \in (0,1)$, a distribution $D$ and a target $f$ realizable by $H$,such that exists a sample size $m \ge m_H(\varepsilon, \delta)$, we have  

$$\Pr_{S \sim D^{m}}\!\big[ L_{\text{true}}(A(S)) > \varepsilon \big] < \delta$$

Choose now $\varepsilon <1/8$ and $\delta<1/7$.
But for any finite size domain the NFL theorem holds. 
Absurdum. $X$ is infinite and $H$ is not PAC learnable.

This corollary also implicitly says that there exists no universal learner, and a learning problem always require prior knowledge of the problem to restrict the hypothesis class, because otherwise there will be situations in which learning is not possible.

> [!info] **Corollary -  NFL via shattering**
> Let $A$ be any learning algorithm and $H \subseteq \{0,1\}^X$. Fix a sample size $m$.
> Consider also $C \subseteq X$ such that $|C| = 2m$ and such that is shattered by $H$.
> 
> This implies the NFL theorem. I.e.  Then there exists a distribution $D$ over $X\times\{0,1\}$ such that:
>
> 1. There exists a function $f:X\to\{0,1\}$ with $L_D(f)=0$.
> 2. We have
>    $$\Pr_{S\sim D^{m}}\!\big[L_D(A(S))\ge\tfrac{1}{8}\big]\ \ge\ \tfrac{1}{7}.$$
> 

### Proof

If I show that the hypothesis of this corollary are equivalent to the one of the NFL theorem I've finished.

Consider C to be the finite size domain in the NFL hypothesis. If $H$ shatters $C$ then the restriction $H_C= \{h(x), x \in C,  h \in H \}$ is equal to all the possible labelings of the set $C$, so is simply $\{0,1\}^C$ (the set of all possible hypothesis from $C$ to the labels $\{0,1\}$) by the shattering definition.
Then the domain $C$ and the hypothesis class $H_C$ satisfies the NFL theorem hypotheses.



