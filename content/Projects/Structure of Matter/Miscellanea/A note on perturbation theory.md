Consider the problem

$$
\hat{\mathscr H}|\psi\rangle = E|\psi\rangle.
$$

Where

$$
\hat{\mathscr H}
=
\hat{\mathscr H}_0
+
\lambda \hat{\mathscr H}_1
+
O(\lambda^2),
$$

and

$$
|\psi\rangle
=
|\psi_0\rangle
+
\lambda |\psi_1\rangle
+
O(\lambda^2).
$$

Say now we want to evaluate $E$ up to $O(\lambda^2)$.

$$
E
=
\langle\psi|\hat{\mathscr H}|\psi\rangle
=
\langle\psi|\hat{\mathscr H}_0|\psi\rangle
+
\lambda
\langle\psi|\hat{\mathscr H}_1|\psi\rangle
+
O(\lambda^2).
$$

Therefore

$$
\begin{aligned}
E
&=
\left(
\langle\psi_0|
+
\lambda\langle\psi_1|
\right)
\hat{\mathscr H}_0
\left(
|\psi_0\rangle
+
\lambda|\psi_1\rangle
\right)
\\
&\quad
+
\lambda
\langle\psi_0|
\hat{\mathscr H}_1
|\psi_0\rangle
+
O(\lambda^2)
\\
&=
\langle\psi_0|
\hat{\mathscr H}_0
|\psi_0\rangle
\\
&\quad
+
\lambda
\left[
\langle\psi_1|
\hat{\mathscr H}_0
|\psi_0\rangle
+
\langle\psi_0|
\hat{\mathscr H}_0
|\psi_1\rangle
\right]
\\
&\quad
+
\lambda
\langle\psi_0|
\hat{\mathscr H}_1
|\psi_0\rangle
+
O(\lambda^2).
\end{aligned}
$$

Now notice that the term in square brackets gives

$$
\lambda E_0
\left(
\langle\psi_1|\psi_0\rangle
+
\langle\psi_0|\psi_1\rangle
\right)
=0.
$$

Why? Because, given that $\langle\psi|\psi\rangle=1$,

$$
\begin{aligned}
1
=
\langle\psi|\psi\rangle
&=
\left(
\langle\psi_0|
+
\lambda\langle\psi_1|
\right)
\left(
|\psi_0\rangle
+
\lambda|\psi_1\rangle
\right)
+
O(\lambda^2)
\\
&=
1
+
\lambda
\left(
\langle\psi_1|\psi_0\rangle
+
\langle\psi_0|\psi_1\rangle
\right)
+
O(\lambda^2).
\end{aligned}
$$

Giving

$$
\langle\psi_1|\psi_0\rangle
+
\langle\psi_0|\psi_1\rangle
=
0.
$$

Hence we can conclude

$$
E
=
E_0
+
\Delta E
+
O(\lambda^2),
$$

where

$$
\Delta E
=
\lambda
\langle\psi_0|
\hat{\mathscr H}_1
|\psi_0\rangle.
$$

