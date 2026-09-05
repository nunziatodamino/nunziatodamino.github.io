
A tridiagonal matrix has nonzero entries only on the main diagonal, the superdiagonal, and the subdiagonal:

$$
A_n =
\begin{pmatrix}
a_1 & b_1 & 0 & 0 & \cdots & 0 \\
c_2 & a_2 & b_2 & 0 & \cdots & 0 \\
0 & c_3 & a_3 & b_3 & \cdots & 0 \\
0 & 0 & c_4 & a_4 & \cdots & 0 \\
\vdots & \vdots & \vdots & \vdots & \ddots & b_{n-1} \\
0 & 0 & 0 & 0 & c_n & a_n
\end{pmatrix}.
$$

Equivalently,

$$
(A_n)_{ij} = 0
\qquad \text{if} \qquad |i-j| > 1.
$$

Its determinant is given by a recursive continuant.

Define $K_0 = 1$ and $K_1 = a_1$:
$$
\det(A_n)
= K_n =
a_n K_{n-1} - c_n b_{n-1} K_{n-2}.
$$
