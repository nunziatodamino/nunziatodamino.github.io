Using the same idea in [[Fourier series in 1-D]], we can generalize its definition in 3-D.

Let $f(\bar{r})$ be a function that satisfies the Dirichlet conditions in 3 dimension, i.e.
- It is periodic with a period vector $\bar{R}=(R_x,R_y,R_z)$ in the fundamental volume $V_u$.

$$f(\bar{r})=f(\bar{r}+\bar{R}_{nml})= f(\bar{r}+nR_x\hat{i}+mR_y\hat{j}+lR_z\hat{k})\qquad\forall \bar{r} \in [0,R_x]\times[0,R_y]\times[0,R_z]\ , \forall n,m,l\in \mathbb{Z}$$

- Within the periodic interval, the function is bounded (to be verified).

In this case, the function can be represented as:

$$\begin{aligned}
f(\bar{r}) & = \sum_{n=-\infty}^{+\infty}\sum_{m=-\infty}^{+\infty}\sum_{l=-\infty}^{+\infty} f_{nml} e^{i\frac{2 \pi n }{R_x}r_x}e^{i\frac{2 \pi m}{R_y}r_y}e^{i\frac{2 \pi l }{R_z}r_z} \equiv \\ &\equiv \sum_{n=-\infty}^{+\infty}\sum_{m=-\infty}^{+\infty}\sum_{l=-\infty}^{+\infty} f_{nml} e^{iG_xr_x}\ e^{iG_yr_y}\ e^{iG_zr_z} \equiv \sum_{\bar{G}}f_{\bar{G}}\ e^{i\ \bar{G}\cdot\bar{r}} \end{aligned}
$$

Where we define:

$$ G_i = \frac{2\pi m_i}{R_i},\  m_i \in \mathbb{Z}  $$

And the coefficients $f_{nml}$ are obtained using the following inversion formula:

$$f_{nml} = \int_{V_u}\ d^3\bar{r}\ f(\bar{r})e^{-i\ \bar{G}\cdot\bar{r}}$$

with $V_{u}=R_xR_yR_z$.

We make also the following observation: for every component $G_i$:

$$ G_i = \frac{2\pi m_i}{R_i} \frac{R_jR_k}{R_jR_k} = \frac{2\pi m_i}{V_u} R_jR_k = \frac{2\pi m_i}{V_u} |\bar{R}_j\times \bar{R}_k|  $$

So that we obtain:

$$ G_x =\frac{2\pi n}{V_u} |\bar{R}_y\times \bar{R}_z| \qquad G_y =\frac{2\pi m}{V_u} |\bar{R}_x\times \bar{R}_z| \qquad G_z =\frac{2\pi l}{V_u} |\bar{R}_x\times \bar{R}_y|$$

In order to have $\bar{G}$ represented in the canonical base, one must choose:

$$ G_x =\frac{2\pi n}{V_u} (\bar{R}_y\times \bar{R}_z) \qquad G_y =\frac{2\pi m}{V_u} (\bar{R}_x\times \bar{R}_z) \qquad G_z =\frac{2\pi l}{V_u} (\bar{R}_x\times \bar{R}_y)$$

Note that this latter representation perfectly aligns with the concepts of [[Bravais lattice]] and [[Reciprocal lattice]]. 

Specifically if we choose to change from the canonical basis to the basis of the primitive vectors of the Bravais lattice, we have that our periodic function becomes:

$$ f(\bar{r})=f(\bar{r}+\bar{R}_{nml})= f(\bar{r}+na_1\hat{a_1}+ma_2\hat{a_2}+la_3\hat{a_3}) $$

Now in the Fourier series decomposition, we must represent the $\bar{r}$ vector in this new basis. We call this representation $\bar{r}=(r_{a_1},r_{a_2},r_{a_3})\equiv(r_1,r_2,r_3)$ So that we have:

$$\begin{aligned}
f(\bar{r}) & = \sum_{n=-\infty}^{+\infty}\sum_{m=-\infty}^{+\infty}\sum_{l=-\infty}^{+\infty} f_{nml} e^{i\frac{2 \pi n }{a_1}r_1}e^{i\frac{2 \pi m}{a_2}r_2}e^{i\frac{2 \pi l }{a_3}r_3} \equiv \\ &\equiv \sum_{n=-\infty}^{+\infty}\sum_{m=-\infty}^{+\infty}\sum_{l=-\infty}^{+\infty} f_{nml} e^{iG_1r_1}\ e^{iG_2r_2}\ e^{iG_3r_3} \equiv \sum_{\bar{G}}f_{\bar{G}}\ e^{i\ \bar{G}\cdot\bar{r}} \end{aligned}
$$

Where, with the same reasoning as before:

$$f_{nml} = \int_{V_u}\ d^3\bar{r}\ f(\bar{r})e^{-i\ \bar{G}\cdot\bar{r}}$$

with $V_{u}= \bar{a}_1 \cdot \bar{a}_2\times \bar{a}_3$, And:

$$ G_1 =\frac{2\pi n}{V_u} (\bar{a}_2\times \bar{a}_3) \qquad G_2 =\frac{2\pi m}{V_u} (\bar{a}_1\times \bar{a}_3) \qquad G_3 =\frac{2\pi l}{V_u} (\bar{a}_1\times \bar{a}_2)$$





