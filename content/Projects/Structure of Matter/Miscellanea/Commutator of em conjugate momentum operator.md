$$
[\hat{\pi}_i,\hat{\pi}_j]
=
i\hbar q\,\varepsilon_{ijk}B^k
=
i\hbar q\sum_k \varepsilon_{ijk}B_k.
$$

- Proof
- 
Recalling the definition of $\bar \pi = \bar p - q \bar A$:

$$
\begin{aligned}
&[\hat{\pi}_i,\hat{\pi}_j]
=
[\hat{P}_i-qA_i,\hat{P}_j-qA_j]
\\
&=
[\hat{P}_i,\hat{P}_j]
-q[A_i,\hat{P}_j]
-q[\hat{P}_i,A_j]
+q^2[A_i,A_j].
\end{aligned}
$$

Given

$$
[\hat{P}_i,\hat{P}_j]=[A_i,A_j]=0,
$$

and

$$
[\hat{P}_i,f(\bar r)]
=
-i\hbar\,\partial_i f(\bar r),
$$

we have

$$
\begin{aligned}
[\hat{\pi}_i,\hat{\pi}_j]
&=
q[\hat{P}_j,A_i]
-q[\hat{P}_i,A_j]
\\
&=
-i\hbar q\,\partial_j A_i
+i\hbar q\,\partial_i A_j
\\
&=
i\hbar q
\left(
\partial_i A_j-\partial_j A_i
\right)
\\
&=
i\hbar q
\sum_k \varepsilon_{ijk}B_k.
\end{aligned}
$$

Where

$$
\begin{aligned}
\sum_k \varepsilon_{ijk}B_k
&=
\sum_k \varepsilon_{ijk}
\sum_{\ell,m}
\varepsilon_{\ell m k}\,
\partial_\ell A_m
\\
&=
\sum_{k,\ell,m}
\varepsilon_{ijk}\varepsilon_{\ell m k}\,
\partial_\ell A_m
\\
&=
\sum_{\ell,m}
\left(
\delta_{i\ell}\delta_{jm}
-
\delta_{im}\delta_{j\ell}
\right)
\partial_\ell A_m
\\
&=
\partial_i A_j-\partial_j A_i.
\end{aligned}
$$