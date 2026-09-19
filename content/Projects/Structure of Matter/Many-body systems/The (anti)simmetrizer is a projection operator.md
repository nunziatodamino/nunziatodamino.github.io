Recalling the definition:

$$
\hat{\mathfrak{P}}_{B,F}
=\frac1{N!}\sum_{\alpha\in S_N}
\xi^{\alpha}\hat P_\alpha
$$

We want to prove that the operator is Hermitian and $\hat{\mathfrak{P}}^2_{B,F}=\hat{\mathfrak{P}}_{B,F}$.

- $\hat{\mathfrak{P}}_{B,F}$ is Hermitian. (left unproven in the notes)
**Proof**
---
- $\hat{\mathfrak{P}}^2_{B,F}=\hat{\mathfrak{P}}_{B,F}$.
**Proof** By direct calculation:

$$ 
\begin{aligned}
\hat{\mathfrak{P}}^2_{B,F} &=\left(\frac1{N!}\sum_{\alpha\in S_N}
\xi^{\alpha}\hat P_\alpha\right)\left(\frac1{N!}\sum_{\beta\in S_N}
\xi^{\beta}\hat P_\beta\right) =  \frac1{N!}\frac1{N!}\sum_{\alpha\in S_N}\sum_{\beta\in S_N} \xi^{\alpha + \beta} \hat P_\alpha\hat P_\beta = \\ 
&= \frac1{N!}\frac1{N!}\sum_{\alpha\in S_N}\sum_{\gamma\in S_N} \xi^{\gamma} \hat P_\gamma = \frac1{N!}\sum_{\gamma\in S_N} \xi^{\gamma} \hat P_\gamma = \hat{\mathfrak{P}}_{B,F}\qquad &\Box
\end{aligned}
$$

