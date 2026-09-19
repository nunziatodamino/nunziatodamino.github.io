$$(\bar\sigma\cdot\bar a)(\bar\sigma\cdot\bar b) =\bar a\cdot\bar b+i\bar\sigma\cdot(\bar a\times\bar b)$$
- Proof
$$
\begin{aligned}

(\sigma_1 a_1+\sigma_2 a_2+\sigma_3 a_3)
(\sigma_1 b_1+\sigma_2 b_2+\sigma_3 b_3)
={}&
\sigma_1\sigma_1 a_1b_1
+\sigma_1\sigma_2 a_1b_2
+\sigma_1\sigma_3 a_1b_3+
\\
&+\sigma_2\sigma_1 a_2b_1
+\sigma_2\sigma_2 a_2b_2
+\sigma_2\sigma_3 a_2b_3+
\\
&+\sigma_3\sigma_1 a_3b_1
+\sigma_3\sigma_2 a_3b_2
+\sigma_3\sigma_3 a_3b_3.
\end{aligned}
$$

Using

$$
\sigma_i\sigma_j
=
\delta_{ij}\mathbb{1}
+
i\varepsilon_{ijk}\sigma_k,
$$

we obtain

$$
\begin{aligned}
={}&
(a_1b_1+a_2b_2+a_3b_3)
+i\sigma_3\varepsilon_{123}a_1b_2
+i\sigma_2\varepsilon_{132}a_1b_3
\\
&+
i\sigma_3\varepsilon_{213}a_2b_1
+i\sigma_1\varepsilon_{231}a_2b_3
+i\sigma_2\varepsilon_{312}a_3b_1
\\
&+
i\sigma_1\varepsilon_{321}a_3b_2
\\
={}&
\bar{a}\cdot\bar{b}
+
i\,\bar{\sigma}\cdot(\bar{a}\wedge\bar{b}).
\end{aligned}
$$

Where, e.g.,

$$
\begin{aligned}
(\bar{a}\wedge\bar{b})_3
&=
\varepsilon_{ij3}a^i b^j
\\
&=
\sum_{i,j=1}^{3}
\varepsilon_{ij3}a^i b^j
\\
&=
\varepsilon_{123}a^1b^2
+
\varepsilon_{213}a^2b^1.
\end{aligned}
$$