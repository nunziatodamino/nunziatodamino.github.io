Suppose we want to evaluate the canonical partition function:

$$ \mathcal{Z}_N  = \sum_{\{s\}} e^{-\beta\mathscr{H}(s)}$$

But instead to evaluate this respect to all states it would be nice to have it re-parameterize respect the order parameter, especially in the context of the study of the phase transitions.

First we consider a special partitioning of the space. Consider the space partitioned in cubic cells of sides $l$
where $l \ll \xi$ but $l \gg a$. Each cell should contain an high number of particles.
The constraint on the cell's side implies that the order parameter of the particles within each cell is not correlated $l \ll \xi$, but the discretization is fine enough $l \gg a$.
Now we consider a particular state of the system $s$ and consider the order parameter field $\phi_s(\bar{r})$ inside the volume. We consider now from this function the set $\{\tilde{\phi}_s(\bar{r}_i)\}$ build in the following way: given the $i$-th cell we take the average of the order parameter of the particles inside and assign at its center the value $\tilde{\phi}_s(\bar{r}_i)$. Given that the discretization is fine enough we can consider the set a continuous function itself: $\{\tilde{\phi}_s(\bar{r}_i)\} \to \tilde{\phi}_s(\bar{r})$.
In this way we have associated to a state $s$ an average order parameter profile $\tilde{\phi}_s(\bar{r})$.
So instead of summing over states we can sum over these profiles, that we label simply $\phi(\bar{r})$.
Then if one considers that:

$$ 1 = \int \mathscr{D} \phi\ \prod_{\bar{r}} \delta(\tilde{\phi}_s(\bar{r})-\phi(\bar{r})) $$

Then multiplying this by the partition function and reordering

$$\mathcal{Z}_N =1 \times\sum_{\{s\}} e^{-\beta\mathscr{H}(s)} =\int \mathscr{D} \phi\ \left(\sum_{\{s\}}\prod_{\bar{r}} \delta(\tilde{\phi}_s(\bar{r})-\phi(\bar{r})) e^{-\beta\mathscr{H}(s)}\right) $$

If we now define

$$\sum_{\{s\}}\prod_{\bar{r}} \delta(\tilde{\phi}_s(\bar{r})-\phi(\bar{r})) e^{-\beta\mathscr{H}(s)}  \equiv \sum_{s\ \text{coarse}} e^{-\beta\mathscr{H}(s)} \equiv e^{-\beta\mathscr{H}_{\text{eff}}}$$

We obtain for the partition function:

$$\mathcal{Z}_N  =\int \mathscr{D} \phi\  e^{-\beta\mathscr{H}_{\text{eff}}} $$

Note that in literature one can call $\beta\mathscr{H}_{\text{eff}} = \mathscr{F}_{\text{eff}}$ or effective free energy.
