We want to see if in the context of the band model, and so in the context of [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Bloch Theorem|Bloch Theorem]], considering a finite system leads to the same wavevectors discretisation found in the [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Free electron model for metals (Sommerfeld model)|Free electron model for metals (Sommerfeld model)]].
Consider a wavefunction to which the general [[Zettelkasten/Master's degree/Solid State Physics/Crystal structures and bonds/Born-Von Karman boundary conditions|Born-Von Karman boundary conditions]] are applied:

$$ \Psi_{\bar{k}}(\bar{r}+\bar{R}') = \Psi_{\bar{k}}(\bar{r})  $$
Where $\bar{R}' = (N_1\bar{a}_1,N_2\bar{a}_2,N_3\bar{a}_3)$ and $N_1N_2N_3=N$.
And apply to this function the Bloch theorem:

$$ u_{\bar{k}}(\bar{r}+\bar{R}')e^{i\bar{k}\cdot(\bar{r}+\bar{R}')}= u_{\bar{k}}(\bar{r})e^{i\bar{k}\cdot\bar{r}}  \qquad \Rightarrow \qquad e^{i\bar{k}\cdot \bar{R}'}=1$$

Considering the periodicity of the function $u_{\bar{k}}$.

This imply, considering $\bar{k} = k_1 \bar{b}_1+k_2 \bar{b}_2+k_3 \bar{b}_3$, because is a reciprocal lattice vector,  with $\bar{b}_i\cdot\bar{a}_j=2\pi\delta_{ij}$:

$$ \bar{k}\cdot \bar{R}' = \sum_{j}N_jk_j\bar{b}_i\cdot\bar{a}_j=\sum_{j}N_j2 \pi\delta_{ij} x_j=2m\pi \qquad \iff \qquad x_i = \frac{m}{N_i}\qquad m\in \mathbb{Z}\qquad i=1,2,3 $$

So that we can imply that:

$$\bar{k} = \sum_i\frac{m}{N_i}\bar{b}_i$$

This is equivalent to the discretization found in the free electron case, because if we evaluate this for a simple cubic lattice : $b_i = \frac{2\pi}{L}\hat{x}_i$, and $N_i=L/a$ 


**Inserire commento alla formula 8.29 Ash