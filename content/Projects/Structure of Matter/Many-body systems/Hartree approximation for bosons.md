The trial function is very simple:

$$
\Phi_H(\bar r_1,\ldots,\bar r_N)
=
\phi(\bar r_1)\cdots\phi(\bar r_N).
$$

I.e. all particles in the same orbital.

Considering

$$
\hat{\mathscr H}
=
\sum_{i=1}^{N}\hat h_i
+
\frac{1}{2}\sum_{i\neq j}
V(\bar r_i,\bar r_j),
$$

we have a simple energy functional:

$$
\begin{aligned}
\langle \Phi_H|\hat{\mathscr H}|\Phi_H\rangle
&=
N\langle \Phi_H|\hat h|\Phi_H\rangle
+
\binom{N}{2}
\langle \Phi_H|V(\bar r,\bar r')|\Phi_H\rangle
\\
&=
N\int d\bar r\,
\phi^*(\bar r)\hat h\phi(\bar r)
+
\frac{N(N-1)}{2}
\int d\bar r\int d\bar r'\,
|\phi(\bar r)|^2
V(\bar r,\bar r')
|\phi(\bar r')|^2.
\end{aligned}
$$

Now, considering the constraint

$$
\chi
=
\int d\bar r\,|\phi(\bar r)|^2-1,
$$

we want to solve

$$
\frac{\delta E}{\delta\phi^*}
-
N\varepsilon
\frac{\delta\chi}{\delta\phi^*}
=
0.
$$

Recalling that

$$
\delta F
=
\int d\bar r\,
\frac{\delta F}{\delta\phi^*}
\delta\phi^*,
$$

we have

$$
\frac{\delta E}{\delta\phi^*}
=
N\hat h\phi(\bar r)
+
2\frac{N(N-1)}{2}
\left[
\int d\bar r'\,
V(\bar r,\bar r')
|\phi(\bar r')|^2
\right]
\phi(\bar r),
$$

and

$$
\frac{\delta\chi}{\delta\phi^*}
=
\phi(\bar r).
$$

So that in the end we obtain

$$
\left[
\hat h
+
\underbrace{
(N-1)
\int d\bar r'\,
V(\bar r,\bar r')
|\phi(\bar r')|^2
}_{V_H}
\right]
\phi(\bar r)
=
\varepsilon\phi(\bar r).
$$