The annihilation and creation operators can be defined by their operation on vector in the [[Fock space]].
We write here their definition:

$$
\begin{aligned}
\hat{a}^\dagger_{\bar{k}s}|\dots n_{\bar{k}s} \dots\rangle &=\sqrt{n_{\bar{k}s}+1}\ |\dots (n_{\bar{k}s} +1) \dots\rangle \qquad &\mbox{creation operator} \\
\hat{a}_{\bar{k}s}|\dots n_{\bar{k}s} \dots\rangle &=\sqrt{n_{\bar{k}s}}\ |\dots (n_{\bar{k}s} -1) \dots\rangle \qquad &\mbox{annihilation operator} \\

\end{aligned}
$$

By this definition $\hat{a}_{\bar{k}s}$ is **not** Hermitian ($\hat{a}_{\bar{k}s} \neq \hat{a}_{\bar{k}s}^\dagger$), but $\hat{a}_{\bar{k}s}^\dagger\hat{a}_{\bar{k}s}$ is (is the operator number).
Moreover the following commutation relations are satisfied:

$$
[ \hat{a}_{\bar{k}s}^\dagger, \hat{a}_{\bar{k}'s'}^\dagger ] = 0 \qquad [ \hat{a}_{\bar{k}s}, \hat{a}_{\bar{k}'s'} ] = 0\qquad [ \hat{a}_{\bar{k}s}, \hat{a}_{\bar{k}'s'}^\dagger ] = \delta_{\bar{k}\bar{k}'}\delta_{ss'}
$$

An important note is that the action of the annihilation operator on the vacuum state will lead to 0, as no particle can be destroyed, so $\hat{a}_{\bar{k}s}|\dots 0 \dots\rangle = 0$.
This is illustrated in the following picture:

![[Action of the annihilation and creation operator over a state.png|500]]



