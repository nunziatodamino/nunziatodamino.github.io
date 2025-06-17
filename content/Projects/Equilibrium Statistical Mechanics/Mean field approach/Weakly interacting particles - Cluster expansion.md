We want to expand the configurational partition function in the limit of weakly interacting particles.
The idea so is simple, when considering the energy $e^{-\beta U}$, we will consider the approximation $e^{-\beta U(r_{ij})} \simeq 1+ \beta U(r_{ij})$.
One conventional way, instead to proceed in this mathematical way, is to define the **Mayer function**:

$$f(r_{ij}) = e^{-\beta U(r_{ij})}-1$$

And use this instead of the truncation. In fact at the first order $f(r_{ij}) \simeq -\beta U(r_{ij})$, so that equating the 2 approximations:

$$ e^{-\beta U(r_{ij})} \simeq 1+f(r_{ij})  $$

So we start from the canonical configurational partition function and start approximating:

$$
\begin{aligned}
\mathcal{Q}_N  &= \int_{\Gamma_q} \prod_{\alpha=1}^N d\bar{q}^\alpha e^{-\beta \sum_{i=1}^N\sum_{j>i} U(r_{ij})} =\int_{\Gamma_q} \prod_{\alpha=1}^N d\bar{q}^\alpha\prod_{i=1}^N\prod_{j>i} e^{-\beta U(r_{ij})} \simeq \\
&\simeq \int_{\Gamma_q} \prod_{\alpha=1}^N d\bar{q}^\alpha\left[\prod_{i=1}^N\prod_{j>i} \left( 1+f_{ij}\right)\right]
\end{aligned}
$$

The products of the $f_{ij}$ terms deserves a special [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Graph notation in the cluster expansion|discussion]]. Instead of proceeding with the correct formalism, we consider the weakly interacting approximation, i.e.:

$$ \prod_{i=1}^N\prod_{j>i} \left( 1+f_{ij}\right) \simeq 1 +\sum_{I_1}f_{ij} = \simeq 1 +\sum_{i,j|j<i}f_{ij}  $$

Where $I_1$ is the set of all the possible unordered pairs in a set of $N$ particles (It will contain $N\choose 2$ elements).
We have then:

$$\mathcal{Q}_N\simeq \int_{\Gamma_q} \prod_{i=1}^N d\bar{q}^\alpha\left[ 1 +\sum_{i,j|j<i}f_{ij} \right] = V^N + V^{N-2} \sum_{i,j|j<i}\int_V\int_V d\bar{q}^{i}d\bar{q}^{j}f_{ij}$$

We focus specifically on the double integral:
Due to translational symmetry $f(|\bar{r}_i-\bar{r}_j|) = f(|\bar{r}_k-\bar{r}_j|) \equiv f(\bar{r_j}) \equiv f(r)$ for any particle $i$ and $k$. So :
 $$\int_V\int_V d\bar{q}^{i}d\bar{q}^{j}f_{ij} = \int_V\int_V d\bar{r}^{i}d\bar{r}f(\bar{r}) = V \int_V d\bar{r}f(\bar{r}) = V\int_{0}^{+\infty} dr\ r^2f(r) \equiv -2B_2V$$

Where the last equivalence is set by convention. So one has in the end:

$$ \mathcal{Q_N} = V^N - 2V^{N-1}{N \choose 2}B_2  $$

As previously stated there are $N\choose 2$ terms in the sum and thus integrals.
Note that in the $N \gg 1$ we have that $N\choose 2$ $\sim \frac {N^2}{2}$ so:

$$ \mathcal{Q_N} = V^N\left( 1- \frac{N^2}{V}B_2\right)  $$

From this one finds as free energy:

$$ F_N = F_N^{\text{ideal gas}} -k_BT \ln \left( 1- \frac{N^2}{V}B_2\right) $$

And consequently as the pressure:

$$
\begin{aligned}
P &= -\left( \frac{\partial F_N}{\partial V} \right)_T = \frac{Nk_BT}{V} +k_BT\frac{\frac{N^2}{V^2}B_2}{ 1- \frac{N^2}{V}B_2} =\\
&= k_BT\rho +k_BT\rho^2B_2\left(1+\rho^2VB_2 + (\rho^2VB_2)^2 + \dots\right) \\
&= k_BT\rho\left[1 +\rho B_2\left(1+\rho^2VB_2 + (\rho^2VB_2)^2 + \dots\right) \right] \\
&= k_BT\rho\left[1 +\rho B_2 +\rho^3VB_2^2 + \dots \right] \\
\end{aligned}
$$

Or equivalently :

$$ \frac{P}{k_BT\rho} = 1 +\rho B_2 +\rho^3VB_2^2 + \dots  \iff \frac{PV}{Nk_BT} = 1 +\frac{N}{V} B_2 +\frac{N^3}{V^2}B_2^2 + \dots  $$

In this scheme the experimentally accessible experimental quantities depends on the microscopic interaction details, specifically from $B_2$ and consequently from the analytic detail of $f(r)$.