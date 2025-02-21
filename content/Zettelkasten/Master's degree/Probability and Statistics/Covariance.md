Covariance measures the tendency of two random variable $X$ and $Y$ to go up or down together relative to their means.
Specifically positive covariance between $X$ and $Y$ implies that if $X$ goes up also $Y$ goes up, while negative covariance between $X$ and $Y$ implies that if $X$ goes up then $Y$ goes down:

>[!info] **Covariance definition**
>Given two r.v.s. $X$ and $Y$ we define covariance as the number:
>
$$ \text{Cov}(X,Y) = \mathbb{E}((X-\mathbb{E}(X))(Y-\mathbb{E}(Y))) $$
>
>One can also use the equivalent expression:
>
$$ \text{Cov}(X,Y) = \mathbb{E}(XY)-\mathbb{E}(X)\mathbb{E}(Y) $$

We state the following: **if two variables have 0 covariance, are said to be uncorrelated but we cannot state that they are independent**.
In fact the following statements holds:
-  independence $\to$ non-correlation
-  non-correlation $\not \to$ independence
As we can see from the picture below, both sample in the lower part of the picture have zero covariance.

![[Images/Covariance.png]]

We report in the following the key properties of the covariance:

>[!info] **Properties of covariance**
>The following key properties are valid:
>- $\text{Cov}(X,X) = \text{Var}(X)$
>- $\text{Cov}(X,Y) = \text{Cov}(Y,X)$
>- $\text{Cov}$ is a bilinear operator.
>- $\text{Var}\left( \sum_i X_i \right)=\sum_i \text{Var}(X_i) +2\sum_i\sum_{i<j} \text{Cov}(X_i,X_j) = \sum_i \text{Var}(X_i) +\sum_i\sum_{i \neq j} \text{Cov}(X_i,X_j)$

## Normalized covariance : Pearson's correlation coefficient

If we normalize the the covariance between 2 random variables we obtain:

$$ \rho_{XY} = \frac{\text{Cov}(X,Y)}{\sigma_X\sigma_Y} $$

We obtain a coefficient between $[-1,1]$, called the Pearson's correlation coefficient