Consider an Ising-like model with Hamiltonian:

$$ \mathscr{H}_N = -J\sum_{<i,j>}s_is_j - \sum_i H_i s_i =  \mathscr{H}_0 - \sum_i H_i s_i $$

And the canonical partition function:

$$ \mathcal{Z}_N = \text{Tr}\ e^{-\beta \mathscr{H}}$$

### 1 point correlation function : $\braket{s_j}$

If we differentiate the partition function respect $H_j$:

$$ \frac{\partial \mathcal{Z}_N }{\partial H_j} =-\beta \frac{\partial \mathscr{H}_N }{\partial H_j} \text{Tr}\ e^{-\beta \mathscr{H}} = \beta \sum_i \delta_{ij}s_i \text{Tr}\ e^{-\beta \mathscr{H}} = \beta \text{Tr}\ s_je^{-\beta \mathscr{H}} = \frac{\beta \mathcal{Z}_N}{\mathcal{Z}_N} \text{Tr}\ s_je^{-\beta \mathscr{H}}  $$

Then, by reordering:

$$ \frac{1}{\beta\mathcal{Z}_N}\frac{\partial \mathcal{Z}_N }{\partial H_j} = \braket{s_j} $$

Now, if we observe that $\frac{\partial \ln \mathcal{Z}_N }{\partial H_j} = \frac{1}{\mathcal{Z}_N}\frac{\partial \mathcal{Z}_N }{\partial H_j}$, this can be rewritten as:

$$ \frac{1}{\beta}\frac{\partial \ln \mathcal{Z}_N }{\partial H_j} = \braket{s_j} $$

### 2 point correlation function : $\braket{s_js_k}$

If we differentiate the partition function respect $H_j$ twice:

$$ \frac{\partial \mathcal{Z}_N }{\partial H_jH_k} =-\beta^2 \frac{\partial \mathscr{H}_N }{\partial H_k} \text{Tr} s_j e^{-\beta \mathscr{H}} = \beta^2 \sum_i \delta_{ik}s_k \text{Tr}\ s_je^{-\beta \mathscr{H}} = \beta^2 \text{Tr}\ s_js_ke^{-\beta \mathscr{H}} = \frac{\beta^2 \mathcal{Z}_N}{\mathcal{Z}_N} \text{Tr}\ s_js_ke^{-\beta \mathscr{H}}  $$

Then, by reordering:

$$ \frac{1}{\beta^2\mathcal{Z}_N}\frac{\partial^2 \mathcal{Z}_N }{\partial H_jH_k} = \braket{s_js_k} $$
### k-point correlation function : $\braket{s_j\dots s_k}$

It's easy to see by induction, using the same ansatz, that

$$ \frac{1}{\beta^k\mathcal{Z}_N}\frac{\partial^k  \mathcal{Z}_N }{\partial H_j\dots\partial H_k} = \braket{s_j \dots s_k} $$
