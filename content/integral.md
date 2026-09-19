It remains to calculate the average of the squared sine. Set

$$
A\equiv\bar k\cdot\bar r+\theta,
$$

so that

$$
\xi+\theta=A-\omega t.
$$

Using

$$
\sin^2x=\frac12(1-\cos 2x),
$$

we obtain

$$
\begin{aligned}
\frac1T\int_0^T\sin^2(A-\omega t)\,dt
&=
\frac12
-
\frac1{2T}
\int_0^T
\cos(2A-2\omega t)\,dt
\\
&=
\frac12
+
\frac{1}{4\omega T}
\left[
\sin(2A-2\omega T)-\sin(2A)
\right].
\end{aligned}
$$

The expression in square brackets is bounded, while its denominator
diverges as $T\to\infty$. Consequently,

$$
\lim_{T\to\infty}
\frac{1}{4\omega T}
\left[
\sin(2A-2\omega T)-\sin(2A)
\right]
=
0,
$$

and therefore

$$
\boxed{
\lim_{T\to\infty}
\frac1T
\int_0^T
\sin^2\left(
\bar k\cdot\bar r-\omega t+\theta
\right)dt
=
\frac12
}.
$$