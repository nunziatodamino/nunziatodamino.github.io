The problem with the [[Projects/Computational methods for Material science/Ab initio Quantum Mechanics/Kohn-Sham equations|Kohn-Sham equations]] is that we don't have an explicit form for $V_{exc}$, so in order to use them we must resort to approximation in order to find it.
One of the most common approximation is the **local density approximation (LDA)**, in which the energy exchange functional is written as:

$$ E^{LDA}_{exc}[n(\bar{r})] = \int d\bar{r}\ n(\bar{r}) \varepsilon_{exc}(n(\bar{r})) $$

Where $\varepsilon_{exc}(n(\bar{r}))$ is the many body exchange-correlation energy per electron of a uniform
gas of interacting electrons of density $n(\bar{r})$.
Is easy to show that, in this case:

$$ V_{exc}^{LDA}= \frac{\delta E^{LDA}_{exc}[n(\bar{r})]}{\delta n(\bar{r})}= \varepsilon_{exc}(n(\bar{r})) + n(\bar{r}) \frac{d \varepsilon_{exc}(n(\bar{r}))}{dn(\bar{r})} $$

Now we are set, because $\varepsilon_{exc}(n(\bar{r}))$ is a known function.






