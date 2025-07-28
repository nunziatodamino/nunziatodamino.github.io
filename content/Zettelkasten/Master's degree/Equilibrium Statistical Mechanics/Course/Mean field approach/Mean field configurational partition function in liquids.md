In general for a liquid the configurational partition function is:

$$ \mathcal{Q}_N = \int_V \prod_{i=1}^N d\bar{r}_i\ e^{-\beta U_{tot}} = \int_V \prod_{i=1}^N d\bar{r}_i\ e^{-\beta(U_{int}+U_{ext})} $$

Where $U_{int}$:

$$ U_{int} = \sum_{i,j}U_2(\bar{r}_i,\bar{r}_j) + \sum_{i,j,k}U_3(\bar{r}_i,\bar{r}_j,\bar{r}_k) + \dots $$

And any n-order interactions one may want consider.

In a mean field approach one substitutes the whole interaction potential by an effective 1-body potential :

$$ U_{int} \equiv \sum_i U^{MF}_{1}(\bar{r}_i)\equiv\sum_i \phi_{MF}(\bar{r}_i)$$

**One important note : There is one functional form $\phi_{MF}(\cdot)$, but each particle $i$ experiences that potential at its coordinate $r_i$.**
In this way, if one consider that no external potential is present for simplicity, the mean field configurational partition function reduces to :

$$ 
\begin{aligned}
\mathcal{Q}^{MF}_N &= \int_V \prod_{\alpha=1}^N d\bar{r}_\alpha\ e^{-\beta \sum_i \phi_{MF}(\bar{r}_i)} = \int_V \prod_{\alpha=1}^N d\bar{r}_\alpha\ \prod_{i=1}^Ne^{-\beta  \phi_{MF}(\bar{r}_i)}= \prod_{i=1}^N \int_V d\bar{r}_i\ e^{-\beta  \phi_{MF}(\bar{r}_i)} = \\
&= \left[\int_V d\bar{r}_i\ e^{-\beta  \phi_{MF}(\bar{r}_i)}\right]^N
\end{aligned}
$$

Where we used the property $\left( \prod_{i=1}^N n_i \right) \left( \prod_{i=1}^N m_i \right) = \prod_{i=1}^N (n_i m_i)$, and the fact that given that we are in this approximation, each integral as the same value.
Of course, this cannot be further expanded if we do not know the analytic form of $\phi_{MF}$.
