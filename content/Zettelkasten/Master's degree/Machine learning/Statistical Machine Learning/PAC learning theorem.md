### Preliminaries

First we define the concept of realizability

>[!info] **Realizability**
> Consider a finite hypothesis class $H$. To assume realizability means that the true labeling function $f \in H$ , or equivalently:
> 
> $$ \exists h^* \in H \ | \ L_{D,f}(h^*) = 0 $$

Note that clearly $h^*$ is just the representation of $f$ in the $H$ space, and this represent (in theory) the perfect hypothesis.

- **Observation**
Consider a training set:

$$ S = \{(x_i,y_i)\}\quad i = 1, \dots , m $$

In general $S \in X^m \times Y^m$. Under realizability we know $f$, so just knowing the $x_i$ implies the knowledge of the labels $y_i$ by the labeling function application $f(x_i)=y_i$.
So the labels in theorems utilizing realizability are omitted, and we write simply $S \in X^m$.


# Theorem

>[!info] **PAC learning theorem**
>Hp. Consider a finite hypothesis class $H$. Under the realizability assumption, for any $\delta, \varepsilon \in (0,1)$ if we draw $m$ i.i.d samples from $D$, labeled by $f$, where:
>
>$$ m \geq \frac{1}{\varepsilon}\ln\left( \frac{|H|}{\delta} \right) $$
>
>Then if the learner hypothesis is the ERM, i.e. 
>
>$$ h_S \equiv ERM_H \in \text{argmin}_{h\in H}L_S(h) $$ 
>
>This hypothesis will satisfy the condition $L_{\text{true}}(h_S) \equiv L_{D,f}(h_S) \leq \varepsilon$, with probability at least $1-\delta$, or more formally:
>
>$$ \mathbb{P}(L_{\text{true}}(h_S)\leq \varepsilon) \geq 1-\delta $$

## Proof

We begin by defining the set of bad hypothesis, i.e.

$$ H_B = \{ h \in H\  |\ L_{\text{true}}(h)> \varepsilon  \} $$

And with this we can define the set of misleading training sets (sets for which a bad hypothesis perform well but just on the training set):

$$ M= \{ S \in X^m\ | \ \exists h \in H_B , L_S(h) = 0\} $$

Note that this implies that for each misleading training set there is at least one bad hypothesis that fits perfectly the training data but there can be other hypothesis that makes other conclusion on the data.
This definition guarantees the existence of a bad one.

Now I consider my learner hypothesis $h_S \equiv ERM_H$, and I evaluate a bound over the probability that its true loss is greater than $\varepsilon$.
In general I have 2 chances: either i pick a misleading training set ($S \in M$) , or a not-misleading one ($S \in X \setminus M$). 
By the law of total probability:

$$ \mathbb{P}(L_{D,f}(h_s) > \varepsilon) = \mathbb{P}(L_{D,f}(h_s) > \varepsilon\  |\ S\in M)\mathbb{P}(S\in M) + \mathbb{P}(L_{D,f}(h_s) > \varepsilon\  |\ S\notin M)\mathbb{P}(S\notin M) $$

Consider now the 2 pieces on the RHS:

- $\mathbb{P}(L_{D,f}(h_s) > \varepsilon\  |\ S\in M)$ : If I choose a misleading training set, the ERM process can pick either a bad hypothesis or a good one, both with 0 empirical risk. Note that the existence of a good one with 0 empirical risk is guaranteed by realizability. At least I have 1 bad and 1 good, bad in general I have in this set some bad hypothesis $b$ and some good ones $g$ so that the probability is $b/b+g \leq 1$.
- $\mathbb{P}(L_{D,f}(h_s) > \varepsilon\  |\ S\notin M)$ : By definition $S\notin M \to \forall h \in H_B, \ L_s(h)>0$. So the ERM process can never choose a bad hypothesis. So if the ERM is not in the bad hypothesis set, by definition of said set $L_{D,f}(h_s)\leq \varepsilon$. This concludes that the probability $\mathbb{P}(L_{D,f}(h_s) > \varepsilon\  |\ S\notin M) = 0$.

Then we have in the end, by stressing in the notation that $S$ is sampled with an i.i.d procedure:

$$ \mathbb{P}_{x\sim D^m}(L_{D,f}(h_s) > \varepsilon) \leq \mathbb{P}_{x\sim D^m}(S\in M) $$

Or equivalently:

$$ \mathbb{P}_{x\sim D^m}(L_{D,f}(h_s) > \varepsilon) \leq D^m(M) $$

To continue we first rewrite $M$. First we write the equivalent formulation:

$$ M= \bigcup_{h\in H_B} \{ S \in X^m\ |L_S(h) = 0\} $$

Note that this is a perfectly legitimate notation, as the hypothesis in $H_B$ that will not have 0 training loss will contribute with the empty set. From this consideration, and using the union bound lemma $D(A\cup B) \leq D(A) +D(B)$, we have:

$$ \mathbb{P}_{x\sim D^m}(L_{D,f}(h_s) > \varepsilon) \leq \sum_{h \in H_B} D^m(\{ S \in X^m\ |L_S(h) = 0\} ) = \sum_{h \in H_B}\mathbb{P}_{x \sim D^m}(S \in \{ S \in X^m\ |L_S(h) = 0\} )  $$

Let's see if we can evaluate a bound on the RHS.
First the 0 training error condition is equivalent to a perfect labeling on the training set, then the i.i.d condition implies that if we have $m$ points in this set the probability to label correctly each point is equal. This implies that the total probability is the product of the probability to label each point in the training set correctly:

$$  D^m(\{ S \in X^m\ |L_S(h) = 0\} ) = \prod_{i=1}^m D(\{ x_i \in X\ |h(x_i) = f(x_i)\} ) $$

The probability to label each point correctly is by definition of bad hypothesis $L_{D,f}(h) = \mathbb{P}_{x\sim D}(h(x) \neq f(x)) > \varepsilon$:

$$D(\{ x_i \in X\ |h(x_i) = f(x_i)\} ) = 1 - D(\{ x_i \in X\ |h(x_i) \neq f(x_i)\} ) \leq 1-\varepsilon $$

Then by the i.i.d hypothesis, putting all together:

$$ \mathbb{P}_{x\sim D^m}(L_{D,f}(h_s) > \varepsilon) \leq \sum_{h\in H_B}(1-\varepsilon)^m = |H_B|(1-\varepsilon)^m < |H|(1-\varepsilon)^m $$

Given that we sum $H_B$ elements we expect the cardinality of $H_B$ to show up. Due to realizability we have that hypothesis class contains other than the bad hypothesis set at least the true labeling, so $H$ has for sure a bigger cardinality.

Also we use the inequality $1-x \leq e^{-x}$, so that:

$$ \mathbb{P}_{x\sim D^m}(L_{D,f}(h_s) > \varepsilon) < |H|e^{-\varepsilon m} $$

Finally if we **impose** that :

$$ |H|e^{-\varepsilon m} \leq \delta \iff m \geq \frac{1}{\varepsilon}\ln\left( \frac{|H|}{\delta} \right) $$

By choosing an appropriate $m$ (large). This imply by the chain:

$$\mathbb{P}_{x\sim D^m}(L_{D,f}(h_s) > \varepsilon) \leq \delta$$

Or equivalently

$$ \mathbb{P}_{x\sim D^m}(L_{D,f}(h_s) \leq \varepsilon) = 1 - \mathbb{P}_{x\sim D^m}(L_{D,f}(h_s) > \varepsilon) \geq 1-\delta $$

Hence the theorem.