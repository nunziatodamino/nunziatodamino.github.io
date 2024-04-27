It can be useful to write the equation in a matricial form, for a fixed $\bar{k}$.
We have

$$ \begin{aligned} \left(\frac{( \bar{k} - \bar{G})^2\hbar^2}{2m} - E_{\bar{k}}\right)C_{ \bar{k} - \bar{G}} + \sum_{\bar{G}'}C_{ \bar{k} -\bar{G}'}V_{\bar{G}'-\bar{G}}&=0

\\\sum_{\bar{G}'}\delta_{\bar{G}'\bar{G}}\left(\frac{( \bar{k} - \bar{G}')^2\hbar^2}{2m}\right)C_{ \bar{k} - \bar{G}'} + \sum_{\bar{G}'}C_{ \bar{k} -\bar{G}'}V_{\bar{G}'-\bar{G}}&=E_{\bar{k}}C_{ \bar{k} - \bar{G}}

\\\sum_{\bar{G}'}\left[\delta_{\bar{G}'\bar{G}}\left(\frac{( \bar{k} - \bar{G}')^2\hbar^2}{2m}\right) +V_{\bar{G}'-\bar{G}}\right]C_{ \bar{k} -\bar{G}'}&=E_{\bar{k}}C_{ \bar{k} - \bar{G}}


\\\sum_{\bar{G}'}A_{\bar{G}'\bar{G}}(\bar{k})C_{ \bar{k} -\bar{G}'}&=E_{\bar{k}}C_{ \bar{k} - \bar{G}} \end{aligned} $$

Where we used the delta property $\sum_i \delta_{ij} A_i = A_j$. 

**The notation is obscuring the fact that $\bar{k}$ and $\bar{G}$ are fixed, while $\bar{G}'$ varies, to add to the confusion.

In matricial form the equation reads as:

$$A(\bar{k})\bar{C}_{\bar{G}}(\bar{k})=E_{\bar{k}}\bar{C}_{\bar{G}}(\bar{k}) \qquad \qquad \bar{C}_{\bar{G}}(\bar{k}) = \begin{Vmatrix} \vdots \\ C_{\bar{k}-\bar{G}_{-2}} \\ C_{\bar{k}-\bar{G}_{-1}} \\C_{\bar{k}} \\ C_{\bar{k}-\bar{G}_{1}} \\ C_{\bar{k}-\bar{G}_{2}} \\ \vdots \end{Vmatrix} $$


Which is, in fact, given a fixed $\bar{k}$ in the first Brillouin zone, an equation for the eigenvalues.
We now make some observations.
We expect that this set of eigenvalues is discretized, given that the problem is set in a finite volume.
So we can label this eigenvalues with an index $n$.
Given that for $k$ values that differs for a reciprocal lattice vector $G$ we expect to have the same wavevectors and the same eigenvalues, we can assign to them the same index n, so to have:

$$\begin{aligned} \Psi_{n,\bar{k}+\bar{G}}(\bar{r}) = \Psi_{n,\bar{k}}(\bar{r}) \\ E_n(\bar{k}+\bar{G}) =E_n(\bar{k})\end{aligned}$$

Moreover is possible to prove that, for each $n$, every $E$ is a continuous function of $\bar{k}$.

**So we have a description $E_n(\bar{k})$ of energy levels of the system in a periodic system in terms of a family of continuous functions, each of which has the periodicity of the reciprocal lattice.**
**This description is called band structure of the solid.**
**Then for a fixed $n^*$, the set $E_n^*(\bar{k})$ is called e