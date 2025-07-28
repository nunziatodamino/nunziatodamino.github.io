Consider the bond energy between 2 spins in a general spin-1 Ising model:

$$ w(\sigma_i, \sigma_j) = -\hat{g} -\frac{\hat{h}}{z}(\sigma_i+ \sigma_j)+\hat{K}\sigma_i \sigma_j $$

We comment briefly on this expression. In our case the constants are not operators, but if one wants to treat the quantum case they will be promoted to operators, so we use this notation in advance.
This expression is (as should be) invariant under spin change $i \iff j$, as these bonds have no directional character. Moreover each field term in the bond energy must be weighted by the coordination number, as this is the only we to gain the proper energy factor $\sum_{\braket{i,j}} \frac{\hat{h}}{z}(\sigma_i+ \sigma_j) = \frac{\hat{h}}{z}\sum_i z \sigma_i = \hat{h}\sum_i\sigma_i$ which is the correct term. To why $\sum_{\braket{i,j}} (\sigma_i+ \sigma_j) = \sum_i z \sigma_i$ we build the intuition [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/Identity in Ising model (optional)|here]]

Hence the Hamiltonian will be the sum over all the energy bonds:

$$ \mathscr{H} = \sum_{\braket{i,j}} w(\sigma_i, \sigma_j) $$

 And consequently the partition function:

$$\mathcal{Z} = \text{Tr} \ e^{-\beta\mathscr{H}} = \sum_{\{ \sigma \}}\ e^{-\beta\sum_{\braket{i,j}} w(\sigma_i, \sigma_j)}$$


## 1D Ising model

Consider now specifically the 1D Ising model with PBC. Each decimation will reduce the spin to $N' = N/l$ and will maintain the partition function the same after the decimation.

![[Images/Real space renormalization group (RSRG) in the Ising model.png|300]]

We now study the decimation procedure with different values of $l$.
### RSRG with l=2

A coarse graining of l = 2 can be obtained for instance by summing over the spins positioned at the even sites. Before doing this sum it is convenient to rename the even spins $\sigma_{2i}$ as $s_i$ and the odd spins $\sigma_{2i+1}$ as $\sigma_i'$:

![[Images/Real space renormalization group (RSRG) in the Ising model-1.png|300]]

In this way we can partition the sum in the partition function:

$$\mathcal{Z}_N= \sum_{\{ \sigma \}^N}\ e^{-\beta\sum_i w(\sigma_i, \sigma_{i+1})} =\sum_{\{ s \}^{N/2}} \sum_{\{ \sigma' \}^{N/2}}\ e^{-\beta\sum_{i=1}^{N/2} {w(\sigma'_i, s_{i})+w(s_i, \sigma'_{i+1})}} $$

As we can see from the image we first have the interaction odd-even, then even-odd and so forth.
Continuing we use the exponential property:

$$\mathcal{Z}_N=\sum_{\{ s \}^{N/2}} \sum_{\{ \sigma' \}^{N/2}} \prod_{i=1}^{N/2} e^{-\beta [w(\sigma'_i, s_{i})+w(s_i, \sigma'_{i+1})]} $$

Now we have (mathematically) the choice to either sum (decimate) over the odd or the even spins. With the partition we made at the beginning we already made the choice to decimate over the even spins.
We choose to sum over the even spins:

$$\mathcal{Z}_N= \sum_{\{ \sigma' \}^{N/2}} \prod_{i=1}^{N/2}\sum_{\{ s \}^{N/2}} e^{-\beta [w(\sigma'_i, s_{i})+w(s_i, \sigma'_{i+1})]} = \sum_{\{ \sigma' \}^{N/2}} \prod_{i=1}^{N/2}\sum_{s_i =\pm1} e^{-\beta [w(\sigma'_i, s_{i})+w(s_i, \sigma'_{i+1})]}  $$

Now, regardless of the actual result, we observe that, given that we are summing on the even spins the internal sum is a function of the odd spins, i.e.:

$$ \sum_{s_i =\pm1} e^{-\beta [w(\sigma'_i, s_{i})+w(s_i, \sigma'_{i+1})]} = f(\sigma_i', \sigma'_{i+1}) = e^{-\beta w'(\sigma_i', \sigma'_{i+1})}$$

Where in the last line we assume we can write this function as an exponential.
Then we regained the functional form of the beginning:

$$\mathcal{Z}_N = \sum_{\{ \sigma' \}^{N/2}} \prod_{i=1}^{N/2}e^{-\beta w'(\sigma_i', \sigma'_{i+1})} = \sum_{\{ \sigma' \}^{N/2}} e^{-\beta \sum_{i=1}^{N/2} w'(\sigma_i', \sigma'_{i+1})} = \mathcal{Z}_{N/2} $$

Or more properly:

$$\mathcal{Z}_N(\hat{g},\hat{h},\hat{K}) = \mathcal{Z}_{N/2}(\hat{g}',\hat{h}',\hat{K}') $$

Here we can continue ad libitum.
The only thing that remains is to find, if exists, a relation between $(\hat{g},\hat{h},\hat{K}) \iff (\hat{g}',\hat{h}',\hat{K}')$ as this relation defines the RG transformation, as we have built it upon the invariance of the partition function.
So we have, starting from the last point:

$$\mathcal{Z}_N(\hat{g},\hat{h},\hat{K}) = \mathcal{Z}_{N/2}(\hat{g}',\hat{h}',\hat{K}') \iff \sum_{s_i =\pm1} e^{-\beta [w(\sigma'_i, s_{i})+w(s_i, \sigma'_{i+1})]}  = e^{-\beta w'(\sigma_i', \sigma'_{i+1})} $$

(**Note that one could have started from here**, but the previous reasoning builds better the process.)


