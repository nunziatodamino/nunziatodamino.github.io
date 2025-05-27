We want to extend the concept of [[Zettelkasten/Master's degree/Probability and Statistics/Covariance|Pearson's correlation coefficient]] to a [[Stochastic process]].

We can do this by defining the following:

>[!info] **Time correlation coefficient (or normalized time correlation function)**
>
>$$ c_{AB}(t) = \frac{\text{Cov}(A(t),B(0))}{\sigma_A\sigma_B}= \frac{\braket{(A(t)-\braket{A})(B(0)-\braket{B})}}{\sigma_A\sigma_B} $$

Or if we are interested in how the same observable changes over time:

>[!info] **Time auto-correlation coefficient (or normalized time autocorrelation function)**
>
>$$ c_{AA}(t) = \frac{\text{Cov}(A(t),A(0))}{\sigma^2_A}= \frac{\braket{(A(t)-\braket{A})(A(0)-\braket{A})}}{\sigma^2_A} $$

Where $A$ and $B$ are stochastic processes.

### Additional notes
Sometimes in auto-correlation functions when $\braket{A}=0$, as in [[Projects/Computational methods for Material science/Molecular dynamics/Velocity correlation function|Velocity correlation function]], one can show that said functions has the form $\braket{A(t)A(0)}$, assuming further that $A(t)$ and $A(0)$ are independent .
In this case one has in the limit:

$$\lim_{t \to 0} \braket{A(t)A(0)} = \braket{A^2} \qquad \lim_{t \to +\infty} \braket{A(t)A(0)} = \braket{A}^2 = 0$$

Where we are assuming in the long time limit that the variables naturally uncorrelates.
In the case instead when $\braket{A} \neq 0$ we have no problem for the short time limit, but have to we define in the long limit the non-correlation:

$$\lim_{t \to 0} c_{AA}(t) = \braket{\delta A(0)^2} \qquad \lim_{t \to +\infty} c_{AA}(t)  = 0$$

Where is clear that $\delta A(0)= A(0)-\braket{A}$.

