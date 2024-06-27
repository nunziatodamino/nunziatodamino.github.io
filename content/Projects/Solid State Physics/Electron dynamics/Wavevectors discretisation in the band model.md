We want to see if in the context of the band model, and so in the context of [[Projects/Solid State Physics/Electron dynamics/Bloch Theorem]], considering a finite system leads to the same wavevectors discretisation found in the [[Projects/Solid State Physics/Electron dynamics/Free electron model for metals (Sommerfeld model)]].
Consider a wavefunction to which the general [[Projects/Solid State Physics/Crystal structures and bonds/Born-Von Karman boundary condition]] are applied:

$$ \Psi_{\bar{k}}(\bar{r}+N_i\bar{a}_i) = \Psi_{\bar{k}}(\bar{r}) \qquad i=1,2,3 $$
Where $N_1N_2N_3=N$.
And apply to this function the Bloch theorem:

$$ u_{\bar{k}}(\bar{r}+N_ia_i)e^{i\bar{k}\cdot(\bar{r}+N\bar{a}_i)}= u_{\bar{k}}(\bar{r})e^{i\bar{k}\cdot\bar{r}}  \qquad \Rightarrow \qquad e^{i\bar{k}\cdot N\bar{a}_i}=1\qquad i=1,2,3$$

Consider the periodicity of $u_{\bar{k}}$.

This imply, considering $\bar{k} = x_1 \bar{b}_1+x_2 \bar{b}_2+x_3 \bar{b}_3$ with $\bar{b}_i\cdot\bar{a}_j=2\pi\delta_{ij}$:

$$ \sum_{j}N_jk_ja_{ji}=\sum_{j}N_j2 \pi\delta_{ij} x_j=2m\pi \qquad \iff \qquad m_i = \frac{m}{N_i}\qquad m\in \mathbb{Z} $$

So that we can imply that:

$$\bar{k} = \sum_i\frac{m}{N_i}\bar{b}_i$$

Recovering the discretisation found in the free electron model.

**Inserire commento alla formula 8.29 Ash