One can generalize [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/The Ginzburg criterion in the Ising mean field theory|The Ginzburg criterion in the Ising mean field theory]] to a general one for any system.
We define :

$$ E_{tot} =\frac {\sum_{i,j} G_C(\eta_i, \eta_j )}{\sum_{i,j}G^{\text{MF}}(\eta_i, \eta_j ) } = \frac {\sum_{i,j} [\braket{\eta_i\eta_j}-\braket{\eta_i} \braket{\eta_j}]}{\sum_{i,j}\braket{\eta_i} \braket{\eta_j} }$$

This quantity is a dimensionless measure between the connected correlation function and the expected correlation (non-connected) function in a mean field.
We observe that $E_{tot}$ is the relative difference (or error) between the true total correlation $\braket{\eta_i\eta_j}$ and the mean-field correlation $\braket{\eta_i}\braket{\eta_j}$. (i.e. we are computing the relative error as $\frac{\text{exact}-\text{approx}}{\text{approx}}$).
**This quantity then will be a good indicator of the mean field theory approximation.**
If the system satisfies the mean field hypothesis $G_C(\eta_i, \eta_j )\to 0$ so that $E_{tot} \ll 1$, while if the system does not we will have $E_{tot} \sim 1$.
We conclude the following:

>[!info] **Ginzburg criterion**
>A system is well described by a mean-field theory approximation if :
>
>$$ E_{tot} \ll 1 $$

**Is useful to consider this criterion in the continuous limit, supposing also that we are in the mean field approximation.**
Then, using the same ansatz in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/Fluctuation-dissipation relation in the Ising model|Fluctuation-dissipation relation in the Ising model]]:

$$  E_{tot} =\frac {\sum_{i,j} G_C(\eta_i, \eta_j )}{\sum_{i,j}G^{\text{MF}}(\eta_i, \eta_j ) }  \to \frac{\frac{N}{a^d}\int_{\Omega}d\bar{r}\ G_C(r)}{\frac{N}{a^d}\int_{\Omega}d\bar{r}\ \tilde{\eta}^2 }=  \frac{\int_{\Omega}d\bar{r}\ G_C(r)}{\tilde{\eta}^2 V_{\Omega} } \ll 1$$

Notice that we are implicitly considering $\braket{\eta}_i =\tilde {\eta}, \ \forall i$ because in the mean field there is the hypothesis that the random fields are [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Miscellanea/Stationary and homogeneous random fields (optional)|stationary and homogeneous]].
