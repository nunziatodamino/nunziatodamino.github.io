Covariance measures the tendency of two random variable $X$ and $Y$ to go up or down together relative to their means.
Specifically positive covariance between $X$ and $Y$ implies that if $X$ goes up also $Y$ goes up, while negative covariance between $X$ and $Y$ implies that if $X$ goes up then $Y$ goes down:

>[!info] **Covariance definition**
>Given two r.v.s. $X$ and $Y$ we define covariance as the number:
>
$$ \text{Cov}(X,Y) = \braket{(X-\braket{X})(Y-\braket{Y})} $$
>
>One can also use the equivalent expression:
>
$$ \text{Cov}(X,Y) = \braket{XY}-\braket{X}\braket{Y} $$

We state the following: **if two variables are independent, then they have 0 covariance, or are said to be uncorrelated**.

![[Covariance.png]]

We report in the following the key properties of the covariance:

>[!info] **Properties of covariance**
>The following key properties are valid:
>- $\text{Cov}(X,X) = \text{Var}(X)$
>- $\text{Cov}(X,Y) = \text{Cov}(Y,X)$
>- $\text{Cov}$ is a bilinear operator.
>- $\text{Var}\left( \sum_i X_i \right)=\sum_i \text{Var}(X_i) +2\sum_i\sum_{i<j} \text{Cov}(X_i,X_j) = \sum_i \text{Var}(X_i) +\sum_i\sum_{i \neq j} \text{Cov}(X_i,X_j)$

