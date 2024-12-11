The multiple histogram method (MHM) is an algorithm devised by Ferrenberg and Swendsen (1989) to evaluate the mean value of the energy at different values of the inverse temperature $\beta$ where only some these are known. In some sense is a way to build a continuous curve given some data points.

The main idea is to find the energy density of states for the system, and from this build the mean value expression for every $\beta$.
Suppose to have a system in which the energies are discrete, i.e. $S = \{ E_1, \dots E_s \}$.
We have that the probability to generate a state with energy $E \in S$ at a given timestep and a inverse temperature $\beta$ is given simply by:

$$ \mathbb{P}(E) = \rho(E)\frac{e^{-\beta E}}{\mathcal{Z}} $$

The probability $\mathbb{P}(E)$ can be estimated simply by the naive definition, i.e. by counting the occurrences of $E$ (that we will call $N(E)$) over the total iterations, called, say, $M$:

$$\mathbb{P}(E) = \frac{N(E)}{M}$$

By combining the 2 we obtain a formula for $\rho(E)$:

$$ \rho(E) = \frac{N(E)}{M} \frac{\mathcal{Z}}{e^{-\beta E}} $$

Now we explain how one does this numerically.
We choose a set of inverse temperatures $\{\beta_1, \beta_2, \dots, \beta_k\}$ such that the energy histograms have a good overlap (more than $20 \%$). For each temperature we will have an histogram for the energies. We will call $N_i(E)$ the occurrences at the inverse temperature $i$ of energy $E$, where $i = 1, 2, \dots, k$ and $E \in S$.
In this way we can write for each inverse temperature a formula like the one before :

$$ \rho_i(E) = \frac{N_i(E)}{M_i} \frac{\mathcal{Z_i}}{e^{-\beta_i E}} \qquad i = 1, 2, \dots, k $$

**Note now that, given that the density of states is a property of the system and is independent from the temperature, all these $\rho_i(E)$ gives an estimate of $\rho(E)$.**

So now the point is, given all these estimates $\rho_i(E)$, what is the best final estimate we can give of $\rho(E)$ ?

We begin by evaluating the error on the single $\rho_i(E)$, but in order to do this we start a simple digression.

-  **A digression on the statistics of $N_i(E)$**
	
	We want to derive the probability distribution for the energy occurrences $N_i(E)$.
	We start from a set of discrete energies $S = \{ E_1, \dots E_s \}$ from this, at a given inverse temperature $i$, for every timestep we count the occurrences of a specific energy $E \in S$, for a total of $M_i$ times.
	If we assume independence and call $p_i(E)$ the probability to pick energy $E$ at a given timestep for the inverse temperature $i$, then is clear that the counting follows a binomial distribution. If we call $N_i(E)$ the random variable representing the number of occurrences of energy $E$ at inverse temperature $i$:
	
	$$ \mathbb{P}(N_i(E) = k(E)) = \binom{M_i}{k(E)}p_i(E)^{k(E)}(1 -p_i(E))^{M_i - k(E)} $$
	
	This distribution can degenerate in a Poisson distribution in the following way: we consider $M_i \to +\infty$ and $p_i(E) \to 0$ such that $M_ip_i(E) \equiv \lambda(E) < +\infty$. In this way we can write:
	
	$$ \mathbb{P}(N_i(E) = k(E)) = \frac{\lambda(E)^{k(E)}}{k(E)!} e^{-\lambda(E)} \qquad M_ip_i(E) \equiv \lambda(E)$$
	
	Notice here that $\lambda(E)$ can be also evaluated by taking the expected value of $X$ in a Poisson distribution, i.e. $\lambda(E) = \bar{N}_i (E)$.
	Given that we are talking about discrete values the approximation should stop here. But we can indeed continue and consider the Gaussian limit of the Poisson distribution.
	Specifically we consider the case $\lambda(E) \to +\infty$. In this way the Poisson distribution degenerates in a Gaussian distribution:
	
	$$ \mathbb{P}(N_i(E) = k(E)) \quad \xrightarrow{\lambda(E) \to +\infty} \quad \frac{1}{\sqrt{2 \pi \lambda(E)}} \exp \left( - \frac{k(E) - \lambda(E))^2}{2\lambda(E)} \right)$$
	
	That is, a normal distribution with mean $k(E)$ and variance $\lambda(E)$ for each inverse temperature $i$.
	Finally we can conclude the following: We have for the counting statistics a Poisson statistics, but given that we are considering this in the Gaussian limit, we are associating to this statistics the variance $\sigma^2 = \lambda(E) = \bar{k}(E)$.
	Note that for simplicity we will write $\sigma^2 = \bar{N_i}(E)$.

Finally we can evaluate the error easily. The only source of error is the one on the counting statistics $N_i(E)$:

$$ \sigma_{\rho_i(E)} = \frac{\sigma_{N_i(E)}}{M_i} \frac{\mathcal{Z_i}}{e^{-\beta_i E}} \qquad i = 1, 2, \dots, k $$

And, according to our digression, $\sigma_{N_i(E)} = \sqrt{\bar{N}_i(E)}$ :

$$ \sigma_{\rho_i(E)} = \frac{\sqrt{\bar{N}_i(E)}}{M_i} \frac{\mathcal{Z_i}}{e^{-\beta_i E}} \qquad i = 1, 2, \dots, k $$

