In physics one is usually interested in the following problem: given the Hilbert space $\mathscr{H} = \mathbb{C}^N$, consider the eigenvalue problem:

$$ \hat{O}\ket{y_i} = \lambda_i \ket{y_i} \qquad i = 1, \dots, N $$

Where $\braket{y_i|y_j} = \delta_{ij}$ and the real eigenvalues are non-degenerate and ordered by magnitude $|\lambda_N| > \dots > |\lambda_1|$.
First we show ways to find the extreme values of the eigenvalue spectrum. In many problems these are the only eigenvalue we need as they determine the bulk of the properties.
##### Find the largest eigenvalue in modulus

First we consider a generic $\ket{\Psi} \in \mathscr{H}$. Give that $\{\ket{y_i}\}$ is a complete basis, we can consider the expansion:

$$ \ket{\Psi} = \sum_{i = 1}^N c_i \ket{y_i} $$

Then the repeated application of the operator $\hat{O}$ gives:

$$ \hat{O}^k\ket{\Psi} = \sum_{i = 1}^N c_i\lambda_i^k \ket{y_i} $$

Now consider the following reasoning (we assume implicitly $c_N \neq 0$):

$$ \hat{O}^k\ket{\Psi} = c_N\lambda_N^k \ket{y_N} + \sum_{i = 1}^{N-1} c_i\lambda_i^k \ket{y_i}  \iff \frac{\hat{O}^k\ket{\Psi}}{\lambda_N^k} = c_N\ket{y_N} + \sum_{i = 1}^{N-1} c_i\frac{\lambda_i^k}{\lambda_N^k} \ket{y_i} $$

Going to the limit $k \to +\infty$, giving that the eigenvalues are ordered by absolute magnitude, we have clearly:

$$ \lim_{k \to +\infty}  \frac{\hat{O}^k\ket{\Psi}}{\lambda_N^k} = c_N\ket{y_N}  $$

This exact result can be turned in an approximate one in the limit of large $k$:

$$  \hat{O}^k\ket{\Psi} \sim \lambda_N^k c_N\ket{y_N} \qquad \mbox{For large k} $$

Then, if we call $\ket{\Psi^k} \equiv \hat{O}^k\ket{\Psi}$, is now clear that:

$$ \frac{||\ket{\Psi^{k+1}}||}{\ket{||\Psi^k}||} = |\lambda_N| $$

What about the sign ? This is implicit in the iteration $\hat{O}^k\ket{\Psi}$, as if $\lambda_N > 0$ the sign of each iteration stays positive, while for $\lambda_N < 0$ there is a sign flip at each iteration due to term $(-1)^k$.
Moreover if we impose the normalization condition $\braket{\Psi^k | \Psi^k} = 1$ :

$$ \braket{\Psi^k | \Psi^k} = 1 \iff |c_N| = \frac{1}{|\lambda^k_N|}$$

Giving back also the eigenvector (apart a phase factor), as:

$$ \frac{\ket{\Psi^k}}{\sqrt{\braket{\Psi^k | \Psi^k}}} \sim \operatorname{sgn}(\lambda^k_N)\ket{y_N} \qquad \mbox{For large k} $$


The last remaining question is how fast the procedure will converge ?
The speed of convergence is governed by the ratio $\frac{|\lambda_N|}{|\lambda_{N-1}|}$.
If this number is too small (case of near-degenerate system, say Hamiltonian that describes system near a critical point), the procedure will not converge.
##### Find the smallest eigenvalue in modulus

Say the procedure to find the largest eigenvalue doesn't converge, what so we do ?
We attack the problem from below rather than from the top. Consider the inversion of the original eigenvalue problem:

$$ \hat{O}\ket{y_i} = \lambda_i\ket{y_i} \iff \hat{O}^{-1}\ket{y_i} = \lambda_i^{-1} \ket{y_i}  $$

This imply that the spectrum of the inverse is closely related to the originating matrix, hence reapplying the same procedure as before this time at the inverse let us produce the maximum eigenvalue in modulus in the inverse spectrum, corresponding to the the inverse of the minimum eigenvalue in modulus in the original spectrum.
As before the rate of convergence will be dependent on $\frac{1/|\lambda_1|}{1\|\lambda_{2}|} = \frac{|\lambda_2|}{|\lambda_{1}|}$

#### Comments on the methods and how to find the whole spectrum

Both method seems the same, and they are in spirit, but due to the consideration on the rate of convergence the second method (finding the smallest eigenvalue in the spectrum) is way faster.
Rate of convergence can be improved by adding an initial guess $q$ for the first eigenvalue, so that one has the translated problem:

$$ (\hat{O} - q \mathbb{1})\ket{y_i} = (\lambda_i - q)\ket{y_i} \iff (\hat{O} - q \mathbb{1})^{-1}\ket{y_i} = (\lambda_i - q)^{-1} \ket{y_i}  $$

For this problem the rate of convergence is $\frac{|\lambda_2 - q|}{|\lambda_{1} -q|}$ which is excellent ($+ \infty$) if $\lambda_1 \sim q$.

Then how to find the whole spectrum ? Once one has found the first eigenvalue then eliminates it from the spectrum by rewriting the initial random vector

$$\ket{\Psi} ' = \ket{\Psi} - \braket{y_1|\Psi}\ket{y_1}$$

In this way the general expansion now will not contains term parallel to the first eigenvector.
Notice that this orthogonalization shall be repeated during the sequence as numerical errors might reintroduce components along $\ket{y_1}$ which would grow and prevent the algorithm from working properly

Then one proceeds again and again by iteration.
