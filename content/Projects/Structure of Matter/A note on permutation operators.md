Let $S_N$ be the symmetric group of the $N$ particle labels, i.e. the set of all $N!$ permutations of $\{1,\ldots,N\}$.

A generic permutation is denoted by $\alpha\in S_N$. Its action on the labels is written as

$$
\alpha:i\mapsto \alpha(i),
$$

or equivalently in one-line notation as

$$
\alpha=(\alpha(1),\ldots,\alpha(N)).
$$

The corresponding permutation operator acting on the $N$-particle wavefunction is denoted by $\hat P_\alpha$ and, using the convention of the notes,

$$
(\hat P_\alpha\psi)(\bar r_1,\ldots,\bar r_N)
=
\psi(
\bar r_{\alpha(1)},\ldots,\bar r_{\alpha(N)}
).
$$

Here $e\in S_N$ denotes the identity permutation, $\alpha^{-1}$ its inverse, and $\operatorname{sgn}(\alpha)=\pm1$ its parity.

### Properties of permutation operators

For $\alpha,\beta\in S_N$:

$$
\boxed{
\hat P_e=\hat{\mathbb 1}
}
$$

$$
\boxed{
\hat P_\alpha\hat P_\beta
=
\hat P_{\alpha\beta}
}
$$

where

$$
(\alpha\beta)(i)=\alpha(\beta(i)).
$$

$$
\boxed{
\hat P_\alpha^{-1}
=
\hat P_{\alpha^{-1}}
}
$$

Permutation operators preserve the scalar product,

$$
\boxed{
\langle
\hat P_\alpha\phi
|
\hat P_\alpha\psi
\rangle
=
\langle\phi|\psi\rangle
}
$$

and are therefore unitary:

$$
\boxed{
\hat P_\alpha^\dagger
=
\hat P_\alpha^{-1}
=
\hat P_{\alpha^{-1}}.
}
$$

Consequently, $\hat P_\alpha$ is Hermitian only if

$$
\boxed{
\alpha=\alpha^{-1}.
}
$$

For the parity of permutations,

$$
\boxed{
\operatorname{sgn}(\alpha\beta)
=
\operatorname{sgn}(\alpha)
\operatorname{sgn}(\beta)
}
$$

and

$$
\boxed{
\operatorname{sgn}(\alpha^{-1})
=
\operatorname{sgn}(\alpha).
}
$$

---

### Proofs

#### Identity

Since $e(i)=i$,

$$
\begin{aligned}
(\hat P_e\psi)(\bar r_1,\ldots,\bar r_N)
&=
\psi(
\bar r_{e(1)},\ldots,\bar r_{e(N)}
)
\\
&=
\psi(\bar r_1,\ldots,\bar r_N).
\end{aligned}
$$

Therefore

$$
\hat P_e=\hat{\mathbb 1}.
$$

#### Composition

Using the definition,

$$
\begin{aligned}
(\hat P_\alpha\hat P_\beta\psi)
(\bar r_1,\ldots,\bar r_N)
&=
(\hat P_\beta\psi)
(
\bar r_{\alpha(1)},\ldots,\bar r_{\alpha(N)}
)
\\
&=
\psi(
\bar r_{\alpha(\beta(1))},
\ldots,
\bar r_{\alpha(\beta(N))}
)
\\
&=
(\hat P_{\alpha\beta}\psi)
(\bar r_1,\ldots,\bar r_N).
\end{aligned}
$$

Hence

$$
\hat P_\alpha\hat P_\beta
=
\hat P_{\alpha\beta}.
$$

#### Inverse

Since

$$
\alpha\alpha^{-1}=e,
$$

we have

$$
\hat P_\alpha\hat P_{\alpha^{-1}}
=
\hat P_e
=
\hat{\mathbb 1}.
$$

Thus

$$
\hat P_\alpha^{-1}
=
\hat P_{\alpha^{-1}}.
$$

#### Unitarity

Consider

$$
\begin{aligned}
\langle
\hat P_\alpha\phi
|
\hat P_\alpha\psi
\rangle
&=
\int
d^3r_1\cdots d^3r_N\,
\phi^*(
\bar r_{\alpha(1)},\ldots,\bar r_{\alpha(N)}
)
\\
&\qquad\qquad\times
\psi(
\bar r_{\alpha(1)},\ldots,\bar r_{\alpha(N)}
).
\end{aligned}
$$

Since $\alpha$ only permutes the integration variables, the measure is unchanged, and therefore

$$
\langle
\hat P_\alpha\phi
|
\hat P_\alpha\psi
\rangle
=
\langle\phi|\psi\rangle.
$$

Hence $\hat P_\alpha$ is unitary:

$$
\hat P_\alpha^\dagger
\hat P_\alpha
=
\hat{\mathbb 1},
$$

so

$$
\hat P_\alpha^\dagger
=
\hat P_\alpha^{-1}
=
\hat P_{\alpha^{-1}}.
$$

Therefore $\hat P_\alpha$ is Hermitian only when

$$
\alpha=\alpha^{-1}.
$$

#### Parity

The parity is multiplicative:

$$
\operatorname{sgn}(\alpha\beta)
=
\operatorname{sgn}(\alpha)
\operatorname{sgn}(\beta).
$$

Since

$$
\alpha\alpha^{-1}=e,
$$

we have

$$
1
=
\operatorname{sgn}(e)
=
\operatorname{sgn}(\alpha)
\operatorname{sgn}(\alpha^{-1}).
$$

Because $\operatorname{sgn}(\alpha)=\pm1$,

$$
\operatorname{sgn}(\alpha^{-1})
=
\operatorname{sgn}(\alpha).
$$