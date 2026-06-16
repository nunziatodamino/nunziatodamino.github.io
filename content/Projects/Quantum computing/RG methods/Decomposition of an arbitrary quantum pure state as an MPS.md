## Left-canonical decomposition

Consider a lattice of $N$ sites. Each site can attain $d$ degrees of freedom.

Consider the decomposition

$$
|\psi\rangle
=
\sum_{\sigma_1,\ldots,\sigma_N}
C_{\sigma_1,\ldots,\sigma_N}
\,|\sigma_1,\ldots,\sigma_N\rangle
$$

We have that

$$
C_{\sigma_1,\ldots,\sigma_N}\in \mathbb{C}^{d\times \cdots \times d}.
$$

Let us consider the reshape operation

$$
C_{\sigma_1,\ldots,\sigma_N}
\;\mapsto\;
C_{\sigma_1,(\sigma_2,\ldots,\sigma_N)}.
$$

On this reshaped object, an SVD can be performed:

$$
C_{\sigma_1,(\sigma_2,\ldots,\sigma_N)}
=
\sum_{\chi_1=1}^{r_1}
L^{(1)}_{\sigma_1,\chi_1}\,
\lambda^{(1)}_{\chi_1,\chi_1}\,
R^{\dagger(1)}_{\chi_1,(\sigma_2,\ldots,\sigma_N)}.
$$

Now define

$$
M^{(2)}_{\chi_1,(\sigma_2,\ldots,\sigma_N)}
\equiv
\lambda^{(1)}_{\chi_1,\chi_1}\,
R^{\dagger(1)}_{\chi_1,(\sigma_2,\ldots,\sigma_N)}.
$$

Then reshape again:

$$
M^{(2)}_{\chi_1,(\sigma_2,\ldots,\sigma_N)}
\;\mapsto\;
M^{(2)}_{\chi_1,\sigma_2,\ldots,\sigma_N}.
$$

Hence

$$
C_{\sigma_1,\ldots,\sigma_N}
=
\sum_{\chi_1=1}^{r_1}
L^{(1)}_{\sigma_1,\chi_1}\,
M^{(2)}_{\chi_1,\sigma_2,\ldots,\sigma_N}.
$$

We now reshape as

$$
M^{(2)}_{\chi_1,\sigma_2,\ldots,\sigma_N}
\;\mapsto\;
M^{(2)}_{(\chi_1,\sigma_2),(\sigma_3,\ldots,\sigma_N)}.
$$

And again perform an SVD:

$$
M^{(2)}_{(\chi_1,\sigma_2),(\sigma_3,\ldots,\sigma_N)}
=
\sum_{\chi_2=1}^{r_2}
L^{(2)}_{(\chi_1,\sigma_2),\chi_2}\,
\lambda^{(2)}_{\chi_2,\chi_2}\,
R^{\dagger(2)}_{\chi_2,(\sigma_3,\ldots,\sigma_N)}.
$$

Therefore

$$
C_{\sigma_1,\ldots,\sigma_N}
=
\sum_{\chi_1=1}^{r_1}\sum_{\chi_2=1}^{r_2}
L^{(1)}_{\sigma_1,\chi_1}\,
L^{(2)}_{(\chi_1,\sigma_2),\chi_2}\,
\lambda^{(2)}_{\chi_2,\chi_2}\,
R^{\dagger(2)}_{\chi_2,(\sigma_3,\ldots,\sigma_N)}.
$$

Proceeding iteratively in the same way, we obtain

$$
C_{\sigma_1,\ldots,\sigma_N}
=
\sum_{\chi_1=1}^{r_1}
\sum_{\chi_2=1}^{r_2}
\cdots
\sum_{\chi_{N-1}=1}^{r_{N-1}}
L^{(1)}_{\sigma_1,\chi_1}
L^{(2)}_{(\chi_1,\sigma_2),\chi_2}
\cdots
L^{(N-1)}_{(\chi_{N-2},\sigma_{N-1}),\chi_{N-1}}
M^{(N)}_{\chi_{N-1},\sigma_N}.
$$

Equivalently, grouping all factors,

$$
\Psi = L^1 L^2 \cdots L^{N-1} M^N.
$$

To produce an MPS, a final reshape is necessary:

$$
L^{(1)}_{\sigma_1,\chi_1}
\;\mapsto\;
A^{\sigma_1}_{1,\chi_1},
$$

$$
L^{(i)}_{(\chi_{i-1},\sigma_i),\chi_i}
\;\mapsto\;
A^{\sigma_i}_{\chi_{i-1},\chi_i},
\qquad i=2,\ldots,N-1,
$$

$$
M^{(N)}_{\chi_{N-1},\sigma_N}
\;\mapsto\;
A^{\sigma_N}_{\chi_{N-1},1}.
$$

Thus one obtains the left-canonical MPS form

$$
|\psi\rangle
=
\sum_{\sigma_1,\ldots,\sigma_N}
\sum_{\chi_1,\ldots,\chi_{N-1}}
A^{\sigma_1}_{1,\chi_1}
A^{\sigma_2}_{\chi_1,\chi_2}
\cdots
A^{\sigma_N}_{\chi_{N-1},1}
\,|\sigma_1,\ldots,\sigma_N\rangle.
$$