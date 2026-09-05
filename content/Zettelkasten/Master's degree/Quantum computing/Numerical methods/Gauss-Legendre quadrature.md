Consider the quadrature problem, i.e. the problem in which we want to approximate an integral by the sum :

$$\int_a^b f(x)dx \simeq \sum_{i=1}^N w_i f(x_i) $$

Consider then that we want this expression to be exact for a polynomial of order $m$.
We have in principle $2N$ free variables in the system. To have the expression to be exact for a polynomial of order $m$ we have to solve $m+1$ equations (as seen in [[Classical quadrature methods]]).
So:

$$ m+1 \leq 2N \qquad \iff m \leq 2N -1$$

I.e. if we find a good way to fix the weights and the points (the free variables) the maximum degree of the polynomial that can be solved exactly is $2N-1$.
Now we see how to fix them.
Consider the following expressions:

$$
\begin{aligned}
Z_0(x_1, x_2, \ldots, x_N) &\equiv \sum_i w_i - \int_a^b x^0 \, dx = 0 \\[0.5em]
Z_1(x_1, x_2, \ldots, x_N) &\equiv \sum_i w_i x_i - \int_a^b x \, dx = 0 \\[0.5em]
&\vdots \\[0.5em]
Z_{N-1}(x_1, x_2, \ldots, x_N) &\equiv \sum_i w_i x_i^{N-1} - \int_a^b x^{N-1} \, dx = 0 \\[0.5em]
Z_N(x_1, x_2, \ldots, x_N) &\equiv \sum_i w_i x_i^N - \int_a^b x^N \, dx \neq 0 \\
&\vdots \\[0.5em]
Z_{N+K}(x_1, x_2, \ldots, x_N) &\equiv \sum_i w_i x_i^{N+K} - \int_a^b x^{N+K} \, dx \neq 0
\end{aligned}

$$

These are polynomials of the only points as we have by hypothesis chosen the $N$ weights such that the first $N$ polynomial are 0, i.e. $Z_0 = Z_1 = \dots =Z_{N-1} =0$.
In general the other polynomial will be non zero a priori.
In other to make them 0 we use the properties of the [[Legendre polynomials]]

Lets start with $Z_N$. Consider, for $j = 0, 1, \dots, N$

$$Z_j =\sum_i w_i x_i^j - \int_{-1}^1 x^j \, dx$$

Now expand $L_N$ in the monomial basis : $L_N(x_i) = \sum_{j = 0}^N p_{N,j}x^j$, and then multiply $p_{N,j}$ for the respective $Z_j$ and sum over $j$:

$$ \sum_{j=0}^N p_{N,j}Z_j = \sum_i w_i L_N(x_i) - \int_{-1}^1 L_N \, dx$$

But we already have $Z_0 = Z_1 = \dots =Z_{N-1} =0$, so :

$$ p_{N,N}Z_N = \sum_i w_i L_N(x_i) - \int_{-1}^1 L_N \, dx$$

The integral is 0, as $L_N$ is orthogonal to $1$, the $L_0$ polynomial:

$$ p_{N,N}Z_N = \sum_i w_i L_N(x_i)$$

Finally, if we choose the discretization points as the zeroes of the Legendre polynomial, we achieve:

$$ Z_N = 0 $$

As $p_{N,N} \neq 0$ as is a coefficient of the Legendre polynomial expansion.
What about $Z_{N+1}$ and the higher terms? The ansatz is exatly the same: Consider, for $j = 0, 1, \dots, N+1$ the $Z_j$  expression, expand $L_{N+1}$ in the monomial basis, and then multiply $p_{N+1,j}$ for the respective $Z_j$ and sum over $j$. This time one obtains:

$$ p_{N+1,N+1}Z_{N+1} = \sum_i w_i L_{N+1}(x_i) - \int_{-1}^1 L_{N+1} \, dx$$

In order to avoid a finer discretization, we recast $L_{N+1}$ respect $L_N$:

$$ p_{N+1,N+1}Z_{N+1} = \sum_i w_i x_iL_{N}(x_i) - \int_{-1}^1 xL_{N} \, dx$$

And then the idea is the same, integral is 0 by orthogonality and sum is 0 by choosing zeroes of the polynomial.
In general, one has by induction:

$$ p_{N+k,N+k}Z_{N+k} = \sum_i w_i x_i^kL_{N}(x_i) - \int_{-1}^1 x^kL_{N} \, dx$$

