Consider $H \subset \{0,1\}^X$ and $C\subset X^m$.
Consider than all possible labeling ($2^m$ on the 0-1 labeling) of the subset $C$.
If the hypothesis class is able to realize each possible labeling (i.e. there exist for each labeling an hypothesis $h \in H$ that realizes it) then we say that $H$ **shatters** (or perfectly fits) $C$.

With these preliminaries we are able to define:

>[!info] **Vapnik-Chervonenkis dimension of an hypothesis class $H$**
>We define the Vapnik-Chervonenkis (VC) dimension of an hypothesis class $H$, written $\text{VCdim}(H)$ as:
>
$$ \text{VCdim}(H) = \max\{m\in \mathbb{N} : \exists C \subset X^m, H\ \text{shatters}\ C\} $$

The idea is then the following: we consider the instance space $X$ and consider the training set composed of one point, and see if can shatter it with $H$. Then go to the training set composed of 2 points etc. until we can't shatter the set anymore. The last step where we shattered the set gives us the VC dimension.

- E.g: $H = \{ h_{a}(x) = \mathbb{1}_{x\geq a} \}$ so for any value greater equal than the threshold $a$ we set 1, otherwise 0.
	Consider $C_1 =\{x_1\}$. We have $2^1$ labelings: 1, and 0.
	If we consider $a$ such that $x_1 \geq a$ we have the label 1, otherwise we have the label 0.
	We conclude that $H$ shatters $C_1$. Up until now, as $m=1 \to \text{VCdim}(H) = 1$.
	Consider $C_2 =\{x_1,x_2\}$. We have $2^2$ labelings: (0,0), (0,1), (1,0), (1,1)
	Suppose $x_1 <x_2$.
	(0,0) can be achieved if $a$ is $a > x_1$ and $a > x_2$.
	(1,1) can be achieved if $a$ is $a \le x_1$ and $a\le x_2$.
	(1,0) can be achieved if $a$ is $a > x_1$ and $a \le x_2$. This implies that $x_1 < a \le x_2$
	(0,1) can be achieved if $a$ is $a < x_1$ and $a \ge x_2$, but this is impossible in the current setting.
	We conclude that $H$ do not shatter $C_2$.
	The final conclusion is that $\text{VCdim}(H) = 1$
 
