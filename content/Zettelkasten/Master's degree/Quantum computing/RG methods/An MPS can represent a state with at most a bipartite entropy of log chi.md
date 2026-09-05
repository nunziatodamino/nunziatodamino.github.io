
Given a generic system consider its [[The Schmidt decomposition|Schmidt decomposition]]

$$
|\psi\rangle =
\sum_{\alpha = 1}^{r}
s_\alpha
|\alpha\rangle_A
|\alpha\rangle_B
$$

For a normalized state

$$
\sum_{\alpha = 1}^{r}
s_\alpha^2 = 1
$$

Also if one consider the reduced density operator recasted respect these singular values (for either the subsystem $A$ or $B$):

$$\hat{\rho}_B = \sum_{\alpha =1}^{r} s^2_{\alpha} \ket{\alpha}{}_B {}_B\bra{\alpha}$$

Leading to the consideration that $s_{\alpha}^2 \equiv p_{\alpha}$ are the eigenvalues of the reduced density operator.
Then one can write the [[Von Neumann entropy]] as:

$$
S =
-\sum_{\alpha = 1}^{r}
p_\alpha
\log p_\alpha
$$

The observation now is that this form, with the normalization condition $\sum_{\alpha =1}^{r}s_\alpha^2 = 1$ allows us to recast the Von Neumann entropy in terms of the [[Shannon entropy]].
In the Shannon entropy framework one obtains the maximal entropy for the condition of equi-distributed probabilities:

$$
p_\alpha = \frac{1}{r} \quad \forall \alpha
$$

So one obtains:

$$
\begin{aligned}
S &=
-\sum_{\alpha = 1}^{r}
\frac{1}{r}
\log \left(\frac{1}{r}\right)
= \\
&=\sum_{\alpha = 1}^{r}
\frac{1}{r}
\log r = r\frac{1}{r}
\log r = \log r
\end{aligned}
$$

In an MPS we never use the full rank, but truncate the MPS up to a comfortable max bond dimension $\chi$.

$$
\boxed{
S \leq \log \chi
}
$$

Note that this procedure is irrespective of the dimensionality of the system.
Yet there exists area laws for entropy that reveal the following : the maximal bipartite entropy in a system of dimensionality $L^n$ in the thermodynamic limit scales as the the dimensionality of the boundary between the bipartition, of dimensionality $L^{n-1}$.
This imply that only the 1D systems have $\mathcal{O}(1)$ bipartite entropy, and thus can be represented by an MPS. 

**This let us conclude that MPS can represent in a dignified way only 1D systems.**
