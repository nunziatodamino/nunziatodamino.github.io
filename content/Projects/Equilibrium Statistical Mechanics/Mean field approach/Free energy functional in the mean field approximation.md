
We recall from [[Projects/Equilibrium Statistical Mechanics/Variational approach in Statistical Mechanics|Variational approach in Statistical Mechanics]] that:

$$ \mathscr{F}_\rho \equiv \text{Tr} (\rho \mathscr{H}) +k_BT\ \text{Tr} (\rho \ln \rho) $$

Now, if we consider the [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Mean field approximation for the variational approach|Mean field approximation for the variational approach]] for the probability distribution, we can rewrite the second part of the RHS:

$$ 
\begin{aligned}
\text{Tr} \left(\rho \ln \rho\right) 
&=\text{Tr} \left(\prod_{i=1}^{N}\rho_i  \ln \prod_{i=1}^{N}\rho_i \right) = \text{Tr} \left(\prod_{i=1}^{N}\rho_i  \sum_{i=1}^{N}\ln \rho_i \right) =\\ 
&=\text{Tr} \left(\prod_{i=1}^{N}\rho_i  \sum_{\alpha=1}^{N}\ln \rho_{\alpha} \right) =\sum_{\alpha=1}^{N}\prod_{i=1}^{N}\text{Tr} \left(\rho_i \ln \rho_{\alpha} \right)= \\
&=\sum_{\alpha=1}^{N}\text{Tr} \left(\rho_{\alpha} \ln \rho_{\alpha}\ \rho_{1}\dots \rho_{N}\right) = \sum_{\alpha=1}^{N}\sum_{\{\phi_{\alpha}\}}\rho_{\alpha} \ln \rho_{\alpha}\ \sum_{\{\phi_{1}\}}\rho_{1}\dots \sum_{\{\phi_{N}\}}\rho_{N} = \\
&= \sum_{\alpha=1}^{N}\sum_{\{\phi_{\alpha}\}}\rho_{\alpha} \ln \rho_{\alpha} \equiv \sum_{\alpha=1}^{N}\text{Tr}^{(\alpha)}\rho_{\alpha} \ln \rho_{\alpha} 
\end{aligned}
$$

So that we can write the functional as

$$ \mathscr{F}^{MF}_\rho \equiv \braket{\mathscr{H}} +k_BT\ \sum_{\alpha=1}^{N}\text{Tr}^{(\alpha)}\rho_{\alpha} \ln \rho_{\alpha} $$

Notice that this functional has a energy term (mean Hamiltonian) and an entropy term.
Of course now we have to minimize this functional.
We have 2 alternatives as what to consider the parameters of this functional:

- The simple choice is to consider the set of one-point distributions $\rho_{\alpha}$ as parameters. This is more general also.

- The second choice is to consider that $\rho_{\alpha}= \rho^{(1)}(\phi_\alpha)$ so that one parameterize the functional respect the r.v., specifically respect $\braket{\phi_\alpha}$, that one can evaluate through the self-consistent equation:
 $$ \text{Tr}(\rho_{\alpha}\phi_{\alpha}) = \braket{\phi_{\alpha}} $$

In this scheme the parameters are the order parameters of the system.