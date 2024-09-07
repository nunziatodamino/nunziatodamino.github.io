Suppose we want to model the following phenomenon: for each trial there is a probability $p$ of a so called "success", and a probability $q=1-p$ of a so called "failure". We want to know what is the probability over $n$ trials to have $k$ successes.
In order to define the probability mass function we define as our random variable the number of successes $k$, so that we will obtain:

>[!info] **Binomial probability mass function**
>
>$$ p_X(k)=\mathbb{P}(X=k) = {n\choose k}p^k(1-p)^{n-k} $$

Note that the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Bernoulli probability distribution]] is a special case of this distribution, when the only possible outcomes of $k$ are 0 and 1.
We show in the following some possible representations for fixed values of $p$ and $n$ for the pmf:

![[Binomial_pmf.png|400]]

### Generating function

We will have, by definition, that:

>[!info] **Generating function of a binomial distribution**
>
>$$G(z)= \sum_{\text{sample space}} p_X(k)z^k = \sum_{k=0}^n {n\choose k}p^k(1-p)^{n-k}z^k = (pz+q)^n $$

Where we used the fact that the support of the binomial distribution, i.e. its sample space, is $k=\{0,1,\dots,n\}$, and also the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Newton's binomial formula]].

We now evaluate mean and variance with the generating function method:

$$ \braket{k}= G'(z)_{z=1}=np(p+q)^{n-1}=np $$

Where we used $p+q=1$.
Then:

$$ G''(z)_{z=1}= \braket{k(k-1)} = \braket{k^2}-\braket{k}=n(n-1)p^2(p+q)^{n-2} =n(n-1)p^2$$

So that finally:

$$ \text{Var}(k) = \braket{k^2}-\braket{k}^2 = G''(z)_{z=1}+G'(z)_{z=1}-[G'(z)]^2_{z=1} = n(n-1)p^2 +np -n^2p^2 = np-np^2 =  $$

$$= np(1-p)=npq$$

So that we can imply:

>[!info] Mean and variance of a Binomial distribution
>
>$$ \braket{k} = np \qquad \text{Var}(k) = npq $$


