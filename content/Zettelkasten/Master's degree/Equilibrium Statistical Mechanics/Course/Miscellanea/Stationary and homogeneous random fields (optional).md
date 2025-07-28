Consider the random field $\{\eta(\bar{r},t)\}_{(\bar{r},t) \in \mathbb{R}^d \times \mathbb{R}}$.
We define the concept of stationarity and homogeneity:
### Stationary random field

> [!info] **Stationary random field in the strong sense (strict stationarity or stationarity)**
> A random field $\{\eta(\bar{r},t)\}_{(\bar{r},t) \in \mathbb{R}^d \times \mathbb{R}}$. is a stationary random field in the strong sense (strict stationarity or stationarity) if the joint probability distribution is translationally invariant in time for any time:
> 
> $$\mathbb{P}(\eta(\bar{r}_1,t_1)\eta(\bar{r}_2,t_2) \dots \eta(\bar{r}_n,t_n)) = \mathbb{P}(\eta(\bar{r}_1,t_1+\tau)\eta(\bar{r}_2,t_2+\tau) \dots \eta(\bar{r}_n,t_n+\tau))\qquad, \forall \tau$$

> [!info] **Stationary random field in the weak sense ( wide stationarity or weak stationarity)**
> A random field $\{\eta(\bar{r},t)\}_{(\bar{r},t) \in \mathbb{R}^d \times \mathbb{R}}$. is a stationary random field in the weak sense ( wide stationarity or weak stationarity) if the average is time invariant, i.e. for a fixed position:
> 
> $$\braket{\eta(\bar{r},t)} = \braket{\eta(\bar{r},0)} \qquad,\forall t$$
> 
> Moreover the time part of the covariance depends only from the time difference:
> 
> $$ \text{Cov}(\eta(\bar{r},t), \eta(\bar{r}',t')) = f(\bar{r}, \bar{r}', t-t') $$

### Homogeneous random field


> [!info] **Homogeneous random field in the strong sense (strict stationarity or stationarity)**
> A random field $\{\eta(\bar{r},t)\}_{(\bar{r},t) \in \mathbb{R}^d \times \mathbb{R}}$. is an homogeneous random field in the strong sense (strict homogeneity or homogeneity) if the joint probability distribution is translationally invariant in space for any vector:
> 
> $$\mathbb{P}(\eta(\bar{r}_1,t_1)\eta(\bar{r}_2,t_2) \dots \eta(\bar{r}_n,t_n)) = \mathbb{P}(\eta(\bar{r}_1 +\bar{R},t_1)\eta(\bar{r}_2+\bar{R},t_2) \dots \eta(\bar{r}_n+\bar{R},t_n))\qquad, \forall \bar{R}$$

> [!info] **Homogeneous random field in the weak sense ( wide stationarity or weak stationarity)**
> A random field $\{\eta(\bar{r},t)\}_{(\bar{r},t) \in \mathbb{R}^d \times \mathbb{R}}$. is an homogeneous random field in the weak sense ( wide homogeneity or weak homogeneity) if the average is space invariant, i.e. for a fixed time:
> 
> $$\braket{\eta(\bar{r},t)} = \braket{\eta(\bar{r}',t)} \qquad,\forall \bar{r}$$
> 
> Moreover the space part of the covariance depends only from the position difference:
> 
> $$ \text{Cov}(\eta(\bar{r},t), \eta(\bar{r}',t')) = g(\bar{r}-\bar{r}', t,t') $$

## Typical assumption in Physics

**In Physics is usually assumed that a random field is both weakly stationary and weakly homogeneous.**
Of course textbooks say that are stationary and homogeneous.
If a process is both weakly stationary and weakly homogeneous then:

$$\braket{\eta(\bar{r},t)} = \braket{\eta(\bar{r},0)} = \eta_0 \qquad,\forall \bar{r}, \forall t$$

And moreover:
 $$ \text{Cov}(\eta(\bar{r},t), \eta(\bar{r}',t')) = h(\bar{r}-\bar{r}', t-t') $$

This imply that one can write the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Miscellanea/Correlation functions|Auto-correlation function]] as:

$$G_{c}(\eta(\bar{r}, t), \eta(\bar{r}', t')) = G_{c}(\bar{r}-\bar{r}', t-t') $$

