Suppose we have the following stochastic differential equation (SDE)

$$ dX_t = a(X_t, t)dt + b(X_t, t)dW_t  $$

Where $dW_t$ is a [[Wiener process]]. We can approximate the solution of SDE using the Euler-Maruyama method, also known sometimes as first order integrator.
We have that the stochastic process $X_t$ is approximated by the Markov chain $Y_n$ defined as follows :
- Partition the interval $[0, T]$ into $N$ equal subintervals of width $\Delta t >0$:
  $$
  0 = \tau_0 < \tau_1 < \cdots < \tau_N = T  \qquad \tau_n = 0 + n\Delta t\ ,\ \Delta t = \frac{T}{N}
  $$

- Set $Y_0 = x_0$

- Recursively define $Y_n$ for $0 \leq n \leq N - 1$ by:
  $$
  Y_{n+1} = Y_n + a(Y_n, \tau_n) \Delta t + b(Y_n, \tau_n) \Delta W_n,
  $$
  where:
  $$
  \Delta W_n = W_{\tau_{n+1}} - W_{\tau_n} \sim \mathcal{N}(0, \sqrt{\Delta t})
  $$

The random variables $\Delta W_n$ are independent and identically distributed normal random variables with mean 0 and variance $\Delta t$.
