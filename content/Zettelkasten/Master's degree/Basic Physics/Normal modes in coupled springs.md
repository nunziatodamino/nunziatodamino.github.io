This example, although not of a general nature, forms the basis of the intuition regarding normal modes of oscillation.
### 2 Coupled Springs

Let's consider the situation shown in the figure:

![[Images/modi_normali_2_molle.png]]

Let $u_1$ and $u_2$ be the displacements of the first and second masses from left to right, respectively. For this system, we have the following equations of motion:

$$
\begin{cases}
m\ddot{u}_1 = -ku_1 - \kappa(u_1-u_2) \\
m\ddot{u}_2 = -ku_2- \kappa(u_2-u_1)
\end{cases}
$$

To solve this system, we use the following method: We propose a solution of the form:

$$ \bar{u} = \begin{bmatrix}u_1 \\u_2\end{bmatrix} = \begin{bmatrix}A_1 e^{i\omega t} \\A_2 e^{i\omega t}\end{bmatrix}= \begin{bmatrix}A_1 \\A_2\end{bmatrix} e^{i \omega t}  $$

Substituting this into the equations, we obtain a system of the form:

$$
\begin{bmatrix} -m \omega^2+k+\kappa & -\kappa \\ -\kappa &-m \omega^2+k+\kappa \end{bmatrix}\begin{bmatrix}A_1 \\A_2\end{bmatrix} = \begin{bmatrix}0 \\0\end{bmatrix}  \qquad \Rightarrow \qquad M\bar{A} = \bar{0}
$$

Let's make some considerations about this system. 
Suppose that the matrix M has a nonzero determinant. Then, its inverse, denoted as $M^{-1}$, would exist, allowing us to multiply the linear system on the left by the inverse matrix and solve it, resulting in $\bar{A} = \bar{0}$, a trivial and physically meaningless solution. 
For this reason, the only physical solutions are those for which the determinant of M is not equal to zero.

By solving the constraint $det(M) = 0$, we find the two solutions:

$$\omega_1^2 = \frac{k}{m} \qquad\omega_2^2 = \frac{k+2\kappa}{m}$$

These are called the normal frequencies of oscillation. Remember that for these 4 values of $\omega$, we find nonzero amplitudes. To find them, we substitute these values back into the linear system.

For $\pm\omega_1$, we find the vector $[A_1, A_1]^t$, and for $\pm\omega_2$, we find the vector $[A_1, -A_1]^t$, where in each case $A_1$ is a free variable.

If we then arbitrarily choose $A_1=1$ a general solution of the system is given by a linear combination of the 4 particular solutions:

$$\begin{bmatrix}u_1 \\u_2\end{bmatrix}=C_1\begin{bmatrix}1\\1\end{bmatrix}e^{i\omega_1 t}+C_2\begin{bmatrix}1\\1\end{bmatrix}e^{-i\omega_1 t}+ C_3\begin{bmatrix}1\\-1\end{bmatrix}e^{i\omega_2 t}+C_4\begin{bmatrix}1\\-1\end{bmatrix}e^{-i\omega_2 t}$$

That, by redefining the constants, can be rewritten as:

$$\begin{bmatrix}u_1 \\u_2\end{bmatrix}=B_1\begin{bmatrix}1\\1\end{bmatrix}\cos{(\omega_1t+\phi_1) }+B_2\begin{bmatrix}1\\-1\end{bmatrix}\cos{(\omega_2t+\phi_2) }$$

Note: If we were to rewrite the linear system using the change of basis:

$$U_1=u_1+u_2 \qquad U_2=u_1-u_2$$

We would obtain a linear system with a diagonal matrix. The coordinates $U_1$ and $U_2$ are called the normal coordinates of oscillation.