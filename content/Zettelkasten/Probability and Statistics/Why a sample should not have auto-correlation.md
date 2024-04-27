In general one should always check if their r.v.s are auto-correlated.
While intuitively this makes sense, is important to show quantitatively why .

Suppose to have $X_i$ r.v.s. and we want to extract an information about their mean $X = \frac{1}{n} \sum_i X_i$.
We begin by constructing the variance of $X$

$$ \begin{aligned} \text{Var}(X)  & = \sum_i \text{Var}\left(\frac{X_i}{n}\right) + \sum_i\sum_{i \neq j} \text{Cov} \left(\frac{X_i}{n},\frac{X_j}{n}  \right) = \\ & = \frac{1}{n^2} \left[\sum_i \text{Var}\left(X_i\right) + \sum_i\sum_{i \neq j} \text{Cov} \left({X_i},{X_j}  \right) \right]\end{aligned} $$

Where we used implicitly the properties $\text{Var}(\alpha X) = \alpha^2\text{Var}(X)$ and the fact that $\text{Cov}$ is a bilinear operator.
We now study 2 limiting cases:

>[!info] $X_i$ are completely uncorrelated, i.e. $\text{Cov} ({X_i},{X_j})=0  , \forall i,j$
>
Then the expression for the variance becomes:
>
$$\text{Var}(X) = \frac{1}{n^2} \sum_i \text{Var}\left(X_i\right)$$
>
I.e. the variance scales with the sample size, ''better statistics'' (generally an expression for a big sample) implies a better measurement because of the small error.

 >[!info] $X_i$ are completely correlated, i.e. $\text{Cov} ({X_i},{X_j}) \neq 0  , \forall i,j$
>
Then one can imply that the various $X_i$ are drawn from the same distribution $X_i \sim X_j$, so that $\text{Cov} ({X_i},{X_j}) = \text{Cov} ({X_i},{X_i}) = \text{Var}(X_i)$.
Moreover one can say that the variance is the same for all the variables, if they are drawn from the same distribution.
So the expression for the variance becomes:
>
$$\text{Var}(X) = \frac{1}{n^2} \left[n \text{Var}\left(X_i\right) + n^2 \text{Var} \left({X_i}  \right) \right] \simeq \text{Var}\left(X_i\right)$$
>
Which do not scale with sample size, i.e. there is no advantage in collecting a large statistics, nothing will change.


https://stats.stackexchange.com/questions/168971/variance-of-an-average-of-random-variables