While the variance is :

$$ \sigma^2_{\rho_i(E)} = \frac{\bar{N}_i(E)}{M^2_i} \left(\frac{\mathcal{Z_i}}{e^{-\beta_i E}}\right)^2 \qquad i = 1, 2, \dots, k $$

We now observe the following. We can rewrite $\bar{N}_i(E)$ using the definition of probability for many trials:

$$ \bar{N}_i(E) = \mathbb{P}_i(E)M_i = \rho(E)\frac{e^{-\beta_i E}}{\mathcal{Z}_i}M_i \qquad \iff \qquad  \rho(E) = \frac{\bar{N}_i(E)}{M_i} \frac{\mathcal{Z_i}}{e^{-\beta_i E}} \qquad i = 1, 2, \dots, k $$

Combining all together we obtain:

$$ \sigma^2_{\rho_i(E)} = \frac{\rho^2(E)}{\bar{N}_i(E)} \qquad i = 1, 2, \dots, k $$

Finally we recall the following : consider a set of independent measures $x_1, \dots, x_n$ with their respective errors $\sigma_i$, all distributed according to a Gaussian distribution with the same mean $\mu$. Then we can define:

$$ \bar{x} = \frac{\sum_{i}w_ix_i}{\sum_jw_j} \qquad w_i = \frac{1}{\sigma_i^2} $$

this weighted mean is the maximum likelihood estimator of the mean $\mu$ of the probability distributions.

Given that we showed that in the limit $N_i(E)$ are normal distributed, then also $\rho_i(E)$ are normal distributed. So we can write:

$$
\begin{aligned}
\mathbb{E}(\rho(E)) &= \frac{\sum_i \frac{\bar{N}_i(E)}{\rho^2(E)}\rho_i(E)}{\sum_j \frac{\bar{N}_j(E)}{\rho^2(E)}} = \frac{\sum_i \bar{N}_i(E)\rho_i(E)}{\sum_j \bar{N}_j(E)} = \frac{\sum_i \rho(E)\frac{e^{-\beta_i E}}{\mathcal{Z}_i}M_i\rho_i(E)}{\sum_j \rho(E)\frac{e^{-\beta_j E}}{\mathcal{Z}_j}M_j }  
\\ &= \frac{\sum_i \frac{e^{-\beta_i E}}{\mathcal{Z}_i}M_i\rho_i(E)}{\sum_j \frac{e^{-\beta_j E}}{\mathcal{Z}_j}M_j } = \frac{\sum_i \frac{e^{-\beta_i E}}{\mathcal{Z}_i}\frac{N_i(E)}{M_i} \frac{\mathcal{Z_i}}{e^{-\beta_i E}}M_i}{\sum_j \frac{e^{-\beta_j E}}{\mathcal{Z}_j} M_j} = 
\\ & = \frac{\sum_i N_i(E)}{\sum_j e^{-\beta_j E}Z_j^{-1} M_j}
\end{aligned}
$$

Where all the substitutions are aimed to eliminate $\bar{N}_i(E)$ and $\rho(E)$.
Now we are not finished, because this expression still contains the partition function.
But we can build a recursion formula by considering that:

$$ \mathcal{Z}_k  = \sum_E \rho(E)e^{-\beta_kE} = \sum_E \frac{\sum_i N_i(E)}{\sum_j e^{(\beta_k-\beta_j) E}Z_j^{-1} M_j} $$

Note that can this formula can be easily generalized to a generic inverse temperature $\beta$:

$$ \mathcal{Z}(\beta)  = \sum_E \rho(E)e^{-\beta E} = \sum_E \frac{\sum_i N_i(E)}{\sum_j e^{(\beta-\beta_j) E}Z_j^{-1} M_j} $$

We are finally ready to state the algorithm and its passages.

>[!info] Multiple histogram method algorithm
>Suppose to have a system for which we have evaluate the energies at different inverse temperatures $\{\beta_1, \dots, \beta_k\}$ such that the energy histograms have a good overlap ($>20 \%$).
>Then we can perform the following algorithm to evaluate the energy at other values of $\beta$ not included in the list in the following way:
> - Initialize an array of $1's$ of dimension $k$  
> - Apply the formula:
>  $$ \mathcal{Z}_k  = \sum_E \rho(E)e^{-\beta_kE} = \sum_E \frac{\sum_i N_i(E)}{\sum_j e^{(\beta_k-\beta_j) E}Z_j^{-1} M_j} $$
>  To evaluate the partition functions for each inverse temperature $k$ recursively until convergence is reached.
>  - Once we have the partition functions we can evaluate the density of states of the system using:
>  $$\mathbb{E}(\rho(E)) = \frac{\sum_i N_i(E)}{\sum_j e^{-\beta_j E}Z_j^{-1} M_j} $$
>  - Then we can evaluate for any other inverse temperature $\beta$ the partition function
>  $$ \mathcal{Z}(\beta)  = \sum_E \rho(E)e^{-\beta E} $$
>  Note that this value is already converged if convergence is achieved previously.
>  - Then we can evaluate the mean energy at $\beta$ by :
>  $$U(\beta) = \sum_{E} E\ \mathbb{P}(E) = \sum_{E} E \rho(E)\frac{e^{-\beta E}}{\mathcal{Z}(\beta)} $$





