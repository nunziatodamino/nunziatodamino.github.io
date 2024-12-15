We recall briefly the [[Projects/Numerical methods for soft matter/Monte Carlo methods/Multiple histogram method|Multiple histogram method]] algorithm :  

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

Step 2 presents some technical challenges that are worth discussing.
The partition function wildly oscillates in magnitude $(\sim 10^{\pm 300})$ so treating the algorithm as is now,  the risk of overflow or of floating point arithmetic instability is extremely high (considering also that for small values we risk to exceed the typical machine epsilon). 
First we make some observations:
- The partition function is strictly positive : $\mathcal{Z} > 0$
- The recursion formula :  
 $$ \mathcal{Z}_k  = \sum_E \rho(E)e^{-\beta_kE} = \sum_E \frac{\sum_i N_i(E)}{\sum_j e^{(\beta_k-\beta_j) E}Z_j^{-1} M_j} $$

Is scale-invariant, i.e. we can multiply the partition function by a constant factor $A$ and doesn't change anything.

So the idea is the following: we can consider the natural logarithm of the partition function (allowed always by observation 1) and if the results tend to deviate to much from 0 we can re-scale all by :

$$ A = \frac{1}{\sqrt{\mathcal{Z}_{max}\mathcal{Z}_{min}}} $$

Allowed by observation 2.
Note that the first trick is a modification of a trick known in literature as [[Log-sum-exp trick]].
Then we need a way to check convergence. Usually one evaluate the quantity:

$$ \Delta ^2 = \sum_k \left[ \frac{\mathcal{Z}^{(m)}_k - \mathcal{Z}^{(m-1)}_k}{\mathcal{Z}^{(m)}_k} \right]^2 $$

Where with $\mathcal{Z}^{(m)}_k$ we denote the partition function of the inverse temperature $k$ at the recursion step $m$.
The typical recipe is that $\Delta < \varepsilon \equiv 10 ^{-7}$.
Now we rephrase step 2 applying all these changes:

### Details

If we call $\ln \mathcal{Z_k} = l_k \iff \mathcal{Z_k} = e^{l_k}$ we can rewrite:
 $$ e^{l_k}  = \sum_E \frac{\sum_i N_i(E)}{\sum_j e^{(\beta_k-\beta_j) E}e^{-l_j} e^{\ln M_j}} = \sum_E \frac{\sum_i N_i(E)}{\sum_j e^{(\beta_k-\beta_j)E -l_j+\ln M_j}} \equiv \sum_E \frac{\sum_i N_i(E)}{\sum_j e^{\lambda_{kj}(E)}}  $$

We can replace the histograms with the energy occurrences:

$$ e^{l_k}  =  \sum_E \sum_i \frac{1}{\sum_j e^{\lambda_{kj}(E_i)}} = \sum_n \sum_i \sum_j e^{-\lambda_{kj}(E_{in})} \equiv \sum_n \sum_i \sum_j e^{\Gamma_{kj}(E_{in})} $$

Where the index $n$ runs over all samples $M_i$ of the $i$-th simulation at one of the inverse temperatures, and $E_{in}$ is the energy of such sample $n$.
Now we do the typical passages of the [[Projects/Log-sum-exp trick|Log-sum-exp trick]]:

$$\begin{aligned}
e^{l_k}  &=   \sum_n \sum_i \sum_j e^{\Gamma_{kj}(E_{in})} = \sum_n \sum_i e^{\Gamma_{kj^*}(E_{in})} \sum_j e^{\Gamma_{kj}(E_{in}) -\Gamma_{kj^*}(E_{in})} \\&= \sum_n e^{\Gamma_{kj^*}(E_{i^*n})} \sum_i e^{\Gamma_{kj^*}(E_{in}) -\Gamma_{kj^*}(E_{i^*n})} \sum_j e^{\Gamma_{kj}(E_{in}) -\Gamma_{kj^*}(E_{in})} = \\
&= e^{\Gamma_{kj^*}(E_{i^*n^*})}\sum_n e^{\Gamma_{kj^*}(E_{i^*n}) - \Gamma_{kj^*}(E_{i^*n^*})} \sum_i e^{\Gamma_{kj^*}(E_{in}) -\Gamma_{kj^*}(E_{i^*n})} \sum_j e^{\Gamma_{kj}(E_{in}) -\Gamma_{kj^*}(E_{in})}
\end{aligned}
$$

Where $\Gamma_{kj^*}(E_{in}) = \max_j \{\Gamma_{kj}(E_{in})\}$, $\Gamma_{kj^*}(E_{i^*n}) = \max_i \{\Gamma_{kj^*}(E_{in})\}$ and  $\Gamma_{kj^*}(E_{i^*n^*}) = \max_n \{\Gamma_{kj^*}(E_{i^*n})\}$ 
Finally, if we take the logarithm of both sides:

$$l_k = \Gamma_{kj^*}(E_{i^*n^*}) + \ln \sum_n e^{\Gamma_{kj^*}(E_{i^*n}) - \Gamma_{kj^*}(E_{i^*n^*})} \sum_i e^{\Gamma_{kj^*}(E_{in}) -\Gamma_{kj^*}(E_{i^*n})} \sum_j e^{\Gamma_{kj}(E_{in}) -\Gamma_{kj^*}(E_{in})}$$
