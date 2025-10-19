We have  the following result on [[Zettelkasten/Master's degree/Machine learning/Models and algorithms/The halfspace hypothesis class|The halfspace hypothesis class]].

>[!info] [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Vapnik-Chervonenkis dimension (VC dimension)|VC dimension]] of the halfspace class
>The halfspace hypothesis class $HS_d(\bar{w},b)$ has $\text{VCdim}(HS_d) = d+1$

While this is cumbersome to prove, we can prove the homogeneous case:

>[!info] [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Vapnik-Chervonenkis dimension (VC dimension)|VC dimension]] of the homogeneous (no bias) halfspace class
>The halfspace hypothesis class $HS_d(\bar{w},b=0)$ has $\text{VCdim}(HS_d) = d$
### Proof
We begin by proving that $\text{VCdim}(HS_d) \geq d$.
Consider the set $S = \{\bar{e}_1, \dots \bar{e}_d \}$.
Consider now for a vector $\bar{e_i}$ all its possible labeling $y_i$ (i.e. any 2 number, one positive and one negative, so that then the sign function put them to +1, -1 respectively).
But then if I choose as weights $\bar{w}_i = y_i$ this choice shatters $S$, as $\braket{\bar{w}, \bar{e_i}} = y_i$ for any i.
Now we prove that $\text{VCdim}(HS_d) < d + 1$.
Consider a set $S' =\{ \bar{x}_1, \dots, \bar{x}_{d+1} \}$. As the dimension of $\mathbb{R}^d$ is clearly $d$, this set must be linearly dependent, i.e. there exists $a_i, \ i=1, \dots d+1$ such that $\sum_i a_i\bar{x}_i = \bar{0}$. where at least one of the coefficient is non-zero.
Then I consider $I = \{i : a_i > 0\}$ and $J = \{j : a_j < 0\}$. Either one of them is guaranteed to be non-empty by the condition above.
So i can split the condition:

$$\sum_i a_i\bar{x}_i = \bar{0} \iff \sum_I a_i\bar{x}_i - \sum_J |a_j|\bar{x}_j = \bar{0} \iff \sum_I a_i\bar{x}_i = \sum_J |a_j|\bar{x}_j$$

Now I proceed by absurdum. Suppose $H$ shatters $S'$ and consider the case in which $\braket{w, x_i}>0,\ i \in I$ and $\braket{w, x_j}<0,\ j \in J$ which is one of the possible labeling by definition. But:

$$0<\sum_I a_i\braket{w, x_i} = \braket{w, \sum_I a_ix_i} = \braket{w, \sum_j |a_j|x_j} = \sum_j |a_j|\braket{w, x_j} <0 $$

Where we used linearity of the scalar product and the previous identity. This leads to a contradiction.
Note that if $I$ (or $J$) is empty than the leftmost (or rightmost) sum is 0, leading to the same way to a contradiction.

We conclude that $\text{VCdim}(HS_d) = d$.
