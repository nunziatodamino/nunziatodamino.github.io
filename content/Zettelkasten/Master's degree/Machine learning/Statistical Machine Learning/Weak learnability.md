>[!info] **$\gamma$-weak learnable algorithm respect to an hypothesis class $H$**
>An algorithm $A$ is a $\gamma$-weak learner for $H$ if there exists a function $m_H(\delta) : (0,1) \to \mathbb{N}$ such that for every distribution $D$ over $X$, every target $f \in H$  and for any $\delta \in (0,1)$, when given $m \geq m_H(\delta)$ i.i.d. example $S=(x_i) \sim D^m$ **labeled by the target (we assume realizability)**, the algorithm output an hypothesis $A(S)$ (learning is said proper if $A(S) \in H$, improper otherwise) that satisfies the condition:
>
>$$ \Pr\left[ L_{D,f}(A(S)) < \frac{1}{2} -\gamma \right]\geq 1-\delta $$ 

>[!info] **$\gamma$-weak learnable hypothesis class**
>An hypothesis class is $\gamma$-weak learnable if exists at least one $\gamma$-weak learnable algorithm respect to it.

Notice that a $\gamma$-weak learnable algorithm is an algorithm that perform slightly better than random chance for a given $\gamma$.
### An important note

One imagines that this concept is introduced to treat infinite [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Vapnik-Chervonenkis dimension (VC dimension)|VC-dimension]] spaces, yet:

- If $\text{VCdim}(H)$ is infinite then $H$ is **not** $\gamma$-weak learnable.

Then weak learnability is a property as difficult to prove as [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Agnostic PAC learnability|Agnostic PAC learnability]], and again is clear to see that any class that is A-PAC is $\gamma$-weak learnable but not viceversa.
So if we bother to prove A-PAC via the [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Fundamental theorem of statistical learning|Fundamental theorem of statistical learning]], why then consider a lower tier class ?

Then why introduce this concept ? We will see that we can obtain a strong (A-PAC) learner via a combination of weak learner.
Moreover weak learner are computationally easier to implement. 